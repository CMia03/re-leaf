import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import image1 from '../../../../public/images/engagements/image1.png'
import image2 from '../../../../public/images/engagements/image2.png'
import image3 from '../../../../public/images/engagements/image2.png'
import image4 from '../../../../public/images/engagements/image4.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const OurEngagement = () => {
  const t = useTranslations("home")

  const data = [
    {
      image: image1,
      title: "100 % Naturel & Authentique",
      description: "Sans additifs ni conservateurs, pour une qualité pure et irréprochable."
    },
    {
      image: image2,
      title: "Commerce Équitable & Circuits Courts",
      description: "Soutien aux producteurs locaux et rémunération juste."
    },
    {
      image: image3,
      title: "Qualité & Traçabilité",
      description: "Contrôle rigoureux et transparence sur l’origine des produits."
    },
    {
      image: image4,
      title: "Saveurs & Bien-être",
      description: "Sélection d’arômes authentiques aux multiples bienfaits."
    },
  ]
  return (
    <div className="p-[100px]">
      <Typography variant="h2" className="justify-center border-none text-center">{t('ourEngagement').toUpperCase()}</Typography>
      <div className="flex gap-[59px] text-center">
        {data.map((item, index) => (
          <div key={index}>
           <Card className="w-[281px] mx-auto border-none">
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
