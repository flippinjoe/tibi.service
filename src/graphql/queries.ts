/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      establishments {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEstablishment = /* GraphQL */ `
  query GetEstablishment($id: ID!) {
    getEstablishment(id: $id) {
      id
      type
      tibis {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEstablishments = /* GraphQL */ `
  query ListEstablishments(
    $filter: ModelEstablishmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstablishments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
