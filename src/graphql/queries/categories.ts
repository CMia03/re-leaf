import { gql } from "@apollo/client";

export const GET_PRODUCTS_PER_CATEGORY = gql`
  query getProductPerCategory {
    categories {
      documentId
      name
      slug
      products {
        documentId
        name
      }
    }
  }
`;
