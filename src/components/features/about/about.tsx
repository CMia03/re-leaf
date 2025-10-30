"use client"
import BreadcrumbHeader from "../BreadcrumbHeader";
import HomeVideo from "../home/HomeVideo";
import ImageAboutBody from "./imageAboutBody";
import Pourcentage from "./pourcentage";
import QuoteAboutBody from "./quoteAboutBody";
import Team from "./team";
import TextAboutBody from "./TextAboutBody";

const AboutComponent = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mb-6 px-4 sm:px-6 lg:px-[100px]">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-15 mt-8 sm:mt-12 lg:mt-20 justify-between px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col w-full lg:w-[50%] gap-6 sm:gap-8 lg:gap-10">
          <ImageAboutBody />
        </div>

        <div className="flex flex-col w-full lg:w-[50%] gap-8 sm:gap-10 lg:gap-12">
          <TextAboutBody />
        </div>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-20 mb-6 px-4 sm:px-6 lg:px-0">
        <HomeVideo />
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-20 mb-6 px-4 sm:px-6 lg:px-0">
        <QuoteAboutBody />
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-20 mb-6 px-4 sm:px-6 lg:px-0">
        <Pourcentage />
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-20 mb-6 px-4 sm:px-6 lg:px-0">
        <Team />
      </div>
    </div>
  );
};

export default AboutComponent;
