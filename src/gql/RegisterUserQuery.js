import { gql } from '@apollo/client';

export const REGISTER_USER_QUERY = gql`
    mutation Register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ) {
        register(registerInput: {
            username: $username
            email: $email
            password: $password
            confirmPassword: $confirmPassword
        }) 
        {
            _id
            username
            token
        }
}
`;