import BreadcrumbHeader from "../BreadcrumbHeader";
import FaqQuickNavigation from "./faqQuickNavigation";
import FaqQuickNavigationBody from "./faqQuickNavigationBody";


const FaqComponent = () => {
  return (
    <div className="container mx-auto  px-[100px]">
      <div className="flex flex-col gap-10 mb-6">
        <BreadcrumbHeader />
      </div>
      <div className="flex flex-row gap-4 mt-10 justify-between">
        <div className="flex flex-col w-[30%] gap-10">
          <FaqQuickNavigation />
        </div>

        <div className="flex flex-col w-[60%] gap-12">
          <FaqQuickNavigationBody />
        </div>
      </div>
    </div>
  );
};
export default FaqComponent;
