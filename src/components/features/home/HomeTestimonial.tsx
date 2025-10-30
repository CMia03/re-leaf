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
    <div className="pt-8 sm:pt-12 lg:pt-[50px] px-4 sm:px-6 lg:px-0">
      {/* SECTION LOGO */}
      <section>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 lg:py-[50px]">
          <Image src={logo} alt={"logo"} width={150} height={150} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32" />
          <Image src={logo2} alt={"logo"} width={150} height={150} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32" />
          <Image src={logo3} alt={"logo"} width={150} height={150} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32" />
          <Image src={logo4} alt={"logo"} width={150} height={150} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32" />
          <Image src={logo5} alt={"logo"} width={150} height={150} className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32" />
        </div>
      </section>
    </div>
  );
}

export default HomeTestimonial;
