import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
    query singleUser ($userId: ID!) {
        user(userId: $userId) {
            _id
            email
        }
    }
`;

export const QUERY_PROFILES = gql`
    query allProfiles {
        profiles {
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
            user {
                _id
                email
            }    
        }
    }
`;

export const QUERY_SINGLE_PROFILE = gql`
    query singleProfile($profileId: ID!) {
        profiles(profileId: $profileId) {
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
            user {
                _id
                email
            }
        }
    }
`;

export const QUERY_THREADS = gql`
    query allThreads {
        threads{
            _id
            text
            date
            user {
                _id
                email
            }
            match {
                _id
                email
            }
            userId
        }
    }
`;

export const QUERY_SINGLE_THREAD = gql`
    query singleThread($args: String!) {
        thread(args: $args) {
            _id
            text
            date
            user {
                _id
                email
            }
            match {
                _id
                email
            }
            messages {
                text
                date
                threadId
            }
            userId
        }
    }
`;

export const QUERY_MESSAGES = gql`
    query allMessages($args: String!) {
        messages(args: $args) {
            _id
            text
            date
            user {
                _id
                email
            }
            threadId
        }
    }
`;