import { gql } from '@apollo/client';

export const CREATE_POST_QUERY = gql`
    mutation Mutation($body: String!) {
        createPost(body: $body) {
            _id
            body
            username
            comments {
                _id
                createdAt
                username
                body
            }
            likes {
                _id
                createdAt
                username
            }
            createdAt
            likeCount
            commentCount
        }
    }
`;