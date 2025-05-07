import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProductsWithMeta($page: Int!, $pageSize: Int) {
    products(pagination: { page: $page, pageSize: $pageSize }) {
      documentId
      slug
      name
      description
      vehicle_type
      availability
      price
      cover_image {
        documentId
        url
        width
        height
      }
      images {
        url
        width
        height
      }
      size
      weight
      createdAt
      publishedAt
    }

    products_connection(pagination: { page: $page, pageSize: $pageSize }) {
      pageInfo {
        total
        pageCount
        pageSize
        page
      }
    }
  }
`;
