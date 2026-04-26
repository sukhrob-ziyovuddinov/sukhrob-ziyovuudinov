import { Shell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";

export default function SuccessPage() {
  return (
    <Shell active="/success">
      <h2 className="mb-4 text-2xl font-semibold text-white">Pilot Success Criteria</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p><strong>Duration:</strong> 4 to 6 weeks</p>
          <p className="mt-2"><strong>Scope:</strong> one workflow, one team, one defined case type</p>
          <p className="mt-4 text-sm text-blue-100/75">Low-friction pilot. No rip-and-replace. Built to prove operational value before enterprise expansion.</p>
        </Card>
        <Card>
          <h3 className="text-white font-medium">Success Metrics</h3>
          <ul className="mt-2 list-disc pl-5 text-sm text-blue-100/75 space-y-1">
            <li>Reduction in duplicate review</li>
            <li>Faster case understanding</li>
            <li>Clearer escalation rationale</li>
            <li>Audit-ready documentation</li>
            <li>Analyst adoption</li>
            <li>Integration effort kept low</li>
          </ul>
        </Card>
      </div>
    </Shell>
  );
}
