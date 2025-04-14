"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const DetailCommandeBodyList = () => {
    const t = useTranslations("detailCommande");

    return (
        <div>
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h5"
                    className="font-medium"
                >
                    {t("detailCommandeTitle")}
                </Typography>
            </div>
            <div className="tableList w-full">
                <div className="flex flex-col items-center w-full">
                    {/* LIST TABLE */}
                    <div className="thead border-b-[#00000033] border-b-1 border-b-solid p-4 grid grid-cols-1 md:grid-cols-5 w-full">
                        {/* thead */}
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
                                Date
                            </Typography>
                        </div>
                        <div className="flex">
                            <Typography
                                variant="h6"
                                className="font-medium"
                            >
                                État
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

                    {/* tbody */}

                    <div className="tbody border-b-[#00000033] border-b-1 border-b-solid p-4 items-center grid grid-cols-1 md:grid-cols-5 w-[90%]">
                        <div className="tr">
                            <Typography
                                variant="D1"
                                className="font-bold"
                            >
                                N° 4512
                            </Typography>
                        </div>
                        <div className="tr">
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                20£
                            </Typography>
                        </div>
                        <div className="tr">
                            <Typography
                                variant="D1"
                                className="font-bold"
                            >
                                1
                            </Typography>
                        </div>
                        <div className="tr">
                            <Typography
                                variant="D1"
                                className="font-bold"
                            >
                                220€
                            </Typography>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailCommandeBodyList;
