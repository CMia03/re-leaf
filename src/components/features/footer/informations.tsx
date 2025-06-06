import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { MdCopyright, MdFacebook } from "react-icons/md";
import FooterImage2 from "../../../../public/images/Footer-image2.png";
import Logo from "../../../../public/images/logo-lg.jpeg";

const Informations = () => {
  const t = useTranslations("footer");
  const translationHeader = useTranslations("header");
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
      label: translationHeader("naturalFoodAgents"),
      value: "naturalFoodAgents",
    },
  ];

  const year = new Date().getFullYear();
  return (
    <div className="relative lg:min-h-110">
      <Image
        fill
        src={FooterImage2}
        className="absolute object-cover right-0 opacity-50"
        alt="footer-image2"
      />
      <div className="absolute">
        <div className="p-16  px-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_20%_20%_1fr] gap-6">
            <div className="flex flex-col gap-4">
              <Image
                src={Logo}
                className="object-cover right-0 opacity-50"
                alt="footer-image2"
                width={200}
              />
              <Typography variant="p" className="text-primary">
                {t("informationText")}
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography variant="h5" className="text-primary">
                {t("navigation")}
              </Typography>
              {categories.map((category) => (
                <div key={category.value}>
                  <Typography variant="p" className="text-primary">
                    {category.label}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <Typography variant="h5" className="text-primary">
                {t("information")}
              </Typography>
              <Typography variant="p" className="text-primary">
                {t("legalNotices")}
              </Typography>
              <Typography variant="p" className="text-primary">
                {t("personalInformations")}
              </Typography>
              <Typography variant="p" className="text-primary">
                {t("generalSalesConditions")}
              </Typography>
            </div>
            <div className="flex flex-col gap-4">
              <Typography variant="h5" className="text-primary">
                {t("customerService")}
              </Typography>
              <Typography variant="p" className="text-primary font-bold">
                +261 32 12 345 67
              </Typography>
              <Typography variant="p" className="text-primary">
                {t("openingTime")}
              </Typography>
              <div className="flex gap-4 align-center relative">
                <Typography variant="p" className="text-primary text-sm">
                  {t("socialMedia")}
                </Typography>
                <MdFacebook size={25} color="var(--tertiary)" />
                <IoLogoYoutube size={25} color="var(--tertiary)" />
                <IoLogoLinkedin size={25} color="var(--tertiary)" />
                <IoLogoInstagram size={25} color="var(--tertiary)" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="container mx-auto" />
          <div className="py-6 flex justify-center items-center gap-2">
            <Typography variant="p" className="text-primary">
              Copyright
            </Typography>
            <MdCopyright size={20} color="var(--primary)" />
            <Typography variant="p" className="text-primary">
              {year}
            </Typography>
            <span className="font-bold">.</span>
            <Typography variant="p" className="text-primary">
              ReLeaf
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Informations;