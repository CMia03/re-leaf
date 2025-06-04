import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticle {
    blogs {
      title
      cover_image {
        name
        url
        width
        height
      }
      content
      publish_at
    }
  }
`;
