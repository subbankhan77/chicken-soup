import Image from "next/image";
import { ArrowRight, Clock, Flame, Leaf, Phone } from "lucide-react";
import { shop } from "@/data/shop";
import { telLink } from "@/lib/contact";
import OrderButton from "./OrderButton";

const highlights = [
  { icon: Flame, label: "Served piping hot" },
  { icon: Leaf, label: "Fresh every day" },
  { icon: Clock, label: "Quick WhatsApp orders" },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-28 pb-24 sm:items-center sm:pb-16">
      <Image
        src="/images/hero.jpg"
        alt="A steaming bowl of spicy soup with chillies and fresh herbs on a dark table"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] sm:object-center"
      />
      {/* Overlays keep the text readable on any screen size */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30 sm:bg-gradient-to-r sm:from-ink sm:via-ink/75 sm:to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-ember/30 bg-ember/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-ember backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-ember" />
            </span>
            Freshly made today
          </p>

          <h1
            id="hero-title"
            className="animate-fade-up font-display text-[2.6rem] leading-[1.02] font-medium tracking-tight text-cream [animation-delay:120ms] min-[360px]:text-5xl sm:text-7xl lg:text-[5.5rem] [@media(max-height:500px)]:text-5xl"
          >
            Fresh &amp; Hot Soup,{" "}
            <em className="block font-normal text-ember italic">Made With Love.</em>
          </h1>

          <p className="mt-7 max-w-lg animate-fade-up text-lg leading-relaxed text-cream/75 [animation-delay:240ms]">
            {shop.description} Order in a minute on WhatsApp, or simply give us a call.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col gap-3 [animation-delay:360ms] sm:flex-row sm:gap-4">
            <OrderButton className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-8 py-4 text-base font-bold text-ink shadow-xl shadow-ember/25 transition-all hover:-translate-y-0.5 hover:bg-cream">
              Order Now
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </OrderButton>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-white/5 px-8 py-4 text-base font-bold text-cream backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-ember hover:text-ember"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <ul className="mt-12 flex animate-fade-up flex-wrap gap-x-7 gap-y-3 [animation-delay:480ms]">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-cream/70">
                <Icon className="size-4 text-ember" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
