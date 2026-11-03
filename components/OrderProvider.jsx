"use client";

import { createContext, useCallback, useContext, useState } from "react";
import OrderForm from "./OrderForm";

const OrderContext = createContext(null);

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used inside <OrderProvider>");
  return ctx;
}

// Holds the "is the order form open?" state so any button on the page can open it.
export default function OrderProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [productId, setProductId] = useState("");

  const openOrder = useCallback((id = "") => {
    setProductId(id);
    setIsOpen(true);
  }, []);

  const closeOrder = useCallback(() => setIsOpen(false), []);

  return (
    <OrderContext.Provider value={{ openOrder }}>
      {children}
      <OrderForm isOpen={isOpen} initialProductId={productId} onClose={closeOrder} />
    </OrderContext.Provider>
  );
}
