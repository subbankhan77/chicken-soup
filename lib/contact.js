import { shop } from "@/data/shop";

export const telLink = `tel:${shop.phone}`;

export function formatPrice(amount) {
  return `${shop.currency}${amount.toLocaleString("en-IN")}`;
}

export function whatsappLink(message) {
  const base = `https://wa.me/${shop.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
export async function sendOrderEmail({ name, phone, item, quantity, address, instructions }) {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${shop.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New order: ${itemLabel(item)} × ${quantity} — ${name}`,
        _template: "table",
        _captcha: "false",
        Name: name,
        Phone: phone,
        Item: itemLabel(item),
        Quantity: quantity,
        "Approx. Total": formatPrice(item.price * quantity),
        Address: address || "Not provided (will pick up)",
        Instructions: instructions || "None",
      }),
    });
    const data = await res.json().catch(() => ({}));
    return res.ok && String(data.success) === "true";
  } catch {
    return false;
  }
}

export const greetingMessage = `Hello ${shop.name}! I'd like to know more about your menu.`;

// "Chicken Chowmein (Half plate)" — name plus portion note, if any.
export function itemLabel(product) {
  return product.note ? `${product.name} (${product.note})` : product.name;
}

export function buildOrderMessage({ name, phone, item, quantity, address, instructions }) {
  const lines = [
    "Hello! I want to place an order.",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Item: ${itemLabel(item)}`,
    `Quantity: ${quantity}`,
    `Address: ${address || "Not provided (I will pick up)"}`,
    `Instructions: ${instructions || "None"}`,
    "",
    `Approx. Total: ${formatPrice(item.price * quantity)}`,
    "",
    "Please confirm my order. Thank you!",
  ];
  return lines.join("\n");
}
