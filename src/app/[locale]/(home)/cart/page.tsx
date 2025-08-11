"use client";
import Breadcrumb from "@/components/features/BreadCrumb";
import CartList from "@/components/features/cart/CartList";
import TotalCart from "@/components/features/cart/TotalCart";
import { ProductQuot } from "@/generated/graphql";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Cart = () => {
  const [cartTotalPrice, setCartTotalPrice] = useState<number>(0);
  const t = useTranslations("header");
  const tCart = useTranslations("cart");
  const breadcrumbItems = [
    { label: t("welcome"), path: "/" },
    { label: tCart("cart") },
  ];

  const getLocalTotalPrice = (cartList: ProductQuot[]) => {
    const price = cartList.reduce((acc, item) => {
      const price = item.product?.price || 0;
      const quantity = item.quantity || 0;
      return acc + price * quantity;
    }, 0);
    setCartTotalPrice(price);
  };
  return (
    <div className="container mx-auto mt-8.5">
      <Breadcrumb BreadcrumbItems={breadcrumbItems} />
      <CartList getLocalTotalPrice={getLocalTotalPrice} />
      <TotalCart cartTotalPrice={cartTotalPrice} />
    </div>
  );
};

export default Cart;
