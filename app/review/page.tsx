import { Shell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";

const actions = [
  "Review AI-assisted insights",
  "Accept suggested links",
  "Reject weak links",
  "Add case notes",
  "Mark false positives",
  "Escalate case",
  "Request more evidence",
  "Approve report generation"
];

export default function ReviewPage() {
  return (
    <Shell active="/review">
      <h2 className="mb-4 text-2xl font-semibold text-white">Analyst Review Workspace</h2>
      <Card>
        <p className="text-sm text-blue-100/80">Human-in-the-loop controls keep analysts accountable: AI provides transparent recommendations with visible rationale, confidence, and evidence lineage.</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {actions.map((a) => <button key={a} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm text-blue-100 hover:bg-blue-500/20">{a}</button>)}
        </div>
      </Card>
    </Shell>
  );
}
