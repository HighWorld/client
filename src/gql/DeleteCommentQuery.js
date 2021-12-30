import { gql } from "@apollo/client";

export const DELETE_COMMENT_QUERY = gql`
    mutation Mutation($postId: ID!, $commentId: ID!) {
        deleteComment(postId: $postId, commentId: $commentId)
    }
`;