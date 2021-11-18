// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EstablishmentType = {
  "HOTEL": "hotel",
  "CUSTOM": "custom"
};

const ImageLocation = {
  "SYSTEM": "system",
  "ASSETS": "assets",
  "REMOTE": "remote"
};

const { User, EstablishmentTibi, Establishment, Occupation, ImagePath } = initSchema(schema);

export {
  User,
  EstablishmentTibi,
  Establishment,
  Occupation,
  ImagePath,
  EstablishmentType,
  ImageLocation
};