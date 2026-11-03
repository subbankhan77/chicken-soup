"use client";

import { useOrder } from "./OrderProvider";

// A button that opens the order form, optionally with a soup pre-selected.
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
