import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { Product } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_PRODUCTS_PER_CATEGORY } from "@/graphql/queries/categories";
import { GET_BEST_PRODUCTS } from "@/graphql/queries/products";
import { capitalize, formatEuroPrice } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
interface Category {
  documentId: string;
  slug: string;
  name: string;
  products: Product[];
}
const LeftSection = ({
  onCategorySelect,
  selectedCategory,
  onPriceRangeChange,
}: {
  onCategorySelect: (slug: string | null) => void;
  selectedCategory: string | null;
  onPriceRangeChange: (range: [number, number]) => void;
}) => {
  const t = useTranslations("shop");
  const [rangeSliderValues, setRangeSliderValues] = useState<[number, number]>([
    0, 10000,
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

  const [, setBestProducts] = useState<Product[]>([]);

  const fetchBestProducts = async () => {
    try {
      const { data } = await client.query({
        query: GET_BEST_PRODUCTS,
      });

      setBestProducts(data.products);
    } catch (error) {
      console.error("Erreur lors du chargement des meilleurs produits:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBestProducts();
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
            max={10000}
            step={100}
            value={rangeSliderValues}
            onInput={(newValues: [number, number]) => {
              setRangeSliderValues(newValues);
              onPriceRangeChange(newValues);
            }}
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
            onCategorySelect(null);
            onPriceRangeChange([0, 10000]);
            setRangeSliderValues([0, 10000]);
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
          // if (!item.slug) return null;
          const isActive = selectedCategory === item.slug;
          return (
            <div
              key={index}
              onClick={() => onCategorySelect(item.slug)}
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
      {/* <div className="mt-8">
        <Typography variant="h4" className="text-primary font-normal">
          {t("bestProducts")}
        </Typography>
        {bestProducts.map((product, index) => (
          <div key={index} className="flex items-center mt-3 gap-4">
            <Image
              src={`${product?.cover_image?.url}`}
              className="object-cover"
              alt={product.name}
              height={70}
              width={70}
            />
            <div className="flex flex-col">
              <Typography variant="p" className="text-primary">
                {capitalize(product.name)}
              </Typography>
              <Typography variant="p" className="text-brown">
                {formatEuroPrice(product.price)}
              </Typography>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default LeftSection;
