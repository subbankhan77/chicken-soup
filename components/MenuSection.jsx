import { categories, products } from "@/data/products";
import SectionHeading from "./SectionHeading";
import SoupCard from "./SoupCard";
import Reveal from "./Reveal";

export default function MenuSection() {
  return (
    <section id="menu" aria-labelledby="menu-title" className="relative bg-coal/40 py-24 sm:py-32">
      {/* Warm glow behind the menu */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-ember/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="menu-title"
          eyebrow="Our Menu"
          title="Popular"
          accent="soups."
          description="Every bowl is made to order from broth we start early each morning. Tap any soup to order it on WhatsApp."
        />

        <div className="mt-16 space-y-20">
          {categories.map((category) => (
            <div key={category.id} id={`${category.id}-soups`} className="scroll-mt-24">
              <Reveal className="mb-8 flex items-center gap-5">
                <h3 className="font-display text-3xl font-medium text-cream italic">{category.name}</h3>
                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" aria-hidden="true" />
              </Reveal>

              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products
                  .filter((p) => p.category === category.id)
                  .map((product, i) => (
                    <Reveal
                      as="li"
                      key={product.id}
                      delay={i * 100}
                      // In the 2-column (tablet) layout, centre a leftover last card instead of leaving it alone on the left.
                      className="sm:max-lg:last:odd:col-span-2 sm:max-lg:last:odd:mx-auto sm:max-lg:last:odd:w-[calc(50%-0.75rem)]"
                    >
                      <SoupCard product={product} />
                    </Reveal>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
