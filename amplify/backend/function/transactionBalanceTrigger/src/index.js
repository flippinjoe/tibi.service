/* Amplify Params - DO NOT EDIT
	API_TIBISERVICE_GRAPHQLAPIENDPOINTOUTPUT
	API_TIBISERVICE_GRAPHQLAPIIDOUTPUT
	API_TIBISERVICE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var aws = require('aws-sdk')
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;
const moment = require('moment')

aws.config.update({
  region: process.env.REGION,
});


const graphqlOperation = async (query, variables) => {
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

const updateUserAvailableBalance = async (user, availableBalance) => {
  const updateUserMutation = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      availableBalance
    }
  }
  `

  const graphqlData = await graphqlOperation(
    print(updateUserMutation), 
    { 
      input: {
        id: user.id,
        owner: user.owner,
        availableBalance: availableBalance
      }
    }
  );
  console.log(graphqlData)
  const { updateUser } = graphqlData.data
  console.log(graphqlData.data)
  return updateUser
}

exports.handler = async (event) => {

  if (event.Records.length > 1) {
    return Promise.resolve('Not processing multiples')
  }

  const record = event.Records[0].dynamodb.NewImage
  const amount = parseFloat(record.amount.N)
  const receiverId = record.transactionDestinationId.S

  /// Bump the receiver balance by "amount"
  const user = await getUserForId(receiverId)
  const curAmount = user.availableBalance || 0
  const res = await updateUserAvailableBalance(user, curAmount + amount)

  //eslint-disable-line
  console.log(JSON.stringify(res, null, 2));
  // event.Records.forEach(record => {
  //   console.log(record.eventID);
  //   console.log(record.eventName);
  //   console.log('DynamoDB Record: %j', record.dynamodb);
  // });
  return Promise.resolve('Successfully processed DynamoDB record');
};
