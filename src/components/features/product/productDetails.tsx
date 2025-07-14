"use client";
import { Typography } from "@/components/re-leaf/Typography";
import { Button } from "@/components/ui/button";
import { capitalize, fetchTotalCart, formatEuroPrice } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import MenuInformations from "./MenuInformations";
import { QuantitySelector } from "@/components/re-leaf/QuantitySelector";
import { Category, Product, ProductQuot } from "@/generated/graphql";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "@/graphql/queries/cart";
import client from "@/graphql/appoloClient";
import { useCart } from "@/components/contexts/CartContext";
import { toast } from "sonner";
import { fetchAllCart } from "./productActions";

interface ProductDetailsProps {
  product?: Product;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const { setTotalCart } = useCart();
  const t = useTranslations("product");
  const [productNumber, setProductNumber] = useState<number>(1);
  const ratingNumbers = 5;

  const typedProduct = product as Product & {
    category?: {
      name?: string;
      slug?: string;
    };
  };

  const [allCart, setAllCart] = useState<ProductQuot[]>([]);
  const handleChangeQuantity = (value: number) => setProductNumber(value);

  const fetchCart = async () => {
    const cart = await fetchAllCart();
    setAllCart(cart);
  };

  const addOrUpdateToCart = async () => {
    try {
      const isUpdate = cartItem && cartItem.quantity && cartItem.quantity > 0;

      const variables =
        cartItem?.quantity && isUpdate
          ? {
              documentId: cartItem.documentId, // non-null assertion car isUpdate est vrai
              data: {
                quantity: productNumber,
              },
            }
          : {
              data: {
                product: product?.documentId,
                quantity: productNumber,
              },
            };

      if (!isUpdate && !product?.documentId) {
        toast.error("Produit introuvable.");
        return;
      }
      const { errors } = await client.mutate({
        mutation: isUpdate ? UPDATE_CART_QUANTITY : ADD_TO_CART,
        variables,
      });

      if (!errors) {
        toast.success(
          isUpdate
            ? "Quantité mise à jour dans le panier."
            : "Le produit a bien été ajouté au panier."
        );

        await fetchCart(); // ← Ajout ici pour recharger les données
        getTotalCart();
      } else {
        toast("Erreur !", {
          description: "Erreur innatendue",
        });
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
    }
  };

  const cartItem = allCart?.find(
    (item) => item.product?.documentId === product?.documentId
  );
  const isInCart = Boolean(cartItem);

  const getTotalCart = async () => {
    const total = await fetchTotalCart();
    setTotalCart(total);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <Typography variant="h1" className="mb-2 font-normal capitalize">
        {capitalize(product?.name)}
      </Typography>
      <Typography variant="h3" className="mb-2 font-normal text-brown">
        {formatEuroPrice(product?.price)}
      </Typography>
      <div className="flex flex-wrap items-center gap-4 mb-3">
        <Rating SVGclassName="inline-flex" initialValue={1} readonly />
        <span> {`(${ratingNumbers} ${t("ratingNumbers")})`}</span>
      </div>
      <Typography variant="p" className="mb-4">
        {product?.description}
      </Typography>
      <div className="mb-4">
        {isInCart ? (
          <span className="text-xl">
            {t("productToCard")}
            {cartItem?.quantity}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center gap-4 mb-8.5">
        <QuantitySelector
          value={productNumber}
          onChange={(newQty) => handleChangeQuantity(newQty)}
        />

        <Button
          data-slot="carousel-previous"
          variant="default"
          size="lg"
          className="rounded-full  px-8 cursor-pointer"
          onClick={addOrUpdateToCart}
        >
          {/* <span className="text-xl">{cartItem?.quantity}</span> */}
          {isInCart ? (
            <span>{t("updateCard")}</span>
          ) : (
            <span>{t("addToCard")}</span>
          )}
        </Button>
      </div>
      <div className="flex flex-col gap-3 mb-20">
        <div>
          SKU : <span className="pl-6">{product?.weight}</span>
        </div>
        <div>
          {`${t("category")} : `}
          <span className="pl-6">
            {capitalize(typedProduct?.category?.name)}
          </span>
        </div>
        {/* <div>
          {`${t("tags")} : `}
          <span className="pl-6 text-[#1E1E1EA1]">
            {product.tags.map((item) => item.label).join(" - ")}
          </span>
        </div> */}
      </div>
      <MenuInformations product={product} />
    </div>
  );
};

export default ProductDetails;
