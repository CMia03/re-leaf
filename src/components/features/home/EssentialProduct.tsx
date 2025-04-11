"use client";

import React from 'react'
// import imageEssentiel1 from "../../../../public/images/essentialProduct/essentiel1.png";
import Image from "next/image"


// CAROUSEL
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import essentialOil from "../../../../public/images/essentialProduct/essentialprim.png";
// import authenticSavior from "../../../../public/images/spice/authenticSavior.png";
// import spices from "../../../../public/images/spice/spices.png";

// CARD
import essential from "../../../../public/images/essentialProduct/essentiel1.png";
import essential1 from "../../../../public/images/essentialProduct/image copy 2.png";
import essential2 from "../../../../public/images/essentialProduct/image copy.png";
import essential3 from "../../../../public/images/essentialProduct/image.png";
import { ChevronRight } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/re-leaf/Typography";
import { useTranslations } from "next-intl";

function EssentialProduct() {
  const t = useTranslations("home");

  const items = [
    { id: 1, image: essential3, label: 'Produit 1', description: '20€' },
    { id: 2, image: essential2, label: 'Produit 2', description: '20€' },
    { id: 3, image: essential, label: 'Produit 3', description: '20€' },
    { id: 4, image: essential1, label: 'Produit 4', description: '20€' },
  ];
  // CAROUSEL

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const data = [
    {
      image1: essentialOil,
      label: "essentialOil"
    },
    {
      image1: essentialOil,
      label: "essentialOil"
    },
    {
      image1: essentialOil,
      label: "essentialOil"
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

      <main className='w-full mx-auto my-0 pt-[50px]'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  justify-between">
          {/* SECTION CAROUSEL */}
          <section className="w-full h-full contentCarouselReleaf">
            <Carousel className="h-full" setApi={setApi}>
              <CarouselContent className="border h-full">
                {data.map(({ label }, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full flex items-center justify-center"
                  >

                    <Card className="border-none h-full  nth-[1]:bg-green-light nth-[2]:bg-[var(--tertiary)]  nth-[3]:bg-[var(--quatro)] w-full rounded-none">
                      <CardContent className="flex flex-col justify-center items-center h-full text-center gap-7 pt-2 pb-2 relative">
                        <Typography variant="p" className="text-white text-[30px]">
                          {t(label)}
                        </Typography>
                        {data[index].image1 && <Image src={data[index].image1} alt={t(label)} width={307} height={373} className="rounded-tl-[230px] rounded-b-none rounded-tr-[230px]" />}

                        <Button variant="outline" className="p-6 w-max cursor-pointer rounded-full">
                          <Typography variant="p" className="text-green-light font-semibold ps-6">
                            {t('seeAllButtonPepper&Berries')}
                          </Typography>

                          <ChevronRight className='scale-[1.2] me-6 text-green-light' />
                        </Button>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <i onClick={() => api?.scrollPrev()}  className='absolute left-[20px] top-1/2 translate-y-[-50%] lg:left-[50px] cursor-pointer'>
                <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 1C16.5 1 1.5 12.0475 1.5 16C1.5 19.9525 16.5 31 16.5 31" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </i>
              {/* <CarouselPrevious className="bg-white absolute left-[20px] top-1/2 translate-y-[-50%] w-[48px] h-[48px] p-[8px] hover:text-oceanBlue tra nsition-all duration-300  hover:bg-white border border-grey lg:left-[50px] " /> */}

              {/* <CarouselNext className="bg-white absolute right-[20px] top-1/2 translate-y-[-50%] w-[48px] h-[48px] p-[8px] hover:text-oceanBlue transition-all duration-300 hover:bg-white lg:right-[50px] lg:hover:bg-cardServiceBgLight" /> */}
              <i onClick={() => api?.scrollNext()} className=' absolute right-[20px] top-1/2 translate-y-[-50%] lg:right-[50px] cursor-pointer'>
                <svg width="18" height="32" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 1C1.5 1 16.5 12.0475 16.5 16C16.5 19.9525 1.5 31 1.5 31" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </i>
              <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {data.map((_: unknown, index: number) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300  ${current === index ? "bg-white hover:bg-white" : "border-1 border-white  hover:bg-white/30"
                      }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            </Carousel>
          </section>


          {/* SECTION GRID PRODUCT */}
          <section className='w-[100%] h-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-full'>
              {items.map(({ id, image, label, description }) => (
                <div key={id} className='h-full'>
                  <figure className="figureProduct h-full min-h-full bg-[#F8F8F8] relative">
                    <div className="flex flex-col w-full h-full">
                      {/* favoris */}
                      <i className="absolute top-0 right-0 m-2 cursor-pointer">
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 47 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="23.7038" cy="24.165" r="23.2173" fill="white" />
                          <path
                            d="M25.2459 17.2449C26.5729 16.2482 28.7823 15.6234 31.3136 17.176C34.6348 19.2146 35.386 25.9344 27.7243 31.6056C26.2652 32.6853 25.5357 33.2251 24.2701 33.2251C23.0044 33.2251 22.2749 32.6853 20.8158 31.6056C13.1541 25.9344 13.9053 19.2127 17.2265 17.176C19.7578 15.6244 21.9672 16.2482 23.2942 17.2449L23.3005 17.2496C23.8399 17.6551 24.1102 17.8583 24.2701 17.8583C24.4299 17.8583 24.7002 17.6551 25.2396 17.2496L25.2459 17.2449Z"
                            stroke="black"
                            strokeWidth="2.2651"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </i>
                      <picture className='h-full'>
                        <Image
                          src={image}
                          alt={"ted"}
                          className='w-full h-full object-contain'

                        />
                      </picture>
                      <figcaption className="flex flex-row justify-between items-center h-max p-4">
                        <div className="flex flex-col">
                          <Typography variant="p">

                            {label}
                          </Typography>
                          <Typography variant="D1" className="text-[#6B4727] font-semibold">

                            {description}

                          </Typography>
                        </div>
                        <div>
                          <i className='cursor-pointer'>
                            <svg
                              width="46"
                              height="46"
                              viewBox="0 0 62 62"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="31.0772" cy="30.8455" r="30.5789" fill="#6B4727" />
                              <path
                                d="M41.0814 24.9276C41.9166 24.9429 42.3826 25.0184 42.6528 25.3901C42.9914 25.8561 42.851 26.5556 42.569 27.956C41.5922 32.8047 40.7876 36.1316 35.4929 36.1316H26.9245L23.8324 21.4025C23.7048 20.8921 23.4102 20.4389 22.9956 20.1151C22.5809 19.7913 22.0698 19.6153 21.5437 19.6152H20.4359M28.1042 24.9241H37.5421M32.8232 29.643V20.2051M27.9627 36.1316H27.4778C25.8686 36.1316 24.565 37.4895 24.565 39.1647C24.5636 39.2298 24.575 39.2945 24.5986 39.3551C24.6222 39.4158 24.6576 39.4712 24.7026 39.5182C24.7476 39.5652 24.8015 39.6029 24.8611 39.6291C24.9206 39.6552 24.9848 39.6694 25.0499 39.6708H38.132"
                                stroke="white"
                                strokeWidth="1.76961"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M29.8739 43.2096C30.8512 43.2096 31.6435 42.4173 31.6435 41.44C31.6435 40.4627 30.8512 39.6704 29.8739 39.6704C28.8965 39.6704 28.1042 40.4627 28.1042 41.44C28.1042 42.4173 28.8965 43.2096 29.8739 43.2096Z"
                                stroke="white"
                                strokeWidth="1.76961"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M38.132 43.2096C39.1094 43.2096 39.9016 42.4173 39.9016 41.44C39.9016 40.4627 39.1094 39.6704 38.132 39.6704C37.1547 39.6704 36.3624 40.4627 36.3624 41.44C36.3624 42.4173 37.1547 43.2096 38.132 43.2096Z"
                                stroke="white"
                                strokeWidth="1.76961"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </i>
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                </div>

              ))}

            </div>
          </section>
        </div>
      </main>

    </div>
  )
}

export default EssentialProduct