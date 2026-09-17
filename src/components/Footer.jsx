import { ArrowRight, ExternalLink, Instagram } from "lucide-react";
import { Link } from "wouter";
import { Logo } from "@/components/Logo";
import { whatsappLink } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-cream sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs font-body text-sm leading-7 text-cream/55">
              Curated vintage and pre-loved pieces for people who dress like they have somewhere
              to be.
            </p>
          </div>
          <div>
            <p className="eyebrow text-brass">Explore</p>
            <div className="mt-5 grid gap-3 font-body text-sm text-cream/60">
              <Link href="/shop" className="hover:text-brass">
                Latest drop
              </Link>
              <Link href="/#story" className="hover:text-brass">
                Our story
              </Link>
              <Link href="/contact" className="hover:text-brass">
                Contact us
              </Link>
            </div>
          </div>
          <div>
            <p className="eyebrow text-brass">Follow along</p>
            <div className="mt-5 grid gap-3 font-body text-sm text-cream/60">
              <a
                href="https://www.tiktok.com/@celebritythriftking"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brass">
                TikTok <ExternalLink size={13} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brass">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow text-brass">Orders</p>
            <p className="mt-5 font-body text-sm leading-6 text-cream/60">
              Wholesale and retail available.
              <br />
              Video call before payment.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brass">
              WhatsApp us <ArrowRight size={13} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-cream/35 sm:flex-row">
          <span>&copy; 2026 Celebrity Thrift King</span>
          <span>All pieces are one of one</span>
        </div>
      </div>
    </footer>
  );
}
