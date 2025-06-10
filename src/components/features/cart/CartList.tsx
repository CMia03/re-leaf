"use client";
import { apiUrl, ITEMS_PER_PAGE } from "@/components/constants/constants";
import { useCart } from "@/components/contexts/CartContext";
import { QuantitySelector } from "@/components/re-leaf/QuantitySelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/re-leaf/Typography";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductQuot } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_CART, REMOVE_FROM_CART } from "@/graphql/queries/cart";
import { fetchTotalCart } from "@/lib/utils";
import { Maybe } from "graphql/jsutils/Maybe";
import { useTranslations } from "next-intl";
import { FC, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import CustomPagination from "@/components/re-leaf/CustomPagination";
import { toast } from "sonner";
import CartItem from "./CartItem";

type ProductQuotStates = {
  data: ProductQuot[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
};

const CartList: FC<{
  getLocalTotalPrice: (cartList: ProductQuot[]) => void;
}> = ({ getLocalTotalPrice }) => {
  const { setTotalCart } = useCart();
  const [cartList, setCartList] = useState<ProductQuotStates>({
    data: [],
    total: 0,
    page: 1,
    pageCount: 1,
    pageSize: ITEMS_PER_PAGE,
  });
  const [itemsPerPage, setItemsPerPage] = useState<number>(ITEMS_PER_PAGE);

  const t = useTranslations("cart");
  const tHeader = useTranslations("shop");
  const translationButton = useTranslations("button");
  const handleChangeQuantity = (id: string | undefined, value: number) => {};

  const handlePageChange = (newPage: number) => {
    fetchCarts(newPage);
  };

  const fetchCarts = async (pageNumber: number) => {
    const pageSize = itemsPerPage || ITEMS_PER_PAGE;
    // const sort = `${sortBy.value || "name"}:${sortBy.order || "asc"}`;

    try {
      const { data } = await client.query({
        query: GET_CART,
        variables: {
          page: pageNumber,
          pageSize,
        },
        fetchPolicy: "network-only",
      });

      setCartList({
        data: data.productQuots,
        total: data.productQuots_connection.pageInfo.total,
        page: data.productQuots_connection.pageInfo.page,
        pageCount: data.productQuots_connection.pageInfo.pageCount,
        pageSize: data.productQuots_connection.pageInfo.pageSize,
      });
    } catch (error) {
      console.error(
        "Erreur lors du chargement des produits dans le panier :",
        error
      );
    }
  };

  const handleRefreshList = async () => {
    await fetchCarts(1);
  };

  const getTotalCart = async () => {
    const total = await fetchTotalCart();
    setTotalCart(total);
  };

  const handleRemoveItem = async (id: string) => {
    try {
      client
        .mutate({
          mutation: REMOVE_FROM_CART,
          variables: {
            documentId: id,
          },
        })
        .then(({ data, errors }) => {
          toast.success("Le produit a bien été retiré.");
          handleRefreshList();
        });
    } catch (error) {}
  };

  const getTotalPrice = (
    quantity: Maybe<number> | undefined,
    productPrice: Maybe<number> | undefined
  ) => {
    if (!productPrice || !quantity) return 0;
    return (productPrice * quantity)?.toFixed(2);
  };

  useEffect(() => {
    fetchCarts(1);
  }, [, itemsPerPage]);

  useEffect(() => {
    if (cartList?.data) {
      getLocalTotalPrice(cartList.data);
      getTotalCart();
    }
  }, [cartList]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <Typography variant="p"> {`${tHeader("show")} :`} </Typography>
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
      {cartList.total === 0 && (
        <Alert>
          <InfoIcon />
          <AlertTitle>Pannier vide</AlertTitle>
          <AlertDescription>
            Veuillez ajouter des produits au panier pour commander.
          </AlertDescription>
        </Alert>
      )}
      {cartList.total > 0 && (
        <Table className="w-full border-separate border-spacing-y-3">
          <TableHeader>
            <TableRow className="border-b border-b-[var(--border)]">
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead>{t("product")}</TableHead>
              <TableHead>{t("unitPrice")}</TableHead>
              <TableHead>{t("quantity")}</TableHead>
              <TableHead>{t("total")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full border-separate border-spacing-y-3">
            {cartList.data.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onRemove={handleRemoveItem}
                getTotalPrice={getTotalPrice}
              />
            ))}
          </TableBody>
        </Table>
      )}

      <div className="flex items-center lg:justify-between justify-center my-8.5 gap-6 flex-wrap">
        <div className="relative lg:w-[30%] w-[400px] ">
          <Input
            className="rounded-full h-10 text-primary placeholder:text-[var(--border)]"
            placeholder={t("codePlaceholder")}
          />
          <Button
            variant={"default"}
            size={"lg"}
            className="rounded-r-full absolute right-0 top-0 bg-primary text-secondary cursor-pointer"
          >
            <span>{translationButton("apply")}</span>
          </Button>
        </div>
        <Button
          variant={"default"}
          size={"lg"}
          className="rounded-full text-secondary cursor-pointer"
        >
          <span>{translationButton("updateCart")}</span>
        </Button>
      </div>
      {cartList.total > itemsPerPage && (
        <CustomPagination
          currentPage={cartList.page}
          totalPages={cartList.pageCount}
          handlePageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default CartList;
