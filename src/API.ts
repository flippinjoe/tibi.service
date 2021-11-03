/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  establishments?: ModelEstablishmentTibiConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelEstablishmentTibiConnection = {
  __typename: "ModelEstablishmentTibiConnection",
  items?:  Array<EstablishmentTibi | null > | null,
  nextToken?: string | null,
};

export type EstablishmentTibi = {
  __typename: "EstablishmentTibi",
  id: string,
  userId: string,
  establishmentId: string,
  establishment: Establishment,
  user: User,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Establishment = {
  __typename: "Establishment",
  id: string,
  name?: string | null,
  type?: string | null,
  tibis?: ModelEstablishmentTibiConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateEstablishmentInput = {
  id?: string | null,
  name?: string | null,
  type?: string | null,
};

export type ModelEstablishmentConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelEstablishmentConditionInput | null > | null,
  or?: Array< ModelEstablishmentConditionInput | null > | null,
  not?: ModelEstablishmentConditionInput | null,
};

export type UpdateEstablishmentInput = {
  id: string,
  name?: string | null,
  type?: string | null,
};

export type DeleteEstablishmentInput = {
  id: string,
};

export type CreateEstablishmentTibiInput = {
  id?: string | null,
  userId: string,
  establishmentId: string,
};

export type ModelEstablishmentTibiConditionInput = {
  userId?: ModelIDInput | null,
  establishmentId?: ModelIDInput | null,
  and?: Array< ModelEstablishmentTibiConditionInput | null > | null,
  or?: Array< ModelEstablishmentTibiConditionInput | null > | null,
  not?: ModelEstablishmentTibiConditionInput | null,
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

export type UpdateEstablishmentTibiInput = {
  id: string,
  userId?: string | null,
  establishmentId?: string | null,
};

export type DeleteEstablishmentTibiInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelEstablishmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelStringInput | null,
  and?: Array< ModelEstablishmentFilterInput | null > | null,
  or?: Array< ModelEstablishmentFilterInput | null > | null,
  not?: ModelEstablishmentFilterInput | null,
};

export type ModelEstablishmentConnection = {
  __typename: "ModelEstablishmentConnection",
  items?:  Array<Establishment | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateEstablishmentMutationVariables = {
  input: CreateEstablishmentInput,
  condition?: ModelEstablishmentConditionInput | null,
};

export type CreateEstablishmentMutation = {
  createEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateEstablishmentMutationVariables = {
  input: UpdateEstablishmentInput,
  condition?: ModelEstablishmentConditionInput | null,
};

export type UpdateEstablishmentMutation = {
  updateEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteEstablishmentMutationVariables = {
  input: DeleteEstablishmentInput,
  condition?: ModelEstablishmentConditionInput | null,
};

export type DeleteEstablishmentMutation = {
  deleteEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateEstablishmentTibiMutationVariables = {
  input: CreateEstablishmentTibiInput,
  condition?: ModelEstablishmentTibiConditionInput | null,
};

export type CreateEstablishmentTibiMutation = {
  createEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateEstablishmentTibiMutationVariables = {
  input: UpdateEstablishmentTibiInput,
  condition?: ModelEstablishmentTibiConditionInput | null,
};

export type UpdateEstablishmentTibiMutation = {
  updateEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteEstablishmentTibiMutationVariables = {
  input: DeleteEstablishmentTibiInput,
  condition?: ModelEstablishmentTibiConditionInput | null,
};

export type DeleteEstablishmentTibiMutation = {
  deleteEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
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

export type GetEstablishmentQueryVariables = {
  id: string,
};

export type GetEstablishmentQuery = {
  getEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListEstablishmentsQueryVariables = {
  filter?: ModelEstablishmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEstablishmentsQuery = {
  listEstablishments?:  {
    __typename: "ModelEstablishmentConnection",
    items?:  Array< {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateEstablishmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEstablishmentSubscription = {
  onCreateEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateEstablishmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEstablishmentSubscription = {
  onUpdateEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteEstablishmentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEstablishmentSubscription = {
  onDeleteEstablishment?:  {
    __typename: "Establishment",
    id: string,
    name?: string | null,
    type?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateEstablishmentTibiSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateEstablishmentTibiSubscription = {
  onCreateEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateEstablishmentTibiSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateEstablishmentTibiSubscription = {
  onUpdateEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteEstablishmentTibiSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteEstablishmentTibiSubscription = {
  onDeleteEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name?: string | null,
      type?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
