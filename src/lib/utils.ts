import client from "@/graphql/appoloClient";
import { GET_TOTAL_CART } from "@/graphql/queries/cart";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatEuroPrice = (value: number | null | undefined): string => {
  if (typeof value !== "number") return "0,00 €";
  return (
    value.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
};

export const fetchTotalCart = async () => {
  try {
    const { data } = await client.query({
      query: GET_TOTAL_CART,
      fetchPolicy: "network-only",
    });
    const total = data.productQuots_connection.pageInfo.total;

    return total;
  } catch (error) {
    console.error("Erreur lors du chargement des produits :", error);
  }
};

export const capitalize = (str: string | undefined) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
