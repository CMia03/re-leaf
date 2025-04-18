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
    <div className="relative w-full h-[28em] flex items-center justify-center text-white bg-[#778B43] overflow-hidden">
     
      <Image
        src={FooterImage}
        alt="Newsletter Background"
        fill
        className="object-cover object-center w-full h-full mix-blend-multiply pointer-events-none"
        priority
      />
      <div
        className=" w-[60%] flex flex-col justify-center align-center gap-4 max-w-full px-4"
       
      >
        <Typography
          variant="h1"
          className="text-center uppercase text-secondary font-normal"
        >
          {t("newsletter")}
        </Typography>
        <Typography
          variant="h5"
          className="text-center text-secondary font-normal mb-[1em]"
        >
          {t("newsletterMessage")}
        </Typography>
     
        <form className="max-w-full h-[4em] bg-transparent z-40 rounded-full border border-[#fff] border-solid overflow-hidden flex items-center">
          <Input
            className="flex-1 text-white px-[40px] text-[1.1em] placeholder:text-[1.1em] font-semibold h-full border-none outline-none bg-transparent placeholder:text-white placeholder:opacity-70"
            placeholder={t("placeholderInput")}
          />
          <Button
            data-slot="carousel-previous"
            variant={"default"}
            size={"lg"}
            className="text-[#536d22] text-[1.05em] cursor-pointer rounded-none bg-[#fff] font-semibold px-[50px] h-full hover:bg-[#f5f5f5] transition-colors duration-100"
          >
            <span>{translationButton("subscribe")}</span>
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Newsletter;
