"use client";
import "react-range-slider-input/dist/style.css";
import BreadcrumbHeader from "../BreadcrumbHeader";
import LeftSection from "./leftSection";
import ProductList from "./productList";

const ShopComponent = () => {
  return (
    <div className="container mx-auto">
      <BreadcrumbHeader />
      <div className="grid grid-cols-[350px_1fr] gap-8">
        <LeftSection />
        <ProductList />
      </div>
    </div>
  );
};
export default ShopComponent;
