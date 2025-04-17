import { FC } from "react";
import { MenuInformationsType } from "../MenuInformations";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const AdditionalInfos: FC<MenuInformationsType> = ({ product }) => {
  const t = useTranslations("product");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        {`${t("weight")} : `}
        <Typography variant="p" className="pl-6">
          {product.weight}
        </Typography>
      </div>
      <div className="flex">
        {`${t("size")} : `}
        <Typography variant="p" className="pl-6">
          {product.size}
        </Typography>
      </div>
    </div>
  );
};
export default AdditionalInfos;
