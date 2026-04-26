import { Shell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { timeline } from "@/data/mock-data";

export default function ContinuityPage() {
  return (
    <Shell active="/continuity">
      <h2 className="mb-4 text-2xl font-semibold text-white">Case Continuity Engine</h2>
      <Card>
        <div className="grid gap-3 text-sm text-blue-100/80 md:grid-cols-3">
          <p><strong>Entity resolution:</strong> Unified customer, wallet, and counterparty identities.</p>
          <p><strong>Event clustering:</strong> Linked events by temporal and relationship proximity.</p>
          <p><strong>Duplicate detection:</strong> Merged repeated alerts across TM and sanctions layers.</p>
          <p><strong>Context enrichment:</strong> Added ownership, corridor, and media context.</p>
          <p><strong>Risk logic:</strong> Weighted rule + graph + analyst-confirmed evidence.</p>
          <p><strong>Continuity score:</strong> <span className="text-accent">91/100</span></p>
        </div>
      </Card>
      <div className="mt-4 space-y-3">
        {timeline.map((item) => (
          <Card key={item.time}>
            <p className="text-white font-medium">{item.time} — {item.event}</p>
            <p className="text-sm text-blue-100/75 mt-1">Why this belongs in the same case: {item.reasoning}</p>
          </Card>
        ))}
      </div>
    </Shell>
  );
}
