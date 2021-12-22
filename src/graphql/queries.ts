/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      backgroundImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      profileImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      establishments {
        nextToken
      }
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
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
        availableBalance
        pendingBalance
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      nextToken
    }
  }
`;
export const getImagePath = /* GraphQL */ `
  query GetImagePath($id: ID!) {
    getImagePath(id: $id) {
      key
      location
      id
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
        key
        location
        id
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
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      occupationBackgroundImageId
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
        occupationBackgroundImageId
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
      imageUrl
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
        imageUrl
        website
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getEstablishmentTibi = /* GraphQL */ `
  query GetEstablishmentTibi($id: ID!) {
    getEstablishmentTibi(id: $id) {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        imageUrl
        website
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      roles
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listEstablishmentTibis = /* GraphQL */ `
  query ListEstablishmentTibis(
    $filter: ModelEstablishmentTibiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstablishmentTibis(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        establishmentId
        roles
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWallet = /* GraphQL */ `
  query GetWallet($id: ID!) {
    getWallet(id: $id) {
      id
      cryptoHash
      cryptoBalance
      payments {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWallets = /* GraphQL */ `
  query ListWallets(
    $filter: ModelWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWallets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cryptoHash
        cryptoBalance
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      walletId
      name
      fee
      isDefault
      type
      description
      token
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        walletId
        name
        fee
        isDefault
        type
        description
        token
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      amount
      status
      payment {
        id
        walletId
        name
        fee
        isDefault
        type
        description
        token
        createdAt
        updatedAt
        owner
      }
      source {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      destination {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      createdAt
      updatedAt
      transactionPaymentId
      transactionSourceId
      transactionDestinationId
      owner
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        status
        createdAt
        updatedAt
        transactionPaymentId
        transactionSourceId
        transactionDestinationId
        owner
      }
      nextToken
    }
  }
`;
