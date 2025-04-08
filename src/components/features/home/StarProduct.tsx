import { Typography } from "@/components/re-leaf/Typography"
import { useTranslations } from "next-intl"
import vanille from '../../../../public/images/spice/Vanille.jpg' 
import sirop from '../../../../public/images/spice/sirop.png'
import epices from '../../../../public/images/spice/epices.jpg'
import coco from '../../../../public/images/spice/cacao.png'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const StarProduct = () =>{
    const t = useTranslations("home");
    const items = [
        { id: 1, image: vanille, label: t("vanille"), description: t("vanilleDescription")},
        { id: 2, image: sirop, label: t("oilEssential"), description:  t("oilDescription")},
        { id: 3, image: epices, label: t("poivre"), description:  t("poivreDescription") },
        { id: 4, image: coco, label: t("cacao"), description:  t("cacaoDescription")},
      ];
    return(
     <div className="p-[100px]">
        <Typography variant="h2" className="justify-center border-none text-center">{t('startProduct').toUpperCase()}</Typography>
        <Typography variant="p" className="justify-center border-none text-center mt-3">{t('startProductDescription')}</Typography>
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
export default StarProduct