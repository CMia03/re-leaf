"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { formatArPrice } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import MenuInformations from "./MenuInformations";

const PRODUCT = {
  name: "Huile essentielle de Cannelle",
  price: 10000,
  description:
    "Connue pour ses qualités purifiantes, l'huile essentielle de Cannelle très puissante est traditionnellement conseillée pour lutter contre les verrues. Tonique et stimulante, à l'odeur fine, chaude et sucrée, l'huile essentielle de Cannelle écorce s'emploie également",
  category: "huile",
  sku: "23",
  tags: [
    { id: "1", label: "Cannelle" },
    { id: "2", label: "Curcuma" },
  ],
  descriptionTab:
    "Connue pour ses qualités purifiantes, l'huile essentielle de Cannelle très puissante est traditionnellement conseillée pour lutter contre les verrues. Tonique et stimulante, à l'odeur fine, chaude et sucrée, l'huile essentielle de Cannelle écorce s'emploie également",
  weight: "0.9",
  size: "2×6",
};

export type ProductType = {
  name: string;
  price: number;
  description: string;
  category: string;
  sku: string;
  tags: {
    id: string;
    label: string;
  }[];
  descriptionTab: string;
  weight: string;
  size: string;
};

const ProductDetails = () => {
  const t = useTranslations("product");
  const [product] = useState<ProductType>(PRODUCT);
  const [productNumber, setProductNumber] = useState<number>(1);
  const ratingNumbers = 5;

  const increaseProductNumber = () => setProductNumber(productNumber + 1);
  const decreaseProductNumber = () => {
    if (productNumber > 1) setProductNumber(productNumber - 1);
  };

  return (
    <div>
      <Typography variant="h1" className="mb-2 font-normal">
        {product.name}
      </Typography>
      <Typography variant="h3" className="mb-2 font-normal text-brown">
        {formatArPrice(product.price)}
      </Typography>
      <div className="flex flex-wrap items-center gap-4 mb-3">
        <Rating SVGclassName="inline-flex" initialValue={1} readonly />
        <span> {`(${ratingNumbers} ${t("ratingNumbers")})`}</span>
      </div>
      <Typography variant="p" className="mb-4">
        {product.description}
      </Typography>
      <div className="flex items-center gap-4 mb-8.5">
        <div className="bg-[#F8F8F8] px-5 py-2 rounded-full flex items-center gap-2">
          <MdChevronLeft
            className="text-primary cursor-pointer"
            size={21}
            onClick={decreaseProductNumber}
          />
          <Typography variant="p" className="mb-0 px-2">
            {productNumber}
          </Typography>
          <MdChevronRight
            className="text-primary cursor-pointer"
            size={21}
            onClick={increaseProductNumber}
          />
        </div>
        <Button
          data-slot="carousel-previous"
          variant="default"
          size="lg"
          className="rounded-full  px-8 cursor-pointer"
        >
          <span>{t("addToCard")}</span>
        </Button>
      </div>
      <div className="flex flex-col gap-3 mb-20">
        <div>
          SKU : <span className="pl-6">{product.sku}</span>
        </div>
        <div>
          {`${t("category")} : `}
          <span className="pl-6">{product.category}</span>
        </div>
        <div>
          {`${t("tags")} : `}
          <span className="pl-6 text-[#1E1E1EA1]">
            {product.tags.map((item) => item.label).join(" - ")}
          </span>
        </div>
      </div>
      <MenuInformations product={product} />
    </div>
  );
};

export default ProductDetails;
