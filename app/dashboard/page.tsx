import { Shell } from "@/components/layout/shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { timeline } from "@/data/mock-data";

export default function DashboardPage() {
  return (
    <Shell active="/dashboard">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-white">Case UAE-AML-24022</h2><Badge>Active Case</Badge>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
            <p>Customer/Entity Profile: Al Noor Digital Assets LLC (UAE VASP)</p>
            <p>Risk Score: <span className="text-red-300">87/100</span></p>
            <p>Alert Sources: TM, sanctions screening, adverse media, VASP analytics</p>
            <p>Sanctions Proximity: 2-hop exposure via correlated counterparties</p>
            <p>Adverse Media Hits: 3</p>
            <p>Crypto Wallet Exposure: High - mixer adjacency</p>
            <p>Jurisdiction Risk: UAE ↔ high-risk corridor</p>
            <p>Decision Status: Pending analyst approval</p>
            <p>Escalation Recommendation: Escalate to MLRO for STR consideration</p>
          </div>
          <h3 className="mt-5 mb-2 font-medium text-blue-100">Timeline of events</h3>
          <ul className="space-y-2 text-sm text-blue-100/80">
            {timeline.map((t) => <li key={t.time}><span className="text-accent">{t.time}</span> — {t.event}</li>)}
          </ul>
        </Card>
        <Card>
          <h3 className="text-white font-medium">Related Entities</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100/75">
            <li>Desert Bridge Holdings FZE (beneficial owner overlap)</li>
            <li>Counterparty wallet cluster C-4471</li>
            <li>Importer node in Levant corridor chain</li>
          </ul>
          <h3 className="mt-4 text-white font-medium">Analyst Notes</h3>
          <p className="mt-2 text-sm text-blue-100/75">Recurring ownership updates and incomplete Travel Rule payload suggest structured obfuscation. Human review confirms alerts are not isolated.</p>
        </Card>
      </div>
    </Shell>
  );
}
