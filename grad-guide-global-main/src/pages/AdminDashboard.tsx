import { StatsCard } from "@/components/StatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { placementStats } from "@/data/mockData";
import { Users, Building2, Briefcase, Activity, Shield, UserCheck } from "lucide-react";

const recentActivity = [
  { action: "New student registered", user: "Rahul Verma", time: "2 min ago", type: "info" },
  { action: "Employer account pending", user: "TechStart Inc.", time: "15 min ago", type: "warning" },
  { action: "Job posting approved", user: "Google - SDE Role", time: "1 hr ago", type: "success" },
  { action: "User deactivated", user: "spam_account@test.com", time: "3 hrs ago", type: "error" },
  { action: "New placement officer added", user: "Dr. Meena Gupta", time: "5 hrs ago", type: "info" },
];

const pendingApprovals = [
  { id: 1, name: "TechStart Inc.", type: "Employer", submitted: "2026-02-23" },
  { id: 2, name: "DataFlow Corp.", type: "Employer", submitted: "2026-02-22" },
  { id: 3, name: "InnovateTech", type: "Employer", submitted: "2026-02-21" },
];

const typeColors: Record<string, string> = {
  info: "bg-status-applied/10 text-status-applied",
  warning: "bg-status-shortlisted/10 text-status-shortlisted",
  success: "bg-status-selected/10 text-status-selected",
  error: "bg-status-rejected/10 text-status-rejected",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground text-sm">System overview and management</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Users" value={placementStats.totalStudents + 120} icon={Users} variant="primary" />
        <StatsCard title="Employers" value={56} icon={Building2} variant="accent" />
        <StatsCard title="Active Jobs" value={placementStats.totalJobs} icon={Briefcase} variant="warning" />
        <StatsCard title="Placement Rate" value={`${placementStats.placementRate}%`} icon={Activity} variant="default" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Activity Log */}
        <Card>
          <CardHeader><CardTitle className="text-base font-display">Recent Activity</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg border">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${typeColors[a.type].split(" ")[0].replace("/10", "")}`} style={{ backgroundColor: `hsl(var(--status-${a.type === "info" ? "applied" : a.type === "warning" ? "shortlisted" : a.type === "success" ? "selected" : "rejected"}))` }} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{a.action}</p>
                  <p className="text-xs text-muted-foreground">{a.user}</p>
                </div>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap">{a.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pending Approvals */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base font-display">Pending Approvals</CardTitle>
            <Badge variant="outline" className="bg-status-shortlisted/10 text-status-shortlisted border-status-shortlisted/30">
              {pendingApprovals.length} pending
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {pendingApprovals.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.type} • Submitted {item.submitted}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs h-7">Reject</Button>
                  <Button size="sm" className="text-xs h-7">Approve</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-base font-display">System Health</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "API Status", status: "Operational", ok: true },
                { label: "Database", status: "Healthy", ok: true },
                { label: "File Storage", status: "Operational", ok: true },
                { label: "Email Service", status: "Operational", ok: true },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded-lg border text-center">
                  <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${s.ok ? "bg-status-selected" : "bg-status-rejected"}`} />
                  <p className="text-xs font-medium">{s.label}</p>
                  <p className="text-[10px] text-muted-foreground">{s.status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
