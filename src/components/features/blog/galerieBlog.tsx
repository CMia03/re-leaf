import React from 'react';
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import blog1 from '../../../../public/images/blog/blog1.png'

import Image from "next/image";


const GalerieBlog = () => {
    const t = useTranslations("label");

    const listGallerieImage = [
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        },
        {
            image:blog1,
        }
    ]
    return (
        <div>
            <div className="flex flex-col gap-7">
                <Typography variant="h4" className="font-semibold">
                    {t('Gallery')}
                </Typography>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {listGallerieImage.map((item, index) => (

                        <Image key={index}
                            src={item.image}
                            alt={'image'}
                            className="w-full h-[9em] object-cover rounded-none"
                        />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalerieBlog;