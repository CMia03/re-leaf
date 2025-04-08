import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatArPrice = (value: number): string => {
  return value.toLocaleString("fr-FR").replace(/,/g, ".") + " Ar";
};
