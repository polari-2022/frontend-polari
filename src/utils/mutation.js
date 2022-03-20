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
    $photo: String, 
    $attachmentStyle: String!, 
    $genderIdentity: String!, 
    $genderInterests: [String]!, 
    $bio: String!, 
    $birthdate: Date!,
    $pronouns: String,
    $sexualOrientation: String, 
    $currentCity: String!, 
    $user: ID
  ){
      addProfile(
        firstName: $firstName,
        photo: $photo,
        attachmentStyle: $attachmentStyle,
        genderIdentity: $genderIdentity,
        genderInterests: $genderInterests, 
        bio: $bio, 
        birthdate: $birthdate, 
        pronouns: $pronouns, 
        sexualOrientation: $sexualOrientation, 
        currentCity: $currentCity, 
        user: $user
      ){
        firstName,
        photo,
        attachmentStyle,
        genderIdentity,
        genderInterests,
        bio,
        birthdate,
        pronouns,
        sexualOrientation,
        currentCity,
        user {
          _id
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
      $currentCity: String,
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
      currentCity: $currentCity,
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
      currentCity,
      user
    }
  }
`;

export const REMOVE_THREAD = gql`
  mutation removeThread($threadId: ID!) {
    removeThread(threadId: $threadId) {
          _id
          text
          date
    }
  }
`;

export const REMOVE_MESSAGE = gql`
  mutation removeMessage($messageId: ID!) {
      removeMessage(messageId: $messageId) {
          _id
          text
          date
      }
  }
`;
