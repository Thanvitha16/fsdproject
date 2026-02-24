import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { DashboardLayout } from "@/components/DashboardLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import JobsPage from "./pages/JobsPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import NotificationsPage from "./pages/NotificationsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const DashboardRoute = ({ children }: { children: React.ReactNode }) => (
  <DashboardLayout>{children}</DashboardLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardRoute><Dashboard /></DashboardRoute>} />
            <Route path="/jobs" element={<DashboardRoute><JobsPage /></DashboardRoute>} />
            <Route path="/applications" element={<DashboardRoute><ApplicationsPage /></DashboardRoute>} />
            <Route path="/notifications" element={<DashboardRoute><NotificationsPage /></DashboardRoute>} />
            {/* Placeholder routes for other dashboard pages */}
            <Route path="/applicants" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Applicants</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/analytics" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Analytics</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/records" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Placement Records</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/students" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Students</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/companies" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Companies</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/reports" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Reports</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/users" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">User Management</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/employers" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Employer Management</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/settings" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Settings</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="/profile" element={<DashboardRoute><div className="p-6"><h1 className="text-2xl font-display font-bold">Profile</h1><p className="text-muted-foreground">Coming soon...</p></div></DashboardRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
