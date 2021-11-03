/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment($owner: String) {
    onCreateEstablishment(owner: $owner) {
      id
      name
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment($owner: String) {
    onUpdateEstablishment(owner: $owner) {
      id
      name
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment($owner: String) {
    onDeleteEstablishment(owner: $owner) {
      id
      name
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
export const onCreateEstablishmentTibi = /* GraphQL */ `
  subscription OnCreateEstablishmentTibi($owner: String) {
    onCreateEstablishmentTibi(owner: $owner) {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
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
export const onUpdateEstablishmentTibi = /* GraphQL */ `
  subscription OnUpdateEstablishmentTibi($owner: String) {
    onUpdateEstablishmentTibi(owner: $owner) {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
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
export const onDeleteEstablishmentTibi = /* GraphQL */ `
  subscription OnDeleteEstablishmentTibi($owner: String) {
    onDeleteEstablishmentTibi(owner: $owner) {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
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
