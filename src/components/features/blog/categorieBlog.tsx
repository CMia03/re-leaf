import React from 'react';
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const CategorieBlog = () => {
    const t = useTranslations("label");
    const translate = useTranslations("label.listCategorie")

    const listCategorie = [
        {
            paragraphe: translate('paragraphe1'),
        },
        {
            paragraphe: translate('paragraphe2'),
        },
        {
            paragraphe: translate('paragraphe3'),
        },
        {
            paragraphe: translate('paragraphe4'),
        },
        {
            paragraphe: translate('paragraphe5'),
        }
    ]
    return (
        <div>
            <div className="flex flex-col gap-8">
                <Typography variant="h4" className="font-semibold">
                    {t('categories')}
                </Typography>
                <div className="flex flex-col gap-6">
                    {listCategorie.map((item, index) => (
                        <Typography key={index} variant="D1" className="font-normal cursor-pointer">
                            {item.paragraphe}
                        </Typography>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorieBlog;