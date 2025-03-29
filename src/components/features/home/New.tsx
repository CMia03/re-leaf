import { Typography } from "@/components/re-leaf/Typography"
import { Card, CardContent } from "@/components/ui/card"
import flower1 from '../../../../public/images/flower1.jpg'
import flower2 from '../../../../public/images/flower2.jpg'
import flower3 from '../../../../public/images/flower3.jpg'
import flower4 from '../../../../public/images/flower4.png'
import Image from "next/image"
import { useTranslations } from "next-intl"
const New = () =>{
    const t = useTranslations("home")
    const items = [
        { id: 1, image: flower1, label: t("flower1"), description: t("flowerOneDescription")},
        { id: 2, image: flower2, label: t("flower2"), description:  t("flowerTwoDescription")},
        { id: 3, image: flower3, label: t("flower3"), description:  t("flowerThreeDescription") },
        { id: 4, image: flower4, label: t("flower4"), description:  t("flowerForDescription")},
      ];
    return(
        <div className="p-[100px]">
        <Typography variant="h2" className="justify-center border-none text-center">{t('new').toUpperCase()}</Typography>
        <Typography variant="p" className="justify-center border-none text-center">{t('newDescription')}</Typography>
        <div className="flex gap-[20px] justify-center">
            {items.map(({ id, image, label, description }) => (
                <Card key={id} className="shadow-none border border-none  w-[400px] rounded-none">
                    <CardContent className="relative flex flex-col items-center text-center gap-4 p-6">
                    <div className="relative">
                        <Image
                        src={image}
                        alt={label}
                        width={310}
                        height={570}
                        className="rounded-tl-[230px] rounded-tr-[230px] h-[510px]"
                        />

                        <div className=" absolute inset-0 flex flex-col justify-end  p-4">
                            <div className="bg-white h-[155px] px-[20px] py-[15px] flex flex-col justify-center gap-2">
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