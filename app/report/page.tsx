import { Shell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";

const sections = ["Case summary", "Risk rationale", "Evidence table", "Timeline of events", "Sources reviewed", "Analyst decisions", "Explainability section", "Audit log", "Recommended next action"];

export default function ReportPage() {
  return (
    <Shell active="/report">
      <h2 className="mb-4 text-2xl font-semibold text-white">Regulator-Ready Report Generator</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <ul className="space-y-2 text-sm text-blue-100/80">{sections.map((s) => <li key={s}>• {s}</li>)}</ul>
        </Card>
        <Card>
          <h3 className="text-white font-medium">Export Actions</h3>
          <div className="mt-3 space-y-2">
            <button className="w-full rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-sm">Export PDF (Mock)</button>
            <button className="w-full rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-sm">Export DOCX (Mock)</button>
          </div>
        </Card>
      </div>
    </Shell>
  );
}
