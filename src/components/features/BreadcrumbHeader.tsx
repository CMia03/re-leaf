"use client";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "next/navigation";
import BgImage1 from "../../../public/images/Bg-image1.png";
import BgImage2 from "../../../public/images/Bg-image2.png";
import BgImage3 from "../../../public/images/Bg-image3.png";
import { Typography } from "../re-leaf/Typography";

type NavLink = {
  label: string;
  path: string;
  image?: StaticImageData;
  background: string;
};

type NavLinks = Record<string, NavLink>;

const BreadcrumbHeader = () => {
  const pathname = usePathname();
  const t = useTranslations("header");
  const router = useRouter();

  const navLinks: NavLinks = {
    "/shop": {
      label: t("shop"),
      path: "/shop",
      image: BgImage1,
      background: "var(--tertiary)",
    },
    "/blog": {
      label: t("blog"),
      path: "/blog",
      image: BgImage2,
      background: "var(--tertiary-foreground)",
    },
    "/contact": {
      label: t("contactUs"),
      path: "/contact",
      image: BgImage2,
      background: "var(--brown)",
    },
    "/about": {
      label: t("about"),
      path: "/about",
      image: BgImage3,
      background: "var(--tertiary-foreground)",
    },
  };

  const current = navLinks[pathname];

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="mb-0 mt-8.5">
      <div className="w-full h-60 relative flex items-center justify-center">
        {current?.image && (
          <Image
            src={current.image}
            fill
            className="object-cover"
            alt={current.label}
            priority
          />
        )}

        <div
          className="absolute inset-0 flex flex-col justify-center pl-12"
          style={{
            backgroundImage: `linear-gradient(to right, ${
              current?.background || "var(--brown)"
            }, transparent)`,
          }}
        >
          <Typography
            variant="h1"
            className="text-white text-4xl font-medium mb-2"
          >
            {pathname === "/contact" ? "Contactez-nous" : current?.label}
          </Typography>

          <div className="flex">
            <Typography
              variant="p"
              className="text-white cursor-pointer"
              onClick={() => navigateTo("/")}
            >
              {t("welcome")}
            </Typography>

            {current?.label && (
              <Typography variant="p" className="text-white ml-2">
                {`/ ${current.label}`}
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
