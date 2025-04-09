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
    <div className="flex gap-[50px] justify-center">
      {items.map(({ id, image, label }) => (
        <Card key={id} className="border-none  nth-[1]:bg-green-light nth-[2]:bg-[var(--tertiary)]  nth-[3]:bg-[var(--quatro)] w-[400px] h-[539px] rounded-none">
          <CardContent className="flex flex-col items-center text-center gap-7 pt-2 pb-2 relative">
            <Typography variant="p" className="text-white text-[30px]">
              {t(label)}
            </Typography>
            <Image src={image} alt={t(label)} width={307} height={373} />

            <i className="absolute bottom-0 left-50 translate-x-[-50%] mb-[-1.7em] cursor-pointer hover:scale-[1.05] transition">
              <svg width="55" height="55" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="white" />
                <path d="M25 20C25 20 35 27.365 35 30C35 32.635 25 40 25 40" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </i>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Savior;
