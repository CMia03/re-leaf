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
    <div className="text-white">
      <nav className="flex justify-center md:justify-between items-center p-[1em] ">
        <Typography variant="p" className=" hidden md:block ">
          {t("bestProduct")}
        </Typography>
        <Typography variant="p" className=" hidden md:block ">
          {t("freeDelivery")}
        </Typography>

        <div className="flex gap-5">
          <Image
            src={facebook}
            className="cursor-pointer hover:scale-[1.1] transition"
            alt="facebook"
            width={20}
            height={20}
          />
          <Image
            src={youtube}
            className="cursor-pointer hover:scale-[1.1] transition"
            alt="facebook"
            width={20}
            height={20}
          />
          <Image
            src={linkedin}
            className="cursor-pointer hover:scale-[1.1] transition"
            alt="facebook"
            width={20}
            height={20}
          />
          <Image
            src={instagram}
            className="cursor-pointer hover:scale-[1.1] transition"
            alt="facebook"
            width={20}
            height={20}
          />
        </div>
      </nav>
    </div>
  );
};
export default FollowComponents;
