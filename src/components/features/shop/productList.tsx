"use client";
import { ITEMS_PER_PAGE } from "@/components/constants/constants";
import CustomPagination from "@/components/re-leaf/CustomPagination";
import { Typography } from "@/components/re-leaf/Typography";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product, ProductQuot } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_PRODUCTS } from "@/graphql/queries/products";
import { InfoIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";
import { MdUnfoldMore } from "react-icons/md";
import ProductCard from "./productCard";
import { fetchTotalCart } from "@/lib/utils";
import { useCart } from "@/components/contexts/CartContext";
import { GET_ALL_CART } from "@/graphql/queries/cart";
import { fetchAllCart } from "../product/productActions";

type ProductsState = {
  data: Product[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
};

type SortType = {
  value: string;
  order: string;
};

const ProductList: FC<{
  showFilters?: boolean;
  currentItemsPerPage?: number;
  rowItems?: number;
  selectedCategoryId?: string | null;
}> = ({
  showFilters = true,
  currentItemsPerPage,
  rowItems,
  selectedCategoryId,
}) => {
  const { setTotalCart } = useCart();
  const t = useTranslations("shop");
  const [products, setProducts] = useState<ProductsState>({
    data: [],
    total: 0,
    page: 1,
    pageCount: 1,
    pageSize: currentItemsPerPage || ITEMS_PER_PAGE,
  });
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    currentItemsPerPage || ITEMS_PER_PAGE
  );
  const [allCart, setAllCart] = useState<ProductQuot[]>([]);
  const [sortBy, setSortBy] = useState<SortType>({ value: "", order: "" });

  const handlePageChange = (newPage: number) => {
    fetchProducts(newPage);
  };

  const fetchProducts = async (pageNumber: number) => {
    const pageSize = itemsPerPage || ITEMS_PER_PAGE;
    const sort = `${sortBy.value || "name"}:${sortBy.order || "asc"}`;

    try {
      const { data } = await client.query({
        query: GET_PRODUCTS,
        variables: {
          page: pageNumber,
          pageSize,
          sort,
          filters: selectedCategoryId
            ? {
                category: {
                  documentId: {
                    eq: selectedCategoryId,
                  },
                },
              }
            : {},
        },
      });

      setProducts({
        data: data.products,
        total: data.products_connection.pageInfo.total,
        page: data.products_connection.pageInfo.page,
        pageCount: data.products_connection.pageInfo.pageCount,
        pageSize: data.products_connection.pageInfo.pageSize,
      });
    } catch (error) {
      console.error("Erreur lors du chargement des produits :", error);
    }
  };

  const onSelectSort = (sortValue: string) => {
    setSortBy({ ...sortBy, value: sortValue });
  };

  const onChangeSortOrder = () => {
    setSortBy((prevSort) => ({
      ...prevSort,
      order: prevSort.order === "asc" ? "desc" : "asc",
    }));
  };

  const fetchCart = async () => {
    const cart = await fetchAllCart();
    setAllCart(cart);
  };

  const getTotalCart = async () => {
    const total = await fetchTotalCart();
    setTotalCart(total);
    fetchCart();
  };

  useEffect(() => {
    fetchProducts(1);
    fetchCart();
  }, [itemsPerPage, sortBy, selectedCategoryId]);

  return (
    <div>
      {showFilters && (
        <div className="flex justify-between py-3 mb-4 gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <Typography variant="p">{`${t("show")} :`}</Typography>
            <Select
              value={itemsPerPage ? itemsPerPage.toString() : ""}
              onValueChange={(value) => setItemsPerPage(parseInt(value))}
            >
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
              <SelectContent disablePortal>
                {[...Array(9)].map((_, i) => {
                  const value = (i + 1).toString();
                  return (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-3">
            <Typography variant="p">{`${t("sortBy")} :`}</Typography>
            <Select value={sortBy.value} onValueChange={onSelectSort}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
              <SelectContent disablePortal>
                <SelectItem value="name">{t("name")}</SelectItem>
                <SelectItem value="price">{t("price")}</SelectItem>
              </SelectContent>
            </Select>
            <MdUnfoldMore
              className="text-primary cursor-pointer"
              size={25}
              onClick={onChangeSortOrder}
            />
          </div>
        </div>
      )}
      <div
        className={`grid lg:grid-cols-${
          rowItems ? "rowItems" : "3"
        } sm:grid-cols-2 grid-cols-1 gap-8`}
      >
        {products.data &&
          products.data.map((product) => (
            <ProductCard
              key={product.documentId}
              product={product}
              allCart={allCart}
              getTotalCart={getTotalCart}
            />
          ))}
      </div>
      {products.total === 0 && (
        <Alert>
          <InfoIcon />
          <AlertTitle>Produit introuvable</AlertTitle>
          <AlertDescription>
            Nous n’avons trouvé aucun produit correspondant à votre recherche.
            <br />
            Essayez avec d’autres mots-clés ou explorez nos catégories.
          </AlertDescription>
        </Alert>
      )}
      {showFilters && products.total > itemsPerPage && (
        <CustomPagination
          currentPage={products.page}
          totalPages={products.pageCount}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ProductList;
