"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import DetailCommandeBodyList from "./detailCommandeBodyList";
import MoyenPayement from "./moyenPayement";
import Summary from "./summary";
import BillingAddresseCardDetail from "./billingAddresseCardDetail";
import DeliveryAddresseCardDetail from "./deliveryAddresseCardDetail";

const DetailCommandeBody = () => {
    const t = useTranslations("detailCommande");

    return (
        <div className="flex flex-col gap-15  px-[100px] my-5">
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("detailCommandeTitle")}<span className="number font-medium">4512</span>
                </Typography>

                <Typography
                    variant="D1"
                    className="font-medium"
                >
                    {t("detailCommandeDescription1")}&nbsp;<span className="number font-semibold">0000</span>&nbsp;{t("detailCommandeDescription2")}&nbsp;<span className="date font-semibold">0000</span>&nbsp;{t("detailCommandeDescription3")}&nbsp;<span className="font-semibold">{t("onHold")}</span>
                </Typography>

            </div>
            <div>
                <DetailCommandeBodyList />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                <MoyenPayement />
                <Summary />
                <BillingAddresseCardDetail />
                <DeliveryAddresseCardDetail />
            </div>
        </div>
    );
};

export default DetailCommandeBody;
