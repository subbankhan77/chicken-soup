"use client";

import { useOrder } from "./OrderProvider";

export default function OrderButton({ productId = "", className = "", onClick, children, ...props }) {
  const { openOrder } = useOrder();

  return (
    <button
      type="button"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        openOrder(productId);
      }}
      aria-haspopup="dialog"
      className={className}
    >
      {children}
    </button>
  );
}
