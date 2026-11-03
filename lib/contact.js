import { shop } from "@/data/shop";

export const telLink = `tel:${shop.phone}`;

export function formatPrice(amount) {
  return `${shop.currency}${amount.toLocaleString("en-IN")}`;
}

export function whatsappLink(message) {
  const base = `https://wa.me/${shop.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const greetingMessage = `Hello ${shop.name}! I'd like to know more about your soups.`;

export function buildOrderMessage({ name, phone, soup, quantity, address, instructions }) {
  const lines = [
    "Hello! I want to place a soup order.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Soup: ${soup.name}`,
    `Quantity: ${quantity}`,
    `Address: ${address || "Not provided (I will pick up)"}`,
    `Instructions: ${instructions || "None"}`,
    "",
    `Approx. Total: ${formatPrice(soup.price * quantity)}`,
    "",
    "Please confirm my order. Thank you!",
  ];
  return lines.join("\n");
}
