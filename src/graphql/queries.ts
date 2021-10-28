/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTibi = /* GraphQL */ `
  query GetTibi($id: ID!) {
    getTibi(id: $id) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTibis = /* GraphQL */ `
  query ListTibis(
    $filter: ModelTibiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTibis(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
