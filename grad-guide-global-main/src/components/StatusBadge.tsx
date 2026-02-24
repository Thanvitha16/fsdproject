import { Badge } from "@/components/ui/badge";
import type { ApplicationStatus } from "@/data/mockData";

const statusConfig: Record<ApplicationStatus, { label: string; className: string }> = {
  applied: { label: "Applied", className: "bg-status-applied/10 text-status-applied border-status-applied/30" },
  shortlisted: { label: "Shortlisted", className: "bg-status-shortlisted/10 text-status-shortlisted border-status-shortlisted/30" },
  interview: { label: "Interview", className: "bg-status-interview/10 text-status-interview border-status-interview/30" },
  selected: { label: "Selected", className: "bg-status-selected/10 text-status-selected border-status-selected/30" },
  rejected: { label: "Rejected", className: "bg-status-rejected/10 text-status-rejected border-status-rejected/30" },
};

export function StatusBadge({ status }: { status: ApplicationStatus }) {
  const config = statusConfig[status];
  return (
    <Badge variant="outline" className={`${config.className} font-medium text-xs`}>
      {config.label}
    </Badge>
  );
}

const steps: ApplicationStatus[] = ["applied", "shortlisted", "interview", "selected"];

export function StatusTracker({ currentStatus }: { currentStatus: ApplicationStatus }) {
  const currentIndex = currentStatus === "rejected" ? -1 : steps.indexOf(currentStatus);

  return (
    <div className="flex items-center gap-1 w-full">
      {steps.map((step, i) => {
        const isActive = i <= currentIndex;
        const isRejected = currentStatus === "rejected";
        return (
          <div key={step} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  isRejected
                    ? "bg-status-rejected/10 text-status-rejected"
                    : isActive
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 capitalize">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-0.5 flex-1 -mt-4 ${isActive && i < currentIndex ? "gradient-primary" : "bg-muted"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
