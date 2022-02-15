/* Amplify Params - DO NOT EDIT
	API_TIBISERVICE_GRAPHQLAPIENDPOINTOUTPUT
	API_TIBISERVICE_GRAPHQLAPIIDOUTPUT
	API_TIBISERVICE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const https = require('https')
 var aws = require('aws-sdk')
 const axios = require('axios');
 const gql = require('graphql-tag');
 const graphql = require('graphql');
 const { print } = graphql;
 const moment = require('moment')
 const urlParse = require("url").URL;
 const appsyncUrl = process.env.API_TIBISERVICE_GRAPHQLAPIENDPOINTOUTPUT;
 const region = process.env.REGION;
 const endpoint = new urlParse(appsyncUrl).hostname.toString();
 const apiKey = process.env.API_TIBISERVICE_GRAPHQLAPIKEYOUTPUT;
 
 
 aws.config.update({ region });
 
 
 // TODO: We need to update this so the mutation isn't public
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
         console.log(finalData)
         resolve(finalData);
       });
     });
 
     httpRequest.write(req.body);
     httpRequest.end();
   });
 }
 
 const graphqlOperation2 = async (query, variables) => {
   return axios({
     url: process.env.API_TIBISERVICE_GRAPHQLAPIENDPOINTOUTPUT,
     method: 'post',
     headers: {
       'x-api-key': process.env.API_TIBISERVICE_GRAPHQLAPIKEYOUTPUT
     },
     data: {
       query,
       variables
     }
   }).then(res => res.data);
 }
 
 const getUserForId = async (id) => {
   const getUserQuery = gql`
   query GetUserById($id: ID!) {
       getUser(id: $id) {
         id
         firstName
         lastName
         pendingBalance
         availableBalance
       }
     }
   `
 
   const graphqlData = await graphqlOperation(print(getUserQuery), { id: id });
   const { getUser } = graphqlData.data
   return getUser
   //   return graphqlData.data.data.getMemberFinance
 }
 
 
 const createNotification = gql`
   mutation CreateNotification(
     $input: CreateNotificationInput!
     $condition: ModelNotificationConditionInput
   ) {
     createNotification(input: $input, condition: $condition) {
       id
       userId
       type
       expirationDate
       title
       details
       read
       fromUserId
       createdAt
       updatedAt
     }
   }
 `;
 
 const updateUserMutation = gql`
 mutation UpdateUser(
   $input: UpdateUserInput!
   $condition: ModelUserConditionInput
 ) {
   updateUser(input: $input, condition: $condition) {
     id
     unreadNotifications
     availableBalance
   }
 }
 `
 
 const updateUserAvailableBalance = async (user, availableBalance, fromUser) => {
   
 
   const [notificationData, graphqlData] = await Promise.all([
 
     graphqlOperation( print(createNotification), {
       input: {
         userId: user.id,
         title: `${fromUser.firstName} ${fromUser.lastName.substr(0, 1)}.`,
         details: `Sent you $${(availableBalance - (user.availableBalance || 0)).toFixed(2)}`,
         type: "tip",
         fromUserId: fromUser.id
       }
     }),
 
     graphqlOperation( print(updateUserMutation), {
       input: {
         id: user.id,
         owner: user.owner,
         availableBalance: availableBalance,
         unreadNotifications: true
       }
     })
   ])
 
   console.log("notificationData", notificationData.data)
 
   const { updateUser } = graphqlData.data
   return updateUser
 }
 
 exports.handler = async (event) => {
 
   if (event.Records.length != 1) {
     return Promise.resolve('Not processing multiples')
   }
   const record = event.Records[0].dynamodb.NewImage
   if (!record) {
     return Promise.resolve('Not processing updates')
   }
   
   const amount = parseFloat(record.amount.N)
   const receiverId = record.transactionDestinationId.S
   const senderId = record.transactionSourceId.S
 
   /// Bump the receiver balance by "amount"
   const [fromUser, toUser] = await Promise.all([
     getUserForId(senderId),
     getUserForId(receiverId)
   ])
   
   // TODO: Update fromUser balance
   const res = await updateUserAvailableBalance(toUser, (toUser.availableBalance || 0) + amount, fromUser)
 
   //eslint-disable-line
   console.log(JSON.stringify(res, null, 2));
   // event.Records.forEach(record => {
   //   console.log(record.eventID);
   //   console.log(record.eventName);
   //   console.log('DynamoDB Record: %j', record.dynamodb);
   // });
   return Promise.resolve('Successfully processed DynamoDB record');
 };
 