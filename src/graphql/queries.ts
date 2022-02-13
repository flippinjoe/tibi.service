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
      tippingActive
      unreadNotifications
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
      location {
        lat
        lon
      }
      occupations {
        nextToken
      }
      activeOccupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        userOccupationsId
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      userActiveOccupationId
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
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
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
      name
      backgroundImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      establishmentId
      createdAt
      updatedAt
      userOccupationsId
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
        name
        establishmentId
        createdAt
        updatedAt
        userOccupationsId
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
      image {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      website
      tibis {
        nextToken
      }
      occupations {
        nextToken
      }
      createdAt
      updatedAt
      establishmentImageId
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
        establishmentImageId
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
        website
        createdAt
        updatedAt
        establishmentImageId
        owner
      }
      user {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
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
export const usersByEstablishment = /* GraphQL */ `
  query UsersByEstablishment(
    $establishmentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelEstablishmentTibiFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEstablishment(
      establishmentId: $establishmentId
      sortDirection: $sortDirection
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
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!, $createdAt: AWSDateTime!) {
    getTransaction(id: $id, createdAt: $createdAt) {
      id
      amount
      status
      createdAt
      transactionPaymentId
      transactionSourceId
      transactionDestinationId
      rating
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
      }
      source {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
        owner
      }
      destination {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
        owner
      }
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTransactions(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        amount
        status
        createdAt
        transactionPaymentId
        transactionSourceId
        transactionDestinationId
        rating
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      userId
      type
      expirationDate
      title
      details
      read
      fromUserId
      createdAt
      updatedAt
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        type
        expirationDate
        title
        details
        read
        fromUserId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byUser = /* GraphQL */ `
  query ByUser(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUser(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        type
        expirationDate
        title
        details
        read
        fromUserId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
