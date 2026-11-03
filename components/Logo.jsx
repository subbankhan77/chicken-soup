import { Soup } from "lucide-react";
import { shop } from "@/data/shop";

export default function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-2.5" aria-label={`${shop.name} — back to top`}>
      <span className="grid size-10 place-items-center rounded-full bg-ember text-ink transition-transform duration-500 group-hover:rotate-12">
        <Soup className="size-5" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-xl font-semibold tracking-tight text-cream">{shop.name}</span>
        <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-sand">
          {shop.tagline}
        </span>
      </span>
    </a>
  );
}
