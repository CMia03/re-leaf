import { Typography } from "@/components/re-leaf/Typography"
import { Card, CardContent } from "@/components/ui/card"
import team1 from '../../../../public/images/about/t1.png'
import team2 from '../../../../public/images/about/t2.png'
import team3 from '../../../../public/images/about/t3.png'
import team4 from '../../../../public/images/about/t4.png'
import team5 from '../../../../public/images/about/t5.png'
import team6 from '../../../../public/images/about/t6.png'
import team7 from '../../../../public/images/about/t7.png'
import team8 from '../../../../public/images/about/t8.png'
import Image from "next/image"
import { useTranslations } from "next-intl"
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { MdFacebook } from "react-icons/md";

const Team = () => {
    const t = useTranslations("about.aboutTeam")
    const items = [
        { id: 1, image: team1, name:'Melisa Morgan' },
        { id: 2, image: team2, name: 'Ann Stanley' },
        { id: 3, image: team3, name: 'Dawid Santana' },
        { id: 4, image: team4, name: 'Carla Buck' },
        { id: 5, image: team5, name: 'Ariana Sharp' },
        { id: 6, image: team6, name: 'Melody Arnold' },
        { id: 7, image: team7, name: 'Arthur Powell' },
        { id: 8, image: team8, name: 'Kiera Wang' }
    ];
    return (
        <div className="w-full flex flex-col gap-[3.5em] pt-[50px]">
            <div className="flex flex-col items-center mx-auto my-0 w-[50%] gap-3">
                <Typography variant="h2" className="justify-center border-none text-center">{t('teamTitle').toUpperCase()}</Typography>
                <Typography variant="p" className="justify-center border-none text-center">{t('teamDescription')}</Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
                {items.map(({ id, image, name }) => (
                    <div key={id} className="  w-[18em]">
                    <Card className="shadow-none border border-none rounded-tl-[230px] h-[28em] rounded-b-none rounded-tr-[230px] p-0 overflow-hidden">
                        <CardContent className="relative w-full p-0 flex flex-col items-center text-center gap-4 h-full">
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={"image"}

                                    className="w-full h-full object-cover"
                                />

                                <div className=" absolute inset-0 flex flex-col justify-end  p-4">
                                    <div className="h-[max-content] px-[20px] py-[15px] flex flex-row justify-center gap-4">
                                        <MdFacebook size={35} color="var(--tertiary) " className="bg-white  rounded-full p-1 cursor-pointer hover:scale-[1.1] transition" />
                                        <IoLogoInstagram size={35} color="var(--tertiary)" className="bg-white  rounded-full p-1 cursor-pointer hover:scale-[1.1] transition" />
                                        <IoLogoLinkedin size={35} color="var(--tertiary)" className="bg-white rounded-full p-1 cursor-pointer hover:scale-[1.1] transition"  />
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                    </Card>
                        <Typography variant="p" className="justify-center border-none pt-5 text-center">{name}</Typography>
</div>
                ))}
            </div>
        </div>
    )
}
export default Team