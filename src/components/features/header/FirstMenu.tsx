"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import cart from "../../../../public/images/cart.svg";
import logo from "../../../../public/images/logo.svg";
import profile from "../../../../public/images/profile.svg";
import search from "../../../../public/images/search.svg";
import { usePathname, useRouter } from "next/navigation";

const FirstMenuComponent = () => {
  const router = useRouter();
  const t = useTranslations("header");
  const pathname = usePathname(); // Obtient le chemin actuel

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const navLinks = [
    { label: t("welcome"), path: "/" },
    { label: t("shop"), path: "/shop" },
    { label: t("blog"), path: "/blog" },
    { label: t("contact"), path: "/contact" },
    { label: t("about"), path: "/about" },
  ];
  // Vérifie si le lien est actif
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex justify-between items-center px-[100px] h-[124px]">
      <div className="flex gap-5">
        <Image src={logo} alt="logo" width={167} height={90} />
      </div>
      <div className="flex gap-5">
        {navLinks.map((link, index) => (
          <Typography
            key={index}
            variant="p"
            className={`cursor-pointer ${
              isActive(link.path) ? "text-[var(--tertiary)]" : ""
            }`}
            onClick={() => navigateTo(link.path)}
          >
            {link.label}
          </Typography>
        ))}
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
