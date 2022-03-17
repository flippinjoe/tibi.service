/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_KEY","STRIPE_PUBLISH_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	API_TIBISERVICE_GRAPHQLAPIENDPOINTOUTPUT
	API_TIBISERVICE_GRAPHQLAPIIDOUTPUT
	API_TIBISERVICE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const https = require('https')
const aws = require('aws-sdk');
const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const StripeConfiguration = require('stripe')
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_TIBISERVICE_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const apiKey = process.env.API_TIBISERVICE_GRAPHQLAPIKEYOUTPUT;

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


/**
 * 
 * @returns Promise<{ Name: 'secretName', Value: 'secretValue', ... }[]>
 */
const getStripeKeys = async () => {
  return await (new aws.SSM())
  .getParameters({
    Names: ["STRIPE_KEY","STRIPE_PUBLISH_KEY"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise()
  .then(data => {
    const { Parameters: params } = data
    const paramsByName = params.reduce((bag, val) => ({...bag, [val.Name]: val }), {})
    return ["STRIPE_KEY","STRIPE_PUBLISH_KEY"].reduce((bag, key) => {
      return {
        ...bag,
        [key]: paramsByName[process.env[key]].Value
      }
    }, {})
  })
}


const getStripe = async () => {
  return getStripeKeys()
    .then(keys => {
      return {
        stripe: StripeConfiguration(keys['STRIPE_KEY']),
        publishKey: keys['STRIPE_PUBLISH_KEY']
      }
    })
}

const graphqlOperation = async (query, variables) => {
  const req = new aws.HttpRequest(appsyncUrl, region);
  req.method = "POST";
  req.path = "/graphql";
  req.headers.host = endpoint;
  req.headers["Content-Type"] = "application/json";
  req.body = JSON.stringify({
    query: query,
    variables: variables
  });

  if (apiKey) {
    req.headers["x-api-key"] = apiKey;
  } else {
    const signer = new aws.Signers.V4(req, "appsync", true);
    signer.addAuthorization(aws.config.credentials, aws.util.date.getDate());
  }

  return new Promise((resolve, reject) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      let data = "";

      result.on("data", (chunk) => {
        data += chunk;
      });

      result.on('error', (err) => {
        reject(err)
      })

      result.on("end", () => {
        const finalData = JSON.parse(data.toString())
        resolve(finalData);
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });
}

const getUserForId = async (id) => {
  const getUserQuery = gql`
  query GetUserById($id: ID!) {
      getUser(id: $id) {
        id
        firstName
        lastName
        pendingBalance
        stp_customerId
        availableBalance
      }
    }
  `

  const graphqlData = await graphqlOperation(print(getUserQuery), { id: id });
  return graphqlData.data.getUser
}

const updateUserMutation = gql`
 mutation UpdateUser(
   $input: UpdateUserInput!
   $condition: ModelUserConditionInput
 ) {
   updateUser(input: $input, condition: $condition) {
     id
     stp_customerId
   }
 }
 `

const createOrGetCustomerIdForUser = async (userId, stripeRef = null) => {
  return getUserForId(userId)
  .then(async (user) => {
    if (user.stp_customerId && user.stp_customerId.length > 0) {
      console.log(`User already has stripe account`)
      return {
        id: user.stp_customerId,
        isNew: false
      }
    }

    try {
      console.log(`No stripe account yet, creating now`)
      const { stripe, publishKey } = stripeRef || await getStripe()
      const customer = await stripe.customers.create()

      // TODO: Save customer ID
      await graphqlOperation( print(updateUserMutation), {
        input: {
          id: user.id,
          owner: user.owner,
          stp_customerId: customer.id
        }
      })

      return { id: customer.id, isNew: true }
    }
    catch (ex) {
      console.error(`Error creating stripe account`)
      console.error(ex)
      throw ex
    }

  })
}


/**
 * Method to get or create a stripe customer for the given user
 */
app.get('/stripeId', async (req, res) => {

  try {
    const customerData = await createOrGetCustomerIdForUser(req.query.userId)
    res.json(customerData)
  }
  catch (ex) {
    res.status(500)
    res.send({
      error: ex.message
    })
  }
});

app.post('/payment-sheet', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  try {
    const { stripe, publishKey } = await getStripe()
    const customer = await createOrGetCustomerIdForUser(req.query.userId, { stripe, publishKey });
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2020-08-27'}
    );

    const paymentIntent = await stripe.paymentIntents.create({
     ...req.body,
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: publishKey
    });
  } catch (ex) {
    console.log('ERROR DOING THINGS')
    console.error(ex)
    res.status(500)
    res.json({ error: ex.message })
  }
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
