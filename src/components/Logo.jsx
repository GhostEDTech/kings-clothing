import { Link } from "wouter";

export function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Celebrity Thrift King home">
      <span className="relative grid h-10 w-10 place-items-center border border-brass/60 text-brass transition-transform duration-200 group-hover:rotate-6">
        <span className="font-display text-lg italic">J</span>
        <span className="absolute -bottom-1 -right-1 bg-ink px-1 font-mono text-[7px] tracking-[0.16em] text-brass">
          SK
        </span>
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block font-display text-[15px] font-semibold uppercase leading-none tracking-[0.13em] text-cream">
          Celebrity
        </span>
        <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.3em] text-brass">
          Thrift King
        </span>
      </span>
    </Link>
  );
}
