import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($firstname: String!, $photo: String!, $attachmentStyle: String!, $genderIdentity: String!, $genderInterests: String!, $bio: String!, $birthdate: Date!, $pronouns: String, $sexualOrientation: String, $currentLocation: Int!, $userId: ID!) {
    addUser(firstname: $firstname, photo: $photo, attachmentStyle: $attachmentStyle, genderIdentity: $genderIdentity, genderInterests: $genderInterests, bio: $bio, birthdate: $birthdate, pronouns: $pronouns, sexualOrientation: $sexualOrientation, currentLocation: $currentLocation, userId: $userId) {
      token
      user {
        _id
        firstname
        photo
        attachmentStyle
        genderIdentity
        genderInterests
        bio
        birthdate
        pronouns
        sexualOrientation
        currentLocation
        userId
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $savedBook: String!) {
    savedBook(userId: $userId, savedBook: $savedBook) {
      _id
      username
      savedBook
    }
  }
`;


export const DELETE_BOOK = gql`
  mutation deletebook($savedBook: String!) {
    deletebook(skill: $savedBook) {
      _id
      username
      savedBook
    }
  }
`;
