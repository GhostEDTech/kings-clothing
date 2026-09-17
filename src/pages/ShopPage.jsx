import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";

export function ShopPage({ products }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All pieces");

  const categories = [
    "All pieces",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filtered = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "All pieces" || product.category === category) &&
          product.name.toLowerCase().includes(query.toLowerCase())
      ),
    [products, category, query]
  );

  return (
    <section className="min-h-screen bg-cream py-16 sm:py-24">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 border-b border-ink/15 pb-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-brass">J.S.K / Current drop</p>
            <h1 className="mt-3 font-display text-6xl font-semibold uppercase leading-[0.85] tracking-[-0.07em] text-ink sm:text-8xl">
              The
              <br />
              <span className="italic text-brass">edit.</span>
            </h1>
            <p className="mt-5 max-w-md font-body text-sm leading-6 text-ink/55">
              Every piece is hand-selected and available until it finds its person. Tap a piece to
              enquire on WhatsApp.
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center gap-3 border-b border-ink/30 py-3">
            <Search size={16} className="text-ink/45" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the rack"
              className="w-full bg-transparent font-body text-sm text-ink outline-none placeholder:text-ink/35"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 py-7">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`border px-4 py-2 font-mono text-[9px] uppercase tracking-[0.16em] transition ${
                category === item
                  ? "border-ink bg-ink text-cream"
                  : "border-ink/20 text-ink/55 hover:border-brass hover:text-ink"
              }`}>
              {item}
            </button>
          ))}
          <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.15em] text-ink/40">
            {filtered.length} pieces
          </span>
        </div>

        {filtered.length ? (
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-ink/20 py-24 text-center">
            <p className="font-display text-3xl text-ink">Nothing on this rail.</p>
            <p className="mt-3 font-body text-sm text-ink/50">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
