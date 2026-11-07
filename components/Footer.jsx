import { MapPin, Phone } from "lucide-react";
import { shop } from "@/data/shop";
import { greetingMessage, telLink, whatsappLink } from "@/lib/contact";
import { navLinks } from "@/lib/navigation";
import { photoCredits } from "@/data/photoCredits";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-coal pb-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand">{shop.description}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={telLink}
              aria-label={`Call ${shop.name}`}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-cream transition-colors hover:border-ember hover:bg-ember hover:text-ink"
            >
              <Phone className="size-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(greetingMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message ${shop.name} on WhatsApp`}
              className="grid size-11 place-items-center rounded-full border border-white/10 text-cream transition-colors hover:border-[#25D366] hover:bg-[#25D366] hover:text-ink"
            >
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Explore</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-block py-2 text-sm text-cream/80 transition-colors hover:text-ember">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ember">Get in touch</h2>
          <ul className="mt-4 space-y-1 text-sm text-cream/80">
            <li>
              <a href={telLink} className="flex items-center gap-3 py-2 transition-colors hover:text-ember">
                <Phone className="size-4 text-ember" aria-hidden="true" />
                {shop.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(greetingMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 transition-colors hover:text-ember"
              >
                <WhatsAppIcon className="size-4 text-ember" />
                Chat on WhatsApp
              </a>
            </li>
            {shop.locations.map((loc) => (
              <li key={loc.label}>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 py-2 transition-colors hover:text-ember"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-ember" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-bold text-ember">
                      {loc.label} · {loc.time}
                    </span>
                    {loc.address}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-sand/70 sm:px-8">
          <p className="text-center md:text-left">© {year} {shop.name}. All rights reserved.</p>

          <details className="group mt-3 text-center md:text-left">
            <summary className="inline-block cursor-pointer py-2 underline-offset-2 hover:text-ember hover:underline">
              Photo credits
            </summary>
            <ul className="mt-2 grid gap-x-8 gap-y-1.5 text-left sm:grid-cols-2 lg:grid-cols-3">
              {photoCredits.map((c) => (
                <li key={c.dish}>
                  <a href={c.source} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
                    {c.dish}
                  </a>{" "}
                  by {c.author},{" "}
                  <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
                    {c.license}
                  </a>
                  {c.edited && " (colours edited)"}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
}
