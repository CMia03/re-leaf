import { apiUrl } from "@/components/constants/constants";
import { Typography } from "@/components/re-leaf/Typography";
import { Product, ProductQuot } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { ADD_TO_CART } from "@/graphql/queries/cart";
import { formatEuroPrice } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, MouseEvent, useState } from "react";
import { toast } from "sonner";

const ProductCard: FC<{
  product: Product;
  getTotalCart: () => void;
  allCart: ProductQuot[];
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

  const addToCart = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    try {
      const { data, errors } = await client.mutate({
        mutation: ADD_TO_CART,
        variables: {
          data: {
            product: product?.documentId,
            quantity: 1,
          },
        },
      });
      if (!errors) {
        toast.success("Le produit a bien été ajouté au panier.");
        getTotalCart();
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
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
            src={apiUrl + product?.cover_image?.url}
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
              {product.name}
            </Typography>
            <Typography variant="h5" className="text-brown font-normal">
              {formatEuroPrice(product.price)}
            </Typography>
          </div>
          <div
            className={`w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer
    ${isInCart ? "bg-white text-black" : "bg-brown text-secondary"}`}
            onClick={addToCart}
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
