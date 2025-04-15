"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const DeliveryAddresseCardDetail = () => {
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

            <div className="flex flex-row">
                <div className="flex flex-col gap-3 p-5 border-1 border-[#00000033]">
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                Paypal / VISA
                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                Paypal / VISA
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                Paypal / VISA
                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                Paypal / VISA
                            </Typography>
                        </div>
                </div>
                <div className="flex flex-col gap-5 p-5 border-1 border-l-0 flex-1 border-[#00000033]">
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                Paypal / VISA
                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                Paypal / VISA
                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-medium"
                        >
                            Paypal / VISA
                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-medium"
                        >
                            Paypal / VISA
                        </Typography>
                        </div>
                       
                 

                </div>
            </div>
        </div>
    );
};

export default DeliveryAddresseCardDetail;
