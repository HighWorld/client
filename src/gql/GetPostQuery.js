import { gql } from "@apollo/client";

export const GET_POST_QUERY = gql`
    query GetPost($postId: ID!) {
        getPost(postId: $postId) {
            _id
            body
            comments {
                _id
                body
                createdAt
                username
            }  
            createdAt
            likes {
                _id
                createdAt
                username
            }
            username
            likeCount
            commentCount
        }
    }
`;