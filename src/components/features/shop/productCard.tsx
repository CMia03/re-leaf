import { Typography } from "@/components/re-leaf/Typography";
import { Product, ProductQuot } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "@/graphql/queries/cart";
import { capitalize, formatEuroPrice } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, MouseEvent, useState } from "react";
import { toast } from "sonner";

const ProductCard: FC<{
  product: Product;
  getTotalCart?: () => void;
  allCart?: ProductQuot[];
}> = ({ product, getTotalCart, allCart }) => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const showDetails = (id: string) => {
    router.push(`/products/${id}`);
  };

  const addOrRemoveFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const updateCart = async (
    cartItem: ProductQuot | undefined,
    e: MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();

    try {
      // Si le produit est déjà dans le panier avec une quantité > 0
      const isUpdate = cartItem && cartItem.quantity && cartItem.quantity > 0;

      // Définir les variables selon le cas
      const variables =
        cartItem?.quantity && isUpdate
          ? {
              documentId: cartItem.documentId, // non-null assertion car isUpdate est vrai
              data: {
                quantity: cartItem.quantity + 1,
              },
            }
          : {
              data: {
                product: product?.documentId,
                quantity: 1,
              },
            };

      // Ne pas lancer la mutation si product est indéfini
      if (!isUpdate && !product?.documentId) {
        toast.error("Produit introuvable.");
        return;
      }

      // Lancer la mutation adaptée
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
        if (getTotalCart) getTotalCart();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du panier :", error);
      toast.error("Une erreur est survenue.");
    }
  };

  const cartItem = allCart?.find(
    (item) => item.product?.documentId === product.documentId
  );
  const isInCart = Boolean(cartItem);
  return (
    <div
      onClick={() => showDetails(product.documentId)}
      className="cursor-pointer"
    >
      <div className="min-h-[350px] relative">
        {product?.cover_image && (
          <Image
            src={product?.cover_image?.url}
            fill
            className="object-cover"
            alt={product.name}
            priority
          />
        )}
        <div
          className="w-[50px] h-[50px] bg-secondary absolute top-3 right-3 rounded-full flex items-center justify-center cursor-pointer"
          onClick={addOrRemoveFavorite}
        >
          <span className="material-icons">
            {liked ? "favorite" : "favorite_border"}
          </span>
        </div>
        <div className="absolute bottom-[20px] pr-3 w-full gap-4 flex items-center justify-between">
          <div
            className="px-3 py-1 flex-1"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(182, 195, 53, 1), rgba(182, 195, 53, 0.3)",
            }}
          >
            <Typography
              variant="h5"
              className="text-secondary font-normal text-[17px]"
            >
              {capitalize(product.name)}
            </Typography>
            <Typography variant="h5" className="text-brown font-normal">
              {formatEuroPrice(product.price)}
            </Typography>
          </div>
          <div
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer
    ${isInCart ? "bg-white text-black" : "bg-brown text-secondary"}`}
            onClick={(e) => updateCart(cartItem, e)}
          >
            {isInCart ? (
              <span className="text-xl">{cartItem?.quantity}</span>
            ) : (
              <span className="material-icons">add_shopping_cart</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
