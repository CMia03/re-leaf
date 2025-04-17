import Breadcrumb from "@/components/features/BreadCrumb";
import ProductDetails from "@/components/features/product/productDetails";
import ProductImages from "@/components/features/product/productImages";
import SimilarProduct from "@/components/features/product/SimilarProduct";
import { useTranslations } from "next-intl";

const ProductPage = () => {
  const t = useTranslations("header");
  const breadcrumbItems = [
    { label: t("welcome"), path: "/" },
    { label: "Produits", path: "/shop" },
    { label: "Produit 1" },
  ];
  return (
    <div className="container mx-auto my-8.5">
      <Breadcrumb BreadcrumbItems={breadcrumbItems} />
      <div className="grid lg:grid-cols-2 lg:gap-30 sm:grid-cols-1 gap-6">
        <ProductImages />
        <ProductDetails />
      </div>
      <SimilarProduct />
    </div>
  );
};

export default ProductPage;
