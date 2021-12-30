import { gql } from "@apollo/client";

export const DELETE_POST_QUERY = gql`
    mutation DeletePost($postId: ID!) {
        deletePost(postId: $postId)
    }
`;