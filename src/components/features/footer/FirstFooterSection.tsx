import { Typography } from "@/components/re-leaf/Typography";
import Image from "next/image";
import logo from "../../../../public/images/logo.svg";
import { useTranslations } from "next-intl";


const FirstFooterSection = () => {
      const t = useTranslations("footer")

  return (
    <div>
        <div className="flex flex-row gap-5 justify-between bg-[#Ffffff]">
              <picture className="flex flex-col gap-3 flex-2">
                <Image src={logo} alt="logo" width={167} height={90} />
                <p>{t("descFooter")}</p>
              </picture>

              <div className="flex flex-col gap-3 flex-1">
                  
            <Typography variant="h5">Navigation</Typography>
                  <p>Nouveautés</p>
                  <p>Huiles essentielles</p>
                  <p>Epices</p>
                  <p>Miel infusé</p>
                  <p>Saveurs</p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                  
            <Typography variant="h5">Information</Typography>
                  <p>Mentions légales</p>
                  <p>Données personnelles</p>
                  <p>Conditions générales de ventes (CGV)</p>
                 
              </div>
              <div className="flex flex-col gap-3 flex-1">
            <Typography variant="h5">Service clients</Typography>
            <Typography variant="h6">+261 32 12 345 67</Typography>
                  <p>Du Lundi au Vendredi de 9h00 à 12h00 et de 13h30 à 16h00</p>
                   <p>Réseaux sociaux</p>
              </div>
        </div>

        <div>
            <Typography variant="p">Copyright © 2025 • ReLeaf</Typography>
              
        </div>
    </div>
  );
};
export default FirstFooterSection;