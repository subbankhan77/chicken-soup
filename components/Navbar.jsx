"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { shop } from "@/data/shop";
import { telLink } from "@/lib/contact";
import { navLinks } from "@/lib/navigation";
import Logo from "./Logo";
import OrderButton from "./OrderButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid ? "border-b border-white/5 bg-ink/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-block py-3 text-sm font-medium text-cream/80 transition-colors after:absolute after:bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ember after:transition-all after:duration-300 hover:text-cream hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={telLink}
            className="hidden size-11 place-items-center rounded-full border border-white/10 text-cream transition-colors hover:border-ember hover:text-ember lg:grid"
            aria-label={`Call ${shop.name}`}
          >
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <OrderButton className="hidden rounded-full bg-ember px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-ember/20 transition-all hover:-translate-y-0.5 hover:bg-cream sm:inline-flex">
            Order Now
          </OrderButton>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full border border-white/10 text-cream md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!menuOpen}
      >
        <div className="min-h-0">
          <ul className="space-y-1 px-5 pt-2 pb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3.5 font-display text-2xl text-cream transition-colors hover:bg-white/5 hover:text-ember"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <OrderButton
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-full bg-ember py-4 text-base font-bold text-ink"
              >
                Order Now
              </OrderButton>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
