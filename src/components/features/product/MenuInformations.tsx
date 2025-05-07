"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import Description from "./tabs/description";
import AdditionalInfos from "./tabs/additionalInfos";
import Opinion from "./tabs/opinion";
import { Product } from "@/generated/graphql";

export interface MenuInformationsType {
  product?: Product;
}

const MenuInformations: FC<MenuInformationsType> = ({ product }) => {
  const t = useTranslations("product");
  const [activeSection, setActiveSection] = useState<
    "description" | "additionalInfos" | "opinion"
  >("description");

  const tabs = [
    { key: "description", label: t("description") },
    { key: "additionalInfos", label: t("additionalInfos") },
    { key: "opinion", label: t("opinion") },
  ] as const;

  const renderSection = () => {
    switch (activeSection) {
      case "description":
        return <Description product={product} />;
      case "additionalInfos":
        return <AdditionalInfos product={product} />;
      case "opinion":
        return <Opinion product={product} />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavigationMenu className="border-b">
        <NavigationMenuList className="gap-6">
          {tabs.map(({ key, label }) => (
            <NavigationMenuItem
              key={key}
              role="button"
              tabIndex={0}
              className={clsx(
                "pb-2 cursor-pointer text-lg",
                activeSection === key && "border-b-2 border-primary"
              )}
              onClick={() => setActiveSection(key)}
              onKeyDown={(e) => e.key === "Enter" && setActiveSection(key)}
            >
              {label}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="mt-4">{renderSection()}</div>
    </>
  );
};

export default MenuInformations;
