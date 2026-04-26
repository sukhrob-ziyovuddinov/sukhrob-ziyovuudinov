# ASII Continuity Pilot

Investor-grade prototype for an AI-native Financial Crime Intelligence continuity workflow built for UAE/MENA regulated institutions.

## Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Reusable component primitives inspired by shadcn/ui patterns
- Mock JSON/TS data (no external paid APIs)

## Product Flow
1. **Landing / Pilot Overview**: positioning, workflow steps, and value pillars.
2. **Case Intelligence Dashboard**: single-case view with risk context and timeline.
3. **Fragmented Signals Module**: unified intake from multi-source alerts.
4. **Case Continuity Engine**: linked timeline + explainable continuity reasoning.
5. **Analyst Review Workspace**: human-in-the-loop validation and decisions.
6. **Regulator-Ready Report Generator**: preview + mock PDF/DOCX export actions.
7. **Pilot Success Criteria**: 4–6 week enterprise pilot framing and metrics.

## Setup
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Mocked vs Production-Ready
### Mocked in this prototype
- Data ingestion pipelines and connectors.
- Risk-scoring models and entity graph backend.
- Export services (PDF/DOCX actions are mocked UI triggers).
- Authentication, role-based access control, and audit persistence.

### Production-ready foundations
- Modular page architecture with reusable UI components.
- Clear workflow narrative for investor and enterprise demos.
- Structured case data model examples aligned to compliance operations.
- Explainability-first UI patterns with human-in-the-loop controls.

## Suggested Next Engineering Steps
1. Add API routes + database for persistent case records and audit trails.
2. Implement configurable risk logic with model/version traceability.
3. Add SSO, RBAC, and tenancy for bank/VASP enterprise deployment.
4. Build export microservice with signed report packages.
5. Integrate regional watchlists, Travel Rule providers, and sanctions feeds.
