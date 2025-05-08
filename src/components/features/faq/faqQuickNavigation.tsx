import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { marcellus } from "../../../../public/fonts/config/config";


const FaqQuickNavigation = () => {
    const t = useTranslations("faq");
    const translate = useTranslations("faq.quickNavigationList");


    const quickNavList = [
        {
            quickNavTitle: translate('quickNavigation1'),
        },
        {
            quickNavTitle: translate('quickNavigation2'),
        },
        {
            quickNavTitle: translate('quickNavigation3'),
        },
        {
            quickNavTitle: translate('quickNavigation4'),
        },
        {
            quickNavTitle: translate('quickNavigation5'),
        }
    ]

    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
                <Typography
                    variant="h4"
                    className="font-medium"
                >
                    {t('quickNavigation')}

                </Typography>

                <ul className={`flex flex-col gap-5 list-decimal ms-3.5 ${marcellus.className}`}>
                    {quickNavList.map((item, index) => (

                    <li key={index}>
                        <Typography
                        variant="p"
                        className="font-medium mb-2"
                    >
                                {item.quickNavTitle}
                    </Typography>
                    </li>
                    
                        
                ))}

                </ul>
            </div>
        </div>
    );
};
export default FaqQuickNavigation;
