import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FooterImage from "../../../../public/images/Footer-image.png";

const Newsletter = () => {
  const t = useTranslations("footer");
  const translationButton = useTranslations("button");
  return (
    <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative overflow-hidden">
      <Image
        src={FooterImage}
        className="absolute right-0 hidden sm:block"
        alt="footer-image"
      />
      <div
        className="absolute inset-0 w-full flex flex-col justify-center align-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(119, 139, 67, 1), rgba(119, 139, 67, 0.3)",
        }}
      >
        <Typography
          variant="h1"
          className="text-center uppercase text-secondary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
        >
          {t("newsletter")}
        </Typography>
        <div className="max-w-[650px] flex align-center mx-auto">
          <Typography
            variant="h5"
            className="text-center text-secondary font-normal text-sm sm:text-base lg:text-lg"
          >
            {t("newsletterMessage")}
          </Typography>
        </div>
        <div className="relative w-full sm:w-[90%] lg:w-[40%] mx-auto mt-2 sm:mt-3">
          <Input
            className="rounded-full h-8 sm:h-10 text-secondary placeholder:text-white text-sm sm:text-base"
            placeholder={t("placeholderInput")}
          />
          <Button
            data-slot="carousel-previous"
            variant={"default"}
            size={"sm"}
            className="rounded-r-full absolute right-0 top-0 bg-secondary text-[var(--tertiary)] h-8 sm:h-10 text-xs sm:text-sm"
          >
            <span>{translationButton("subscribe")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;