/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  imageUrl: string,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
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
  imageUrl: string,
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
  roles: Array< string | null >,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Establishment = {
  __typename: "Establishment",
  id: string,
  name: string,
  type: EstablishmentType,
  website?: string | null,
  tibis?: ModelEstablishmentTibiConnection | null,
  occupations?: ModelOccupationConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum EstablishmentType {
  hotel = "hotel",
  custom = "custom",
}


export type ModelOccupationConnection = {
  __typename: "ModelOccupationConnection",
  items?:  Array<Occupation | null > | null,
  nextToken?: string | null,
};

export type Occupation = {
  __typename: "Occupation",
  id: string,
  establishmentId: string,
  name: string,
  backgroundImage: ImagePath,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ImagePath = {
  __typename: "ImagePath",
  id: string,
  key: string,
  location: ImageLocation,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum ImageLocation {
  system = "system",
  assets = "assets",
  remote = "remote",
}


export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  imageUrl?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateImagePathInput = {
  id?: string | null,
  key: string,
  location: ImageLocation,
};

export type ModelImagePathConditionInput = {
  key?: ModelStringInput | null,
  location?: ModelImageLocationInput | null,
  and?: Array< ModelImagePathConditionInput | null > | null,
  or?: Array< ModelImagePathConditionInput | null > | null,
  not?: ModelImagePathConditionInput | null,
};

export type ModelImageLocationInput = {
  eq?: ImageLocation | null,
  ne?: ImageLocation | null,
};

export type UpdateImagePathInput = {
  key?: string | null,
  location?: ImageLocation | null,
};

export type DeleteImagePathInput = {
  id: string,
};

export type CreateOccupationInput = {
  id?: string | null,
  establishmentId: string,
  name: string,
  occupationBackgroundImageId: string,
};

export type ModelOccupationConditionInput = {
  establishmentId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOccupationConditionInput | null > | null,
  or?: Array< ModelOccupationConditionInput | null > | null,
  not?: ModelOccupationConditionInput | null,
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

export type UpdateOccupationInput = {
  id: string,
  establishmentId?: string | null,
  name?: string | null,
  occupationBackgroundImageId?: string | null,
};

export type DeleteOccupationInput = {
  id: string,
};

export type CreateEstablishmentInput = {
  id?: string | null,
  name: string,
  type: EstablishmentType,
  website?: string | null,
};

export type ModelEstablishmentConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelEstablishmentTypeInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelEstablishmentConditionInput | null > | null,
  or?: Array< ModelEstablishmentConditionInput | null > | null,
  not?: ModelEstablishmentConditionInput | null,
};

export type ModelEstablishmentTypeInput = {
  eq?: EstablishmentType | null,
  ne?: EstablishmentType | null,
};

export type UpdateEstablishmentInput = {
  id: string,
  name?: string | null,
  type?: EstablishmentType | null,
  website?: string | null,
};

export type DeleteEstablishmentInput = {
  id: string,
};

export type CreateEstablishmentTibiInput = {
  id?: string | null,
  userId: string,
  establishmentId: string,
  roles: Array< string | null >,
};

export type ModelEstablishmentTibiConditionInput = {
  userId?: ModelIDInput | null,
  establishmentId?: ModelIDInput | null,
  roles?: ModelStringInput | null,
  and?: Array< ModelEstablishmentTibiConditionInput | null > | null,
  or?: Array< ModelEstablishmentTibiConditionInput | null > | null,
  not?: ModelEstablishmentTibiConditionInput | null,
};

export type UpdateEstablishmentTibiInput = {
  id: string,
  userId?: string | null,
  establishmentId?: string | null,
  roles?: Array< string | null > | null,
};

export type DeleteEstablishmentTibiInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelImagePathFilterInput = {
  key?: ModelStringInput | null,
  location?: ModelImageLocationInput | null,
  and?: Array< ModelImagePathFilterInput | null > | null,
  or?: Array< ModelImagePathFilterInput | null > | null,
  not?: ModelImagePathFilterInput | null,
};

export type ModelImagePathConnection = {
  __typename: "ModelImagePathConnection",
  items?:  Array<ImagePath | null > | null,
  nextToken?: string | null,
};

export type ModelOccupationFilterInput = {
  id?: ModelIDInput | null,
  establishmentId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOccupationFilterInput | null > | null,
  or?: Array< ModelOccupationFilterInput | null > | null,
  not?: ModelOccupationFilterInput | null,
};

export type ModelEstablishmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelEstablishmentTypeInput | null,
  website?: ModelStringInput | null,
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
    imageUrl: string,
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
    imageUrl: string,
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
    imageUrl: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateImagePathMutationVariables = {
  input: CreateImagePathInput,
  condition?: ModelImagePathConditionInput | null,
};

export type CreateImagePathMutation = {
  createImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateImagePathMutationVariables = {
  input: UpdateImagePathInput,
  condition?: ModelImagePathConditionInput | null,
};

export type UpdateImagePathMutation = {
  updateImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteImagePathMutationVariables = {
  input: DeleteImagePathInput,
  condition?: ModelImagePathConditionInput | null,
};

export type DeleteImagePathMutation = {
  deleteImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateOccupationMutationVariables = {
  input: CreateOccupationInput,
  condition?: ModelOccupationConditionInput | null,
};

export type CreateOccupationMutation = {
  createOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateOccupationMutationVariables = {
  input: UpdateOccupationInput,
  condition?: ModelOccupationConditionInput | null,
};

export type UpdateOccupationMutation = {
  updateOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteOccupationMutationVariables = {
  input: DeleteOccupationInput,
  condition?: ModelOccupationConditionInput | null,
};

export type DeleteOccupationMutation = {
  deleteOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    roles: Array< string | null >,
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    roles: Array< string | null >,
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    roles: Array< string | null >,
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
    imageUrl: string,
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
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetImagePathQueryVariables = {
  id: string,
};

export type GetImagePathQuery = {
  getImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListImagePathsQueryVariables = {
  filter?: ModelImagePathFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListImagePathsQuery = {
  listImagePaths?:  {
    __typename: "ModelImagePathConnection",
    items?:  Array< {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOccupationQueryVariables = {
  id: string,
};

export type GetOccupationQuery = {
  getOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListOccupationsQueryVariables = {
  filter?: ModelOccupationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOccupationsQuery = {
  listOccupations?:  {
    __typename: "ModelOccupationConnection",
    items?:  Array< {
      __typename: "Occupation",
      id: string,
      establishmentId: string,
      name: string,
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
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
    imageUrl: string,
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
    imageUrl: string,
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
    imageUrl: string,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateImagePathSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateImagePathSubscription = {
  onCreateImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateImagePathSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateImagePathSubscription = {
  onUpdateImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteImagePathSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteImagePathSubscription = {
  onDeleteImagePath?:  {
    __typename: "ImagePath",
    id: string,
    key: string,
    location: ImageLocation,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateOccupationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateOccupationSubscription = {
  onCreateOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateOccupationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateOccupationSubscription = {
  onUpdateOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteOccupationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteOccupationSubscription = {
  onDeleteOccupation?:  {
    __typename: "Occupation",
    id: string,
    establishmentId: string,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      id: string,
      key: string,
      location: ImageLocation,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
    name: string,
    type: EstablishmentType,
    website?: string | null,
    tibis?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    occupations?:  {
      __typename: "ModelOccupationConnection",
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    roles: Array< string | null >,
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    roles: Array< string | null >,
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
      name: string,
      type: EstablishmentType,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      imageUrl: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    roles: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
