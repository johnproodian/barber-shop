import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query {
        me {
            _id
            name
            email
            haircuts {
                _id
                haircutText
                instructions
            }
            role
        }
    }
`;

export const QUERY_USERS = gql`
    query {
        users {
            _id
            name
            email
            haircuts {
                haircutText
                instructions
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($name: String!) {
        user(name: $name) {
            _id
            name
            email
            haircuts {
                _id
                haircutText
                instructions
            }
        
        }
    }
`;

// query haircuts