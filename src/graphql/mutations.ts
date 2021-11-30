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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createImagePath = /* GraphQL */ `
  mutation CreateImagePath(
    $input: CreateImagePathInput!
    $condition: ModelImagePathConditionInput
  ) {
    createImagePath(input: $input, condition: $condition) {
      id
      key
      location
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
      id
      key
      location
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
      id
      key
      location
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
export const createEstablishment = /* GraphQL */ `
  mutation CreateEstablishment(
    $input: CreateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    createEstablishment(input: $input, condition: $condition) {
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
export const updateEstablishment = /* GraphQL */ `
  mutation UpdateEstablishment(
    $input: UpdateEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    updateEstablishment(input: $input, condition: $condition) {
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
export const deleteEstablishment = /* GraphQL */ `
  mutation DeleteEstablishment(
    $input: DeleteEstablishmentInput!
    $condition: ModelEstablishmentConditionInput
  ) {
    deleteEstablishment(input: $input, condition: $condition) {
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
        imageUrl
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
        imageUrl
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
        imageUrl
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
