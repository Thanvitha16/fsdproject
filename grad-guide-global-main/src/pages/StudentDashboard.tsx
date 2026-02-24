import { StatsCard } from "@/components/StatsCard";
import { StatusBadge, StatusTracker } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { applications, jobs, notifications } from "@/data/mockData";
import { Briefcase, CheckCircle2, Clock, Star, ArrowRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const myApps = applications.filter((a) => a.studentId === "s1");
  const shortlisted = myApps.filter((a) => a.status === "shortlisted").length;
  const selected = myApps.filter((a) => a.status === "selected").length;
  const interviews = myApps.filter((a) => a.status === "interview").length;
  const myNotifs = notifications.filter((n) => n.userId === "s1" && !n.read);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Student Dashboard</h1>
        <p className="text-muted-foreground text-sm">Track your placement journey</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Applications" value={myApps.length} icon={Briefcase} variant="primary" />
        <StatsCard title="Shortlisted" value={shortlisted} icon={Star} variant="warning" />
        <StatsCard title="Interviews" value={interviews} icon={Clock} variant="accent" />
        <StatsCard title="Selected" value={selected} icon={CheckCircle2} variant="default" />
      </div>

      {/* Notifications */}
      {myNotifs.length > 0 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold">New Notifications</span>
            </div>
            {myNotifs.map((n) => (
              <p key={n.id} className="text-sm text-muted-foreground ml-6">• {n.message}</p>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* My Applications */}
        <Card>
          <CardHeader className="flex-row items-center justify-between pb-3">
            <CardTitle className="text-base font-display">My Applications</CardTitle>
            <Button variant="ghost" size="sm" asChild><Link to="/applications">View All <ArrowRight className="ml-1 h-3 w-3" /></Link></Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {myApps.map((app) => {
              const job = jobs.find((j) => j.id === app.jobId);
              if (!job) return null;
              return (
                <div key={app.id} className="p-3 rounded-lg border bg-muted/30 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm">{job.title}</p>
                      <p className="text-xs text-muted-foreground">{job.company} • {job.location}</p>
                    </div>
                    <StatusBadge status={app.status} />
                  </div>
                  <StatusTracker currentStatus={app.status} />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Jobs */}
        <Card>
          <CardHeader className="flex-row items-center justify-between pb-3">
            <CardTitle className="text-base font-display">Recent Job Listings</CardTitle>
            <Button variant="ghost" size="sm" asChild><Link to="/jobs">Browse All <ArrowRight className="ml-1 h-3 w-3" /></Link></Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {jobs.slice(0, 4).map((job) => (
              <div key={job.id} className="p-3 rounded-lg border hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-sm">{job.title}</p>
                    <p className="text-xs text-muted-foreground">{job.company} • {job.location}</p>
                    <p className="text-xs text-primary font-medium mt-1">{job.salary}</p>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{job.type}</span>
                </div>
                <div className="flex gap-1 mt-2 flex-wrap">
                  {job.skills.slice(0, 3).map((s) => (
                    <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
