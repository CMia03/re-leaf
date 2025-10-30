"use client"
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const AdvantagesList = () => {
  const t = useTranslations("footer");
  return (
    <div className="w-full mt-6 py-6 sm:py-8 bg-[#F8F8F8] flex px-4 sm:px-6 lg:px-[10%] justify-center sm:justify-around items-center flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
      <div className="flex gap-2 sm:gap-4 items-center">
        <span className="material-icons text-lg sm:text-xl">local_shipping</span>
        <Typography variant="p" className="text-primary font-normal text-sm sm:text-base">
          {t("fastDelivery")}
        </Typography>
      </div>

      <div className="flex gap-2 sm:gap-4 items-center">
        <span className="material-icons text-lg sm:text-xl">lock</span>
        <Typography variant="p" className="text-primary font-normal text-sm sm:text-base">
          {t("secureDelivery")}
        </Typography>
      </div>
      <div className="flex gap-2 sm:gap-4 items-center">
        <span className="material-icons text-lg sm:text-xl">handshake</span>
        <Typography variant="p" className="text-primary font-normal text-sm sm:text-base">
          {t("customerSupport")}
        </Typography>
      </div>
      <div className="flex gap-2 sm:gap-4 items-center">
        <span className="material-icons text-lg sm:text-xl">sentiment_very_satisfied</span>
        <Typography variant="p" className="text-primary font-normal text-sm sm:text-base">
          {t("satisfactionGuaranteed")}
        </Typography>
      </div>
    </div>
  );
};
export default AdvantagesList;
