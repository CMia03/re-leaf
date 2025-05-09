"use client";
import ProductComponent from "@/components/features/product/productComponent";
import { useParams } from "next/navigation";
export const dynamic = "force-dynamic";

const ProductPage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <div>
      <ProductComponent productId={id as string | undefined} />
    </div>
  );
};

export default ProductPage;
