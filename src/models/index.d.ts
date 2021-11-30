import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum EstablishmentType {
  HOTEL = "hotel",
  CUSTOM = "custom"
}

export enum ImageLocation {
  SYSTEM = "system",
  ASSETS = "assets",
  REMOTE = "remote"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EstablishmentTibiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EstablishmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OccupationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImagePathMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly imageUrl: string;
  readonly establishments?: (EstablishmentTibi | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class EstablishmentTibi {
  readonly id: string;
  readonly establishment: Establishment;
  readonly user: User;
  readonly roles: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<EstablishmentTibi, EstablishmentTibiMetaData>);
  static copyOf(source: EstablishmentTibi, mutator: (draft: MutableModel<EstablishmentTibi, EstablishmentTibiMetaData>) => MutableModel<EstablishmentTibi, EstablishmentTibiMetaData> | void): EstablishmentTibi;
}

export declare class Establishment {
  readonly id: string;
  readonly name: string;
  readonly type: EstablishmentType | keyof typeof EstablishmentType;
  readonly imageUrl?: string;
  readonly website?: string;
  readonly tibis?: (EstablishmentTibi | null)[];
  readonly occupations?: (Occupation | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Establishment, EstablishmentMetaData>);
  static copyOf(source: Establishment, mutator: (draft: MutableModel<Establishment, EstablishmentMetaData>) => MutableModel<Establishment, EstablishmentMetaData> | void): Establishment;
}

export declare class Occupation {
  readonly id: string;
  readonly establishmentId?: string;
  readonly name: string;
  readonly backgroundImage: ImagePath;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Occupation, OccupationMetaData>);
  static copyOf(source: Occupation, mutator: (draft: MutableModel<Occupation, OccupationMetaData>) => MutableModel<Occupation, OccupationMetaData> | void): Occupation;
}

export declare class ImagePath {
  readonly id: string;
  readonly key: string;
  readonly location: ImageLocation | keyof typeof ImageLocation;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ImagePath, ImagePathMetaData>);
  static copyOf(source: ImagePath, mutator: (draft: MutableModel<ImagePath, ImagePathMetaData>) => MutableModel<ImagePath, ImagePathMetaData> | void): ImagePath;
}