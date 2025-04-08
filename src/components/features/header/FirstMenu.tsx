"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
      <div className="flex flex-row items-center gap-8">
        <picture>
          <i className=" cursor-pointer flex flex-row items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 16.5L19.625 19.625M19.5413 22.1562C19.3606 21.9866 19.2158 21.7824 19.1156 21.5557C19.0154 21.329 18.9617 21.0845 18.9578 20.8367C18.9539 20.5889 18.9999 20.3428 19.0929 20.1131C19.1859 19.8834 19.3242 19.6747 19.4994 19.4994C19.6747 19.3242 19.8834 19.1859 20.1131 19.0929C20.3428 18.9999 20.5889 18.9539 20.8367 18.9578C21.0845 18.9617 21.329 19.0154 21.5557 19.1156C21.7824 19.2158 21.9866 19.3606 22.1562 19.5413L25.9587 23.3438C26.1394 23.5134 26.2842 23.7176 26.3844 23.9443C26.4846 24.171 26.5383 24.4155 26.5422 24.6633C26.5461 24.9111 26.5001 25.1572 26.4071 25.3869C26.3141 25.6166 26.1758 25.8253 26.0006 26.0006C25.8253 26.1758 25.6166 26.3141 25.3869 26.4071C25.1572 26.5001 24.9111 26.5461 24.6633 26.5422C24.4155 26.5383 24.171 26.4846 23.9443 26.3844C23.7176 26.2842 23.5134 26.1394 23.3438 25.9587L19.5413 22.1562ZM19 10.25C19 7.92936 18.0781 5.70376 16.4372 4.06282C14.7962 2.42187 12.5706 1.5 10.25 1.5C7.92936 1.5 5.70376 2.42187 4.06282 4.06282C2.42187 5.70376 1.5 7.92936 1.5 10.25C1.5 12.5706 2.42187 14.7962 4.06282 16.4372C5.70376 18.0781 7.92936 19 10.25 19C12.5706 19 14.7962 18.0781 16.4372 16.4372C18.0781 14.7962 19 12.5706 19 10.25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </i>
        </picture>


        <picture className="relative">
          <i className=" cursor-pointer flex flex-row items-center">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20L20.9 19.0912C24.3112 18.8075 25.0763 18.0625 25.4538 14.6613L26.25 7.5M7.5 7.5H27.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 27.5C8.88071 27.5 10 26.3807 10 25C10 23.6193 8.88071 22.5 7.5 22.5C6.11929 22.5 5 23.6193 5 25C5 26.3807 6.11929 27.5 7.5 27.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 27.5C22.6307 27.5 23.75 26.3807 23.75 25C23.75 23.6193 22.6307 22.5 21.25 22.5C19.8693 22.5 18.75 23.6193 18.75 25C18.75 26.3807 19.8693 27.5 21.25 27.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 25H18.75M2.5 2.5H3.7075C4.88875 2.5 5.9175 3.28125 6.20375 4.39375L9.925 18.845C10.0173 19.2064 10.0259 19.5841 9.95008 19.9494C9.87426 20.3146 9.71605 20.6577 9.4875 20.9525L8.28875 22.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </i>
          {/* Number */}
          <p className="absolute top-0 right-0 h-[2em] cursor-pointer bg-[var(--bg-primary-releaf)] p-1 text-[0.7em] px-2 m-[-0.75em] text-white rounded-full">
            <span className="flex flex-row items-center h-full font-bold cursor-default">1</span>
           </p>
        </picture>
        <picture>
<i  className="cursor-pointer flex flex-row items-center">
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.875 23.75L7.575 22.525C8.12163 21.568 8.91158 20.7726 9.86475 20.2194C10.8179 19.6662 11.9004 19.3749 13.0025 19.375H16.9975C18.0996 19.3749 19.1821 19.6662 20.1353 20.2194C21.0884 20.7726 21.8784 21.568 22.425 22.525L23.125 23.75M18.4375 11.875C18.4375 12.7867 18.0753 13.661 17.4307 14.3057C16.786 14.9503 15.9117 15.3125 15 15.3125C14.0883 15.3125 13.214 14.9503 12.5693 14.3057C11.9247 13.661 11.5625 12.7867 11.5625 11.875C11.5625 10.9633 11.9247 10.089 12.5693 9.44432C13.214 8.79966 14.0883 8.4375 15 8.4375C15.9117 8.4375 16.786 8.79966 17.4307 9.44432C18.0753 10.089 18.4375 10.9633 18.4375 11.875Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</i>
        </picture>
      </div>
    </div>
  );
};
export default FirstMenuComponent;
