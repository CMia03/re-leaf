"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { Product } from "@/generated/graphql";
import { useTranslations } from "next-intl";
import { FC } from "react";
import ProductCard from "../shop/productCard";

type SimilarProductProps = {
  products?: Product[];
};

const SimilarProduct: FC<SimilarProductProps> = ({ products }) => {
  const t = useTranslations("product");
  return (
    <div className="py-6">
      <Typography
        variant="h3"
        className="uppercase text-center font-normal pb-5"
      >
        {t("similarProducts")}
      </Typography>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-8">
        {products?.map((product) => (
          <ProductCard key={product.documentId} product={product} />
        ))}
      </div>
    </div>
  );
};
export default SimilarProduct;
