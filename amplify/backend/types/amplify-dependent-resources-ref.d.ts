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
        }
    },
    "storage": {
        "tibiIosData": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "transactionBalanceTrigger": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "analytics": {
        "tibiPinPoint": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        }
    }
}