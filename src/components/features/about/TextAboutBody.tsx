import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { marcellus } from "../../../../public/fonts/config/config";


const TextAboutBody = () => {
    const translate = useTranslations("about.aboutParagraphe");
    
    
        const quickNavList = [
            {
                quickNavTitle: translate('aboutParagraphe1'),
                quickNavDescription: translate('aboutParagrapheDescription1'),
            },
         
            {
                quickNavTitle: translate('aboutParagraphe2'),
                quickNavDescription: translate('aboutParagrapheDescription2'),
    
            }
        ]
    
    return (
        <>
            <div className="flex flex-col gap-10 py-8">
                            <ul className={`flex flex-col gap-10 text-[30px] ms-3.5 ${marcellus.className}`}>
                                {quickNavList.map((item, index) => (
            
                                    <li key={index}>
                                        <div className="flex  flex-col gap-4">
                                            <Typography
                                                variant="h2"
                                                className="font-medium mb-2 uppercase"
                                            >
                                                {item.quickNavTitle}
                                            </Typography>
                                            <Typography
                                                variant="D1"
                                                className="font-normal mb-2"
                                            >
                                                {item.quickNavDescription}
                                            </Typography>
                                        </div>
            
                                    </li>
            
            
                                ))}
            
                            </ul>
                        </div>
        </>
    );
};
export default TextAboutBody;
