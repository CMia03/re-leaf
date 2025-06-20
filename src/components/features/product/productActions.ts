import client from "@/graphql/appoloClient";
import { GET_ALL_CART } from "@/graphql/queries/cart";

export const fetchAllCart = async () => {
  try {
    const { data } = await client.query({
      query: GET_ALL_CART,
      fetchPolicy: "network-only",
    });

    return data?.productQuots || [];
  } catch (error) {
    console.error("Erreur lors de la récuperation de tous les paniers");
    return [];
  }
};
