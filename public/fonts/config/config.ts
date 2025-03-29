import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

export const sansDM = localFont({
  src: "../../materials/dm-sans/DMSans-Medium.ttf",
});

export const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const marcellus = localFont({
  src: "../../materials/marcellus/Marcellus-Regular.ttf",
});
