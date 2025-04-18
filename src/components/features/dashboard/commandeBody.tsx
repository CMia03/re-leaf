import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button"



const CommandeBody = () => {
    const t = useTranslations("commande");
    // const ts = useTranslations("home");

    return (
        <div className="flex flex-col items-center gap-10 my-5">
            <div className="flex flex-col items-center gap-3">
                <Typography
                    variant="h2"
                    className="font-medium"
                >
                    {t("commandeTitle")}
                </Typography>

                <Typography
                    variant="D1"
                    className="font-medium"
                >
                    {t("commandeDescription")}
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
                        {t("noCommandeDescription")}
                    </Typography>

                    <Button variant="outline" className="border-1  mt-15 border-black border-solid p-6 w-[90%] cursor-pointer  rounded-full">
                        <Typography variant="p" className="text-black font-semibold">
                            {t('btnReadytoCommande')}
                        </Typography>

                    </Button>
                </div>


                {/* WITH LIST COMMANDE */}
                <div className="tableList w-full hidden">
                    <div className="flex flex-col items-center w-full">
                        {/* LIST TABLE */}
                        <div className="thead border-b-[#00000033] border-b-1 border-b-solid p-4 grid grid-cols-1 md:grid-cols-5 w-[90%]">
                            {/* thead */}
                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="font-medium"
                                >
                                    Commande
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="font-medium"
                                >
                                    Date
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="font-medium"
                                >
                                    État
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="font-medium"
                                >
                                    Total
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography
                                    variant="h6"
                                    className="font-medium"
                                >
                                    Action
                                </Typography>
                            </div>
                        </div>

                        {/* tbody */}

                        <div className="tbody border-b-[#00000033] border-b-1 border-b-solid p-4 items-center grid grid-cols-1 md:grid-cols-5 w-[90%]">
                            <div className="tr">
                                <Typography
                                    variant="D1"
                                    className="font-bold"
                                >
                                    N° 4512
                                </Typography>
                            </div>
                            <div className="tr">
                                <Typography
                                    variant="D1"
                                    className="font-medium"
                                >
                                    15 Mars 2025
                                </Typography>
                            </div>
                            <div className="tr">
                                <Button variant="outline" className="border-0 border-solid flex flex-row items-center text-sm p-4 w-[max-content] bg-[#6B472785] cursor-pointer  rounded-full">
                                    <i>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.99935 18.3334C14.6018 18.3334 18.3327 14.6026 18.3327 10.0001C18.3327 5.39758 14.6018 1.66675 9.99935 1.66675C5.39685 1.66675 1.66602 5.39758 1.66602 10.0001C1.66602 14.6026 5.39685 18.3334 9.99935 18.3334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.0059 8.75683C9.67434 8.75683 9.3564 8.88853 9.12198 9.12295C8.88756 9.35737 8.75586 9.67531 8.75586 10.0068C8.75586 10.3384 8.88756 10.6563 9.12198 10.8907C9.3564 11.1251 9.67434 11.2568 10.0059 11.2568C10.3374 11.2568 10.6553 11.1251 10.8897 10.8907C11.1242 10.6563 11.2559 10.3384 11.2559 10.0068C11.2559 9.67531 11.1242 9.35737 10.8897 9.12295C10.6553 8.88853 10.3374 8.75683 10.0059 8.75683ZM10.0059 8.75683V5.8335M12.5117 12.5168L10.8875 10.8935" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </i>
                                    <Typography variant="p" className="text-white text-sm font-semibold">
                                        En attente
                                    </Typography>
                                </Button>
                                <Button variant="outline" className="none border-0 border-solid flex flex-row items-center text-sm p-4 w-[max-content] bg-[#B6C335] cursor-pointer  rounded-full">
                                    <i>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.3327 10.0001C18.3327 5.39758 14.6018 1.66675 9.99935 1.66675C5.39685 1.66675 1.66602 5.39758 1.66602 10.0001C1.66602 14.6026 5.39685 18.3334 9.99935 18.3334C14.6018 18.3334 18.3327 14.6026 18.3327 10.0001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.66602 10.4167L8.74935 12.5L13.3327 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </i>
                                    <Typography variant="p" className="text-white text-sm font-semibold">
                                        Terminé
                                    </Typography>
                                </Button>
                            </div>
                            <div className="tr">
                                <Typography
                                    variant="D1"
                                    className="font-bold"
                                >
                                    220€ <span className="font-normal">pour 2 articles</span>
                                </Typography>
                            </div>
                            <div className="tr">
                                <Button variant="outline" className="none border-0 border-solid flex flex-row items-center text-sm p-4 w-[max-content] bg-[#000000] cursor-pointer  rounded-full">
                                   
                                    <Typography variant="p" className="text-white text-sm font-semibold">
                                        Voir plus
                                    </Typography>
                                </Button>
                            </div>

                        </div>

                        <Button variant="outline" className="border-1  mt-15 border-black border-solid p-6 w-[30%] cursor-pointer  rounded-full">
                            <Typography variant="p" className="text-black font-semibold">
                                Commander d’autres produits
                            </Typography>

                        </Button>
        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommandeBody;
