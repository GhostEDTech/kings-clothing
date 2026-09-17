import { ExternalLink, MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/constants";

export function ContactPage() {
  return (
    <section className="bg-sage py-16 sm:py-24">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="eyebrow text-brass">Come through</p>
            <h1 className="mt-4 font-display text-7xl font-semibold uppercase leading-[0.82] tracking-[-0.08em] text-ink sm:text-9xl">
              Let&apos;s
              <br />
              <span className="italic text-brass">talk.</span>
            </h1>
            <p className="mt-8 max-w-lg font-body text-base leading-8 text-ink/60">
              Need a size, sourcing a particular piece, or ready to make something yours? We keep
              it personal on WhatsApp.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 bg-ink px-7 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream transition hover:bg-brass hover:text-ink">
              <MessageCircle size={16} /> Start a WhatsApp chat
            </a>
          </div>
          <div className="border-l border-ink/15 pl-7 sm:pl-12">
            <p className="eyebrow text-brass">The details</p>
            <div className="mt-8 grid gap-8">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                  WhatsApp / main line
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block font-display text-3xl text-ink hover:text-brass">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                  Also available
                </p>
                <p className="mt-2 font-body text-base text-ink/70">
                  Wholesale &amp; retail
                  <br />
                  Video call before payment
                </p>
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40">
                  Social
                </p>
                <a
                  href="https://www.tiktok.com/@celebritythriftking"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-body text-base text-ink hover:text-brass">
                  @celebritythriftking <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div className="mt-14 border-t border-ink/15 pt-6">
              <p className="font-display text-2xl italic text-ink">
                &ldquo;Good clothes find good people.&rdquo;
              </p>
              <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-ink/40">
                &mdash; CTK motto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
