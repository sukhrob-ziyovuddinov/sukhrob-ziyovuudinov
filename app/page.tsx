import { Shell } from "@/components/layout/shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { workflowSteps } from "@/data/mock-data";

export default function Page() {
  return (
    <Shell active="/">
      <section className="mb-8">
        <Badge>Investor + Enterprise Demo</Badge>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">ASII Continuity Pilot</h1>
        <p className="mt-2 text-lg text-blue-100/85">One workflow. One team. One pilot cycle. Clear success criteria.</p>
        <p className="mt-4 max-w-4xl text-sm text-blue-100/70">ASII is positioned as a financial crime intelligence infrastructure layer for UAE and MENA institutions, creating continuity across fragmented compliance signals and turning them into explainable, regulator-ready case outcomes.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {workflowSteps.map((step, i) => (
          <Card key={step.title}>
            <p className="text-xs text-accent">Step {i + 1}</p>
            <h3 className="mt-1 text-lg font-medium text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-blue-100/70">{step.description}</p>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["Proof", "Workflow clarity, defensible reporting"],
          ["Trust", "Explainability, auditability, human-in-the-loop"],
          ["Commercial Entry", "Low-friction pilot, no rip-and-replace"]
        ].map(([title, copy]) => (
          <Card key={title}><h3 className="text-xl font-medium text-white">{title}</h3><p className="mt-2 text-sm text-blue-100/70">{copy}</p></Card>
        ))}
      </section>
    </Shell>
  );
}
