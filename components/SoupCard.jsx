import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { formatPrice, itemLabel } from "@/lib/contact";
import OrderButton from "./OrderButton";

// Menu item card: a compact side-by-side row on phones, a tall card from `sm` up.
export default function SoupCard({ product }) {
  return (
    <article className="group flex h-full overflow-hidden rounded-3xl border border-white/5 bg-coal transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/30 hover:shadow-2xl hover:shadow-ember/10 sm:flex-col sm:rounded-[1.75rem]">
      <div className="relative w-32 shrink-0 overflow-hidden min-[400px]:w-36 sm:aspect-[4/3] sm:w-auto">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 150px"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-coal/80 via-transparent to-transparent sm:block" aria-hidden="true" />
        {product.note && (
          <span className="absolute top-4 left-4 hidden rounded-full bg-ink/75 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ember backdrop-blur-md sm:block">
            {product.note}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-7">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <h4 className="font-display text-lg leading-tight font-medium text-cream sm:text-2xl">{product.name}</h4>
          <p className="shrink-0 font-display text-lg font-semibold text-ember sm:text-2xl">
            <span className="sr-only">Price: </span>
            {formatPrice(product.price)}
            {product.note && (
              <span className="ml-2 align-middle font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-sand sm:hidden">
                · {product.note}
              </span>
            )}
          </p>
        </div>
        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-sand sm:mt-3 sm:line-clamp-none sm:text-sm">
          {product.description}
        </p>

        <OrderButton
          productId={product.id}
          aria-label={`Order ${itemLabel(product)}`}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ember/40 py-2.5 text-sm font-bold text-ember transition-all hover:border-ember hover:bg-ember hover:text-ink sm:mt-6 sm:py-3.5"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          Order Now
        </OrderButton>
      </div>
    </article>
  );
}
