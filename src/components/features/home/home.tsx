import AboutBannerHome from "./AboutBanner";
import BlogAndConseil from "./BlogAndConseil";
import EssentialProduct from "./EssentialProduct";
import HomeBanner from "./HomeBanner";
import HomeTestimonial from "./HomeTestimonial";
import HomeVideo from "./HomeVideo";
import New from "./New";
import OurEngagement from "./OurEngagement";
import Savior from "./Savior";
import StarProduct from "./StarProduct";

const HomeComponent = () => {
  return (
    <div className="flex flex-col gap-10">
      <HomeBanner />
      <OurEngagement />
      <Savior />
      <StarProduct />
      <AboutBannerHome />
      <New />
      <EssentialProduct />
      <HomeVideo />
      <BlogAndConseil />
      <HomeTestimonial />
    </div>
  );
};
export default HomeComponent;
