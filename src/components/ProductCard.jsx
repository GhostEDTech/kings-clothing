import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { formatPrice } from "@/lib/constants";

export function ProductCard({ product, index = 0 }) {
  return (
    <article className="group animate-rise" style={{ animationDelay: `${index * 60}ms` }}>
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="bg-cream/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink">
              {product.badge}
            </span>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-ink/85 text-brass opacity-0 transition duration-200 group-hover:opacity-100">
              <ArrowUpRight size={15} />
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-ink/90 px-4 py-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
            <p className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.15em] text-cream">
              <span>Tap to view</span>
              <span className="text-brass">WhatsApp to buy</span>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-ink/15 py-4">
          <div>
            <p className="font-body text-sm font-medium text-ink">{product.name}</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
              {product.category} &middot; {product.size}
            </p>
          </div>
          <p className="font-display text-lg font-semibold text-ink">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  );
}
