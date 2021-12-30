import { gql } from "@apollo/client";

export const LIKE_POST_QUERY = gql`
mutation LikePost($postId: ID!) {
  likePost(postId: $postId) {
    likeCount
    likes {
      _id
      createdAt
      username
    }
    _id
    body
    username
    comments {
      _id
      createdAt
      username
      body
    }
    createdAt
    commentCount
  }
}
`;