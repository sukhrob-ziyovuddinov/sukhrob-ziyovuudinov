import Link from "next/link";

const workflow = [
  "Signal intake",
  "Context enrichment",
  "Analyst review",
  "MLRO escalation",
  "Reporting preparation"
];

const principles = [
  "Overlay, not rip-and-replace.",
  "Human-reviewed decisioning.",
  "Evidence-supported operating trail.",
  "MLRO-reviewable reporting preparation."
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-blue-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <section className="rounded-2xl border border-cyan-400/20 bg-slate-900/70 p-10 shadow-2xl shadow-cyan-900/20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">ASII · UAE & MENA</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">AI-native Financial Crime Intelligence Infrastructure.</h1>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-blue-100/80">ASII helps regulated institutions move from fragmented Travel Rule, crypto-risk, sanctions, adverse media, and case signals into structured, MLRO-reviewable case continuity.</p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">Problem</h2>
            <p className="mt-3 text-blue-100/80">Financial crime teams do not lack tools. They lose continuity.</p>
          </article>
          <article className="rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold text-white">ASII Continuity Pilot</h2>
            <p className="mt-3 text-blue-100/80">Travel Rule + Crypto Risk + Case Continuity.</p>
          </article>
        </section>

        <section className="mt-12 rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold text-white">Workflow</h2>
          <ol className="mt-4 grid gap-3 md:grid-cols-5">
            {workflow.map((step) => (
              <li key={step} className="rounded-lg border border-cyan-400/20 bg-slate-950/70 p-4 text-sm text-blue-100/85">{step}</li>
            ))}
          </ol>
        </section>

        <section className="mt-12 rounded-xl border border-blue-300/15 bg-slate-900/50 p-6">
          <h2 className="text-xl font-semibold text-white">Operating principles</h2>
          <ul className="mt-4 space-y-2 text-blue-100/80">
            {principles.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-xl border border-cyan-400/20 bg-cyan-950/20 p-6">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-blue-100/80">For institution-level conversations in UAE and MENA, connect with ASII on LinkedIn.</p>
          <Link href="https://www.linkedin.com/company/asii-intelligence/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-md border border-cyan-300/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10">Visit ASII on LinkedIn</Link>
        </section>
      </div>
    </main>
  );
}
