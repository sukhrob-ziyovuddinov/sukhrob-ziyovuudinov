export const workflowSteps = [
  {
    title: "Fragmented Signals",
    description: "Different alerts, systems, and data sources create noise, gaps, and duplication."
  },
  {
    title: "Case Continuity",
    description: "ASII connects entities, events, alerts, and context into one continuous case timeline."
  },
  {
    title: "Analyst Review",
    description: "Analysts receive full context, AI-assisted insights, and explainable logic."
  },
  {
    title: "Regulator-Ready Reporting",
    description: "Structured, explainable, audit-ready reports for compliance and regulatory review."
  }
];

export const signals = [
  { id: "SIG-101", signal: "Transaction monitoring alert", source: "Core Banking TM", timestamp: "2026-04-22 08:11 GST", confidence: 0.88, severity: "High", explanation: "Rapid inbound/outbound AED flows inconsistent with expected SME profile." },
  { id: "SIG-102", signal: "Sanctions screening alert", source: "Watchlist Engine", timestamp: "2026-04-22 08:14 GST", confidence: 0.71, severity: "Medium", explanation: "Counterparty alias overlaps 82% with sanctioned entity transliteration." },
  { id: "SIG-103", signal: "Adverse media article", source: "Open Source Intel", timestamp: "2026-04-22 09:02 GST", confidence: 0.79, severity: "Medium", explanation: "Regional media links beneficial owner to procurement fraud probe." },
  { id: "SIG-104", signal: "Crypto wallet risk flag", source: "VASP Analytics", timestamp: "2026-04-22 09:19 GST", confidence: 0.91, severity: "High", explanation: "Wallet connected to mixer cluster and sanctioned bridge interactions." },
  { id: "SIG-105", signal: "Travel Rule data gap", source: "VASP Gateway", timestamp: "2026-04-22 10:05 GST", confidence: 0.76, severity: "Medium", explanation: "Originator VASP missing verified beneficiary institution details." },
  { id: "SIG-106", signal: "High-risk jurisdiction flag", source: "Geo-Risk Model", timestamp: "2026-04-22 10:23 GST", confidence: 0.84, severity: "High", explanation: "Payments routed through layered entities in elevated-risk corridor." },
  { id: "SIG-107", signal: "Internal investigation note", source: "Compliance Team", timestamp: "2026-04-22 11:08 GST", confidence: 0.81, severity: "Medium", explanation: "Prior KYC refresh identified opaque beneficial ownership changes." }
];

export const timeline = [
  { time: "08:11", event: "TM alert created", reasoning: "Matches customer ID + account + counterparty route." },
  { time: "08:14", event: "Sanctions fuzzy match linked", reasoning: "Entity resolution engine maps shared alias and passport fragment." },
  { time: "09:02", event: "Adverse media ingested", reasoning: "Name graph clustering ties article subjects to same beneficial owner." },
  { time: "09:19", event: "Wallet risk correlated", reasoning: "Wallet attribution points to same legal entity and payment memo." },
  { time: "10:05", event: "Travel Rule gap detected", reasoning: "Duplicate detection merges with existing transfer chain." },
  { time: "10:23", event: "Jurisdiction flag enriched", reasoning: "Context engine adds corridor risk and historic pattern score." },
  { time: "11:08", event: "Investigator note attached", reasoning: "Human note confirms repeated ownership opacity." }
];
