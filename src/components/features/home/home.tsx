import AboutBannerHome from "./AboutBanner";
import BlogAndConseil from "./BlogAndConseil";
import EssentialProduct from "./EssentialProduct";
import HomeBanner from "./HomeBanner";
import HomeTestimonial from "./HomeTestimonial";
import New from "./New";
import OurEngagement from "./OurEngagement";
import StarProduct from "./StarProduct";

const HomeComponent = () => {
  return (
    <div className="flex flex-col gap-10">
      <HomeBanner />
      <OurEngagement />
      <StarProduct />
      <AboutBannerHome />
      <New />
      <EssentialProduct />
      <BlogAndConseil />
      <HomeTestimonial />
    </div>
  );
};
export default HomeComponent;
