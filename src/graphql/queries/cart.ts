import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCart($page: Int!, $pageSize: Int) {
    productQuots(pagination: { page: $page, pageSize: $pageSize }) {
      documentId
      product {
        name
        documentId
        subcategory_id {
          name
        }
        cover_image {
          name
          url
        }
        price
      }
      quantity
    }

    productQuots_connection(pagination: { page: $page, pageSize: $pageSize }) {
      pageInfo {
        total
        pageCount
        pageSize
        page
      }
    }
  }
`;
export const GET_ALL_CART = gql`
  query GetAllCart {
    productQuots {
      documentId
      product {
        name
        documentId
        subcategory_id {
          name
        }
        cover_image {
          name
          url
        }
        price
      }
      quantity
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation AddToCart($data: ProductQuotInput!) {
    createProductQuot(data: $data) {
      product {
        name
      }
      quantity
    }
  }
`;

export const GET_TOTAL_CART = gql`
  query GetTotalCart {
    productQuots_connection {
      pageInfo {
        total
      }
    }
  }
`;

export const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($documentId: ID!) {
    deleteProductQuot(documentId: $documentId) {
      documentId
    }
  }
`;

export const UPDATE_CART_QUANTITY = gql`
  mutation UpdateProductQuot($documentId: ID!, $data: ProductQuotInput!) {
    updateProductQuot(documentId: $documentId, data: $data) {
      quantity
    }
  }
`;
