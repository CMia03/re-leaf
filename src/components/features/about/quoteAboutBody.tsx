import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { marcellus } from "../../../../public/fonts/config/config";
import Image from "next/image";
import profile from '../../../../public/images/about/profile.png'
import quote1 from '../../../../public/images/about/quote1.png'
import quote2 from '../../../../public/images/about/quote2.png'

const QuoteAboutBody = () => {
    const translate = useTranslations("about.aboutQuote");


    const quickNavList = [
        {
            quoteTitle: translate('quoteTitle'),
            quoteProfilePhoto: profile,
            quoteProfileName: 'Lara Morgane',
            quoteProfileJob: 'CEO & Fondateur de ReLeaf',
        },

    ]

    return (
        <>
            <div className="flex flex-col gap-10 py-8">
                <ul className={`flex flex-col gap-10 text-[30px] ms-3.5 ${marcellus.className}`}>
                    {quickNavList.map((item, index) => (

                        <li key={index}>
                            <div className="flex  flex-col gap-4 items-center p-5 px-10 w-[70%] mx-auto relative">
                                <Typography
                                    variant="h2"
                                    className="font-medium mb-2  text-center"
                                >
                                    {item.quoteTitle}
                                </Typography>
                                <Image
                                    src={quote1}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="absolute top-0 left-0 -ms-8 -mt-3"
                                    priority
                                />
                                <Image
                                    src={quote2}
                                    width={40}
                                    height={40}
                                    alt=""
                                    className="absolute bottom-0 right-0"
                                    priority
                                />
                            </div>
                            <div className="flex flex-row items-center justify-center mt-5 gap-4">
                                <Image
                                    src={item.quoteProfilePhoto}
                                    width={60}
                                    height={60}
                                    alt=""
                                    className="object-cover rounded-full"
                                    priority
                                />
                                <div className="flex flex-col justify-center mt-3 ">
                                    <Typography
                                        variant="p"
                                        className="font-semibold mb-2"
                                    >
                                        {item.quoteProfileName}
                                    </Typography>
                                    <Typography
                                        variant="D1"
                                        className="font-normal text-sm mb-2 text-[#00000099]"
                                    >
                                        {item.quoteProfileJob}
                                    </Typography>
                                </div>
                            </div>

                        </li>


                    ))}

                </ul>
            </div>
        </>
    );
};
export default QuoteAboutBody;
