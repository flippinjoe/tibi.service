export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "tibiservice": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "HostedUIDomain": "string",
            "OAuthMetadata": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppleWebClient": "string"
        },
        "userPoolGroups": {
            "tibiCognitoPoolGroupRole": "string"
        }
    },
    "api": {
        "tibiservice": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        },
        "algoWalletCreation": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "tibiIosData": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "postTransactionTrigger": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "algoWalletCreate": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}