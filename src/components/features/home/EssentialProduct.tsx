"use client";

import React from 'react'
import imageEssentiel1 from "../../../../public/images/essentialProduct/essentiel1.png";
import Image from "next/image"
import vanille from '../../../../public/images/spice/Vanille.jpg' 
import sirop from '../../../../public/images/spice/sirop.png'
import epices from '../../../../public/images/spice/epices.jpg'
import coco from '../../../../public/images/spice/cacao.png'

// CAROUSEL
import {
  Carousel,
  CarouselAp,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import banner1 from "../../../../public/images/Banniere.png";
import banner2 from "../../../../public/images/Banniere2.png";
import pdc from "../../../../public/images/pdc.jpg";

// CARD
import essentialOil from "../../../../public/images/spice/essentialOil.png";
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/re-leaf/Typography";

function EssentialProduct() {
     const items = [
        { id: 1, image: vanille, label: 'nhfjdfh', description: 'nhfjdfh'},
        { id: 2, image: sirop, label: 'nhfjdfh', description:  'nhfjdfh'},
        { id: 3, image: epices, label: 'nhfjdfh', description:  'nhfjdfh' },
        { id: 4, image: coco, label: 'nhfjdfh', description:  'nhfjdfh'},
    ];
    // CAROUSEL

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
          
            <main>
              <div className="flex flex-row gap-1 justify-between bg-red-700">
                 {/* SECTION CAROUSEL */}
                  <section className="w-[50%]">
                         <Carousel className="w-[full] lg:h-full" setApi={setApi}>
        <CarouselContent className="border h-[300px] lg:h-[calc(80vh-200px)]">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="h-full flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center">

     

                          <Card className="border-none bg-green-light w-[100%] h-[100%] rounded-none">
          <CardContent className="flex flex-col items-center text-center gap-4 p-6">
            <Typography variant="p" className="text-white text-[30px]">
              {'Huiles essentielles'}
            </Typography>
            <Image src={essentialOil} alt='gg' width={307} height={373} />
                              <Button variant="outline">
            <Typography variant="p" className="text-white">

                                  Voir tout les poivres & baies
            </Typography>

      <ChevronRight />
    </Button>
          </CardContent>
          </Card>
    
     
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-white absolute left-[20px] top-1/2 translate-y-[-50%] w-[48px] h-[48px] p-[8px] hover:text-oceanBlue transition-all duration-300  hover:bg-white border border-grey lg:left-[50px] lg:hover:bg-cardServiceBgLight " />
        <CarouselNext className="bg-white absolute right-[20px] top-1/2 translate-y-[-50%] w-[48px] h-[48px] p-[8px] hover:text-oceanBlue transition-all duration-300 hover:bg-white lg:right-[50px] lg:hover:bg-cardServiceBgLight" />

        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_: unknown, index: number) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-white ${
                current === index ? "bg-white" : "bg-white/30"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
                  </section>


                  {/* SECTION GRID PRODUCT */}
                  <section className='w-[50%] h-full'>
                      <div className='flex flex-row gap-1 flex-wrap'>
                          {items.map(({ id }) => (
                              <div key={id} className="h-full">
                                  <figure  className='figureProduct bg-[#F8F8F8] h-full flex-[1 50%] relative m-2'>
                              <div className="flex flex-col">
                                  {/* favoris */}
                                  <i className='absolute top-0 right-0'>
                                      <svg width="40" height="40" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23.7038" cy="24.165" r="23.2173" fill="white"/>
<path d="M25.2459 17.2449C26.5729 16.2482 28.7823 15.6234 31.3136 17.176C34.6348 19.2146 35.386 25.9344 27.7243 31.6056C26.2652 32.6853 25.5357 33.2251 24.2701 33.2251C23.0044 33.2251 22.2749 32.6853 20.8158 31.6056C13.1541 25.9344 13.9053 19.2127 17.2265 17.176C19.7578 15.6244 21.9672 16.2482 23.2942 17.2449L23.3005 17.2496C23.8399 17.6551 24.1102 17.8583 24.2701 17.8583C24.4299 17.8583 24.7002 17.6551 25.2396 17.2496L25.2459 17.2449Z" stroke="black" stroke-width="2.2651" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                  </i>
                                  <picture>
                                      <Image
                                                            src={imageEssentiel1}
                                                            alt={'ted'}
                                                            width={250}
                                                            height={250}
                                                            className=""
                                                            />
                                  </picture>
                                  <figcaption className="flex flex-row justify-between items-center p-4">
                                      <div className="flex flex-col">
                                          <h2>Produit 3</h2>
                                          <p>20€</p>
                                      </div>
                                      <div>
                                          <i>
                                              <svg width="46" height="46" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="31.0772" cy="30.8455" r="30.5789" fill="#6B4727"/>
<path d="M41.0814 24.9276C41.9166 24.9429 42.3826 25.0184 42.6528 25.3901C42.9914 25.8561 42.851 26.5556 42.569 27.956C41.5922 32.8047 40.7876 36.1316 35.4929 36.1316H26.9245L23.8324 21.4025C23.7048 20.8921 23.4102 20.4389 22.9956 20.1151C22.5809 19.7913 22.0698 19.6153 21.5437 19.6152H20.4359M28.1042 24.9241H37.5421M32.8232 29.643V20.2051M27.9627 36.1316H27.4778C25.8686 36.1316 24.565 37.4895 24.565 39.1647C24.5636 39.2298 24.575 39.2945 24.5986 39.3551C24.6222 39.4158 24.6576 39.4712 24.7026 39.5182C24.7476 39.5652 24.8015 39.6029 24.8611 39.6291C24.9206 39.6552 24.9848 39.6694 25.0499 39.6708H38.132" stroke="white" stroke-width="1.76961" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.8739 43.2096C30.8512 43.2096 31.6435 42.4173 31.6435 41.44C31.6435 40.4627 30.8512 39.6704 29.8739 39.6704C28.8965 39.6704 28.1042 40.4627 28.1042 41.44C28.1042 42.4173 28.8965 43.2096 29.8739 43.2096Z" stroke="white" stroke-width="1.76961" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.132 43.2096C39.1094 43.2096 39.9016 42.4173 39.9016 41.44C39.9016 40.4627 39.1094 39.6704 38.132 39.6704C37.1547 39.6704 36.3624 40.4627 36.3624 41.44C36.3624 42.4173 37.1547 43.2096 38.132 43.2096Z" stroke="white" stroke-width="1.76961" stroke-linecap="round" stroke-linejoin="round"/>
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