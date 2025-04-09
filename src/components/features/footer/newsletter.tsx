import { Typography } from "@/components/re-leaf/Typography";
import FooterImage from "../../../../public/images/Footer-image.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
          backgroundImage:
            "linear-gradient(to right, rgba(119, 139, 67, 1), rgba(119, 139, 67, 0.3)",
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
        <div className="relative lg:w-[40%] w-[80%] mx-auto mt-3">
          <Input
            className="rounded-full h-10 text-secondary placeholder:text-white"
            placeholder={t("placeholderInput")}
          />
          <Button
            data-slot="carousel-previous"
            variant={"default"}
            size={"lg"}
            className="rounded-r-full absolute right-0 top-0 bg-secondary text-[var(--tertiary)]"
          >
            <span>{translationButton("subscribe")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
