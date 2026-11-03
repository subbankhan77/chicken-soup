import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories, products } from "@/data/products";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function CategorySection() {
  return (
    <section aria-labelledby="categories-title" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="categories-title"
          eyebrow="Two kinds of comfort"
          title="Pick your"
          accent="bowl."
          description="Everything we make falls into two families — each simmered slowly, the old-fashioned way."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((category, i) => {
            const count = products.filter((p) => p.category === category.id).length;
            return (
              <Reveal key={category.id} delay={i * 120}>
                <a
                  href={`#${category.id}-soups`}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 sm:aspect-[16/11] md:aspect-[4/5] lg:aspect-[5/4]"
                >
                  <Image
                    src={category.image}
                    alt={`${category.name} in a bowl`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 via-35% to-transparent" aria-hidden="true" />

                  <span className="absolute top-6 left-6 rounded-full bg-ink/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
                    {count} varieties
                  </span>
                  <span
                    className="absolute top-5 right-5 grid size-12 place-items-center rounded-full bg-ember text-ink transition-transform duration-500 group-hover:rotate-45"
                    aria-hidden="true"
                  >
                    <ArrowUpRight className="size-5" />
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                    <p className="text-sm font-semibold text-ember">{category.tagline}</p>
                    <h3 className="mt-2 font-display text-4xl font-medium text-cream lg:text-5xl">{category.name}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
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
