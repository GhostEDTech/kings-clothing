import { ArrowLeft, BadgeCheck, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { formatPrice, whatsappLink } from "@/lib/constants";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function ProductPage({ product }) {
  if (!product) return <NotFoundPage />;

  return (
    <section className="bg-cream py-12 sm:py-20">
      <div className="container">
        <Link
          href="/shop"
          className="mb-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55 hover:text-brass">
          <ArrowLeft size={14} /> Back to the edit
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative">
            <div className="aspect-[0.9] overflow-hidden bg-sand">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute left-4 top-4 bg-brass px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
              {product.badge}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-brass">{product.category} / one of one</p>
            <h1 className="mt-4 font-display text-6xl font-semibold uppercase leading-[0.86] tracking-[-0.07em] text-ink sm:text-8xl">
              {product.name}
            </h1>
            <p className="mt-7 max-w-lg font-body text-base leading-8 text-ink/60">
              {product.description}
            </p>
            <div className="my-9 grid max-w-lg grid-cols-3 border-y border-ink/15 py-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                  Price
                </p>
                <p className="mt-2 font-display text-2xl text-ink">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                  Size
                </p>
                <p className="mt-2 font-display text-2xl text-ink">{product.size}</p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink/40">
                  Condition
                </p>
                <p className="mt-2 font-display text-lg text-ink">{product.condition}</p>
              </div>
            </div>
            <a
              href={whatsappLink(product)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex max-w-sm items-center justify-center gap-3 bg-ink px-7 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream transition hover:bg-brass hover:text-ink">
              <MessageCircle size={16} /> Enquire on WhatsApp
            </a>
            <p className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ink/45">
              <BadgeCheck size={14} className="text-brass" /> Video call before payment available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
