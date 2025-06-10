import client from "@/graphql/appoloClient";
import { GET_ALL_CART } from "@/graphql/queries/cart";

export const fetchAllCart = async () => {
  const { data } = await client.query({
    query: GET_ALL_CART,
    fetchPolicy: "network-only",
  });
  return data.productQuots;
};
