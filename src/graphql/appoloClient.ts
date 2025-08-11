import { apiUrl } from "@/components/constants/constants";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
  credentials: 'omit',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  fetchOptions: {
    mode: 'cors',
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
    },
  },
});

export default client;
