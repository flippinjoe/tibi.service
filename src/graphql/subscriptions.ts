/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      backgroundImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
      profileImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
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
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      backgroundImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
      profileImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
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
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      backgroundImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
      profileImage {
        id
        key
        location
        createdAt
        updatedAt
        owner
      }
      establishments {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateImagePath = /* GraphQL */ `
  subscription OnCreateImagePath {
    onCreateImagePath {
      id
      key
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateImagePath = /* GraphQL */ `
  subscription OnUpdateImagePath {
    onUpdateImagePath {
      id
      key
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteImagePath = /* GraphQL */ `
  subscription OnDeleteImagePath {
    onDeleteImagePath {
      id
      key
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOccupation = /* GraphQL */ `
  subscription OnCreateOccupation {
    onCreateOccupation {
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
export const onUpdateOccupation = /* GraphQL */ `
  subscription OnUpdateOccupation {
    onUpdateOccupation {
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
export const onDeleteOccupation = /* GraphQL */ `
  subscription OnDeleteOccupation {
    onDeleteOccupation {
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
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment {
    onCreateEstablishment {
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
  subscription OnUpdateEstablishment {
    onUpdateEstablishment {
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
  subscription OnDeleteEstablishment {
    onDeleteEstablishment {
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
  subscription OnCreateEstablishmentTibi {
    onCreateEstablishmentTibi {
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
  subscription OnUpdateEstablishmentTibi {
    onUpdateEstablishmentTibi {
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
  subscription OnDeleteEstablishmentTibi {
    onDeleteEstablishmentTibi {
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
  subscription OnCreateWallet {
    onCreateWallet {
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
  subscription OnUpdateWallet {
    onUpdateWallet {
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
  subscription OnDeleteWallet {
    onDeleteWallet {
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
  subscription OnCreatePayment {
    onCreatePayment {
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
  subscription OnUpdatePayment {
    onUpdatePayment {
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
  subscription OnDeletePayment {
    onDeletePayment {
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
  subscription OnCreateTransaction {
    onCreateTransaction {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
