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
  mutation addProfile(
    $firstName: String!,
    $photo: String!, 
    $attachmentStyle: String!, 
    $genderIdentity: String!, 
    $genderInterests: [String]!, 
    $bio: String!, 
    $birthdate: Date!,
    $pronouns: String,
    $sexualOrientation: String, 
    $currentLocation: Int!, 
    $userId: ID!
  ){
      addProfile(
        firstName: $firstname,
        photo: $photo,
        attachmentStyle: $attachmentStyle,
        genderIdentity: $genderIdentity,
        genderInterests: $genderInterests, 
        bio: $bio, 
        birthdate: $birthdate, 
        pronouns: $pronouns, 
        sexualOrientation: $sexualOrientation, 
        currentLocation: $currentLocation, 
        userId: $userId
      ){
        firstName,
        photo,
        attchmentStyle,
        genderIdentity,
        genderInterests,
        bio,
        birthdate,
        pronouns,
        sexualOrientation,
        currentLocation,
        userId
        token
        user {
          _id
          email
        }
      }
    }
`;

export const UPDATE_PROFILE = gql`
  mutation updateProfile(
      $profileId: ID!,
      $firstName: String,
      $photo: String,
      $attachmentStyle: String,
      $genderIdentity: String,
      $genderInterests:[String],
      $bio: String,
      $birthdate: Date,
      $pronouns: String,
      $sexualOrientation: String,
      $currentLocation: Int,
  ){
    updateProfile(
      profileId: $profileId, 
      firstName: $firstName,
      photo: $photo,
      attachmentStyle: $attachmentStyle,
      genderIdentity: $genderIdentity,
      genderInterests: $genderInterests,
      bio: $bio,
      birthdate: $birthdate,
      pronouns: $pronouns,
      sexualOrientation: $sexualOrientation,
      currentLocation: $currentLocation,
    ){
      _id
      firstName,
      photo,
      attchmentStyle,
      genderIdentity,
      genderInterests,
      bio,
      birthdate,
      pronouns,
      sexualOrientation,
      currentLocation,
      userId
    }
  }
`;

export const REMOVE_THREAD = gql`
  mutation removeThread($threadId: ID!) {
    removeThread(threadId: $threadId) {
          _id
          text
          date
          userId
    }
  }
`;

export const REMOVE_MESSAGE = gql`
  mutation removeMessage($messageId: ID!) {
      removeMessage(messageId: $messageId) {
          _id
          text
          date
          threadId
      }
  }
`;
