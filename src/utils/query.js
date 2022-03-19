import { gql } from '@apollo/client';

export const QUERY_ME =gql`
    query me {
        me {
            _id
            email
            profile{
                _id
                firstName
                photo
                attachmentStyle
                genderIdentity
                genderInterests
                bio
                birthdate
                pronouns
                sexualOrientation
                currentCity
            }
        }
    }
`;

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
            firstName
            photo
            attachmentStyle
            genderIdentity
            genderInterests
            bio
            birthdate
            pronouns
            sexualOrientation
            currentCity
            userId
            user {
                _id
                email
            }    
        }
    }
`;

export const QUERY_SINGLE_PROFILE = gql`
    query singleProfile($profileId: ID!) {
        profile(profileId: $profileId) {
            _id
            firstName
            photo
            attachmentStyle
            genderIdentity
            genderInterests
            bio
            birthdate
            pronouns
            sexualOrientation
            currentCity
            user {
                _id
                email
            }
        }
    }
`;

export const QUERY_THREADS = gql`
    query userThreads($userId: String!) {
        threads(userId: $userId){
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
            messages{
                _id
                text
                date
            }
            userId
        }
    }
`;

export const QUERY_SINGLE_THREAD = gql`
    query singleThread($threadId: ID!) {
        thread(threadId: $threadId) {
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
    query threadMessages($threadId: String!) {
        messages(threadId: $threadId) {
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