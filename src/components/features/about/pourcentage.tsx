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
        <div className="bg-[#6B4727] h-[15em] px-[100px]">
                <div className="flex flex-row items-center h-full justify-evenly text-white">
                    {pourcentageList.map((item, index) => (

                        <div key={index} className="flex flex-col items-center justify-center">
                            <div className="flex  flex-col gap-2 items-center ">
                                <Typography
                                    variant="h2"
                                    className="font-medium mb-2 uppercase text-center"
                                >
                                    {item.pourcentageNumber}
                                </Typography>
                                <Typography
                                    variant="D1"
                                    className="font-normal mb-2 text-center"
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
