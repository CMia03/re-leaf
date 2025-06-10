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
      <div className="flex flex-col gap-10 mb-6  px-[100px]">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-row gap-15 mt-20 justify-between  px-[100px]">
        <div className="flex flex-col w-[50%] gap-10">
          <ImageAboutBody />
        </div>

        <div className="flex flex-col w-[50%] gap-12">
          <TextAboutBody />
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-20 mb-6 ">
        <HomeVideo />
      </div>
      <div className="flex flex-col gap-10 mt-20 mb-6 ">
        <QuoteAboutBody />
      </div>
      <div className="flex flex-col gap-10 mt-20 mb-6 ">
        <Pourcentage />
      </div>
      <div className="flex flex-col gap-10 mt-20 mb-6 ">
        <Team />
      </div>
    </div>
  );
};

export default AboutComponent;
