import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ADMIN_CODE, AUTH_KEY } from "@/lib/constants";

export function AdminLogin({ onUnlock }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    if (code === ADMIN_CODE) {
      sessionStorage.setItem(AUTH_KEY, "true");
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <section className="grid min-h-[72vh] place-items-center bg-cream px-4 py-20">
      <form
        onSubmit={submit}
        className="w-full max-w-md border border-ink/15 bg-white p-8 shadow-[12px_12px_0_#d5b26a] sm:p-12">
        <p className="eyebrow text-brass">J.S.K / private rail</p>
        <h1 className="mt-4 font-display text-5xl font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-ink">
          Admin
          <br />
          <span className="italic text-brass">access.</span>
        </h1>
        <p className="mt-6 font-body text-sm leading-6 text-ink/55">
          Manage the current drop from this browser. This lightweight lock is for the no-backend
          launch phase.
        </p>
        <label className="mt-8 block font-mono text-[9px] uppercase tracking-[0.16em] text-ink/45">
          Access code
          <input
            value={code}
            onChange={(event) => {
              setCode(event.target.value.toUpperCase());
              setError(false);
            }}
            type="password"
            className="mt-2 block w-full border-b border-ink/25 bg-transparent px-0 py-3 font-mono text-sm tracking-[0.3em] text-ink outline-none focus:border-brass"
            placeholder="········"
          />
        </label>
        {error && (
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-red-700">
            That code did not open this rail.
          </p>
        )}
        <button className="mt-8 flex w-full items-center justify-center gap-3 bg-ink px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cream transition hover:bg-brass hover:text-ink">
          Unlock admin <ArrowRight size={15} />
        </button>
      </form>
    </section>
  );
}
