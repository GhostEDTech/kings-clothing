import { ArrowDownRight, ArrowRight, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { ProductCard } from "@/components/ProductCard";
import { whatsappLink } from "@/lib/constants";

export function HomePage({ products }) {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="absolute right-0 top-0 h-full w-[54%] bg-[radial-gradient(circle_at_60%_38%,rgba(190,146,62,0.3),transparent_36%),linear-gradient(110deg,transparent,rgba(255,255,255,0.04))]" />
        <div className="container relative grid min-h-[690px] items-center gap-10 py-16 lg:grid-cols-[1fr_0.84fr] lg:py-24">
          <div className="max-w-xl">
            <p className="eyebrow mb-7 text-brass">
              <Sparkles size={13} className="inline-block mr-2" />
              The new standard of secondhand
            </p>
            <h1 className="font-display text-[clamp(4.5rem,10vw,9.4rem)] font-semibold uppercase leading-[0.78] tracking-[-0.075em]">
              Rare
              <br />
              <span className="pl-[0.72em] italic text-brass">finds.</span>
              <br />
              Right now.
            </h1>
            <p className="mt-9 max-w-md font-body text-base leading-7 text-cream/65">
              Curated vintage, streetwear and luxury thrift from the closet of the culture. No
              restocks. No repeats. Just the one.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 bg-brass px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition duration-200 hover:bg-cream">
                Shop the drop <ArrowDownRight size={15} />
              </Link>
              <Link
                href="/#story"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/60 hover:text-brass">
                How it works <ChevronRight size={14} className="ml-1 inline" />
              </Link>
            </div>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-4 border-t border-white/15 pt-6">
              <div>
                <p className="font-display text-2xl text-brass">01</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-cream/45">
                  Curated piece
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-brass">02</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-cream/45">
                  WhatsApp order
                </p>
              </div>
              <div>
                <p className="font-display text-2xl text-brass">03</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-cream/45">
                  Delivered to you
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[480px] lg:justify-self-end">
            <div className="absolute -left-7 top-14 z-10 hidden h-24 w-24 rounded-full border border-brass/55 sm:grid place-items-center text-center sm:grid">
              <span className="font-mono text-[8px] uppercase leading-4 tracking-[0.17em] text-brass">
                Wear it
                <br />
                well
              </span>
            </div>
            <div className="relative aspect-[0.83] overflow-hidden bg-sand shadow-2xl shadow-black/30">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1300&q=88"
                alt="Editorial vintage streetwear styling"
                className="h-full w-full object-cover grayscale-[0.12] transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.2em] text-cream/75">
                J.S.K / Vol. 01 / 2026
              </p>
            </div>
            <div className="absolute -bottom-7 -right-5 hidden bg-brass p-5 sm:block">
              <p className="font-mono text-[9px] uppercase leading-4 tracking-[0.16em] text-ink">
                Wholesale
                <br />
                & retail
                <br />
                <span className="opacity-60">available</span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-center gap-4 border-t border-white/10 bg-ink/45 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-cream/40">
          <span className="text-brass">Scroll to explore</span>
          <span className="h-px w-16 bg-brass/50" />
          <span>New pieces added weekly</span>
        </div>
      </section>

      <section className="bg-cream py-24" id="drop">
        <div className="container">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-brass">The latest edit</p>
              <h2 className="mt-3 font-display text-5xl font-semibold uppercase tracking-[-0.06em] text-ink sm:text-7xl">
                Fresh off
                <br />
                <span className="italic text-brass">the rack.</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="group flex items-center gap-3 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/65 hover:text-brass">
              View all pieces{" "}
              <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/20 transition group-hover:border-brass group-hover:bg-brass">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage py-24" id="story">
        <div className="container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative max-w-md">
            <div className="absolute -left-3 -top-3 h-16 w-16 border-l border-t border-brass" />
            <img
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=85"
              alt="Vintage clothing rack"
              className="aspect-[0.88] w-full object-cover grayscale-[0.18]"
            />
            <div className="absolute -bottom-5 -right-5 bg-ink px-5 py-4 text-cream">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em]">Since 2019</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-brass">More than a thrift store</p>
            <h2 className="mt-4 max-w-xl font-display text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] text-ink sm:text-7xl">
              Good clothes.
              <br />
              <span className="italic text-brass">Good energy.</span>
            </h2>
            <p className="mt-7 max-w-lg font-body text-base leading-8 text-ink/65">
              Celebrity Thrift King is a love letter to clothes with a past life. We hunt down the
              pieces that make a fit feel personal &mdash; the jackets with history, the denim
              with the perfect fade, the tees nobody else will have.
            </p>
            <div className="mt-9 grid max-w-lg grid-cols-2 gap-6 border-t border-ink/15 pt-6 sm:grid-cols-4">
              <div>
                <p className="font-display text-3xl text-ink">7K+</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.13em] text-ink/50">
                  Community
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">100%</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.13em] text-ink/50">
                  One-offs
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">01</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.13em] text-ink/50">
                  DM away
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-ink">&infin;</p>
                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.13em] text-ink/50">
                  Good fits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brass py-16">
        <div className="container flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-ink/60">Looking for something specific?</p>
            <h2 className="mt-2 font-display text-4xl font-semibold uppercase tracking-[-0.05em] text-ink sm:text-5xl">
              Say less. Message us.
            </h2>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-ink/50 px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink transition hover:bg-ink hover:text-brass">
            <MessageCircle size={16} /> WhatsApp the team
          </a>
        </div>
      </section>
    </>
  );
}
