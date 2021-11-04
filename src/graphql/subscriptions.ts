/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateImagePath = /* GraphQL */ `
  subscription OnCreateImagePath($owner: String) {
    onCreateImagePath(owner: $owner) {
      id
      key
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateImagePath = /* GraphQL */ `
  subscription OnUpdateImagePath($owner: String) {
    onUpdateImagePath(owner: $owner) {
      id
      key
      location
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteImagePath = /* GraphQL */ `
  subscription OnDeleteImagePath($owner: String) {
    onDeleteImagePath(owner: $owner) {
      id
      key
      location
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
export const onUpdateOccupation = /* GraphQL */ `
  subscription OnUpdateOccupation($owner: String) {
    onUpdateOccupation(owner: $owner) {
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
export const onDeleteOccupation = /* GraphQL */ `
  subscription OnDeleteOccupation($owner: String) {
    onDeleteOccupation(owner: $owner) {
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
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment($owner: String) {
    onCreateEstablishment(owner: $owner) {
      id
      name
      type
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
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment($owner: String) {
    onUpdateEstablishment(owner: $owner) {
      id
      name
      type
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
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment($owner: String) {
    onDeleteEstablishment(owner: $owner) {
      id
      name
      type
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
