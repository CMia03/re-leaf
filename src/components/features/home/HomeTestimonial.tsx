import React from 'react'
import Image from "next/image"
import essentialOil from "../../../../public/images/testimonial/bg-testmonial.png";
import image from "../../../../public/images/testimonial/image.png";
import logo from "../../../../public/images/logo/image.png";
import logo2 from "../../../../public/images/logo/image copy.png";
import logo3 from "../../../../public/images/logo/image copy 5.png";
import logo5 from "../../../../public/images/logo/image copy 4.png";
import logo4 from "../../../../public/images/logo/image copy 6.png";
import user from "../../../../public/images/testimonial/userprofile.png";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";


function HomeTestimonial() {
        const t = useTranslations("home");
    
    return (
        <div className='pt-[50px]'>
            <section>
                <div className='flex flex-row justify-between w-[97%] my-0 mx-auto'>
                    <picture className='flex-1'>
                        <Image src={essentialOil} alt={'gg'} className='w-full h-full' />

                    </picture>
                    <picture className='flex-1 bg-[#6B4727] relative'>
                        <div className='flex flex-col items-center justify-center gap-8 text-white h-full'>
                            <Image src={user} alt={'gg'} width={80} height={80} />
                            <Typography variant="h3" className='text-[1.7em] w-100 font-semibold text-center'>                  &quot;{t('descriptionTestimonialQuote').toUpperCase()} &quot;
                            </Typography>

                            
                            <Typography variant="p">  {t('nameTestimonialQuote')}  </Typography>
                        </div>
                        <Image src={image} className='absolute top-0 right-0' alt={'gg'} width={500} height={500} />

                    </picture>
                </div>
            </section>

            {/* SECTION LOGO */}
            <section>
                <div className='flex flex-row justify-between py-[50px]'>
                    <Image src={logo} alt={'gg'} width={150} height={150} />
                    <Image src={logo2} alt={'gg'} width={150} height={150} />
                    <Image src={logo3} alt={'gg'} width={150} height={150} />
                    <Image src={logo4} alt={'gg'} width={150} height={150} />
                    <Image src={logo5} alt={'gg'} width={150} height={150} />

                </div>
            </section>
        </div>
    )
}

export default HomeTestimonial