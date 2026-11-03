import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, accent, description, align = "center", id }) {
  const centered = align === "center";

  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-ember">
        <span className="h-px w-8 bg-ember/60" aria-hidden="true" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-ember/60" aria-hidden="true" />}
      </p>
      <h2 id={id} className="font-display text-4xl leading-[1.1] font-medium text-cream sm:text-5xl">
        {title} {accent && <em className="text-ember italic">{accent}</em>}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-sand sm:text-lg">{description}</p>}
    </Reveal>
  );
}
