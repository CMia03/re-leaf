"use client";
import "react-range-slider-input/dist/style.css";
import BreadcrumbHeader from "../BreadcrumbHeader";
import LeftSection from "./leftSection";
import ProductList from "./productList";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ShopComponent = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [appliedPriceRange, setAppliedPriceRange] = useState<[number, number]>([
    0, 10000,
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const slugFromUrl = searchParams.get("category");
    if (slugFromUrl) {
      setSelectedCategory(slugFromUrl);
    }
  }, [searchParams]);

  // Déclenche le filtre réel avec un léger délai pour éviter les appels en boucle
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppliedPriceRange(priceRange);
    }, 400); // 400ms de délai : suffisant pour un ressenti fluide

    return () => clearTimeout(timeout); // Nettoyage si l'utilisateur continue de slider
  }, [priceRange]);

  return (
    <div className="container mx-auto px-6">
      <BreadcrumbHeader />
      <div className="grid lg:grid-cols-[350px_1fr] grid-cols-1 gap-8 mt-6">
        <LeftSection
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
          onPriceRangeChange={setPriceRange}
        />
        <ProductList
          selectedCategory={selectedCategory}
          priceRange={appliedPriceRange}
        />
      </div>
    </div>
  );
};

export default ShopComponent;
