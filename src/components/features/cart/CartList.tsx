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
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Product, ProductQuot } from "@/generated/graphql";
import client from "@/graphql/appoloClient";
import { GET_CART, REMOVE_FROM_CART } from "@/graphql/queries/cart";
import { fetchTotalCart } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import { Maybe } from "graphql/jsutils/Maybe";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import CustomPagination from "@/components/re-leaf/CustomPagination";

//   {
//     id: "oil-001",
//     name: "Huile Essentielle de Lavande",
//     description: "Apaisante et relaxante, idéale pour le sommeil et le stress.",
//     imageUrl:
//       "https://img.passeportsante.net/1200x675/2021-05-03/i103924-huile-essentielle-lavande-vraie.webp",
//     price: 7.99,
//     quantity: 2,
//     stock: 50,
//     volume: "10ml",
//     origin: "Provence, France",
//     category: "Relaxation",
//   },
//   {
//     id: "oil-002",
//     name: "Huile Essentielle de Menthe Poivrée",
//     description: "Revigorante, utilisée pour les maux de tête et la digestion.",
//     imageUrl:
//       "https://comptoirdeshuiles.com/cdn/shop/files/Hessentielle_menthe_poivree.webp?v=1726661622",
//     price: 6.49,
//     quantity: 1,
//     stock: 30,
//     volume: "10ml",
//     origin: "Inde",
//     category: "Respiration",
//   },
//   {
//     id: "oil-003",
//     name: "Huile Essentielle d’Eucalyptus",
//     description: "Décongestionnante, idéale en cas de rhume ou de toux.",
//     imageUrl:
//       "https://ermada.fr/wp-content/uploads/2023/04/ermada-huile-essentielle-eucalyptus-madagascar.jpg",
//     price: 5.99,
//     quantity: 3,
//     stock: 40,
//     volume: "15ml",
//     origin: "Australie",
//     category: "Respiration",
//   },
//   {
//     id: "oil-004",
//     name: "Huile Essentielle d’Orange Douce",
//     description:
//       "Calmante et réconfortante, parfaite pour diffuser à la maison.",
//     imageUrl:
//       "https://www.lessencedesnotes.com/cdn/shop/articles/Romarin_3.png?v=1733328574",
//     price: 4.99,
//     quantity: 1,
//     stock: 25,
//     volume: "10ml",
//     origin: "Brésil",
//     category: "Bien-être",
//   },
// ];

type ProductQuotStates = {
  data: ProductQuot[];
  total: number;
  page: number;
  pageCount: number;
  pageSize: number;
};

const CartList = () => {
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
  const tHeader = useTranslations("header");
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
    fetchCarts(1);
    getTotalCart();
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead>{t("product")}</TableHead>
            <TableHead>{t("unitPrice")}</TableHead>
            <TableHead>{t("quantity")}</TableHead>
            <TableHead>{t("total")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartList.data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <div
                  className="text-lg text-muted-foreground cursor-pointer"
                  onClick={() => handleRemoveItem(item.documentId)}
                >
                  <MdClose />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={`${apiUrl}${item.product?.cover_image.url}`}
                    alt={item.product?.cover_image.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">{item.product?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.product?.subcategory_id?.name}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item.product?.price?.toFixed(2)} €</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(value) =>
                      handleChangeQuantity(item.product?.documentId, value)
                    }
                  />
                </div>
              </TableCell>
              <TableCell>
                {getTotalPrice(item.quantity, item.product?.price)} €
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
