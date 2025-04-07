import AboutBannerHome from "./AboutBanner";
import HomeBanner from "./HomeBanner";
import HomeNewslatter from "./HomeNewslatter";
import New from "./New";
import OurEngagement from "./OurEngagement";
import Savior from "./Savior";
import StarProduct from "./StarProduct";

const HomeComponent = () => {
  return (
    <div>
      <HomeBanner />
      <OurEngagement />
      <Savior />
      <StarProduct />
      <AboutBannerHome />
      <New />
 <HomeNewslatter />
    </div>
  );
};
export default HomeComponent;
