/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 const algosdk = require('algosdk');

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    try {  
        const myaccount = algosdk.generateAccount();
        console.log("Account Address = " + myaccount.addr);
        let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
        console.log("Account Mnemonic = "+ account_mnemonic);
        console.log("Account created. Save off Mnemonic and address");
        console.log("Add funds to account using the TestNet Dispenser: ");
        console.log("https://dispenser.testnet.aws.algodev.network/ ");
        return { statusCode: 200, body: JSON.stringify(myaccount, null, 2)};
    }
    catch (err) {
        console.log("err", err);
        return { statusCode: 500, body: JSON.stringify(err) }
    }

    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
