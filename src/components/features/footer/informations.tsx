"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { MdCopyright, MdFacebook } from "react-icons/md";
import FooterImage2 from "../../../../public/images/Footer-image2.png";
import Logo from "../../../../public/images/logo-lg.jpeg";
import client from "@/graphql/appoloClient";
import { useEffect, useState } from "react";
import { Category } from "@/generated/graphql";
import { capitalize } from "@/lib/utils";
import { Maybe } from "graphql/jsutils/Maybe";
import { useRouter } from "next/navigation";
import { GET_PRODUCTS_PER_CATEGORY } from "@/graphql/queries/categories";

const Informations = () => {
  const t = useTranslations("footer");

  const router = useRouter();
  const goToCategory = (slug: Maybe<string> | undefined) => {
    router.push(`/shop?category=${slug}`);
  };

  const [categories, setCategories] = useState<Category[]>([]);

  const fetchFooterCategories = async () => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCTS_PER_CATEGORY,
      });

      setCategories(data.categories);
    } catch (error) {
      console.error("Erreur lors du chargement des categories:", error);
    }
  };

  useEffect(() => {
    fetchFooterCategories();
  }, []);

  const year = new Date().getFullYear();
  return (
    <div className="relative lg:min-h-110">
      <Image
        fill
        src={FooterImage2}
        className="absolute object-cover right-0 opacity-50 hidden sm:block"
        alt="footer-image2"
      />
      <div className="absolute">
        <div className="p-4 sm:p-8 lg:p-16 px-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_20%_20%_1fr] gap-4 sm:gap-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <Image
                src={Logo}
                className="object-cover right-0 opacity-50 w-32 sm:w-40 lg:w-48"
                alt="footer-image2"
                width={200}
              />
              <Typography variant="p" className="text-primary text-sm sm:text-base">
                {t("informationText")}
              </Typography>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Typography variant="h5" className="text-primary text-base sm:text-lg">
                {t("navigation")}
              </Typography>
              {categories.map((category, index) => (
                <div key={index}>
                  <Typography
                    variant="p"
                    className="text-primary cursor-pointer text-sm sm:text-base hover:text-[var(--tertiary)] transition-colors"
                    onClick={() => goToCategory(category.slug)}
                  >
                    {capitalize(category.name)}
                  </Typography>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Typography variant="h5" className="text-primary text-base sm:text-lg">
                {t("information")}
              </Typography>
              <Typography variant="p" className="text-primary text-sm sm:text-base cursor-pointer hover:text-[var(--tertiary)] transition-colors">
                {t("legalNotices")}
              </Typography>
              <Typography variant="p" className="text-primary text-sm sm:text-base cursor-pointer hover:text-[var(--tertiary)] transition-colors">
                {t("personalInformations")}
              </Typography>
              <Typography variant="p" className="text-primary text-sm sm:text-base cursor-pointer hover:text-[var(--tertiary)] transition-colors">
                {t("generalSalesConditions")}
              </Typography>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <Typography variant="h5" className="text-primary text-base sm:text-lg">
                {t("customerService")}
              </Typography>
              <Typography variant="p" className="text-primary font-bold text-sm sm:text-base">
                {t("phoneDescription")}
              </Typography>
              <Typography variant="p" className="text-primary text-sm sm:text-base">
                {t("openingTime")}
              </Typography>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 align-center relative">
                <Typography variant="p" className="text-primary text-sm">
                  {t("socialMedia")}
                </Typography>
                <div className="flex gap-2 sm:gap-4">
                  <MdFacebook size={20} color="var(--tertiary)" className="cursor-pointer hover:scale-110 transition-transform" />
                  <IoLogoYoutube size={20} color="var(--tertiary)" className="cursor-pointer hover:scale-110 transition-transform" />
                  <IoLogoLinkedin size={20} color="var(--tertiary)" className="cursor-pointer hover:scale-110 transition-transform" />
                  <IoLogoInstagram size={20} color="var(--tertiary)" className="cursor-pointer hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="container mx-auto" />
          <div className="py-4 sm:py-6 flex flex-col sm:flex-row justify-center items-center gap-2 text-center sm:text-left">
            <Typography variant="p" className="text-primary text-sm sm:text-base">
              Copyright
            </Typography>
            <MdCopyright size={16} color="var(--primary)" className="sm:mx-1" />
            <Typography variant="p" className="text-primary text-sm sm:text-base">
              {year}
            </Typography>
            <span className="font-bold text-sm sm:text-base">.</span>
            <Typography variant="p" className="text-primary text-sm sm:text-base">
              ReLeaf
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Informations;
