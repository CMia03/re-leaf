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
import { useEffect, useState } from "react";
import banner1 from "../../../../public/images/Banniere.png";
import banner2 from "../../../../public/images/Banniere2.png";
import pdc from "../../../../public/images/pdc.jpg";

const HomeBanner = () => {
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
      <Carousel className="w-full lg:h-full" setApi={setApi}>
        <CarouselContent className="border h-[300px] lg:h-[calc(80vh-200px)]">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="h-full flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center">
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
      </Carousel>{" "}
    </div>
  );
};

export default HomeBanner;
