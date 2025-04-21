import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { marcellus } from "../../../../public/fonts/config/config";


const FaqQuickNavigationBody = () => {
    const translate = useTranslations("faq.quickNavigationList");


    const quickNavList = [
        {
            quickNavTitle: translate('quickNavigation1'),
            quickNavDescription: translate('quickNavigationDescription1'),
        },
        {
            quickNavTitle: translate('quickNavigation2'),
            quickNavDescription: translate('quickNavigationDescription2'),

        },
        {
            quickNavTitle: translate('quickNavigation3'),
            quickNavDescription: translate('quickNavigationDescription3'),

        },
        {
            quickNavTitle: translate('quickNavigation4'),
            quickNavDescription: translate('quickNavigationDescription4'),

        },
        {
            quickNavTitle: translate('quickNavigation5'),
            quickNavDescription: translate('quickNavigationDescription5'),

        }
    ]

    return (
        <div className="container mx-auto">
            <div className="flex flex-col gap-10">
                <ul className={`flex flex-col gap-8 list-decimal text-[30px] ms-3.5 ${marcellus.className}`}>
                    {quickNavList.map((item, index) => (

                        <li key={index}>
                            <div className="flex  flex-col gap-6">
                                <Typography
                                    variant="h3"
                                    className="font-medium mb-2 "
                                >
                                    {item.quickNavTitle}
                                </Typography>
                                <Typography
                                    variant="D1"
                                    className="font-normal mb-2 -ms-5.5"
                                >
                                    {item.quickNavDescription}
                                </Typography>
                            </div>

                        </li>


                    ))}

                </ul>
            </div>
        </div>
    );
};
export default FaqQuickNavigationBody;
