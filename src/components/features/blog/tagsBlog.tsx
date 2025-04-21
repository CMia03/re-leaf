import React from 'react';
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

const TagsBlog = () => {
    const t = useTranslations("label");
    const translate = useTranslations("label.listTags")

    const listTags = [
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
            <div className="flex flex-col gap-7">
                <Typography variant="h4" className="font-semibold">
                    {t('tags')}
                </Typography>
                <div className="flex flex-row flex-wrap gap-3 w-full">
                    {listTags.map((item, index) => (
                        <Typography
                            key={index}
                            variant="quote"
                            className="font-[400] text-[1.2em] text-[#1E1E1EA1] cursor-default mt-0 border-l-none border-l-0 pl-0"
                        >
                            {item.paragraphe}&nbsp;&nbsp;
                            {index < listTags.length - 1 && "-"}
                        </Typography>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TagsBlog;