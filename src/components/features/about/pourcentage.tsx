"use client"
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";


const Pourcentage = () => {
    const translate = useTranslations("about.abouPourcentage");
  
    const pourcentageList = [
        {
            pourcentageNumber: '+200',
            pourcentageDescription: translate('loyalCustomers'),
        },
        {
            pourcentageNumber: '95%',
            pourcentageDescription: translate('satisfactionRate'),
        },
     
        {
            pourcentageNumber: '+1200',
            pourcentageDescription: translate('productSold'),
        },

        {
            pourcentageNumber: '3',
            pourcentageDescription: translate('yearsExperience'),

        }
    ]
    return (
        <div className="bg-[#6B4727] px-4 sm:px-6 lg:px-[100px] py-8 sm:py-10 lg:py-14">
            <div className="flex flex-col sm:flex-row items-center justify-evenly gap-6 sm:gap-8 text-white text-center">
                {pourcentageList.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                        <div className="flex flex-col gap-1 sm:gap-2 items-center">
                            <Typography
                                variant="h2"
                                className="font-medium mb-1 sm:mb-2 uppercase text-center text-2xl sm:text-3xl lg:text-4xl"
                            >
                                {item.pourcentageNumber}
                            </Typography>
                            <Typography
                                variant="D1"
                                className="font-normal mb-1 sm:mb-2 text-center text-sm sm:text-base lg:text-lg"
                            >
                                {item.pourcentageDescription}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Pourcentage;
