import { gql } from '@apollo/client';

export const FETCH_POSTS_QUERY = gql`
query GetPosts {
    getPosts {
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