/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTibiInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
};

export type ModelTibiConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelTibiConditionInput | null > | null,
  or?: Array< ModelTibiConditionInput | null > | null,
  not?: ModelTibiConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Tibi = {
  __typename: "Tibi",
  id: string,
  firstName: string,
  lastName: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateTibiInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeleteTibiInput = {
  id: string,
};

export type ModelTibiFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelTibiFilterInput | null > | null,
  or?: Array< ModelTibiFilterInput | null > | null,
  not?: ModelTibiFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTibiConnection = {
  __typename: "ModelTibiConnection",
  items?:  Array<Tibi | null > | null,
  nextToken?: string | null,
};

export type CreateTibiMutationVariables = {
  input: CreateTibiInput,
  condition?: ModelTibiConditionInput | null,
};

export type CreateTibiMutation = {
  createTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTibiMutationVariables = {
  input: UpdateTibiInput,
  condition?: ModelTibiConditionInput | null,
};

export type UpdateTibiMutation = {
  updateTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTibiMutationVariables = {
  input: DeleteTibiInput,
  condition?: ModelTibiConditionInput | null,
};

export type DeleteTibiMutation = {
  deleteTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetTibiQueryVariables = {
  id: string,
};

export type GetTibiQuery = {
  getTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTibisQueryVariables = {
  filter?: ModelTibiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTibisQuery = {
  listTibis?:  {
    __typename: "ModelTibiConnection",
    items?:  Array< {
      __typename: "Tibi",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTibiSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateTibiSubscription = {
  onCreateTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTibiSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateTibiSubscription = {
  onUpdateTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTibiSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteTibiSubscription = {
  onDeleteTibi?:  {
    __typename: "Tibi",
    id: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
