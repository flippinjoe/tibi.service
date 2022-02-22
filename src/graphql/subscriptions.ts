/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      firstName
      lastName
      availableBalance
      pendingBalance
      tippingActive
      unreadNotifications
      backgroundImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      profileImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      establishments {
        nextToken
      }
      location {
        lat
        lon
      }
      occupations {
        nextToken
      }
      activeOccupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      userActiveOccupationId
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
      availableBalance
      pendingBalance
      tippingActive
      unreadNotifications
      backgroundImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      profileImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      establishments {
        nextToken
      }
      location {
        lat
        lon
      }
      occupations {
        nextToken
      }
      activeOccupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      userActiveOccupationId
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
      availableBalance
      pendingBalance
      tippingActive
      unreadNotifications
      backgroundImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      profileImage {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      establishments {
        nextToken
      }
      location {
        lat
        lon
      }
      occupations {
        nextToken
      }
      activeOccupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      userBackgroundImageId
      userProfileImageId
      userActiveOccupationId
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
      image {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      website
      tibis {
        nextToken
      }
      occupations {
        nextToken
      }
      createdAt
      updatedAt
      establishmentImageId
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
      image {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      website
      tibis {
        nextToken
      }
      occupations {
        nextToken
      }
      createdAt
      updatedAt
      establishmentImageId
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
      image {
        key
        location
        id
        createdAt
        updatedAt
        owner
      }
      website
      tibis {
        nextToken
      }
      occupations {
        nextToken
      }
      createdAt
      updatedAt
      establishmentImageId
      owner
    }
  }
`;
export const onCreateUserOccupations = /* GraphQL */ `
  subscription OnCreateUserOccupations($owner: String) {
    onCreateUserOccupations(owner: $owner) {
      id
      userID
      occupationID
      user {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
        owner
      }
      occupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUserOccupations = /* GraphQL */ `
  subscription OnUpdateUserOccupations($owner: String) {
    onUpdateUserOccupations(owner: $owner) {
      id
      userID
      occupationID
      user {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
        owner
      }
      occupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUserOccupations = /* GraphQL */ `
  subscription OnDeleteUserOccupations($owner: String) {
    onDeleteUserOccupations(owner: $owner) {
      id
      userID
      occupationID
      user {
        id
        firstName
        lastName
        availableBalance
        pendingBalance
        tippingActive
        unreadNotifications
        createdAt
        updatedAt
        userBackgroundImageId
        userProfileImageId
        userActiveOccupationId
        owner
      }
      occupation {
        id
        name
        establishmentId
        createdAt
        updatedAt
        occupationBackgroundImageId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
