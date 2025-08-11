"use client";
import { Maybe, Product, UploadFile } from "@/generated/graphql";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
interface ProductDetailsProps {
  product?: Product;
}

const ProductImages: FC<ProductDetailsProps> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState<
    Maybe<UploadFile> | undefined
  >();

  useEffect(() => {
    if (product) {
      setSelectedImage(product?.images[0]);
    }
  }, [product]);
  return (
    <div className="grid grid-cols-[100px_1fr] gap-4">
      <div className="flex flex-col gap-4">
        {product?.images?.map((image, index) => (
          <Image
            key={index}
            alt={`${image?.url}`}
            src={`${image?.url}`}
            width={100}
            height={100}
            className="w-16 h-16 object-cover cursor-pointer"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="relative w-full">
        <img
          alt={`${selectedImage?.url}`}
          src={`${selectedImage?.url}`}
          onClick={() => window.open(`${selectedImage?.url}`)}
        />
      </div>
    </div>
  );
};

export default ProductImages;
