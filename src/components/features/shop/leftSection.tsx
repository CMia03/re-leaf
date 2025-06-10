import { capitalize, formatEuroPrice } from "@/lib/utils";
import RangeSlider from "react-range-slider-input";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import BgImage2 from "../../../../public/images/Bg-image2.png";
import client from "@/graphql/appoloClient";
import { GET_PRODUCTS_PER_CATEGORY } from "@/graphql/queries/categories";
import { Product } from "@/generated/graphql";
interface Category {
  documentId: string;
  name: string;
  products: Product[];
}
const LeftSection = ({
  onCategorySelect,
  selectedCategoryId,
}: {
  onCategorySelect: (id: string | null) => void;
  selectedCategoryId: string | null;
}) => {
  const t = useTranslations("shop");
  const translationHeader = useTranslations("header");
  const [rangeSliderValues, setRangeSliderValues] = useState<[number, number]>([
    0, 2000000,
  ]);

  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS_PER_CATEGORY,
      });

      setCategories(data.categories);
    } catch (error) {
      console.error("Erreur lors du chargement des categories:", error);
    }
  };
  const products: { label: string; price: number; image: StaticImageData }[] = [
    {
      label: translationHeader("peaperBerries"),
      price: 20,
      image: BgImage2,
    },
    {
      label: translationHeader("spicy"),
      price: 300,
      image: BgImage2,
    },
    {
      label: translationHeader("herbs"),
      price: 600,
      image: BgImage2,
    },
    {
      label: translationHeader("essentialOiles"),
      price: 5000,
      image: BgImage2,
    },
    {
      label: translationHeader("authenticFlavors"),
      price: 20,
      image: BgImage2,
    },
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <div>
        <div className="p-3">
          <Typography variant="p" className="text-primary">
            {t("filterByPrice")}
          </Typography>

          <RangeSlider
            min={0}
            max={2000000}
            step={100}
            value={rangeSliderValues}
            onInput={(newValues: [number, number]) =>
              setRangeSliderValues(newValues)
            }
            className="range-slider-primary w-full mt-4 "
          />
          <div className="flex justify-between mt-2 text-black text-sm">
            <span>{formatEuroPrice(rangeSliderValues[0])}</span>
            <span>{formatEuroPrice(rangeSliderValues[1])}</span>
          </div>
        </div>
        <Button
          data-slot="carousel-previous"
          variant={"default"}
          size={"lg"}
          className="rounded-full mt-2"
          onClick={() => {
            onCategorySelect(null); // c'est CETTE ligne qui déclenche le reset côté ShopComponent
          }}
        >
          <span>{t("resetFilter")}</span>
        </Button>
      </div>
      <div className="mt-8">
        <Typography variant="h4" className="text-primary font-normal">
          {t("categories")}
        </Typography>
        {categories.map((item, index) => {
          const isActive = selectedCategoryId === item.documentId;
          return (
            <div
              key={index}
              onClick={() => onCategorySelect(item.documentId)}
              className={`flex items-center mt-2 px-3 py-2 rounded-md cursor-pointer transition-colors
                ${
                  isActive
                    ? "text-[var(--tertiary)]"
                    : "text-primary hover:bg-muted/75"
                }
              `}
            >
              <Typography variant="p" className="text-[16px]">
                {capitalize(item.name)}
              </Typography>
            </div>
          );
        })}
      </div>
      <div className="mt-8">
        <Typography variant="h4" className="text-primary font-normal">
          {t("bestProducts")}
        </Typography>
        {products.map((product, index) => (
          <div key={index} className="flex items-center mt-3 gap-4">
            <Image
              src={product.image}
              className="object-cover"
              alt={product.label}
              width={70}
            />
            <div className="flex flex-col">
              <Typography variant="p" className="text-primary">
                {product.label}
              </Typography>
              <Typography variant="p" className="text-brown">
                {formatEuroPrice(product.price)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LeftSection;
