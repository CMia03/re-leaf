"use client"

import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";



const LostPasswordBody = () => {
    const t = useTranslations("lostPassword");



    return (
        <div className="p-6 px-0 flex flex-row items-center">
                <div className="flex flex-col gap-8 w-[80%]">
                    <Typography
                        variant="h2"
                        className="font-medium"
                    >
                        {t("lostPasswordTitle")}
                    </Typography>

                    <div className="flex w-full flex-col items-start gap-5 ">
                        <Typography
                            variant="p"
                            className="font-medium"
                        >
                            {t("lostPasswordDescription")}
                        </Typography>
                        <Input
                            type="email"
                            placeholder={t("lostPasswordPlaceholder")}

                            className="p-6 px-5 border-1 border-solid border-[rgba(0, 0, 0, 0.3)] rounded-full focus:outline-none placeholder:font-normal"
                        />

                        <Button
                            type="submit"

                            className="text-[16px] w-full cursor-pointer bg-black text-white p-7 rounded-full hover:bg-gray-900 transition duration-200"
                        >
                            <Typography
                                variant="D1"

                            >
                                {t("lostPasswordButtonParagraphe")}


                            </Typography>
                        </Button>
                    </div>
                </div>
             
            </div>
    );
};
export default LostPasswordBody;
