import { formatArPrice } from "@/lib/utils";
import RangeSlider from "react-range-slider-input";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import BgImage2 from "../../../../public/images/Bg-image2.png";
const LeftSection = () => {
  const t = useTranslations("shop");
  const translationHeader = useTranslations("header");
  const [rangeSliderValues, setRangeSliderValues] = useState<[number, number]>([
    0, 2000000,
  ]);

  const categories: { label: string; value: string }[] = [
    {
      label: translationHeader("peaperBerries"),
      value: "peaperBerries",
    },
    {
      label: translationHeader("spicy"),
      value: "spicy",
    },
    {
      label: translationHeader("herbs"),
      value: "herbs",
    },
    {
      label: translationHeader("essentialOiles"),
      value: "essentialOiles",
    },
    {
      label: translationHeader("authenticFlavors"),
      value: "authenticFlavors",
    },
  ];
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
            <span>{formatArPrice(rangeSliderValues[0])}</span>
            <span>{formatArPrice(rangeSliderValues[1])}</span>
          </div>
        </div>
        <Button
          data-slot="carousel-previous"
          variant={"default"}
          size={"lg"}
          className="rounded-full mt-2"
        >
          <span>{t("resetFilter")}</span>
        </Button>
      </div>
      <div className="mt-8">
        <Typography variant="h4" className="text-primary font-normal">
          {t("categories")}
        </Typography>
        {categories.map((item, index) => (
          <div key={index} className="flex items-center mt-2">
            <Typography variant="p" className="text-primary font-normal mt-2">
              {item.label}
            </Typography>
          </div>
        ))}
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
                {formatArPrice(product.price)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LeftSection;
