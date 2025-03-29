import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import facebook from "../../../../public/images/facebook.svg";
import instagram from "../../../../public/images/instagram.svg";
import linkedin from "../../../../public/images/linkedin.svg";
import youtube from "../../../../public/images/youtube.svg";

const FollowComponents = () => {
  const t = useTranslations("header");
  return (
    <div className="text-white flex justify-between items-center px-[30px] py-[13px]">
      <Typography variant="p">{t("bestProduct")}</Typography>
      <Typography variant="p">{t("freeDelivery")}</Typography>
      <div className="flex gap-5">
        <Image src={facebook} alt="facebook" width={20} height={20} />
        <Image src={youtube} alt="facebook" width={20} height={20} />
        <Image src={linkedin} alt="facebook" width={20} height={20} />
        <Image src={instagram} alt="facebook" width={20} height={20} />
      </div>
    </div>
  );
};
export default FollowComponents;
