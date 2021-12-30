import { gql } from '@apollo/client';

export const LOGIN_USER_QUERY = gql`
    mutation Login(
        $username: String!
        $password: String!
    ) {
        login(
            username: $username
            password: $password
        ) 
        {
            _id
            username
            token
        }
    }
`;