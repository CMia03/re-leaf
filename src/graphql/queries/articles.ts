import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArticle($page: Int!, $pageSize: Int, $filters: BlogFiltersInput) {
    blogs(pagination: { page: $page, pageSize: $pageSize }, filters: $filters) {
      title
      cover_image {
        url
        width
        height
      }
      category {
        name
        slug
      }
      content
      publish_at
    }
    blogs_connection(filters: $filters) {
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
