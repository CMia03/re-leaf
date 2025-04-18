"use client";
import { useTranslations } from "next-intl";
// import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Typography } from "../re-leaf/Typography";

type NavLink = {
  label: string;
  path: string;
  background: string;
};

type NavLinks = Record<string, NavLink>;

const BreadcrumbAccount = () => {
  const pathname = usePathname();
  const t = useTranslations("header");
  const router = useRouter();


  const navLinks: NavLinks = {
    "/shop": {
      label: t("shop"),
      path: "/shop",

      background: "var(--tertiary)",
    },
    "/blog": {
      label: t("blog"),
      path: "/blog",

      background: "var(--tertiary-foreground)",
    },
    "/contact": {
      label: t("contactUs"),
      path: "/contact",

      background: "var(--brown)",
    },
    "/about": {
      label: t("about"),
      path: "/about",

      background: "var(--tertiary-foreground)",
    },
  };


  const current = navLinks[pathname];

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="mb-0 p-6 px-0 w-full">


      <div className="flex flex-row gap-2">
        <Typography
          variant="p"
          className="text-black cursor-pointer"
          onClick={() => navigateTo("/")}
        >
          {t("welcome")}
        </Typography>
        <Typography
          variant="p"
          className="text-black"
        >
          /
        </Typography>

        {pathname === "/dashboard/commande" || pathname === "/dashboard/addresse" || pathname === "/dashboard/personnalInfo" || pathname === "/dashboard/codePromo" ?
          <Typography
          variant="p"
          className="text-black cursor-pointer" onClick={() => navigateTo("/dashboard")}
        >
          {t("myAccount")}

        </Typography> : current?.label}

        <Typography
          variant="p"
          className="text-black font-medium"
        >
          {pathname === "/login" ? `${t("myAccount")}` : current?.label}
          {pathname === "/lostPassword" ? `${t("myAccount")}` : current?.label}
          {pathname === "/dashboard" ? `${t("myAccount")} / ${t("dashboard")}` : current?.label}
          {pathname === "/dashboard/commande" ? `/ ${t("order")}` : current?.label}
          {pathname === "/dashboard/addresse" ? `/ ${t("address")}` : current?.label}
          {pathname === "/dashboard/personnalInfo" ? `/ ${t("information")}` : current?.label}
          {pathname === "/dashboard/codePromo" ? `/ ${t("promoCode")}` : current?.label}
        </Typography>
     
      </div>
    </div>
  );
};

export default BreadcrumbAccount;
