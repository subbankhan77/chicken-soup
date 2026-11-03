"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { AlertCircle, CheckCircle2, Minus, Plus, X } from "lucide-react";
import { products } from "@/data/products";
import { shop } from "@/data/shop";
import { buildOrderMessage, formatPrice, telLink, whatsappLink } from "@/lib/contact";
import WhatsAppIcon from "./WhatsAppIcon";

const MAX_QTY = 50;

const emptyForm = {
  name: "",
  phone: "",
  productId: "",
  quantity: 1,
  address: "",
  instructions: "",
};

function validate(form) {
  const errors = {};
  const name = form.name.trim();
  const phone = form.phone.replace(/[\s-]/g, "");

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (/^\d+$/.test(name)) errors.name = "Please enter a valid name.";

  if (!phone) errors.phone = "Please enter your mobile number.";
  else if (!/^\+?\d{10,13}$/.test(phone)) errors.phone = "Enter a valid mobile number (at least 10 digits).";

  if (!form.productId) errors.productId = "Please choose a soup.";

  const qty = Number(form.quantity);
  if (!Number.isInteger(qty) || qty < 1) errors.quantity = "Quantity must be at least 1.";
  else if (qty > MAX_QTY) errors.quantity = `For more than ${MAX_QTY} bowls, please call us.`;

  return errors;
}

export default function OrderForm({ isOpen, initialProductId, onClose }) {
  const dialogRef = useRef(null);
  const formRef = useRef(null);
  const uid = useId();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sentUrl, setSentUrl] = useState("");

  const selected = products.find((p) => p.id === form.productId);
  const qty = Number(form.quantity) || 0;

  // Open / close the native dialog in sync with state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      // Keep name/phone if the customer orders again; refresh the soup choice.
      setForm((f) => ({ ...f, productId: initialProductId || f.productId, quantity: 1 }));
      setErrors({});
      setSubmitted(false);
      setSentUrl("");
      if (!dialog.open) dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, initialProductId]);

  const update = (field, value) => {
    const next = { ...form, [field]: value };
    setForm(next);
    // After the first submit attempt, re-validate as the customer types.
    if (submitted) setErrors(validate(next));
  };

  const changeQty = (delta) => update("quantity", Math.min(MAX_QTY, Math.max(1, qty + delta)));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(form);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Wait a frame so aria-invalid is rendered, then focus the first invalid field.
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus());
      return;
    }

    const message = buildOrderMessage({
      name: form.name.trim(),
      phone: form.phone.trim(),
      soup: selected,
      quantity: qty,
      address: form.address.trim(),
      instructions: form.instructions.trim(),
    });
    const url = whatsappLink(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setSentUrl(url);
  };

  const fieldId = (name) => `${uid}-${name}`;
  const errorProps = (name) =>
    errors[name]
      ? { "aria-invalid": "true", "aria-describedby": `${fieldId(name)}-error` }
      : { "aria-invalid": "false" };

  const inputClass = (name) =>
    `w-full rounded-2xl border bg-ink/60 px-4 py-3.5 text-base text-cream placeholder:text-sand/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ember/40 ${
      errors[name] ? "border-red-400/70" : "border-white/10 focus:border-ember"
    }`;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={`${uid}-title`}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="m-0 mt-auto max-h-[94svh] w-full max-w-none overflow-hidden rounded-t-[2rem] border border-white/10 bg-coal p-0 text-cream shadow-2xl open:animate-fade-up sm:m-auto sm:max-h-[90vh] sm:max-w-xl sm:rounded-[2rem]"
    >
      <div className="flex max-h-[inherit] flex-col">
        <header className="flex items-start justify-between gap-4 border-b border-white/5 px-6 pt-6 pb-5 sm:px-8 sm:pt-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Order via WhatsApp</p>
            <h2 id={`${uid}-title`} className="mt-1.5 font-display text-3xl font-medium">
              {sentUrl ? "Almost done!" : "Book your soup"}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 text-cream transition-colors hover:border-ember hover:text-ember"
            aria-label="Close order form"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </header>

        {sentUrl ? (
          <div className="overflow-y-auto px-6 py-8 text-center sm:px-8" role="status">
            <CheckCircle2 className="mx-auto size-14 text-[#25D366]" aria-hidden="true" />
            <p className="mt-5 font-display text-2xl">WhatsApp is opening…</p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-sand">
              Your order details are ready in WhatsApp. Please review the message and tap <strong className="text-cream">Send</strong>.
              Your order will be confirmed once {shop.name} replies.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={sentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-bold text-ink transition hover:brightness-110"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp didn&rsquo;t open? Tap here
              </a>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 py-4 text-sm font-bold text-cream transition-colors hover:border-ember hover:text-ember"
              >
                Back to menu
              </button>
            </div>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex min-h-0 flex-col">
            <div className="space-y-5 overflow-y-auto px-6 py-6 sm:px-8">
              {/* Name */}
              <div>
                <label htmlFor={fieldId("name")} className="mb-2 block text-sm font-semibold">
                  Your name <span className="text-ember" aria-hidden="true">*</span>
                </label>
                <input
                  id={fieldId("name")}
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={60}
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="e.g. Rahul Kumar"
                  className={inputClass("name")}
                  {...errorProps("name")}
                />
                <FieldError id={fieldId("name")} message={errors.name} />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor={fieldId("phone")} className="mb-2 block text-sm font-semibold">
                  Mobile number <span className="text-ember" aria-hidden="true">*</span>
                </label>
                <input
                  id={fieldId("phone")}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  maxLength={16}
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value.replace(/[^\d+\s-]/g, ""))}
                  placeholder="e.g. 98765 43210"
                  className={inputClass("phone")}
                  {...errorProps("phone")}
                />
                <FieldError id={fieldId("phone")} message={errors.phone} />
              </div>

              {/* Soup + quantity */}
              <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
                <div>
                  <label htmlFor={fieldId("productId")} className="mb-2 block text-sm font-semibold">
                    Select soup <span className="text-ember" aria-hidden="true">*</span>
                  </label>
                  <select
                    id={fieldId("productId")}
                    required
                    value={form.productId}
                    onChange={(e) => update("productId", e.target.value)}
                    className={`${inputClass("productId")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23f28a2e%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-11`}
                    {...errorProps("productId")}
                  >
                    <option value="" disabled>
                      Choose a soup…
                    </option>
                    {["chicken", "mutton"].map((cat) => (
                      <optgroup key={cat} label={cat === "chicken" ? "Chicken Soups" : "Mutton Soups"}>
                        {products
                          .filter((p) => p.category === cat)
                          .map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} — {formatPrice(p.price)}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                  <FieldError id={fieldId("productId")} message={errors.productId} />
                </div>

                <div>
                  <label htmlFor={fieldId("quantity")} className="mb-2 block text-sm font-semibold">
                    Quantity <span className="text-ember" aria-hidden="true">*</span>
                  </label>
                  <div
                    className={`flex items-center rounded-2xl border bg-ink/60 ${
                      errors.quantity ? "border-red-400/70" : "border-white/10"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => changeQty(-1)}
                      disabled={qty <= 1}
                      className="grid size-12 place-items-center text-cream transition-colors hover:text-ember disabled:opacity-30"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="size-4" aria-hidden="true" />
                    </button>
                    <input
                      id={fieldId("quantity")}
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={MAX_QTY}
                      required
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value === "" ? "" : Number(e.target.value))}
                      className="w-full min-w-12 bg-transparent text-center text-base font-bold text-cream [appearance:textfield] focus:outline-none sm:w-12 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                      {...errorProps("quantity")}
                    />
                    <button
                      type="button"
                      onClick={() => changeQty(1)}
                      disabled={qty >= MAX_QTY}
                      className="grid size-12 place-items-center text-cream transition-colors hover:text-ember disabled:opacity-30"
                      aria-label="Increase quantity"
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </button>
                  </div>
                  <FieldError id={fieldId("quantity")} message={errors.quantity} />
                </div>
              </div>

              {selected && (
                <div className="flex items-center gap-4 rounded-2xl border border-ember/20 bg-ember/5 p-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                    <Image src={selected.image} alt="" fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-lg">{selected.name}</p>
                    <p className="text-sm text-sand">
                      {formatPrice(selected.price)} × {qty || 0}
                    </p>
                  </div>
                  <p className="pr-2 text-right">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-sand">Approx.</span>
                    <span className="font-display text-xl font-semibold text-ember">
                      {formatPrice(selected.price * (qty || 0))}
                    </span>
                  </p>
                </div>
              )}

              {/* Address */}
              <div>
                <label htmlFor={fieldId("address")} className="mb-2 block text-sm font-semibold">
                  Delivery address <span className="font-normal text-sand">(optional)</span>
                </label>
                <textarea
                  id={fieldId("address")}
                  rows={2}
                  maxLength={200}
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  placeholder="Leave empty if you'll pick up from the shop"
                  className={`${inputClass("address")} resize-none`}
                />
              </div>

              {/* Instructions */}
              <div>
                <label htmlFor={fieldId("instructions")} className="mb-2 block text-sm font-semibold">
                  Additional instructions <span className="font-normal text-sand">(optional)</span>
                </label>
                <textarea
                  id={fieldId("instructions")}
                  rows={2}
                  maxLength={300}
                  value={form.instructions}
                  onChange={(e) => update("instructions", e.target.value)}
                  placeholder="e.g. Less spicy please"
                  className={`${inputClass("instructions")} resize-none`}
                />
              </div>
            </div>

            <footer className="border-t border-white/5 px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-4 text-base font-bold text-ink shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <WhatsAppIcon className="size-5" />
                Send Order on WhatsApp
              </button>
              <p className="mt-3 text-center text-xs leading-relaxed text-sand">
                You&rsquo;ll review the message before sending. Orders are confirmed by the shop on WhatsApp. Prefer to talk?{" "}
                <a href={telLink} className="font-semibold text-ember underline-offset-2 hover:underline">
                  Call us
                </a>
                .
              </p>
            </footer>
          </form>
        )}
      </div>
    </dialog>
  );
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-300">
      <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}
