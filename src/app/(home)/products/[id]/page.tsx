"use client";
import Breadcrumb from "@/components/features/BreadCrumb";
import ProductDetails from "@/components/features/product/productDetails";
import ProductImages from "@/components/features/product/productImages";
import SimilarProduct from "@/components/features/product/SimilarProduct";
import { Product } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import {
  GET_PRODUCT,
  GET_SIMILAR_PRODUCTS_BY_SUB_CATEGORY,
} from "@/graphql/queries/products";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
type Props = {
  params: {
    id: string;
  };
};
const ProductPage = ({ params }: Props) => {
  const [product, setProduct] = useState<Product>();
  const [similarProducts, setSimilarProducts] = useState<Product[]>([]);
  const t = useTranslations("header");
  const breadcrumbItems = [
    { label: t("welcome"), path: "/" },
    { label: "Produits", path: "/shop" },
    { label: product?.name || "" },
  ];
  const { id } = params;

  const fetchCurrentProduct = async (id?: string) => {
    try {
      const { data } = await client.query({
        query: GET_PRODUCT,
        variables: {
          documentId: id,
        },
      });
      if (data?.product) {
        setProduct(data.product);
      }
    } catch (error) {
      console.error("Erreur lors du chargement du produit :", error);
    }
  };

  const fetchSimilarProducts = async (
    subCategoryId?: string,
    productId?: string
  ) => {
    try {
      const { data } = await client.query({
        query: GET_SIMILAR_PRODUCTS_BY_SUB_CATEGORY,
        variables: {
          page: 1,
          pageSize: 4, // Afficher seulement 4 éléments
          subCategoryId,
          currentProductId: productId,
        },
      });

      setSimilarProducts(data?.products);
    } catch (error) {
      console.error("Erreur lors du chargement du produit :", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCurrentProduct(id);
    }
  }, [id]);
  useEffect(() => {
    if (product) {
      fetchSimilarProducts(
        product.subcategory_id?.documentId,
        product.documentId
      );
    }
  }, [product]);

  return (
    <div className="container mx-auto my-8.5">
      <Breadcrumb BreadcrumbItems={breadcrumbItems} />
      <div className="grid lg:grid-cols-2 lg:gap-30 sm:grid-cols-1 gap-6">
        <ProductImages product={product} />
        <ProductDetails product={product} />
      </div>
      {similarProducts.length > 0 && (
        <SimilarProduct products={similarProducts} />
      )}
    </div>
  );
};

export default ProductPage;
