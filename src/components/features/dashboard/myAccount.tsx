"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

import IconMyaccount1 from "./icon/iconMyaccount1";
import IconMyaccount2 from "./icon/iconMyaccount2";
import IconMyaccount3 from "./icon/iconMyaccount3";
import IconMyaccount4 from "./icon/iconMyaccount4";
import IconMyaccount5 from "./icon/iconMyaccount5";
import IconMyaccount6 from "./icon/iconMyaccount6";
import { useAuth } from "@/components/contexts/AuthContexts";

const MyAccount = () => {
  const t = useTranslations("myAccount");
  const translate = useTranslations("myAccount.accountCard");
  const router = useRouter();
  const { logout } = useAuth();
  // const pathname = usePathname();

  const data = [
    {
      icon: <IconMyaccount1 />,
      title: translate("commandeHistory"),
      path: "/dashboard/commande",
    },
    {
      icon: <IconMyaccount2 />,
      title: translate("address"),
      path: "/dashboard/addresse",
    },
    {
      icon: <IconMyaccount3 />,
      title: translate("personnalInfoAccount"),
      path: "/dashboard/personnalInfo",
    },
    {
      icon: <IconMyaccount4 />,
      title: translate("settingCookies"),
      path: "/dashboard",
    },
    {
      icon: <IconMyaccount5 />,
      title: translate("codePromoAccount"),
      path: "/dashboard/codePromo",
    },
    {
      icon: <IconMyaccount6 />,
      title: translate("logout"),
      action: () => logout(),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 my-5">
      <div className="flex flex-col items-center gap-3">
        <Typography variant="h2" className="font-medium">
          {t("myAccountTitle")}
        </Typography>
        <Typography variant="D1" className="font-medium">
          {t("myAccountDescription")}
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10">
        {data.map((item, index) => (
          <div key={index} className="flex-1">
            <Card
              onClick={() => {
                if (item.action) {
                  item.action();
                } else if (item.path) {
                  router.push(item.path);
                }
              }}
              className="group w-full cursor-pointer mx-auto hover:bg-[#B6C335] hover:border-[#B6C335] border border-[#0000004D] rounded-5 shadow-none"
            >
              <CardContent className="flex flex-row gap-5 items-center">
                <i>{item.icon}</i>
                <Typography
                  variant="D1"
                  className="group-hover:text-white cursor-pointer font-semibold"
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
