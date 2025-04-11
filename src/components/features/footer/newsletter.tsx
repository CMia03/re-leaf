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
    <div className="w-full h-[400px] relative overflow-hidden">
      <Image
        src={FooterImage}
        className="absolute right-0"
        alt="footer-image"
      />
      <div
        className="absolute inset-0 w-full flex flex-col justify-center align-center gap-4 px-4"
        style={{
          background: "linear-gradient(to right, rgba(119, 139, 67, 0.95), rgba(119, 139, 67, 0.75))",
          backdropFilter: "brightness(1.1) saturate(1.2)",
        }}
      >
        <Typography
          variant="h1"
          className="text-center uppercase text-secondary"
        >
          {t("newsletter")}
        </Typography>
        <div className="max-w-[650px] flex align-center mx-auto">
          <Typography
            variant="h5"
            className="text-center text-secondary font-normal"
          >
            {t("newsletterMessage")}
          </Typography>
        </div>
        <div className="relative flex flex-row items-center lg:w-[40%] w-[80%] mx-auto mt-3">
          <Input
            className="border p-5 ps-8 px-7 w-full rounded-l-full placeholder:text-white"
            placeholder={t("placeholderInput")}
          />
          <Button
            data-slot="carousel-previous"
            variant={"default"}
            size={"lg"}
            className="bg-white cursor-pointer font-semibold rounded-r-full text-[var(--tertiary)] px-7 pe-8 py-2"
          >
            <span>{translationButton("subscribe")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
