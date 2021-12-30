import { gql } from "@apollo/client";

export const CREATE_COMMENT_QUERY = gql`
mutation CreateComment($postId: ID!, $body: String!) {
  createComment(postId: $postId, body: $body) {
    _id
    body
    commentCount
    comments {
      _id
      body
      createdAt
      username
    }
    likeCount
    username
    likes {
      _id
      createdAt
      username
    }
    createdAt
  }
}
`;