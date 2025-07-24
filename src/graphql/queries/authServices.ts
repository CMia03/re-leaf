import { ApolloClient, gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        username
        email
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $data: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $id, data: $data) {
      data {
        documentId
        name
        firstName
      }
    }
  }
`;

export const ME_QUERY = gql`
  query Me {
    me {
      id
      username
      email
    }
  }
`;

export async function fetchMe(client: ApolloClient<any>) {
  try {
    const { data } = await client.query({ query: ME_QUERY });
    return data.me;
  } catch (error) {
    console.error("Erreur lors de la récupération du user:", error);
    return null;
  }
}
