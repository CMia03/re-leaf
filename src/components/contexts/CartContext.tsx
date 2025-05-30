"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  totalCart: number;
  setTotalCart: (value: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [totalCart, setTotalCart] = useState<number>(0);

  return (
    <CartContext.Provider value={{ totalCart, setTotalCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
