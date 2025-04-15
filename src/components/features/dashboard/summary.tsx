"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const Summary = () => {
    const t = useTranslations("detailCommande");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <Typography
                    variant="D1"
                    className="font-medium text-2xl"
                >
                    {t("detailCommandeTitle")}
                </Typography>
            </div>

            <div className="flex flex-col">
                <div className="border-b-[#00000033] border-b-1 border-b-solid p-4 px-0 flex flex-row justify-between w-full">
                    <div className="flex">
                        <Typography
                            variant="h6"
                            className="font-medium"
                        >
                            Commande
                        </Typography>
                    </div>
                   
                    <div className="flex">
                        <Typography
                            variant="h6"
                            className="font-medium"
                        >
                            Total
                        </Typography>
                    </div>

                </div>
                <div className="border-b-[#00000033] border-b-1 border-b-solid p-4 px-0 flex flex-row justify-between w-full">
                    <div className="flex">
                        <Typography
                            variant="h6"
                            className="font-medium"
                        >
                            Commande
                        </Typography>
                    </div>
                   
                    <div className="flex">
                        <Typography
                            variant="h6"
                            className="font-medium"
                        >
                            Total
                        </Typography>
                    </div>

                </div>
                <div className="border-b-[#00000033] border-b-1 border-b-solid p-4 px-0 flex flex-row justify-between w-full">
                    <div className="flex">
                        <Typography
                            variant="h6"
                            className="font-medium"
                        >
                            Commande
                        </Typography>
                    </div>
                   
                    <div className="flex">
                        <Typography
                            variant="h5"
                            className="font-semibold"
                        >
                            Total
                        </Typography>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;
