import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/Logo";
import { navItems, whatsappLink } from "@/lib/constants";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-cream backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <Logo compact />
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-mono text-[10px] uppercase tracking-[0.23em] transition-colors hover:text-brass ${
                location === item.href ? "text-brass" : "text-cream/65"
              }`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-brass/50 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brass transition-colors hover:bg-brass hover:text-ink sm:flex">
            <MessageCircle size={14} /> Order on WhatsApp
          </a>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center border border-white/15 text-cream lg:hidden"
            aria-label="Toggle menu">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-ink px-4 pb-5 pt-3 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 font-mono text-[10px] uppercase tracking-[0.23em] text-cream/70 hover:text-brass">
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-brass px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
            <MessageCircle size={14} /> Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
