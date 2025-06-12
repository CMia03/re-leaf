import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query GetCategory {
    categories {
      documentId
      name
      slug
      image {
        name
        url
      }
    }
  }
`;
