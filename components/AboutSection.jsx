import Image from "next/image";
import { Heart } from "lucide-react";
import { shop } from "@/data/shop";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-coal/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/5 lg:aspect-square">
            <Image
              src="/images/about.jpg"
              alt="Fresh spices and a pan of home-style cooking"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-3 -bottom-8 max-w-[13rem] rounded-2xl border border-white/10 bg-ink/90 p-4 shadow-2xl backdrop-blur-md sm:max-w-[15rem] sm:rounded-3xl sm:p-6 lg:-right-6">
            <Heart className="size-5 fill-ember text-ember sm:size-6" aria-hidden="true" />
            <p className="mt-2 font-display text-base leading-snug text-cream italic sm:mt-3 sm:text-lg">
              &ldquo;Every bowl is one we&rsquo;d serve our own family.&rdquo;
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            id="about-title"
            align="left"
            eyebrow="About our shop"
            title="A neighbourhood"
            accent="soup kitchen."
          />
          <Reveal delay={120} className="mt-6 space-y-5 text-base leading-relaxed text-sand sm:text-lg">
            <p>
              {shop.name} is a small, local soup shop with one simple idea: honest, home-style chicken and mutton
              soups, made fresh every single day.
            </p>
            <p>
              Our broths simmer for hours with real bones, fresh meat and whole spices — no shortcuts and no
              ready-made powders. Whether you need something light and soothing or rich and hearty, there&rsquo;s a bowl
              here for you.
            </p>
            <p className="text-cream">Drop by, give us a call, or send your order on WhatsApp — we&rsquo;ll have it hot and ready.</p>
          </Reveal>

          <Reveal delay={220} as="dl" className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {[
              ["100%", "Fresh daily"],
              ["6", "Signature soups"],
              ["0", "Preservatives"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-3xl font-medium text-ember sm:text-4xl">{value}</dd>
                <dd className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-sand">{label}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
