import AboutBannerHome from "./AboutBanner";
import BlogAndConseil from "./BlogAndConseil";
import EssentialProduct from "./EssentialProduct";
import HomeBanner from "./HomeBanner";
import HomeNewslatter from "./HomeNewslatter";
import HomeTestimonial from "./HomeTestimonial";
import HomeVideo from "./HomeVideo";
import New from "./New";
import OurEngagement from "./OurEngagement";
import Savior from "./Savior";
import StarProduct from "./StarProduct";

const   HomeComponent = () => {
  return (
    <div>
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
      <HomeNewslatter />
    </div>
  );
};
export default HomeComponent;
