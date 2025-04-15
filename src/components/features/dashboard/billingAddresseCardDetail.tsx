"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const BillingAddresseCardDetail = () => {
    const t = useTranslations("addresse");


    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <Typography
                    variant="D1"
                    className="font-medium text-2xl"
                >
                    {t("addresseBilling")}
                </Typography>
            </div>

            <div className="flex flex-row">
                <div className="flex flex-col gap-5 p-5 border-1 border-[#00000033]">
                    <div className="flex flex-col gap-3">
                        <Typography
                            variant="D1"
                            className="font-normal"
                        >
                            {t("fullName")}

                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-normal"
                        >
                            {t("fullAddress")}

                        </Typography>

                        <Typography
                            variant="D1"
                            className="font-normal"
                        >
                            {t("country,city")}

                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-normal"
                        >
                            {t("phone")}

                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-normal"
                        >
                            {t("email")}

                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col gap-5 p-5 border-1 border-l-0 flex-1 border-[#00000033]">
                    <div className="flex flex-col gap-3">
                        <Typography
                            variant="D1"
                            className="font-semibold"
                        >
                            John Doe
                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-semibold"
                        >
                            123 Rue du Boulevard
                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-semibold"
                        >
                            France, Paris 102
                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-semibold"
                        >
                            +261 32 12 345 67
                        </Typography>
                        <Typography
                            variant="D1"
                            className="font-semibold"
                        >
                            johndoe@releaf.com
                        </Typography>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default BillingAddresseCardDetail;
