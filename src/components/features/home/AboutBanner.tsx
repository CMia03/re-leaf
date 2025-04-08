
import AboutPdc from '../../../../public/images/A Propos.png'
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button"


import Image from 'next/image'
const AboutBannerHome = () => {
    return (
        <div className='relative'>
            <Image src={AboutPdc} alt="" width={1500} height={200} className='h-[70%] w-full' />
            <div className='absolute top-0 left-0 right-0 bottom-0 w-[70%] flex flex-col gap-3 p-5 items-start justify-center text-left'>
                <Typography variant="p" className="text-white ">
                    A Propos
                </Typography>
                <Typography variant="h1" className="text-white font-normal ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>
                <Button className="p-5.5 px-8 rounded-full text-black bg-white mt-4">

                    Voir  plus

                </Button>
            </div>
        </div>
    )
}

export default AboutBannerHome