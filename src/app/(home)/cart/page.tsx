import Breadcrumb from "@/components/features/BreadCrumb";
import CartList from "@/components/features/cart/CartList";
import TotalCart from "@/components/features/cart/TotalCart";
import { useTranslations } from "next-intl";

const Cart = () => {
  const t = useTranslations("header");
  const tCart = useTranslations("cart");
  const breadcrumbItems = [
    { label: t("welcome"), path: "/" },
    { label: tCart("cart") },
  ];
  return (
    <div className="container mx-auto mt-8.5">
      <Breadcrumb BreadcrumbItems={breadcrumbItems} />
      <CartList />
      <TotalCart />
    </div>
  );
};

export default Cart;
