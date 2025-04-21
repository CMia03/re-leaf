"use client";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import BgImage3 from "../../../../public/images/Bg-image3.png";
import BgImage2 from "../../../../public/images/Bg-image2.png";
import { StaticImageData } from "next/image";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { MdUnfoldMore } from "react-icons/md";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

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
];

const ProductList = () => {
  const t = useTranslations("shop");
  const [products, setProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  useEffect(() => {
    setProducts(PRODUCT_MOCK);
  }, []);

  return (
    <div>
      <div className="flex justify-between py-3 mb-4 gap-6 flex-wrap">
        <div className="flex items-center gap-3">
          <Typography variant="p">{`${t("show")} :`}</Typography>
          <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Choisir..." />
            </SelectTrigger>
            <SelectContent disablePortal>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Typography variant="p">{`${t("sortBy")} :`}</Typography>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Choisir..." />
            </SelectTrigger>
            <SelectContent disablePortal>
              <SelectItem value="Nom">{t("name")}</SelectItem>
              <SelectItem value="Prix">{t("price")}</SelectItem>
            </SelectContent>
          </Select>
          <MdUnfoldMore className="text-primary cursor-pointer" size={25} />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <Alert>
          <InfoIcon />
          <AlertTitle>Produit introuvable</AlertTitle>
          <AlertDescription>
            Nous n’avons trouvé aucun produit correspondant à votre recherche.{" "}
            <br />
            Essayez avec d’autres mots-clés ou explorez nos catégories.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default ProductList;
