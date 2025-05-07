import { apiUrl } from "@/components/constants/constants";
import { Typography } from "@/components/re-leaf/Typography";
import { Product } from "@/generated/graphql";
import { formatArPrice } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, MouseEvent, useState } from "react";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const showDetails = (id: string) => {
    router.push(`/products/${id}`);
  };

  const addOrRemoveFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setLiked(!liked);
  };
  console.log("product", product);

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
        <div className="absolute bottom-[20px] pr-3 w-full flex items-center justify-between">
          <div
            className="px-3 py-1"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(182, 195, 53, 1), rgba(182, 195, 53, 0.3)",
            }}
          >
            <Typography variant="h5" className="text-secondary font-normal">
              {product.name}
            </Typography>
            <Typography variant="h5" className="text-brown font-normal">
              {formatArPrice(product.price)}
            </Typography>
          </div>
          <div className="w-[50px] h-[50px] bg-brown text-secondary rounded-full flex items-center justify-center cursor-pointer">
            <span className="material-icons">add_shopping_cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
