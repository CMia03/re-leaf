import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const SecondMenuComponents = () => {
  const t = useTranslations("header");
  return (
    <div className="flex gap-[50px] justify-center items-center h-[61px]">
      <Typography variant="p">{t("peaperBerries")}</Typography>
      <Typography variant="p">{t("spicy")}</Typography>
      <Typography variant="p">{t("herbs")}</Typography>
      <Typography variant="p">{t("essentialOiles")}</Typography>
      <Typography variant="p">{t("authenticFlavors")}</Typography>
    </div>
  );
};
export default SecondMenuComponents;
