"use client";
import "react-range-slider-input/dist/style.css";
import BreadcrumbHeader from "../BreadcrumbHeader";
import LeftSection from "./leftSection";
import ProductList from "./productList";

const ShopComponent = () => {
  return (
    <div className="container mx-auto px-6">
      <BreadcrumbHeader />
      <div className="grid lg:grid-cols-[350px_1fr] grid-cols-1 gap-8">
        <LeftSection />
        <ProductList />
      </div>
    </div>
  );
};
export default ShopComponent;
