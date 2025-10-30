"use client"
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import image1 from '../../../../public/images/engagements/image1.png'
import image2 from '../../../../public/images/engagements/image2.png'
import image3 from '../../../../public/images/engagements/image3.png'
import image4 from '../../../../public/images/engagements/image4.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const OurEngagement = () => {
  const t = useTranslations("home")
  const translate = useTranslations("home.engagement")

  const data = [
    {
      image: image1,
      title: translate('title1'),
      description: translate('description1')
    },
    {
      image: image2,
      title: translate('title2'),
      description: translate('description2')
    },
    {
      image: image3,
      title: translate('title3'),
      description: translate('description3')
    },
    {
      image: image4,
      title: translate('title4'),
      description: translate('description4')
    },
  ]
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-5 sm:gap-8 pt-8 sm:pt-12 lg:pt-[50px] px-4 sm:px-6 lg:px-8">
      <Typography variant="h2" className="justify-center border-none rounded-none text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl">{t('ourEngagement').toUpperCase()}</Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center justify-center justify-items-center items-stretch auto-rows-[1fr] w-full">
        {data.map((item, index) => (
          <div key={index} className="w-full h-full">
            <Card className="w-full h-full mx-auto border-none shadow-none">
              <CardContent className="flex flex-1 h-full flex-col items-center text-center gap-3 sm:gap-4 p-3 sm:p-5">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={150} 
                  height={150} 
                  className="rounded-lg w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"
                />
                <Typography variant="h4" className="text-base sm:text-lg lg:text-xl font-semibold break-words hyphens-auto">{item.title}</Typography>
                <Typography variant="p" className="text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto break-words leading-snug clampDescription">{item.description}</Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurEngagement;
