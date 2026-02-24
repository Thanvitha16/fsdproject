import { StatsCard } from "@/components/StatsCard";
import { StatusBadge } from "@/components/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { jobs, applications } from "@/data/mockData";
import { Briefcase, Users, UserCheck, Star, Plus } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function EmployerDashboard() {
  const myJobs = jobs.slice(0, 3);
  const totalApplicants = myJobs.reduce((s, j) => s + j.applicants, 0);

  const chartData = myJobs.map((j) => ({ name: j.title.split(" ").slice(0, 2).join(" "), applicants: j.applicants }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold">Employer Dashboard</h1>
          <p className="text-muted-foreground text-sm">Manage your job listings and candidates</p>
        </div>
        <Button><Plus className="mr-2 h-4 w-4" /> Post New Job</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Jobs Posted" value={myJobs.length} icon={Briefcase} variant="primary" />
        <StatsCard title="Total Applicants" value={totalApplicants} icon={Users} variant="accent" />
        <StatsCard title="Shortlisted" value={18} icon={Star} variant="warning" />
        <StatsCard title="Selected" value={7} icon={UserCheck} variant="default" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base font-display">Applicants per Job</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} />
                <Bar dataKey="applicants" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base font-display">Recent Applicants</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {applications.slice(0, 5).map((app) => {
              const job = jobs.find((j) => j.id === app.jobId);
              return (
                <div key={app.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="font-medium text-sm">Student #{app.studentId}</p>
                    <p className="text-xs text-muted-foreground">{job?.title} • Applied {app.appliedDate}</p>
                  </div>
                  <StatusBadge status={app.status} />
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
