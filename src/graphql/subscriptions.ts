/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstName
      lastName
      imageUrl
      establishments {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstName
      lastName
      imageUrl
      establishments {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstName
      lastName
      imageUrl
      establishments {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateImagePath = /* GraphQL */ `
  subscription OnCreateImagePath {
    onCreateImagePath {
      id
      key
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateImagePath = /* GraphQL */ `
  subscription OnUpdateImagePath {
    onUpdateImagePath {
      id
      key
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteImagePath = /* GraphQL */ `
  subscription OnDeleteImagePath {
    onDeleteImagePath {
      id
      key
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateOccupation = /* GraphQL */ `
  subscription OnCreateOccupation {
    onCreateOccupation {
      id
      establishmentId
      name
      backgroundImage {
        id
        key
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateOccupation = /* GraphQL */ `
  subscription OnUpdateOccupation {
    onUpdateOccupation {
      id
      establishmentId
      name
      backgroundImage {
        id
        key
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteOccupation = /* GraphQL */ `
  subscription OnDeleteOccupation {
    onDeleteOccupation {
      id
      establishmentId
      name
      backgroundImage {
        id
        key
        location
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEstablishment = /* GraphQL */ `
  subscription OnCreateEstablishment {
    onCreateEstablishment {
      id
      name
      type
      imageUrl
      website
      tibis {
        nextToken
        startedAt
      }
      occupations {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEstablishment = /* GraphQL */ `
  subscription OnUpdateEstablishment {
    onUpdateEstablishment {
      id
      name
      type
      imageUrl
      website
      tibis {
        nextToken
        startedAt
      }
      occupations {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEstablishment = /* GraphQL */ `
  subscription OnDeleteEstablishment {
    onDeleteEstablishment {
      id
      name
      type
      imageUrl
      website
      tibis {
        nextToken
        startedAt
      }
      occupations {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateEstablishmentTibi = /* GraphQL */ `
  subscription OnCreateEstablishmentTibi {
    onCreateEstablishmentTibi {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        imageUrl
        website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
        imageUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      roles
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateEstablishmentTibi = /* GraphQL */ `
  subscription OnUpdateEstablishmentTibi {
    onUpdateEstablishmentTibi {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        imageUrl
        website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
        imageUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      roles
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteEstablishmentTibi = /* GraphQL */ `
  subscription OnDeleteEstablishmentTibi {
    onDeleteEstablishmentTibi {
      id
      userId
      establishmentId
      establishment {
        id
        name
        type
        imageUrl
        website
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      user {
        id
        firstName
        lastName
        imageUrl
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      roles
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
