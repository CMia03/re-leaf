"use client";

import React from 'react'
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button"

import blog1 from '../../../../public/images/blog/blog1.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const LatestArticles = () => {
    const t = useTranslations("label");
    const translate = useTranslations("home.blog&adviceCard")


    const latestArticleList = [
        {
            image: blog1,
            description: translate('description1'),
            date: translate('title1').toUpperCase(),
        },


    ]
    return (
        <div>
            <div className="flex flex-col gap-6">
                {latestArticleList.map((item, index) => (
                    <div key={index}>
                        <Card className="w-full border-none  rounded-none shadow-none p-0">
                            <CardContent className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                                <Image
                                    src={item.image}
                                    alt={'image'}
                                    className="w-full h-[70px] object-cover rounded-none"
                                />
                                <div className="flex flex-col items-start text-left gap-3 mt-2">
                                    <Typography variant="p" className="text-gray-600 text-md font-500">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="p" className="font-semibold clampTitle" style={{ lineHeight: '1.4em' }}>
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