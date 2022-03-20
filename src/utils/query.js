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
export const QUERY_ONE_PROFILE_BY_USER = gql`
    query userprofile($user:ID!){
        userprofile(user:$user){
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
    query userThreads($user: ID!) {
        threads(user: $user){
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
        }
    }
`;
export const QUERY_MATCH_THREADS = gql`
    query matchThreads($match: ID!) {
        matchthreads(match: $match){
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
        }
    }
`;

export const QUERY_MESSAGES = gql`
    query threadMessages($thread: ID!) {
        messages(thread: $thread) {
            _id
            text
            date
            user {
                _id
                email
            }
        }
    }
`;