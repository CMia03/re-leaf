"use client";
import AboutPdc from "../../../../public/images/A Propos.png";
import AboutImg from "../../../../public/images/about/image.png";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AboutBannerHome = () => {
  const t = useTranslations("home");
  const router = useRouter();

  const toAbout = () => {
    router.push(`/about`);
  };

  return (
    <div className="relative w-full pt-8 sm:pt-12 lg:pt-[50px]">
      <div className="h-[20em] sm:h-[25em] lg:h-[38em] w-full">
        <Image
          src={AboutPdc}
          alt=""
          width={1500}
          height={200}
          className="h-[100%] object-left object-cover w-full"
        />
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 w-full sm:w-[80%] lg:w-[60%] flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 items-start justify-center text-left">
        <Typography
          variant="h4"
          className="text-white border-none border font-normal text-lg sm:text-xl lg:text-2xl"
        >
          {t("about")}
        </Typography>
        <Typography variant="h1" className="text-white font-normal text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
          {t("aboutDescription")}
        </Typography>
        <Button
          className="p-3 sm:p-4 lg:p-5.5 px-6 sm:px-8 lg:px-9.5 rounded-full flex flex-row items-center text-black bg-white cursor-pointer mt-2 sm:mt-3 lg:mt-4 hover:bg-[#f3f3f3] transition-all ease-in-out text-sm sm:text-base"
        >
          <Typography
            variant="h6"
            className="font-normal flex flex-row items-center h-full"
            onClick={toAbout}
          >
            {t("seeMore")}
          </Typography>
        </Button>
      </div>
      <Image
        src={AboutImg}
        alt=""
        width={180}
        height={100}
        className="absolute right-0 bottom-0 mb-[-5.5em] hidden sm:block w-24 h-16 sm:w-32 sm:h-20 lg:w-40 lg:h-24"
      />
    </div>
  );
};

export default AboutBannerHome;
