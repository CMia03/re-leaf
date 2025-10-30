import BreadcrumbHeader from "../BreadcrumbHeader";
import FaqQuickNavigation from "./faqQuickNavigation";
import FaqQuickNavigationBody from "./faqQuickNavigationBody";


const FaqComponent = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-[100px]">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 mb-6">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10 justify-between">
        <div className="flex flex-col w-full lg:w-[30%] gap-6 sm:gap-8 lg:gap-10">
          <FaqQuickNavigation />
        </div>

        <div className="flex flex-col w-full lg:w-[60%] gap-8 sm:gap-10 lg:gap-12">
          <FaqQuickNavigationBody />
        </div>
      </div>
    </div>
  );
};
export default FaqComponent;
