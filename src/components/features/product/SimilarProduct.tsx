"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";
import BgImage3 from "../../../../public/images/Bg-image3.png";
import BgImage2 from "../../../../public/images/Bg-image2.png";
import ProductCard from "../shop/productCard";
type Product = {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  isFavorite: boolean;
};

const PRODUCT_MOCK: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    image: BgImage3,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    image: BgImage2,
    isFavorite: false,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    image: BgImage3,
    isFavorite: true,
  },
  {
    id: 4,
    name: "Product 4",
    price: 30,
    image: BgImage3,
    isFavorite: true,
  },
];
const SimilarProduct = () => {
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
        {PRODUCT_MOCK.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default SimilarProduct;
