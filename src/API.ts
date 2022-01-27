/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  availableBalance?: number | null,
  pendingBalance?: number | null,
  tippingActive?: boolean | null,
  userBackgroundImageId?: string | null,
  userProfileImageId?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  availableBalance?: ModelFloatInput | null,
  pendingBalance?: ModelFloatInput | null,
  tippingActive?: ModelBooleanInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userBackgroundImageId?: ModelIDInput | null,
  userProfileImageId?: ModelIDInput | null,
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

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  availableBalance?: number | null,
  pendingBalance?: number | null,
  tippingActive?: boolean | null,
  backgroundImage?: ImagePath | null,
  profileImage?: ImagePath | null,
  establishments?: ModelEstablishmentTibiConnection | null,
  createdAt: string,
  updatedAt: string,
  userBackgroundImageId?: string | null,
  userProfileImageId?: string | null,
  owner?: string | null,
};

export type ImagePath = {
  __typename: "ImagePath",
  key: string,
  location: ImageLocation,
  id: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum ImageLocation {
  system = "system",
  assets = "assets",
  remote = "remote",
  s3 = "s3",
}


export type ModelEstablishmentTibiConnection = {
  __typename: "ModelEstablishmentTibiConnection",
  items:  Array<EstablishmentTibi | null >,
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
  imageUrl?: string | null,
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
  items:  Array<Occupation | null >,
  nextToken?: string | null,
};

export type Occupation = {
  __typename: "Occupation",
  id: string,
  establishmentId?: string | null,
  name: string,
  backgroundImage: ImagePath,
  createdAt: string,
  updatedAt: string,
  occupationBackgroundImageId: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  availableBalance?: number | null,
  pendingBalance?: number | null,
  tippingActive?: boolean | null,
  userBackgroundImageId?: string | null,
  userProfileImageId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateImagePathInput = {
  key: string,
  location: ImageLocation,
  id?: string | null,
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
  id: string,
};

export type DeleteImagePathInput = {
  id: string,
};

export type CreateOccupationInput = {
  id?: string | null,
  establishmentId?: string | null,
  name: string,
  occupationBackgroundImageId: string,
};

export type ModelOccupationConditionInput = {
  establishmentId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOccupationConditionInput | null > | null,
  or?: Array< ModelOccupationConditionInput | null > | null,
  not?: ModelOccupationConditionInput | null,
  occupationBackgroundImageId?: ModelIDInput | null,
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
  imageUrl?: string | null,
  website?: string | null,
};

export type ModelEstablishmentConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelEstablishmentTypeInput | null,
  imageUrl?: ModelStringInput | null,
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
  imageUrl?: string | null,
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

export type CreateWalletInput = {
  id?: string | null,
  cryptoHash?: string | null,
  cryptoBalance?: string | null,
};

export type ModelWalletConditionInput = {
  cryptoHash?: ModelStringInput | null,
  cryptoBalance?: ModelStringInput | null,
  and?: Array< ModelWalletConditionInput | null > | null,
  or?: Array< ModelWalletConditionInput | null > | null,
  not?: ModelWalletConditionInput | null,
};

export type Wallet = {
  __typename: "Wallet",
  id: string,
  cryptoHash?: string | null,
  cryptoBalance?: string | null,
  payments?: ModelPaymentConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type Payment = {
  __typename: "Payment",
  id: string,
  walletId: string,
  name?: string | null,
  fee?: number | null,
  isDefault?: boolean | null,
  type?: PaymentType | null,
  description?: string | null,
  token?: string | null,
  createdAt: string,
  updatedAt: string,
};

export enum PaymentType {
  credit = "credit",
  debit = "debit",
  applePay = "applePay",
  crypto = "crypto",
}


export type UpdateWalletInput = {
  id: string,
  cryptoHash?: string | null,
  cryptoBalance?: string | null,
};

export type DeleteWalletInput = {
  id: string,
};

export type CreatePaymentInput = {
  id?: string | null,
  walletId: string,
  name?: string | null,
  fee?: number | null,
  isDefault?: boolean | null,
  type?: PaymentType | null,
  description?: string | null,
  token?: string | null,
};

export type ModelPaymentConditionInput = {
  walletId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  fee?: ModelFloatInput | null,
  isDefault?: ModelBooleanInput | null,
  type?: ModelPaymentTypeInput | null,
  description?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
};

export type ModelPaymentTypeInput = {
  eq?: PaymentType | null,
  ne?: PaymentType | null,
};

export type UpdatePaymentInput = {
  id: string,
  walletId?: string | null,
  name?: string | null,
  fee?: number | null,
  isDefault?: boolean | null,
  type?: PaymentType | null,
  description?: string | null,
  token?: string | null,
};

export type DeletePaymentInput = {
  id: string,
};

export type CreateTransactionInput = {
  id?: string | null,
  amount?: number | null,
  status?: TransactionStatus | null,
  transactionPaymentId: string,
  transactionSourceId: string,
  transactionDestinationId: string,
};

export enum TransactionStatus {
  pending = "pending",
  complete = "complete",
  refunded = "refunded",
}


export type ModelTransactionConditionInput = {
  amount?: ModelFloatInput | null,
  status?: ModelTransactionStatusInput | null,
  transactionPaymentId?: ModelIDInput | null,
  transactionSourceId?: ModelIDInput | null,
  transactionDestinationId?: ModelIDInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
};

export type ModelTransactionStatusInput = {
  eq?: TransactionStatus | null,
  ne?: TransactionStatus | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  amount?: number | null,
  status?: TransactionStatus | null,
  transactionPaymentId: string,
  transactionSourceId: string,
  transactionDestinationId: string,
  payment: Payment,
  source: User,
  destination: User,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTransactionInput = {
  id: string,
  amount?: number | null,
  status?: TransactionStatus | null,
  transactionPaymentId?: string | null,
  transactionSourceId?: string | null,
  transactionDestinationId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  availableBalance?: ModelFloatInput | null,
  pendingBalance?: ModelFloatInput | null,
  tippingActive?: ModelBooleanInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userBackgroundImageId?: ModelIDInput | null,
  userProfileImageId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
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
  items:  Array<ImagePath | null >,
  nextToken?: string | null,
};

export type ModelOccupationFilterInput = {
  id?: ModelIDInput | null,
  establishmentId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelOccupationFilterInput | null > | null,
  or?: Array< ModelOccupationFilterInput | null > | null,
  not?: ModelOccupationFilterInput | null,
  occupationBackgroundImageId?: ModelIDInput | null,
};

export type ModelEstablishmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelEstablishmentTypeInput | null,
  imageUrl?: ModelStringInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelEstablishmentFilterInput | null > | null,
  or?: Array< ModelEstablishmentFilterInput | null > | null,
  not?: ModelEstablishmentFilterInput | null,
};

export type ModelEstablishmentConnection = {
  __typename: "ModelEstablishmentConnection",
  items:  Array<Establishment | null >,
  nextToken?: string | null,
};

export type ModelEstablishmentTibiFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  establishmentId?: ModelIDInput | null,
  roles?: ModelStringInput | null,
  and?: Array< ModelEstablishmentTibiFilterInput | null > | null,
  or?: Array< ModelEstablishmentTibiFilterInput | null > | null,
  not?: ModelEstablishmentTibiFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelWalletFilterInput = {
  id?: ModelIDInput | null,
  cryptoHash?: ModelStringInput | null,
  cryptoBalance?: ModelStringInput | null,
  and?: Array< ModelWalletFilterInput | null > | null,
  or?: Array< ModelWalletFilterInput | null > | null,
  not?: ModelWalletFilterInput | null,
};

export type ModelWalletConnection = {
  __typename: "ModelWalletConnection",
  items:  Array<Wallet | null >,
  nextToken?: string | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  walletId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  fee?: ModelFloatInput | null,
  isDefault?: ModelBooleanInput | null,
  type?: ModelPaymentTypeInput | null,
  description?: ModelStringInput | null,
  token?: ModelStringInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  status?: ModelTransactionStatusInput | null,
  transactionPaymentId?: ModelIDInput | null,
  transactionSourceId?: ModelIDInput | null,
  transactionDestinationId?: ModelIDInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
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
    key: string,
    location: ImageLocation,
    id: string,
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
    key: string,
    location: ImageLocation,
    id: string,
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
    key: string,
    location: ImageLocation,
    id: string,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    imageUrl?: string | null,
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
    imageUrl?: string | null,
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
    imageUrl?: string | null,
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
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
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
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
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
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    roles: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateWalletMutationVariables = {
  input: CreateWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type CreateWalletMutation = {
  createWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWalletMutationVariables = {
  input: UpdateWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type UpdateWalletMutation = {
  updateWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWalletMutationVariables = {
  input: DeleteWalletInput,
  condition?: ModelWalletConditionInput | null,
};

export type DeleteWalletMutation = {
  deleteWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
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
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetImagePathQueryVariables = {
  id: string,
};

export type GetImagePathQuery = {
  getImagePath?:  {
    __typename: "ImagePath",
    key: string,
    location: ImageLocation,
    id: string,
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
    items:  Array< {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    items:  Array< {
      __typename: "Occupation",
      id: string,
      establishmentId?: string | null,
      name: string,
      createdAt: string,
      updatedAt: string,
      occupationBackgroundImageId: string,
      owner?: string | null,
    } | null >,
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
    imageUrl?: string | null,
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
    items:  Array< {
      __typename: "Establishment",
      id: string,
      name: string,
      type: EstablishmentType,
      imageUrl?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEstablishmentTibiQueryVariables = {
  id: string,
};

export type GetEstablishmentTibiQuery = {
  getEstablishmentTibi?:  {
    __typename: "EstablishmentTibi",
    id: string,
    userId: string,
    establishmentId: string,
    establishment:  {
      __typename: "Establishment",
      id: string,
      name: string,
      type: EstablishmentType,
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    roles: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListEstablishmentTibisQueryVariables = {
  filter?: ModelEstablishmentTibiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEstablishmentTibisQuery = {
  listEstablishmentTibis?:  {
    __typename: "ModelEstablishmentTibiConnection",
    items:  Array< {
      __typename: "EstablishmentTibi",
      id: string,
      userId: string,
      establishmentId: string,
      roles: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UsersByEstablishmentQueryVariables = {
  establishmentId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEstablishmentTibiFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UsersByEstablishmentQuery = {
  usersByEstablishment?:  {
    __typename: "ModelEstablishmentTibiConnection",
    items:  Array< {
      __typename: "EstablishmentTibi",
      id: string,
      userId: string,
      establishmentId: string,
      roles: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWalletQueryVariables = {
  id: string,
};

export type GetWalletQuery = {
  getWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWalletsQueryVariables = {
  filter?: ModelWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWalletsQuery = {
  listWallets?:  {
    __typename: "ModelWalletConnection",
    items:  Array< {
      __typename: "Wallet",
      id: string,
      cryptoHash?: string | null,
      cryptoBalance?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      amount?: number | null,
      status?: TransactionStatus | null,
      transactionPaymentId: string,
      transactionSourceId: string,
      transactionDestinationId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
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
    availableBalance?: number | null,
    pendingBalance?: number | null,
    tippingActive?: boolean | null,
    backgroundImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    profileImage?:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    establishments?:  {
      __typename: "ModelEstablishmentTibiConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userBackgroundImageId?: string | null,
    userProfileImageId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateImagePathSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateImagePathSubscription = {
  onCreateImagePath?:  {
    __typename: "ImagePath",
    key: string,
    location: ImageLocation,
    id: string,
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
    key: string,
    location: ImageLocation,
    id: string,
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
    key: string,
    location: ImageLocation,
    id: string,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    establishmentId?: string | null,
    name: string,
    backgroundImage:  {
      __typename: "ImagePath",
      key: string,
      location: ImageLocation,
      id: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    occupationBackgroundImageId: string,
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
    imageUrl?: string | null,
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
    imageUrl?: string | null,
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
    imageUrl?: string | null,
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
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
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
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
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
      imageUrl?: string | null,
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
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    roles: Array< string | null >,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateWalletSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateWalletSubscription = {
  onCreateWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWalletSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateWalletSubscription = {
  onUpdateWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWalletSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteWalletSubscription = {
  onDeleteWallet?:  {
    __typename: "Wallet",
    id: string,
    cryptoHash?: string | null,
    cryptoBalance?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    id: string,
    walletId: string,
    name?: string | null,
    fee?: number | null,
    isDefault?: boolean | null,
    type?: PaymentType | null,
    description?: string | null,
    token?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    amount?: number | null,
    status?: TransactionStatus | null,
    transactionPaymentId: string,
    transactionSourceId: string,
    transactionDestinationId: string,
    payment:  {
      __typename: "Payment",
      id: string,
      walletId: string,
      name?: string | null,
      fee?: number | null,
      isDefault?: boolean | null,
      type?: PaymentType | null,
      description?: string | null,
      token?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    source:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    destination:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      availableBalance?: number | null,
      pendingBalance?: number | null,
      tippingActive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      userBackgroundImageId?: string | null,
      userProfileImageId?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
