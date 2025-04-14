"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import DetailCommandeBodyList from "./detailCommandeBodyList";

const DetailCommandeBody = () => {
    const t = useTranslations("detailCommande");

    return (
        <div>
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("detailCommandeTitle")}
                </Typography>

                <Typography
                    variant="D1"
                    className="font-medium"
                >
                    {t("detailCommandeDescription1")}<span className="number font-semibold">0000</span>&nbsp;{t("detailCommandeDescription2")}&nbsp;<span className="date font-semibold">0000</span>&nbsp;{t("detailCommandeDescription3")}&nbsp;<span className="font-semibold">{t("onHold")}</span>
                </Typography>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                <DetailCommandeBodyList />
            </div>
        </div>
    );
};

export default DetailCommandeBody;
