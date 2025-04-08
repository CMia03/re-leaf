import { formatArPrice } from "@/lib/utils";
import RangeSlider from "react-range-slider-input";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    </div>
  );
};
export default LeftSection;
