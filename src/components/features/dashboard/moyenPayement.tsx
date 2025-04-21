"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const MoyenPayement = () => {
    // const t = useTranslations("detailCommande");
    const translate = useTranslations("detailCommande.payementMethod");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
                <Typography
                    variant="D1"
                    className="font-medium text-2xl"
                >
                    {translate("payementMethod")}
                </Typography>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col gap-3 p-5 border-1 border-[#00000033]">
                    <Typography
                        variant="h5"
                        className="font-medium"
                    >
                        {translate("titlePayementMethod")}
                      
                    </Typography>
                </div>
                <div className="flex flex-col gap-5 p-5 border-1 border-t-0 border-[#00000033]">
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium text-sm"
                            >
                                {translate("accountNumber")}

                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-semibold"
                            >
                                3445  6464  7885  3321 
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium text-sm"
                            >
                                {translate("accountHolder")}

                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-semibold"
                            >
                               John Doe
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-row gap-8">
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium text-sm"
                            >
                                {translate("dateExpiration")}

                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-semibold"
                            >
                                17/08/2025
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Typography
                                variant="D1"
                                className="font-medium text-sm"
                            >
                                CVV
                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-semibold"
                            >
                                201
                            </Typography>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MoyenPayement;
