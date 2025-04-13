import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

import Image from 'next/image';
import IconMyaccount1 from './icon/iconMyaccount1'


const MyAccount = () => {
    const t = useTranslations("myAccount");
    // const ts = useTranslations("home");
    const translate = useTranslations("myAccount.accountCard")
    const data = [
        {
            icon: <IconMyaccount1 />,
            title: translate('title1'),
        },
        {
            icon: <IconMyaccount1 />,
            title: translate('title2'),
        },
        {
            icon: <IconMyaccount1 />,
            title: translate('title3'),
        },
        {
            icon: <IconMyaccount1 />,
            title: translate('title4'),
        },
        {
            icon: <IconMyaccount1 />,
            title: translate('title5'),
        },
        {
            icon: <IconMyaccount1 />,
            title: translate('title6'),
        },
      


    ]
    return (
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("myAccountTitle")}
                </Typography>

                <Typography
                    variant="D1"
                    className="font-medium"
                >
                    {t("myAccountDescription")}
                </Typography>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10 ">
                {data.map((item, index) => (
                    <div key={index} className='flex-1'>
                        <Card className="group w-full mx-auto hover:bg-[#B6C335] hover:border-[#B6C335] border-1 border-[#0000004D] rounded-5 shadow-none">
                            <CardContent className="flex flex-row gap-5 items-center">
                                    <i>
                                        {typeof item.icon === 'object' && 'src' in item.icon && typeof item.icon.src === 'string' ? (
                                            <Image src={item.icon.src} alt="icon" />
                                        ) : (
                                            item.icon
                                        )}
                                    </i>

                                <Typography variant="D1" className="group-hover:text-white cursor-default font-semibold">{item.title}</Typography>

                            </CardContent>
                        </Card>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default MyAccount;
