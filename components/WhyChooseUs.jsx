import { ChefHat, Clock, Leaf, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const reasons = [
  {
    icon: Clock,
    title: "Freshly Prepared Soup",
    text: "Broth is started fresh every morning — never reheated from yesterday.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    text: "Fresh chicken and mutton, real bones, whole spices and garden-fresh herbs.",
  },
  {
    icon: ChefHat,
    title: "Delicious Taste",
    text: "Home-style recipes slow-cooked for deep, rich flavour in every spoonful.",
  },
  {
    icon: Sparkles,
    title: "Quick Order Service",
    text: "Order in under a minute on WhatsApp or by phone — no app, no sign-up.",
  },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="why-title"
          eyebrow="Why choose us"
          title="Small shop,"
          accent="big flavour."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 100}
              className="group rounded-[1.75rem] border border-white/5 bg-coal p-8 transition-colors duration-500 hover:border-ember/30 hover:bg-char"
            >
              <span className="grid size-14 place-items-center rounded-2xl bg-ember/10 text-ember transition-all duration-500 group-hover:bg-ember group-hover:text-ink">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-7 font-display text-xl font-medium text-cream">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand">{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
