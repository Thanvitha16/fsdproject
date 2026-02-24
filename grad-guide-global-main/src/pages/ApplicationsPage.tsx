import { applications, jobs } from "@/data/mockData";
import { StatusBadge, StatusTracker } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

export default function ApplicationsPage() {
  const myApps = applications.filter((a) => a.studentId === "s1");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">My Applications</h1>
        <p className="text-muted-foreground text-sm">Track all your job applications</p>
      </div>

      <div className="space-y-4">
        {myApps.map((app) => {
          const job = jobs.find((j) => j.id === app.jobId);
          if (!job) return null;
          return (
            <Card key={app.id}>
              <CardContent className="p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className="font-display font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.company} • {job.location}</p>
                      </div>
                      <StatusBadge status={app.status} />
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                      <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> Applied: {app.appliedDate}</span>
                      {app.interviewDate && <span className="flex items-center gap-1"><CalendarDays className="h-3 w-3" /> Interview: {app.interviewDate}</span>}
                    </div>
                  </div>
                  <div className="md:w-72">
                    <StatusTracker currentStatus={app.status} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
