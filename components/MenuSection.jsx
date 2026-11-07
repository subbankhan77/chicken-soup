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
          title="Hot & fresh,"
          accent="every evening."
          description="Soups, Chinese, burgers, egg specials and rolls — all made to order. Tap any item to order it on WhatsApp."
        />
      </div>

      {/* Sticky category jump-links */}
      <nav
        aria-label="Menu categories"
        className="sticky top-[4.5rem] z-20 mt-12 border-y border-white/5 bg-ink/85 backdrop-blur-xl"
      >
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:justify-center sm:px-8 [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <li key={category.id} className="shrink-0">
              <a
                href={`#cat-${category.id}`}
                className="inline-block rounded-full border border-white/10 px-4 py-2 text-sm font-semibold whitespace-nowrap text-cream/85 transition-colors hover:border-ember hover:text-ember"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="relative mx-auto mt-12 max-w-7xl space-y-16 px-5 sm:space-y-20 sm:px-8">
        {categories.map((category) => {
          const items = products.filter((p) => p.category === category.id);
          return (
            <div key={category.id} id={`cat-${category.id}`} className="scroll-mt-36">
              <Reveal className="mb-6 flex items-baseline gap-4 sm:mb-8">
                <h3 className="font-display text-2xl font-medium text-cream italic sm:text-3xl">{category.name}</h3>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-sand">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </span>
                <span className="h-px flex-1 self-center bg-gradient-to-r from-white/15 to-transparent" aria-hidden="true" />
              </Reveal>

              {/* Flex-wrap instead of grid so a part-filled last row sits centred, not stuck to the left. */}
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {items.map((product, i) => (
                  <Reveal
                    as="li"
                    key={product.id}
                    delay={i * 100}
                    className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc((100%-3rem)/3)]"
                  >
                    <SoupCard product={product} />
                  </Reveal>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
