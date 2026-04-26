import { Shell } from "@/components/layout/shell";
import { Card } from "@/components/ui/card";
import { signals } from "@/data/mock-data";

export default function SignalsPage() {
  return (
    <Shell active="/signals">
      <h2 className="mb-4 text-2xl font-semibold text-white">Fragmented Signals Module</h2>
      <div className="space-y-3">
        {signals.map((s) => (
          <Card key={s.id}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-medium text-white">{s.signal}</h3>
              <span className="text-xs text-blue-100/75">{s.id}</span>
            </div>
            <p className="mt-2 text-sm text-blue-100/80">{s.explanation}</p>
            <div className="mt-3 grid gap-2 text-xs text-blue-100/70 md:grid-cols-4">
              <p>Source: {s.source}</p><p>Timestamp: {s.timestamp}</p><p>Confidence: {Math.round(s.confidence * 100)}%</p><p>Severity: {s.severity}</p>
            </div>
          </Card>
        ))}
      </div>
    </Shell>
  );
}
