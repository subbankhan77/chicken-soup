import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/contact";
import OrderButton from "./OrderButton";

export default function SoupCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/5 bg-coal transition-all duration-500 hover:-translate-y-1.5 hover:border-ember/30 hover:shadow-2xl hover:shadow-ember/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal/80 via-transparent to-transparent" aria-hidden="true" />
        {product.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-ink/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ember backdrop-blur-md">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-display text-2xl leading-tight font-medium text-cream">{product.name}</h4>
          <p className="shrink-0 font-display text-2xl font-semibold text-ember">
            <span className="sr-only">Price: </span>
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-sand">{product.description}</p>

        <OrderButton
          productId={product.id}
          aria-label={`Order ${product.name}`}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ember/40 py-3.5 text-sm font-bold text-ember transition-all hover:border-ember hover:bg-ember hover:text-ink"
        >
          <ShoppingBag className="size-4" aria-hidden="true" />
          Order Now
        </OrderButton>
      </div>
    </article>
  );
}
