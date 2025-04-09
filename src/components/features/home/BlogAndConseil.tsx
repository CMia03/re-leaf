import React from 'react'
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

import blog1 from '../../../../public/images/blog/blog1.png'
import blog2 from '../../../../public/images/blog/blog2.png'
import flowerAbs from '../../../../public/images/flowerAbsoluteBlog.png'
// import image2 from '../../../../public/images/engagements/image2.png'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";


function BlogAndConseil() {
  const t = useTranslations("home");
  const translate = useTranslations("home.blog&adviceCard")
  

  const data = [
    {
      image: blog1,
      dateNumber: "15",
      month: translate('month').toUpperCase(),
      description: translate('description1'),
      title: translate('title1').toUpperCase(),
      loremDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
    },
    {
      image: blog2,
      dateNumber: "28",
      month: translate('month2').toUpperCase(),
      description: translate('description2'),
      title: translate('title2').toUpperCase(),
      loremDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis'
    },

  ]
  return (
    <div className='relative w-full pt-[50px]'>
      <section>
        <div className="flex flex-row justify-between items-center mt-10 mx-5">
          <Typography variant="h2" className="justify-center border-none rounded-none text-center">{t('blog&advice').toUpperCase()} </Typography>
          <Button variant="outline" className="border-1 border-black border-solid p-6 w-max cursor-pointer  rounded-full">
            <Typography variant="p" className="text-black ps-6">
              {t('seeAllArticle')}
            </Typography>

            <ChevronRight className='scale-[1.2] me-6'/>
          </Button>
        </div>
      </section>

      {/* SECTION ARTICLE */}
      <section>
        <div className="flex flex-row justify-between items-center">

          {data.map((item, index) => (
            <div key={index} className='bg-red-700 flex-1'>
              <Card className="w-full mx-auto border-none rounded-none shadow-none">
                <CardContent className="relative flex flex-col items-center text-center gap-4 p-6">
                  <Image
                    src={item.image}
                    alt={item.title}

                    className="w-full h-full rounded-none"
                  />
                  <div className="flex flex-col items-start text-left gap-5 mt-4">
                    <Typography variant="p" className="text-gray-600 text-md font-500">{item.description}</Typography>
                    <Typography variant="h2" className="font-semibold" style={{ lineHeight: '1.4em'}}>{item.title}</Typography>
                    <Typography variant="D1" className=" text-md font-normal">{item.loremDesc}</Typography>
                    <Button className="p-5.5 px-8 rounded-full mt-4 cursor-pointer">
                      {t('seeMore')}
              
                    </Button>
                  </div>

                  {/* DATE */}
                  <div className='absolute top-0 right-0 mr-11 mt-11 rounded-tl-[230px] h-[7em] w-[5em] bg-[#B6C335] rounded-b-none rounded-tr-[230px] flex flex-col gap-0 justify-center items-center p-3'>
                    <Typography variant="h1" className="text-white text-md font-500">{item.dateNumber}</Typography>
                    <Typography variant="p" className="text-white text-md font-500">{item.month}</Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

      </section>
      
      <Image
        src={flowerAbs}
        alt={'flower'}

        className="absolute bottom-0 right-0 object-contain w-[8em] h-[16em] mb-[-5em]"
      />
    </div>
  )
}

export default BlogAndConseil