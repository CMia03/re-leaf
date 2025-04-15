"use client";

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import blog1 from '../../../../public/images/blog/blog1.png'



const DetailCommandeBodyList = () => {
    const t = useTranslations("detailCommande");
    const translate = useTranslations("detailCommande.orderDetails");

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
                <Typography
                    variant="D1"
                    className="font-medium text-2xl"
                >
                    {translate("titleOrderDetails")}

                </Typography>
            </div>
            <div className="tableList w-full">
                <div className="flex flex-col items-center w-full">
                    {/* LIST TABLE */}
                    <div className="thead border-b-[#00000033] border-b-1 border-b-solid p-4 px-0 grid grid-cols-1 md:grid-cols-4 w-full">
                        {/* thead */}
                        <div className="flex">
                            <Typography
                                variant="h6"
                                className="font-medium"
                            >
                                {translate("product")}

                            </Typography>
                        </div>
                        <div className="flex flex-row justify-center">
                            <Typography
                                variant="h6"
                                className="font-medium"
                            >
                                {translate("price")}

                            </Typography>
                        </div>
                        <div className="tr flex flex-row justify-center">
                            <Typography
                                variant="h6"
                                className="font-medium"
                            >
                                {translate("quantity")}

                            </Typography>
                        </div>
                        <div className="flex flex-row justify-end">
                            <Typography
                                variant="h6"
                                className="font-medium"
                            >
                                {translate("subtotal")}

                            </Typography>
                        </div>

                    </div>

                    {/* tbody */}

                    <div className="tbody border-b-[#00000033] border-b-1 border-b-solid p-4 px-0 items-center grid grid-cols-1 md:grid-cols-4 w-full">
                        <div className="tr flex flex-row gap-3 items-center">
                            <Image
                                src={blog1}
                                alt={'image'}

                                className="w-[5em] h-[5em] object-cover rounded-none"
                            />
                            <Typography
                                variant="D1"
                                className="font-bold"
                            >
                                N° 4512
                            </Typography>
                        </div>
                        <div className="tr flex flex-row justify-center">
                            <Typography
                                variant="D1"
                                className="font-medium"
                            >
                                20£
                            </Typography>
                        </div>
                        <div className="tr flex flex-row justify-center">
                            <Typography
                                variant="D1"
                                className="font-bold bg-[#F8F8F8] p-2 px-9 rounded-full"
                            >
                                1
                            </Typography>
                        </div>
                        <div className="tr flex flex-row justify-end">
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
