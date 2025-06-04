"use client";
import { FC, useState } from "react";
import { apiUrl } from "@/components/constants/constants";
import { ProductQuot } from "@/generated/graphql";
import { MdClose } from "react-icons/md";
import { QuantitySelector } from "@/components/re-leaf/QuantitySelector";

type CartItemProps = {
  item: ProductQuot;
  onRemove: (id: string) => void;
  getTotalPrice: (
    quantity: number | null | undefined,
    price: number | null | undefined
  ) => string | number;
};

const CartItem: FC<CartItemProps> = ({ item, onRemove, getTotalPrice }) => {
  const [productNumber, setProductNumber] = useState<number>(
    item.quantity || 1
  );

  const handleChangeQuantity = (value: number) => setProductNumber(value);
  return (
    <tr className="border-b-1 border-b-[var(--border)]">
      <td>
        <div
          className="text-lg text-muted-foreground cursor-pointer"
          onClick={() => onRemove(item.documentId)}
        >
          <MdClose />
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <img
            src={`${apiUrl}${item.product?.cover_image.url}`}
            alt={item.product?.cover_image.name}
            className="w-10 h-10 object-cover rounded"
          />
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-medium">{item.product?.name}</div>
            <div className="text-sm text-muted-foreground">
              {item.product?.subcategory_id?.name}
            </div>
          </div>
        </div>
      </td>
      <td>{item.product?.price?.toFixed(2)} €</td>
      <td>
        <div className="flex items-center">
          <QuantitySelector
            value={productNumber}
            onChange={(value) => handleChangeQuantity(value)}
          />
        </div>
      </td>
      <td>{getTotalPrice(item.quantity, item.product?.price)} €</td>
    </tr>
  );
};

export default CartItem;
