
import AboutPdc from '../../../../public/images/A Propos.png'
import Image from 'next/image'
const AboutBannerHome = ()=>{
    return( 
        <div className=''>
           <Image src={AboutPdc} alt="" width={1500} height={200} className='h-[70%] w-full' />

        </div>
    )
}

export default AboutBannerHome