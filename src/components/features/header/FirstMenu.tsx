import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import cart from "../../../../public/images/cart.svg";
import logo from "../../../../public/images/logo.svg";
import profile from "../../../../public/images/profile.svg";
import search from "../../../../public/images/search.svg";
const FirstMenuComponent = () => {
  const t = useTranslations("header");
  return (
    <div className="flex justify-between items-center px-[100px] h-[124px]">
      <div className="flex gap-5">
        <Image src={logo} alt="logo" width={167} height={90} />
      </div>
      <div className="flex gap-5">
        <Typography variant="p">{t("welcome")}</Typography>
        <Typography variant="p">{t("shop")}</Typography>
        <Typography variant="p">{t("blog")}</Typography>
        <Typography variant="p">{t("contact")}</Typography>
        <Typography variant="p">{t("about")}</Typography>
      </div>
      <div className="flex gap-5">
        <Image src={search} alt="logo" width={25} height={25} />
        <Image src={cart} alt="logo" width={25} height={25} />
        <Image src={profile} alt="logo" width={25} height={25} />
      </div>
    </div>
  );
};
export default FirstMenuComponent;
