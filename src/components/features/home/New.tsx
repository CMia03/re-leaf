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
        <div className="w-full flex flex-col gap-[3.5em] pt-[50px]">
            <div className="flex flex-col items-center mx-auto my-0 w-max gap-0">
                <Typography variant="h2" className="justify-center border-none text-center">{t('new').toUpperCase()}</Typography>
                <Typography variant="p" className="justify-center border-none text-center">{t('newDescription')}</Typography>
            </div>
            <div className="flex flex-row gap-[1em] justify-evenly">
                {items.map(({ id, image, label, description }) => (
                    <Card key={id} className="shadow-none border border-none rounded-tl-[230px] h-[35em] rounded-b-none rounded-tr-[230px] p-0 overflow-hidden  w-[400px]">
                        <CardContent className="relative w-full p-0 flex flex-col items-center text-center gap-4 h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={label}
                                   
                                    className="w-full h-full object-cover"
                                />

                                <div className=" absolute inset-0 flex flex-col justify-end  p-4">
                                    <div className="bg-white h-[12em] px-[20px] py-[15px] flex flex-col justify-center gap-4">
                                        <Typography variant="h4" className="text-[20px]">{label}</Typography>
                                        <Typography variant="p" className="text-[15px]">{description}</Typography>
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