import { ReactNode } from "react";
import { cn } from "@/components/ui/utils";

export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("rounded-2xl border border-blue-400/20 bg-panel/80 p-5 shadow-[0_0_30px_rgba(47,111,255,0.12)]", className)}>{children}</div>;
}
