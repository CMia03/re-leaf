"use client";

import Image from "next/image";

import logo5 from "../../../../public/images/logo/image copy 4.png";
import logo3 from "../../../../public/images/logo/image copy 5.png";
import logo4 from "../../../../public/images/logo/image copy 6.png";
import logo2 from "../../../../public/images/logo/image copy.png";
import logo from "../../../../public/images/logo/image.png";

// CAROUSEL

function HomeTestimonial() {
  return (
    <div className="pt-[50px]">
      {/* <section>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full my-0 mx-auto">
          <picture className="flex-1">
            <Image src={essentialOil} alt={"gg"} className="w-full h-full" />
          </picture>

          <section className="w-full h-full contentCarouselReleaf">
            <Carousel className="h-full" setApi={setApi}>
              <CarouselContent className="border h-full">
                {data.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full flex items-center justify-center"
                  >
                    <picture className="flex-1 h-full bg-[#6B4727] relative">
                      <div className="flex flex-col items-center justify-center gap-8 text-white h-full">
                        <Image src={user} alt={"gg"} width={80} height={80} />
                        <Typography
                          variant="h3"
                          className="text-[1.7em] w-100 font-semibold text-center"
                        >
                          {" "}
                          &quot;{t(
                            "descriptionTestimonialQuote"
                          ).toUpperCase()}{" "}
                          &quot;
                        </Typography>

                        <Typography variant="p">
                          {" "}
                          {t("nameTestimonialQuote")}{" "}
                        </Typography>
                      </div>
                      <Image
                        src={image}
                        className="absolute top-0 right-0"
                        alt={"gg"}
                        width={500}
                        height={500}
                      />
                    </picture>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {data.map((_: unknown, index: number) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300  ${
                      current === index
                        ? "bg-white hover:bg-white"
                        : "border-1 border-white  hover:bg-white/30"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            </Carousel>
          </section>
        </div>
      </section> */}

      {/* SECTION LOGO */}
      <section>
        <div className="flex flex-row justify-between py-[50px]">
          <Image src={logo} alt={"gg"} width={150} height={150} />
          <Image src={logo2} alt={"gg"} width={150} height={150} />
          <Image src={logo3} alt={"gg"} width={150} height={150} />
          <Image src={logo4} alt={"gg"} width={150} height={150} />
          <Image src={logo5} alt={"gg"} width={150} height={150} />
        </div>
      </section>
    </div>
  );
}

export default HomeTestimonial;
