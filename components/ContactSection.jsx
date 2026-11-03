import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { shop } from "@/data/shop";
import { greetingMessage, telLink, whatsappLink } from "@/lib/contact";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ember/10 text-ember">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">{label}</p>
        <div className="mt-1.5 text-base text-cream">{children}</div>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact & location"
          title="Come hungry,"
          accent="leave happy."
          description="Call us, message us on WhatsApp, or visit the shop. We reply to orders as quickly as we can."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <Reveal className="flex flex-col gap-8 rounded-[2rem] border border-white/5 bg-coal p-7 sm:p-10 lg:col-span-2">
            <InfoRow icon={Phone} label="Call the owner">
              <a
                href={telLink}
                className="inline-block py-1 font-display text-xl whitespace-nowrap transition-colors hover:text-ember min-[360px]:text-2xl"
              >
                {shop.phoneDisplay}
              </a>
            </InfoRow>

            <InfoRow icon={MapPin} label="Shop address">
              <address className="leading-relaxed not-italic">{shop.address}</address>
            </InfoRow>

            <InfoRow icon={Clock} label="Opening hours">
              <ul className="space-y-1">
                {shop.hours.map((h) => (
                  <li key={h.days}>
                    <span className="text-sand">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </InfoRow>

            <div className="mt-auto grid gap-3 sm:grid-cols-2">
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ember py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-cream"
              >
                <Phone className="size-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={whatsappLink(greetingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/5 bg-coal lg:col-span-3">
            {shop.mapsEmbedUrl ? (
              <iframe
                src={shop.mapsEmbedUrl}
                title={`Map showing the location of ${shop.name}`}
                className="absolute inset-0 size-full border-0 grayscale-[0.4] invert-[0.9] hue-rotate-180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <MapPlaceholder />
            )}

            <a
              href={shop.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-ink/85 px-5 py-3 text-sm font-bold text-cream backdrop-blur-md transition-colors hover:text-ember"
            >
              <MapPin className="size-4 text-ember" aria-hidden="true" />
              Open in Google Maps
              <ExternalLink className="size-3.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Shown until a real Google Maps embed URL is added in data/shop.js
function MapPlaceholder() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-cream) 1px, transparent 1px), linear-gradient(90deg, var(--color-cream) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div className="relative px-6 pb-16 text-center">
        <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-ember text-ink shadow-xl shadow-ember/30">
          <span className="absolute inset-0 animate-ping rounded-full bg-ember/40" aria-hidden="true" />
          <MapPin className="relative size-7" aria-hidden="true" />
        </span>
        <p className="mt-6 font-display text-2xl text-cream">Our location is coming soon</p>
        <p className="mt-2 text-sm text-sand">The map will appear here once the shop location is added.</p>
      </div>
    </div>
  );
}
