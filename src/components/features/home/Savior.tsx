import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/re-leaf/Typography";

import essentialOil from "../../../../public/images/spice/essentialOil.png";
import authenticSavior from "../../../../public/images/spice/authenticSavior.png";
import spices from "../../../../public/images/spice/spices.png";

const Savior = () => {
  const t = useTranslations("home");

  const items = [
    { id: 1, image: essentialOil, label: "essentialOil" },
    { id: 2, image: authenticSavior, label: "authenticSavior" },
    { id: 3, image: spices, label: "spices" },
  ];

  return (
    <div className="px-[100px] flex gap-[50px] justify-center">
      {items.map(({ id, image, label }) => (
        <Card key={id} className="border-none  nth-[1]:bg-green-light nth-[2]:bg-[var(--color-primary-releaf-savior)]  nth-[3]:bg-[var(--color-secondary-releaf)] w-[400px] h-[539px] rounded-none">
          <CardContent className="flex flex-col items-center text-center gap-4 p-6">
            <Typography variant="p" className="text-white text-[30px]">
              {t(label)}
            </Typography>
            <Image src={image} alt={t(label)} width={307} height={373} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Savior;
