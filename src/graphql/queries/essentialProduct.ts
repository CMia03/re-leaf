import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query GetCategory {
    categories {
      name
      image {
        url
      }
    }
  }
`;
