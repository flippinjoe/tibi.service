

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const algosdk = require('algosdk');

exports.handler = event => {

  event.Records.forEach(record => {
    /// If necessary create a wallet and await the result
    const myaccount = algosdk.generateAccount();
    console.log("Account Address = " + myaccount.addr);
    let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
    console.log("Account Mnemonic = "+ account_mnemonic);
    console.log("Account created. Save off Mnemonic and address");
    console.log("Add funds to account using the TestNet Dispenser: ");
    console.log("https://dispenser.testnet.aws.algodev.network/ ");
    return { statusCode: 200, body: JSON.stringify({ address: myaccount.addr, k: account_mnemonic }, null, 2)};
  })



  console.log(`EVENT: ${JSON.stringify(event)}`);
  event.Records.forEach(record => {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log('DynamoDB Record: %j', record.dynamodb);
  });
  return Promise.resolve('Successfully processed DynamoDB record');
};
