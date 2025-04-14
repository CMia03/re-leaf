import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"

// import blog1 from '../../../../public/images/blog/blog1.png'
import { Card, CardContent } from "@/components/ui/card";


const CodePromoBody = () => {
    const t = useTranslations("codePromo");
    // const ts = useTranslations("home");
    // const t = useTranslations("label");

    const latestArticleList = [
        {
            title: 'Coupon #154',
            description: 'CP1564RED',
            dateExpiration: 'Date d’expiration',
            date: '15 aout 2024',
        },
        {
            title: 'Coupon #154',
            description: 'CP1564RED',
            dateExpiration: 'Date d’expiration',
            date: '15 aout 2024',
        },
        {
            title: 'Coupon #154',
            description: 'CP1564RED',
            dateExpiration: 'Date d’expiration',
            date: '15 aout 2024',
        }
    ]

    return (
        <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("codePromoTitle")}
                </Typography>

                <Typography
                    variant="D1"
                    className="font-medium"
                >
                    {t("codePromoDescription")}
                </Typography>

            </div>

            {/* LSIT COMMANDE */}
            <div className="flex flex-col items-center gap-10 w-full">
                {/* TABLE */}

                {/* NO COMMANDE */}
                <div className="flex flex-col items-center gap-8">
                    <i className=" mt-15">
                        <svg width="120" height="120" viewBox="0 0 132 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M114.289 21.0581L125.069 9.1987C126.03 8.11605 126.525 6.69847 126.447 5.25329C126.369 3.80811 125.725 2.45182 124.654 1.47846C123.583 0.505103 122.172 -0.00686703 120.726 0.0535481C119.28 0.113963 117.916 0.741893 116.929 1.8012L106.149 13.6537C93.0238 3.57302 76.5884 -1.20553 60.104 0.266073C43.6195 1.73767 28.2905 9.3519 17.158 21.5982C6.0255 33.8444 -0.0969885 49.8279 0.00516425 66.3776C0.107317 82.9273 6.42665 98.8339 17.7095 110.942L6.92946 122.801C6.43355 123.334 6.04829 123.96 5.79603 124.642C5.54377 125.325 5.42952 126.051 5.4599 126.778C5.49029 127.506 5.6647 128.219 5.97303 128.879C6.28136 129.538 6.71747 130.13 7.25609 130.619C7.79472 131.109 8.42514 131.486 9.11082 131.73C9.7965 131.974 10.5238 132.08 11.2506 132.041C11.9773 132.002 12.6891 131.819 13.3447 131.503C14.0002 131.186 14.5865 130.743 15.0695 130.199L25.8495 118.346C38.9751 128.427 55.4105 133.205 71.8949 131.734C88.3794 130.262 103.708 122.648 114.841 110.402C125.973 98.1555 132.096 82.172 131.994 65.6223C131.892 49.0726 125.572 33.166 114.289 21.0581ZM10.9995 66C11.0056 55.8177 13.8381 45.8371 19.1816 37.1696C24.5251 28.5022 32.1698 21.4882 41.2642 16.909C50.3586 12.3297 60.5457 10.3649 70.6908 11.2334C80.8359 12.1019 90.5407 15.7697 98.7245 21.8281L25.162 102.767C16.0416 92.694 10.9935 79.5887 10.9995 66ZM65.9995 121C54.2091 121.012 42.7304 117.214 33.2745 110.172L106.837 29.2325C113.954 37.1279 118.629 46.9176 120.296 57.4158C121.962 67.914 120.549 78.6702 116.228 88.3817C111.906 98.0932 104.861 106.343 95.9462 112.133C87.0314 117.922 76.6291 121.002 65.9995 121Z" fill="black" fill-opacity="0.5" />
                        </svg>

                    </i>

                    <Typography
                        variant="D1"
                        className="font-normal"
                    >
                        {t("noCodePromoDescription")}
                    </Typography>

                    <Button variant="outline" className="border-1  mt-15 border-black border-solid p-6 w-[90%] cursor-pointer  rounded-full">
                        <Typography variant="p" className="text-black font-semibold">
                            {t('btnSeeBoutiqueCodePromo')}
                        </Typography>

                    </Button>
                </div>


                {/* WITH LIST COMMANDE */}
                <div className="tableList w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5  w-[100%]">
                        {/* Body CODE PROMO */}
                            {latestArticleList.map((item, index) => (
                                <div key={index}>
                                    <Card className="w-full p-8 border-2 border-dashed rounded-2 shadow-none">
                                        <CardContent className="relative flex px-0 flex-col gap-8 w-full">
                                          
                                            <div className="flex flex-row justify-start w-full text-left gap-2">
                                                <Typography variant="D1" className="text-[#000] font-medium">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="D1" className="font-light">
                                                    {item.date}
                                                </Typography>

                                            </div>
                                            <div className="flex flex-row w-full items-center justify-between text-left gap-2">
                                                <Typography variant="D1" className="text-[#000] text-3xl font-medium">
                                                    {item.description}
                                                </Typography>
                                                <i className="cursor-pointer">
                                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 12.75C4.5 9.215 4.5 7.44625 5.59875 6.34875C6.69625 5.25 8.465 5.25 12 5.25H15.75C19.285 5.25 21.0538 5.25 22.1513 6.34875C23.25 7.44625 23.25 9.215 23.25 12.75V19C23.25 22.535 23.25 24.3038 22.1513 25.4013C21.0538 26.5 19.285 26.5 15.75 26.5H12C8.465 26.5 6.69625 26.5 5.59875 25.4013C4.5 24.3038 4.5 22.535 4.5 19V12.75Z" stroke="black" stroke-opacity="0.5" stroke-width="1.25" />
                                                        <path d="M4.5 22.75C3.50544 22.75 2.55161 22.3549 1.84835 21.6517C1.14509 20.9484 0.75 19.9946 0.75 19V11.5C0.75 6.78625 0.75 4.42875 2.215 2.965C3.68 1.50125 6.03625 1.5 10.75 1.5H15.75C16.7446 1.5 17.6984 1.89509 18.4017 2.59835C19.1049 3.30161 19.5 4.25544 19.5 5.25" stroke="black" stroke-opacity="0.5" stroke-width="1.25" />
                                                    </svg>

                                                </i>

                                            </div>
                                            <div className="flex flex-row w-full items-center justify-between text-left gap-2">
                                                <Typography variant="D1" className="text-[#000] font-medium w-max">
                                                    {item.dateExpiration}
                                                </Typography>
                                                <Typography variant="D1" className="font-light w-max">
                                                    {item.date}
                                                </Typography>

                                            </div>


                                        </CardContent>
                                    </Card>
                                </div>
                            ))}


                        </div>
                    </div>
    

                            <Button variant="outline" className=" mt-15 border-0 border-solid bg-[var(--tertiary)] p-6 w-[30%] cursor-pointer  rounded-full">
                                <Typography variant="p" className="text-white font-semibold">
                                    {t('btnCommandeProductCodePromo')}
                                </Typography>

                            </Button>

            </div>
        </div>
    );
};

export default CodePromoBody;
