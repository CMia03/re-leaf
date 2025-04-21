"use client";
import { QuantitySelector } from "@/components/re-leaf/QuantitySelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";
import { MdClose } from "react-icons/md";

export interface CartItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
  stock: number;
  volume: string; // ex: "10ml", "30ml"
  origin: string; // origine de la plante
  category: string; // par exemple "Relaxation", "Respiration", etc.
}
export const mockCartItems: CartItem[] = [
  {
    id: "oil-001",
    name: "Huile Essentielle de Lavande",
    description: "Apaisante et relaxante, idéale pour le sommeil et le stress.",
    imageUrl:
      "https://img.passeportsante.net/1200x675/2021-05-03/i103924-huile-essentielle-lavande-vraie.webp",
    price: 7.99,
    quantity: 2,
    stock: 50,
    volume: "10ml",
    origin: "Provence, France",
    category: "Relaxation",
  },
  {
    id: "oil-002",
    name: "Huile Essentielle de Menthe Poivrée",
    description: "Revigorante, utilisée pour les maux de tête et la digestion.",
    imageUrl:
      "https://comptoirdeshuiles.com/cdn/shop/files/Hessentielle_menthe_poivree.webp?v=1726661622",
    price: 6.49,
    quantity: 1,
    stock: 30,
    volume: "10ml",
    origin: "Inde",
    category: "Respiration",
  },
  {
    id: "oil-003",
    name: "Huile Essentielle d’Eucalyptus",
    description: "Décongestionnante, idéale en cas de rhume ou de toux.",
    imageUrl:
      "https://ermada.fr/wp-content/uploads/2023/04/ermada-huile-essentielle-eucalyptus-madagascar.jpg",
    price: 5.99,
    quantity: 3,
    stock: 40,
    volume: "15ml",
    origin: "Australie",
    category: "Respiration",
  },
  {
    id: "oil-004",
    name: "Huile Essentielle d’Orange Douce",
    description:
      "Calmante et réconfortante, parfaite pour diffuser à la maison.",
    imageUrl:
      "https://www.lessencedesnotes.com/cdn/shop/articles/Romarin_3.png?v=1733328574",
    price: 4.99,
    quantity: 1,
    stock: 25,
    volume: "10ml",
    origin: "Brésil",
    category: "Bien-être",
  },
];
const CartList = () => {
  const t = useTranslations("cart");
  const translationButton = useTranslations("button");
  const handleChangeQuantity = (id: string, value: number) => {};

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead>{t("product")}</TableHead>
            <TableHead>{t("origin")}</TableHead>
            <TableHead>{t("unitPrice")}</TableHead>
            <TableHead>{t("quantity")}</TableHead>
            <TableHead>{t("total")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockCartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="text-lg text-muted-foreground cursor-pointer">
                  <MdClose />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.category}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item.origin}</TableCell>
              <TableCell>{item.price.toFixed(2)} €</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(value) => handleChangeQuantity(item.id, value)}
                  />
                </div>
              </TableCell>
              <TableCell>{(item.price * item.quantity).toFixed(2)} €</TableCell>
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
    </div>
  );
};

export default CartList;
