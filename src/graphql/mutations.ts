/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      tippingActive
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
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      tippingActive
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
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      tippingActive
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
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      owner
    }
  }
`;
export const createImagePath = /* GraphQL */ `
  mutation CreateImagePath(
    $input: CreateImagePathInput!
    $condition: ModelImagePathConditionInput
  ) {
    createImagePath(input: $input, condition: $condition) {
      key
      location
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateImagePath = /* GraphQL */ `
  mutation UpdateImagePath(
    $input: UpdateImagePathInput!
    $condition: ModelImagePathConditionInput
  ) {
    updateImagePath(input: $input, condition: $condition) {
      key
      location
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteImagePath = /* GraphQL */ `
  mutation DeleteImagePath(
    $input: DeleteImagePathInput!
    $condition: ModelImagePathConditionInput
  ) {
    deleteImagePath(input: $input, condition: $condition) {
      key
      location
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOccupation = /* GraphQL */ `
  mutation CreateOccupation(
    $input: CreateOccupationInput!
    $condition: ModelOccupationConditionInput
  ) {
    createOccupation(input: $input, condition: $condition) {
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
export const updateOccupation = /* GraphQL */ `
  mutation UpdateOccupation(
    $input: UpdateOccupationInput!
    $condition: ModelOccupationConditionInput
  ) {
    updateOccupation(input: $input, condition: $condition) {
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
export const deleteOccupation = /* GraphQL */ `
  mutation DeleteOccupation(
    $input: DeleteOccupationInput!
    $condition: ModelOccupationConditionInput
  ) {
    deleteOccupation(input: $input, condition: $condition) {
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
export const createEstablishment = /* GraphQL */ `
  mutation CreateEstablishment(
    $input: CreateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    createEstablishment(input: $input, condition: $condition) {
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
export const updateEstablishment = /* GraphQL */ `
  mutation UpdateEstablishment(
    $input: UpdateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    updateEstablishment(input: $input, condition: $condition) {
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
export const deleteEstablishment = /* GraphQL */ `
  mutation DeleteEstablishment(
    $input: DeleteEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    deleteEstablishment(input: $input, condition: $condition) {
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
export const createEstablishmentTibi = /* GraphQL */ `
  mutation CreateEstablishmentTibi(
    $input: CreateEstablishmentTibiInput!
    $condition: ModelEstablishmentTibiConditionInput
  ) {
    createEstablishmentTibi(input: $input, condition: $condition) {
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
export const updateEstablishmentTibi = /* GraphQL */ `
  mutation UpdateEstablishmentTibi(
    $input: UpdateEstablishmentTibiInput!
    $condition: ModelEstablishmentTibiConditionInput
  ) {
    updateEstablishmentTibi(input: $input, condition: $condition) {
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
export const deleteEstablishmentTibi = /* GraphQL */ `
  mutation DeleteEstablishmentTibi(
    $input: DeleteEstablishmentTibiInput!
    $condition: ModelEstablishmentTibiConditionInput
  ) {
    deleteEstablishmentTibi(input: $input, condition: $condition) {
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
export const createWallet = /* GraphQL */ `
  mutation CreateWallet(
    $input: CreateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    createWallet(input: $input, condition: $condition) {
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
export const updateWallet = /* GraphQL */ `
  mutation UpdateWallet(
    $input: UpdateWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    updateWallet(input: $input, condition: $condition) {
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
export const deleteWallet = /* GraphQL */ `
  mutation DeleteWallet(
    $input: DeleteWalletInput!
    $condition: ModelWalletConditionInput
  ) {
    deleteWallet(input: $input, condition: $condition) {
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
export const createPayment = /* GraphQL */ `
  mutation CreatePayment(
    $input: CreatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    createPayment(input: $input, condition: $condition) {
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
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment(
    $input: UpdatePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    updatePayment(input: $input, condition: $condition) {
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
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment(
    $input: DeletePaymentInput!
    $condition: ModelPaymentConditionInput
  ) {
    deletePayment(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      amount
      status
      transactionPaymentId
      transactionSourceId
      transactionDestinationId
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
        tippingActive
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      amount
      status
      transactionPaymentId
      transactionSourceId
      transactionDestinationId
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
        tippingActive
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      amount
      status
      transactionPaymentId
      transactionSourceId
      transactionDestinationId
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
        tippingActive
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      userId
      read
      title
      details
      createdAt
      updatedAt
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      userId
      read
      title
      details
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      userId
      read
      title
      details
      createdAt
      updatedAt
    }
  }
`;
