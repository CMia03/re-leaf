import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const SecondMenuComponents = () => {
  const t = useTranslations("header");
  return (
    <div className="flex gap-[50px] justify-center items-center h-[61px]">
      <picture>
      <Typography variant="D1" className="cursor-pointer">{t("peaperBerries")}</Typography>

      </picture>
      <picture>
      <Typography variant="D1" className="cursor-pointer">{t("spicy")}</Typography>

      </picture>
      <picture>
      <Typography variant="D1" className="cursor-pointer">{t("herbs")}</Typography>

      </picture>
      <picture>
      <Typography variant="D1" className="cursor-pointer">{t("essentialOiles")}</Typography>

      </picture>
      <picture>
      <Typography variant="D1" className="cursor-pointer">{t("authenticFlavors")}</Typography>

      </picture>
    </div>
  );
};
export default SecondMenuComponents;
