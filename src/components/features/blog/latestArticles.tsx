"use client";

import React from 'react'
import { Typography } from "@/components/re-leaf/Typography";

// import blog1 from '../../../../public/images/blog/blog1.png'
import latestblogimg from '../../../../public/images/blog/latestblogimg.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const LatestArticles = () => {
    const t = useTranslations("label");
    const translate = useTranslations("label.latestArticleLists")


    const latestArticleList = [
        {
            image: latestblogimg,
            description: translate('description1'),
            date: '15 aout 2024',
        },

        {
            image: latestblogimg,
            description: translate('description1'),
            date: '15 aout 2024',
        }
    ]
    return (
        <div>
            <div className="flex flex-col gap-6">
                <Typography variant="h4" className="font-semibold">
                    {t('latestArticles')}
                </Typography>
                {latestArticleList.map((item, index) => (
                    <div key={index}>
                        <Card className="w-full border-none rounded-none shadow-none p-0">
                            <CardContent className="relative flex px-0 flex-row gap-4 w-full">
                                <Image
                                    src={item.image}
                                    alt={'image'}
                                    className="w-[8em] h-full object-cover rounded-none"
                                />
                                <div className="flex flex-col w-full text-left gap-2">
                                    <Typography variant="D1" className="text-[#6B4727] cursor-pointer hover:underline-offset-4 hover:underline text-[1.1em] w-[60%] clampTitle font-medium">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="D1" className="font-light">
                                        {item.date}
                                    </Typography>

                                </div>


                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default LatestArticles;