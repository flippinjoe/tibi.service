/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      imageUrl
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
        imageUrl
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getImagePath = /* GraphQL */ `
  query GetImagePath($id: ID!) {
    getImagePath(id: $id) {
      id
      key
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listImagePaths = /* GraphQL */ `
  query ListImagePaths(
    $filter: ModelImagePathFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImagePaths(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getOccupation = /* GraphQL */ `
  query GetOccupation($id: ID!) {
    getOccupation(id: $id) {
      id
      establishmentId
      name
      backgroundImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listOccupations = /* GraphQL */ `
  query ListOccupations(
    $filter: ModelOccupationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOccupations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        establishmentId
        name
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
      name
      type
      website
      tibis {
        nextToken
      }
      occupations {
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
        name
        type
        website
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
