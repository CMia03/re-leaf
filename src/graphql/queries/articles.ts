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

export const GET_LATEST_ARTICLES = gql`
  query getLatestArticle {
    blogs {
      title
      content
      content_t
      cover_image {
        name
        url
        width
        height
      }
      publish_at
      publishedAt
      createdAt
    }
  }
`;

export const GET_GALERIE_ARTICLES = gql`
  query getGalerieBlog {
    blogs {
      cover_image {
        name
        url
        width
        height
      }
    }
  }
`;
