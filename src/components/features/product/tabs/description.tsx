import { FC } from "react";
import { MenuInformationsType } from "../MenuInformations";
import { Typography } from "@/components/re-leaf/Typography";

const Description: FC<MenuInformationsType> = ({ product }) => {
  return <Typography variant="p">{product?.description}</Typography>;
};
export default Description;
