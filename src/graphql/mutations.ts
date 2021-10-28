/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTibi = /* GraphQL */ `
  mutation CreateTibi(
    $input: CreateTibiInput!
    $condition: ModelTibiConditionInput
  ) {
    createTibi(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTibi = /* GraphQL */ `
  mutation UpdateTibi(
    $input: UpdateTibiInput!
    $condition: ModelTibiConditionInput
  ) {
    updateTibi(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTibi = /* GraphQL */ `
  mutation DeleteTibi(
    $input: DeleteTibiInput!
    $condition: ModelTibiConditionInput
  ) {
    deleteTibi(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      owner
    }
  }
`;
