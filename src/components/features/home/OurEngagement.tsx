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
    <div className="p-[100px] flex flex-col gap-10">
      <Typography variant="h2" className="justify-center border-none rounded-none text-center">{t('ourEngagement').toUpperCase()}</Typography>
      <div className="flex gap-[59px] text-center justify-center">
        {data.map((item, index) => (
          <div key={index}>
           <Card className="w-[281px] mx-auto border-none shadow-none">
            <CardContent className="flex flex-col items-center text-center gap-4 p-6">
              <Image 
                src={item.image} 
                alt={item.title} 
                width={150} 
                height={150} 
                className="rounded-lg"
              />
              <Typography variant="h4" className="text-xl font-semibold">{item.title}</Typography>
              <Typography variant="p" className="text-gray-600">{item.description}</Typography>
            </CardContent>
          </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurEngagement;
