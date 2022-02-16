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
        userId
        createdAt
        updatedAt
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
        userId
        createdAt
        updatedAt
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
        userId
        createdAt
        updatedAt
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($owner: String) {
    onCreateDevice(owner: $owner) {
      id
      name
      token
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($owner: String) {
    onUpdateDevice(owner: $owner) {
      id
      name
      token
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($owner: String) {
    onDeleteDevice(owner: $owner) {
      id
      name
      token
      userId
      createdAt
      updatedAt
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
      userId
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
      userId
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
      userId
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment($owner: String) {
    onUpdateEstablishment(owner: $owner) {
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment($owner: String) {
    onDeleteEstablishment(owner: $owner) {
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
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification {
    onCreateNotification {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification {
    onUpdateNotification {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification {
    onDeleteNotification {
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
