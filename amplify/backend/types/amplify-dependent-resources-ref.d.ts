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
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "tibiIosData": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}