import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const AdvantagesList = () => {
  const t = useTranslations("footer");
  return (
    <div className="w-full mt-6 py-8 bg-[#F8F8F8] flex px-[10%] justify-around items-center flex-wrap gap-6">
      <div className="flex gap-4">
        <span className="material-icons ">local_shipping</span>
        <Typography variant="p" className="text-primary font-normal">
          {t("fastDelivery")}
        </Typography>
      </div>

      <div className="flex gap-4">
        <span className="material-icons ">lock</span>
        <Typography variant="p" className="text-primary font-normal">
          {t("secureDelivery")}
        </Typography>
      </div>
      <div className="flex gap-4">
        <span className="material-icons">handshake</span>
        <Typography variant="p" className="text-primary font-normal">
          {t("customerSupport")}
        </Typography>
      </div>
      <div className="flex gap-4">
        <span className="material-icons ">sentiment_very_satisfied</span>
        <Typography variant="p" className="text-primary font-normal">
          {t("satisfactionGuaranteed")}
        </Typography>
      </div>
    </div>
  );
};
export default AdvantagesList;
