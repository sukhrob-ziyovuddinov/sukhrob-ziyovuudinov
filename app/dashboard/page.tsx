"use client";

import { useMemo, useState } from "react";
import { Shell } from "@/components/layout/shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const caseId = "ASII-TR-001";

export default function DashboardPage() {
  const [caseOpened, setCaseOpened] = useState(false);
  const [aiSummary, setAiSummary] = useState(false);
  const [riskDrafted, setRiskDrafted] = useState(false);
  const [analystSaved, setAnalystSaved] = useState(false);
  const [escalated, setEscalated] = useState(false);
  const [sentToReport, setSentToReport] = useState(false);
  const [mlroPackGenerated, setMlroPackGenerated] = useState(false);
  const [completenessChecked, setCompletenessChecked] = useState(false);
  const [mlroApproved, setMlroApproved] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportBlocked, setExportBlocked] = useState(false);

  const evidenceCompleteness = useMemo(() => {
    if (mlroApproved) return 92;
    if (analystSaved) return 78;
    return 62;
  }, [analystSaved, mlroApproved]);

  const caseStatus = mlroApproved ? "MLRO Approved" : escalated ? "Awaiting MLRO Review" : "Analyst Review";

  const triggerExport = () => {
    if (!mlroApproved || !completenessChecked) {
      setExportBlocked(true);
      return;
    }
    setExportBlocked(false);
    setShowExportModal(true);
  };

  return (
    <Shell active="/dashboard">
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-white">Travel Rule Queue</h2>
            <Badge>Demo Case Workflow</Badge>
          </div>
          <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
            <p>Selected case: <span className="text-accent">{caseOpened ? caseId : "Not opened"}</span></p>
            <p>Case status: <span className="text-accent">{caseStatus}</span></p>
            <p>Evidence completeness: <span className="text-accent">{evidenceCompleteness}%</span></p>
            <p>Report routing: <span className="text-accent">{sentToReport ? "Sent to Report Builder" : "Pending"}</span></p>
          </div>

          <h3 className="mb-2 mt-5 font-medium text-blue-100">Demo Journey Controls</h3>
          <div className="grid gap-2 md:grid-cols-2">
            <button onClick={() => setCaseOpened(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Open {caseId} case</button>
            <button onClick={() => caseOpened && setAiSummary(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Generate AI Summary</button>
            <button onClick={() => aiSummary && setRiskDrafted(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Draft Risk Rationale</button>
            <button onClick={() => riskDrafted && setAnalystSaved(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Save Analyst Rationale</button>
            <button onClick={() => analystSaved && setEscalated(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Escalate to MLRO</button>
            <button onClick={() => escalated && setSentToReport(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Send to Report Builder</button>
            <button onClick={() => sentToReport && setMlroPackGenerated(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Generate MLRO Review Pack</button>
            <button onClick={() => mlroPackGenerated && setCompletenessChecked(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Run Completeness Check</button>
            <button onClick={() => completenessChecked && setMlroApproved(true)} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Mark MLRO Approved</button>
            <button onClick={triggerExport} className="rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-left text-sm">Export Pack</button>
          </div>
          {exportBlocked && <p className="mt-3 text-sm text-red-300">Export blocked until MLRO approval and completeness check are complete.</p>}
        </Card>

        <Card>
          <h3 className="font-medium text-white">Journey Checkpoints</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100/75">
            <li>Dashboard opens: ✅</li>
            <li>Travel Rule Queue opens: ✅</li>
            <li>Evidence: 62% → 78% after analyst save: {analystSaved ? "✅" : "Pending"}</li>
            <li>Status becomes Awaiting MLRO Review on escalation: {escalated ? "✅" : "Pending"}</li>
            <li>Evidence: 92% after MLRO approval: {mlroApproved ? "✅" : "Pending"}</li>
          </ul>
        </Card>
      </div>

      {showExportModal && (
        <div className="fixed inset-0 z-30 grid place-items-center bg-black/50 p-4">
          <Card className="w-full max-w-lg">
            <h3 className="text-lg font-semibold text-white">Demo Export Modal</h3>
            <p className="mt-2 text-sm text-blue-100/80">MLRO Review Pack export is a frontend-only mock in this demo environment.</p>
            <button onClick={() => setShowExportModal(false)} className="mt-4 rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2 text-sm">Close</button>
          </Card>
        </div>
      )}
    </Shell>
  );
}
