import { ReactNode } from "react";
import { cn } from "@/components/ui/utils";

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return <span className={cn("inline-flex rounded-full border border-blue-300/25 bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-100", className)}>{children}</span>;
}
