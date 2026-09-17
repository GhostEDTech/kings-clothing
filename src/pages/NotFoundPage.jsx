import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function NotFoundPage() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-cream px-4 text-center">
      <div>
        <p className="eyebrow text-brass">404 / off the rack</p>
        <h1 className="mt-3 font-display text-7xl font-semibold uppercase tracking-[-0.08em] text-ink">
          Not found.
        </h1>
        <Link
          href="/shop"
          className="mt-7 inline-flex items-center gap-2 bg-ink px-6 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cream">
          Back to the edit <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
