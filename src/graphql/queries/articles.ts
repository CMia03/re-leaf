import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticle($page: Int!, $pageSize: Int) {
    blogs(pagination: { page: $page, pageSize: $pageSize }) {
      title
      cover_image {
        url
        width
        height
      }
      content
      publish_at
    }
    blogs_connection {
      pageInfo {
        total
        pageCount
        pageSize
        page
      }
    }
  }
`;
