import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
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

export const UPDATE_PROFILE = gql`
  mutation updateProfile($profileId: ID!, $args: String) {
    updateProfile(profileId: $profileId, args: $args) {
      _id
      profileId
      args
    }
  }
`;

export const REMOVE_THREAD = gql`
  mutation removeThread($threadId: ID!, $userId: ID!) {
      removeThread(threadId: $threadId, userId: $userId) {
          _id
          threadId
          userId
      }
  }
`;

export const REMOVE_MESSAGE = gql`
  mutation removeMessage($messageId: ID!, $userId: ID!) {
      removeMessage(messageId: $messageId, userId: $userId) {
          _id
          messageId
          userId
      }
  }
`;
