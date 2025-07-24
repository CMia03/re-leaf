"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../../public/images/logo.svg";
import { FC, useEffect, useRef, useState } from "react";
import { useCart } from "@/components/contexts/CartContext";
import { fetchTotalCart } from "@/lib/utils";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import { useAuth } from "@/components/contexts/AuthContexts";

const RightIconsMenu: FC<{
  navigateTo: (value: string) => void;
  totalCart: number;
  className?: string;
}> = ({ navigateTo, totalCart, className }) => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // console.log(user);

  const getInitials = (username: string) => {
    if (!username) return "";
    const words = username.trim().split(" ");
    const firstInitial = words[0]?.[0] || "";
    const secondInitial = words[1]?.[0] || "";
    return (firstInitial + secondInitial).toUpperCase();
  };

  // Fermer le menu si on clique en dehors
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (user) {
      getInitials(user?.username!);
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [user]);

  return (
    <div className={` ${className} flex-row items-center gap-3 md:gap-8`}>
      <picture>
        <i className=" cursor-pointer flex flex-row items-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 16.5L19.625 19.625M19.5413 22.1562C19.3606 21.9866 19.2158 21.7824 19.1156 21.5557C19.0154 21.329 18.9617 21.0845 18.9578 20.8367C18.9539 20.5889 18.9999 20.3428 19.0929 20.1131C19.1859 19.8834 19.3242 19.6747 19.4994 19.4994C19.6747 19.3242 19.8834 19.1859 20.1131 19.0929C20.3428 18.9999 20.5889 18.9539 20.8367 18.9578C21.0845 18.9617 21.329 19.0154 21.5557 19.1156C21.7824 19.2158 21.9866 19.3606 22.1562 19.5413L25.9587 23.3438C26.1394 23.5134 26.2842 23.7176 26.3844 23.9443C26.4846 24.171 26.5383 24.4155 26.5422 24.6633C26.5461 24.9111 26.5001 25.1572 26.4071 25.3869C26.3141 25.6166 26.1758 25.8253 26.0006 26.0006C25.8253 26.1758 25.6166 26.3141 25.3869 26.4071C25.1572 26.5001 24.9111 26.5461 24.6633 26.5422C24.4155 26.5383 24.171 26.4846 23.9443 26.3844C23.7176 26.2842 23.5134 26.1394 23.3438 25.9587L19.5413 22.1562ZM19 10.25C19 7.92936 18.0781 5.70376 16.4372 4.06282C14.7962 2.42187 12.5706 1.5 10.25 1.5C7.92936 1.5 5.70376 2.42187 4.06282 4.06282C2.42187 5.70376 1.5 7.92936 1.5 10.25C1.5 12.5706 2.42187 14.7962 4.06282 16.4372C5.70376 18.0781 7.92936 19 10.25 19C12.5706 19 14.7962 18.0781 16.4372 16.4372C18.0781 14.7962 19 12.5706 19 10.25Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </picture>

      <picture className="relative">
        <button onClick={() => navigateTo("/cart")}>
          <MdOutlineShoppingCart
            size={40}
            color="var(--primary) "
            className="bg-white  rounded-full p-1 cursor-pointer hover:scale-[1.1] transition"
          />
        </button>
        {/* Number */}
        {totalCart > 0 && (
          <p className="absolute top-0 right-0 h-[2em] cursor-pointer bg-[var(--tertiary-foreground)] p-1 text-[0.7em] px-2 m-[-0.75em] text-white rounded-full">
            <span className="flex flex-row items-center h-full font-bold cursor-default">
              {totalCart}
            </span>
          </p>
        )}
      </picture>
      <picture>
        {user ? (
          <div className="relative group">
            {/* Container englobant l'icône et le dropdown */}
            <div
              className="w-9 h-9 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold cursor-pointer hover:scale-105 transition"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              {getInitials(user.username)}
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white rounded-md shadow-lg z-10">
                <ul className="text-sm text-black">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 rounded cursor-pointer"
                    onClick={() => {
                      setDropdownOpen(!isDropdownOpen);
                      navigateTo("/dashboard");
                    }}
                  >
                    <Typography>Dashboard</Typography>
                  </li>
                  <li
                    className="flex px-4 py-2 hover:bg-gray-200 rounded cursor-pointer"
                    onClick={logout}
                  >
                    <Typography>Se déconnecter</Typography>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <i
            className="cursor-pointer flex flex-row items-center"
            onClick={() => navigateTo("/login")}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5 15C27.5 21.9037 21.9037 27.5 15 27.5C8.09625 27.5 2.5 21.9037 2.5 15C2.5 8.09625 8.09625 2.5 15 2.5C21.9037 2.5 27.5 8.09625 27.5 15Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.875 23.75L7.575 22.525C8.12163 21.568 8.91158 20.7726 9.86475 20.2194C10.8179 19.6662 11.9004 19.3749 13.0025 19.375H16.9975C18.0996 19.3749 19.1821 19.6662 20.1353 20.2194C21.0884 20.7726 21.8784 21.568 22.425 22.525L23.125 23.75M18.4375 11.875C18.4375 12.7867 18.0753 13.661 17.4307 14.3057C16.786 14.9503 15.9117 15.3125 15 15.3125C14.0883 15.3125 13.214 14.9503 12.5693 14.3057C11.9247 13.661 11.5625 12.7867 11.5625 11.875C11.5625 10.9633 11.9247 10.089 12.5693 9.44432C13.214 8.79966 14.0883 8.4375 15 8.4375C15.9117 8.4375 16.786 8.79966 17.4307 9.44432C18.0753 10.089 18.4375 10.9633 18.4375 11.875Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
        )}
      </picture>
    </div>
  );
};

const FirstMenuComponent = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
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

  const { totalCart, setTotalCart } = useCart();

  const getTotalCart = async () => {
    const total = await fetchTotalCart();
    setTotalCart(total);
  };

  useEffect(() => {
    getTotalCart();
  }, []);

  return (
    <div className="flex justify-between items-center px-[20px] md:px-[100px] py-[10px]">
      <div className="flex gap-5">
        <Image src={logo} alt="logo" width={167} height={90} />
      </div>
      <div className="gap-5 hidden md:flex">
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
      <div>
        <RightIconsMenu
          navigateTo={navigateTo}
          totalCart={totalCart}
          className="hidden md:flex"
        />
      </div>

      <button onClick={() => setSidebarOpen(true)} className="md:hidden">
        <MdMenu
          size={35}
          color="var(--primary) "
          className="bg-white  rounded-full p-1 cursor-pointer hover:scale-[1.1] transition"
        />
      </button>

      {isSidebarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col p-4 gap-4">
            <div className="flex justify-between mb-3">
              <RightIconsMenu
                navigateTo={navigateTo}
                totalCart={totalCart}
                className="md:hidden flex"
              />
              <button onClick={() => setSidebarOpen(false)}>
                <span className="material-icons">close</span>
              </button>
            </div>
            {navLinks.map((link, i) => (
              <Typography
                key={i}
                onClick={() => {
                  navigateTo(link.path);
                  setSidebarOpen(false);
                }}
                className="cursor-pointer"
              >
                {link.label}
              </Typography>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default FirstMenuComponent;
