/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateImagePath = /* GraphQL */ `
  subscription OnCreateImagePath($owner: String) {
    onCreateImagePath(owner: $owner) {
      key
      location
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateImagePath = /* GraphQL */ `
  subscription OnUpdateImagePath($owner: String) {
    onUpdateImagePath(owner: $owner) {
      key
      location
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteImagePath = /* GraphQL */ `
  subscription OnDeleteImagePath($owner: String) {
    onDeleteImagePath(owner: $owner) {
      key
      location
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOccupation = /* GraphQL */ `
  subscription OnCreateOccupation($owner: String) {
    onCreateOccupation(owner: $owner) {
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
export const onUpdateOccupation = /* GraphQL */ `
  subscription OnUpdateOccupation($owner: String) {
    onUpdateOccupation(owner: $owner) {
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
export const onDeleteOccupation = /* GraphQL */ `
  subscription OnDeleteOccupation($owner: String) {
    onDeleteOccupation(owner: $owner) {
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
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment($owner: String) {
    onCreateEstablishment(owner: $owner) {
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment($owner: String) {
    onUpdateEstablishment(owner: $owner) {
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment($owner: String) {
    onDeleteEstablishment(owner: $owner) {
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
export const onCreateWallet = /* GraphQL */ `
  subscription OnCreateWallet($owner: String) {
    onCreateWallet(owner: $owner) {
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
export const onUpdateWallet = /* GraphQL */ `
  subscription OnUpdateWallet($owner: String) {
    onUpdateWallet(owner: $owner) {
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
export const onDeleteWallet = /* GraphQL */ `
  subscription OnDeleteWallet($owner: String) {
    onDeleteWallet(owner: $owner) {
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
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($owner: String) {
    onCreatePayment(owner: $owner) {
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
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($owner: String) {
    onUpdatePayment(owner: $owner) {
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
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($owner: String) {
    onDeletePayment(owner: $owner) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction($owner: String) {
    onCreateTransaction(owner: $owner) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction($owner: String) {
    onUpdateTransaction(owner: $owner) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction($owner: String) {
    onDeleteTransaction(owner: $owner) {
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
