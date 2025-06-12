import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts(
    $page: Int!
    $pageSize: Int
    $sort: [String]
    $filters: ProductFiltersInput
  ) {
    products(
      pagination: { page: $page, pageSize: $pageSize }
      sort: $sort
      filters: $filters
    ) {
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
      category {
        documentId
        name
      }
    }

    products_connection(
      pagination: { page: $page, pageSize: $pageSize }
      filters: $filters
    ) {
      pageInfo {
        total
        pageCount
        pageSize
        page
      }
    }
  }
`;

export const GET_SIMILAR_PRODUCTS_BY_SUB_CATEGORY = gql`
  query GetProductsByCategory(
    $page: Int!
    $pageSize: Int
    $subCategoryId: ID!
    $currentProductId: ID!
  ) {
    products(
      pagination: { page: $page, pageSize: $pageSize }
      filters: {
        subcategory_id: { documentId: { eq: $subCategoryId } }
        documentId: { ne: $currentProductId }
      }
    ) {
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
      category {
        documentId
        name
      }
    }

    products_connection(pagination: { page: $page, pageSize: $pageSize }) {
      pageInfo {
        total
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($documentId: ID!) {
    product(documentId: $documentId) {
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
      category {
        documentId
        name
      }
    }
  }
`;
