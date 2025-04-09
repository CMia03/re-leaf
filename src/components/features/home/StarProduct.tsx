import { Typography } from "@/components/re-leaf/Typography"
import { useTranslations } from "next-intl"
import vanille from '../../../../public/images/spice/Vanille.jpg'
import sirop from '../../../../public/images/spice/sirop.png'
import epices from '../../../../public/images/spice/epices.jpg'
import coco from '../../../../public/images/spice/cacao.png'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const StarProduct = () => {
    const t = useTranslations("home");
    const items = [
        { id: 1, image: vanille, label: t("vanille"), description: t("vanilleDescription") },
        { id: 2, image: sirop, label: t("oilEssential"), description: t("oilDescription") },
        { id: 3, image: epices, label: t("poivre"), description: t("poivreDescription") },
        { id: 4, image: coco, label: t("cacao"), description: t("cacaoDescription") },
    ];
    return (
        <div className="w-full flex flex-col gap-[3.5em]  pt-[50px]">
            <div className="flex flex-col items-center mx-auto my-0 w-max gap-0">
                <Typography variant="h2" className="border-none text-center">{t('startProduct').toUpperCase()}</Typography>
                <Typography variant="p" className="border-none text-center">{t('startProductDescription')}</Typography>
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
export default StarProduct