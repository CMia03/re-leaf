import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatArPrice = (value: number | null | undefined): string => {
  if (typeof value !== "number") return "0 Ar"; // ou "" si tu veux une string vide
  return value.toLocaleString("fr-FR").replace(/,/g, ".") + " Ar";
};
