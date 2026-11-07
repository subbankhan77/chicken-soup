import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Bento layout: phones get one wide card then a 2×2 grid; desktops get 2 wide cards over 3.
const layout = [
  "col-span-2 lg:col-span-3 aspect-[16/10] sm:aspect-[2/1] lg:aspect-[16/10]",
  "lg:col-span-3 aspect-[4/5] sm:aspect-square lg:aspect-[16/10]",
  "lg:col-span-2 aspect-[4/5] sm:aspect-square lg:aspect-[4/3]",
  "lg:col-span-2 aspect-[4/5] sm:aspect-square lg:aspect-[4/3]",
  "lg:col-span-2 aspect-[4/5] sm:aspect-square lg:aspect-[4/3]",
];

export default function CategorySection() {
  return (
    <section aria-labelledby="categories-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="categories-title"
          eyebrow="What we serve"
          title="Pick your"
          accent="craving."
          description="Our famous soups, plus hot street-style favourites — all made fresh in our kitchen every evening."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-6">
          {categories.map((category, i) => {
            const count = products.filter((p) => p.category === category.id).length;
            const wide = i === 0;
            return (
              <Reveal key={category.id} delay={i * 80} className={layout[i] ?? "lg:col-span-2 aspect-[4/5] sm:aspect-square"}>
                <a
                  href={`#cat-${category.id}`}
                  className="group relative block size-full overflow-hidden rounded-3xl border border-white/5 sm:rounded-[2rem]"
                >
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 50vw"}
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 via-40% to-transparent" aria-hidden="true" />

                  <span className="absolute top-3 left-3 rounded-full bg-ink/65 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cream backdrop-blur-md sm:top-5 sm:left-5 sm:px-4 sm:py-1.5 sm:text-xs">
                    {count} {count === 1 ? "item" : "items"}
                  </span>
                  <span
                    className="absolute top-3 right-3 grid size-9 place-items-center rounded-full bg-ember text-ink transition-transform duration-500 group-hover:rotate-45 sm:top-5 sm:right-5 sm:size-11"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-4 sm:size-5" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-7">
                    <p className="hidden text-sm font-semibold text-ember sm:block">{category.tagline}</p>
                    <h3
                      className={`font-display leading-tight font-medium text-cream sm:mt-1.5 ${
                        wide ? "text-3xl sm:text-4xl lg:text-5xl" : "text-xl sm:text-3xl"
                      }`}
                    >
                      {category.name}
                    </h3>
                    <p className={`mt-2 max-w-md text-sm leading-relaxed text-cream/70 ${wide ? "block" : "hidden lg:block"}`}>
                      {category.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
