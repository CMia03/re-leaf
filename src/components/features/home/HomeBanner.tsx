"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import banner1 from "../../../../public/images/Banniere.png";
import banner2 from "../../../../public/images/Banniere2.png";
import flowerBanner1 from "../../../../public/images/flowerBanner1.png";
import flowerBanner2 from "../../../../public/images/flowerBanner2.png";
import imgAbsolute from "../../../../public/images/spice/imgAbsolute.png";
import pdc from "../../../../public/images/pdc.jpg";
import { Typography } from "@/components/re-leaf/Typography";


const HomeBanner = () => {
  const t = useTranslations("home")

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const data = [
    {
      image1: pdc,
    },
    {
      image2: banner1,
    },
    {
      image3: banner2,
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div>
      <Carousel className="w-full lg:h-full relative" setApi={setApi}>
        <CarouselContent className="border h-[18.75em] lg:h-[calc(80vh-8.5em)]">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="h-full flex items-center justify-center relative"
            >

              <div className="w-full h-full flex items-center justify-center relative">
                <div className="text-white absolute top-0 left-0 h-full w-full flex items-center justify-center">
                  <Typography variant="h2" className="text-white font-normal  h-full w-[60%] text-center mx-auto my-0 flex items-center justify-center">{t('homeBannerDescription')}</Typography>
                </div>


                <Image
                  src={Object.values(item)[0]}
                  width={1141}
                  height={600}
                  alt=""
                  className="w-full h-full object-cover"
                  priority
                />

              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* btn prev */}
        <i onClick={() => api?.scrollPrev()} className="absolute cursor-pointer left-[20px] lg:left-[50px] top-1/2 translate-y-[-50%]">
          <svg width="49" height="49" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="29.5" transform="matrix(-1 0 0 1 60 0)" stroke="white" />
            <path d="M35 20C35 20 25 27.365 25 30C25 32.635 35 40 35 40" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </i>
        {/* <CarouselPrevious className="bg-white absolute left-[20px] top-1/2 translate-y-[-50%] w-[48px] h-[48px] p-[8px] hover:text-oceanBlue transition-all duration-300  hover:bg-white border border-grey lg:left-[50px] lg:hover:bg-cardServiceBgLight " /> */}
        <CarouselNext className="bg-white absolute right-[20px] top-1/2 translate-y-[-50%] w-[48px] h-[48px] p-[8px] hover:text-oceanBlue transition-all duration-300 hover:bg-white lg:right-[50px] lg:hover:bg-cardServiceBgLight" />
        {/* <CarouselNext className="absolute right-[20px] lg:right-[50px] top-1/2 translate-y-[-50%] p-0 bg-transparent border-0 hover:bg-transparent w-[49px] h-[49px]">
          <svg
            width="49"
            height="49"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-full transition-opacity duration-300 group-disabled:opacity-50 group-disabled:pointer-events-none"
          >
            <circle
              cx="30"
              cy="30"
              r="29.5"
              transform="matrix(-1 0 0 1 60 0)"
              stroke="white"
            />
            <path
              d="M35 20C35 20 25 27.365 25 30C25 32.635 35 40 35 40"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CarouselNext> */}

        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_: unknown, index: number) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-white ${current === index ? "bg-white" : "bg-white/30"
                }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <Image
          src={imgAbsolute}
          width={250}
          height={250}
          alt=""
          className="absolute bottom-0 left-20 mb-[-3.5em]"
          priority
        />
        <Image
          src={flowerBanner1}
          width={750}
          height={800}
          alt=""
          className="absolute top-0 left-0 pointer-events-none"
          priority
        />
        <Image
          src={flowerBanner2}
          width={450}
          height={500}
          alt=""
          className="absolute max-w-max max-h-max bottom-0 right-0 pointer-events-none"
          priority
        />
      </Carousel>{" "}
    </div>
  );
};

export default HomeBanner;
