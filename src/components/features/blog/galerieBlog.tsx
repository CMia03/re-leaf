import React from 'react';
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import gallery1 from '../../../../public/images/blog/gallery1.png';
import gallery2 from '../../../../public/images/blog/gallery2.png';
import gallery3 from '../../../../public/images/blog/gallery3.png';
import gallery4 from '../../../../public/images/blog/gallery4.png';
import gallery5 from '../../../../public/images/blog/gallery5.png';
import gallery6 from '../../../../public/images/blog/gallery6.png';
import gallery7 from '../../../../public/images/blog/gallery7.png';
import gallery9 from '../../../../public/images/blog/gallery9.png';


import Image from "next/image";


const GalerieBlog = () => {
    const t = useTranslations("label");

    const listGallerieImage = [
        {
            image: gallery1,
        },
        {
            image: gallery2,
        },
        {
            image: gallery3,
        },
        {
            image: gallery4,
        },
        {
            image: gallery5,
        },
        {
            image: gallery6,
        },
        {
            image: gallery7,
        },
        {
            image: gallery6,
        },
        {
            image: gallery9,
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
                            className="w-full h-[7em] object-cover rounded-none"
                        />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalerieBlog;