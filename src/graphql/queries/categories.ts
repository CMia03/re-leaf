import { gql } from "@apollo/client";

export const GET_PRODUCTS_PER_CATEGORY = gql`
  query GetCategories {
    categories {
      documentId
      name
      products {
        documentId
        name
      }
    }
  }
`;

export const GET_BLOG_PER_CATEGORY = gql`
  query getBlogPerCategory {
    categories(filters: { type: { eq: "Blog" } }) {
      documentId
      name
      slug
      type
      image {
        name
        url
      }
      articles {
        documentId
        title
      }
    }
  }
`;
