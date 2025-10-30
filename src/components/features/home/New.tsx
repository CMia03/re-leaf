"use client"
import { Typography } from "@/components/re-leaf/Typography"
import { Card, CardContent } from "@/components/ui/card"
import flower1 from '../../../../public/images/flower1.jpg'
import flower2 from '../../../../public/images/flower2.jpg'
import flower3 from '../../../../public/images/flower3.jpg'
import flower4 from '../../../../public/images/flower4.png'
import Image from "next/image"
import { useTranslations } from "next-intl"
const New = () => {
    const t = useTranslations("home")
    const items = [
        { id: 1, image: flower1, label: t("flower1"), description: t("flowerOneDescription") },
        { id: 2, image: flower2, label: t("flower2"), description: t("flowerTwoDescription") },
        { id: 3, image: flower3, label: t("flower3"), description: t("flowerThreeDescription") },
        { id: 4, image: flower4, label: t("flower4"), description: t("flowerForDescription") },
    ];
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-5 sm:gap-12 lg:gap-[3.5em] pt-8 sm:pt-12 lg:pt-[50px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mx-auto my-0 w-max gap-2">
                <Typography variant="h2" className="justify-center border-none text-center text-xl sm:text-2xl lg:text-3xl xl:text-4xl">{t('new').toUpperCase()}</Typography>
                <Typography variant="p" className="justify-center border-none text-center text-sm sm:text-base lg:text-lg max-w-2xl">{t('newDescription')}</Typography>
            </div>
            {/* Mobile: 1 colonne (vertical), Desktop: 4 colonnes avec tailles initiales conservées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-[1em] justify-items-center items-stretch auto-rows-[1fr] w-full">
                {items.map(({ id, image, label, description }) => (
                    <Card key={id} className="shadow-none border border-none rounded-tl-[120px] sm:rounded-tl-[180px] lg:rounded-tl-[230px] h-[25em] sm:h-[30em] lg:h-[35em] rounded-b-none rounded-tr-[120px] sm:rounded-tr-[180px] lg:rounded-tr-[230px] p-0 overflow-hidden w-full h-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px]">
                        <CardContent className="relative w-full p-0 flex flex-col items-center text-center gap-4 h-full flex-1">
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={label}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 lg:p-4">
                                    <div className="bg-white h-[8em] sm:h-[10em] lg:h-[12em] px-3 sm:px-4 lg:px-[20px] py-2 sm:py-3 lg:py-[15px] flex flex-col justify-center gap-2 sm:gap-3 lg:gap-4">
                                        <Typography variant="h4" className="text-sm sm:text-base lg:text-[20px]">{label}</Typography>
                                        <Typography variant="p" className="text-xs sm:text-sm lg:text-[15px] break-words leading-snug clampDescription">{description}</Typography>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
export default New