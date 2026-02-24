import { useAuth, type UserRole } from "@/contexts/AuthContext";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard, Briefcase, Users, FileText, BarChart3, Settings,
  Bell, LogOut, GraduationCap, Building2, UserCheck, Shield, ClipboardList, TrendingUp,
} from "lucide-react";

const roleMenus: Record<UserRole, { title: string; url: string; icon: any }[]> = {
  student: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Browse Jobs", url: "/jobs", icon: Briefcase },
    { title: "My Applications", url: "/applications", icon: ClipboardList },
    { title: "Profile", url: "/profile", icon: GraduationCap },
    { title: "Notifications", url: "/notifications", icon: Bell },
  ],
  employer: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Posted Jobs", url: "/jobs", icon: Briefcase },
    { title: "Applicants", url: "/applicants", icon: Users },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "Notifications", url: "/notifications", icon: Bell },
  ],
  officer: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Placement Records", url: "/records", icon: FileText },
    { title: "Students", url: "/students", icon: GraduationCap },
    { title: "Companies", url: "/companies", icon: Building2 },
    { title: "Reports", url: "/reports", icon: TrendingUp },
  ],
  admin: [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Users", url: "/users", icon: Users },
    { title: "Employers", url: "/employers", icon: Building2 },
    { title: "Jobs", url: "/jobs", icon: Briefcase },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "Settings", url: "/settings", icon: Settings },
  ],
};

const roleLabels: Record<UserRole, string> = {
  student: "Student",
  employer: "Employer",
  officer: "Placement Officer",
  admin: "Administrator",
};

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return <Navigate to="/login" replace />;

  const menuItems = roleMenus[user.role];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r-0">
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display font-bold text-sm text-sidebar-primary-foreground truncate">CampusPlace</h2>
                <p className="text-[10px] text-sidebar-foreground/60">{roleLabels[user.role]}</p>
              </div>
            </div>
          </div>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className="text-sidebar-foreground/40 text-[10px] uppercase tracking-wider">Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end={item.url === "/dashboard"}
                          className="text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                          activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                        >
                          <item.icon className="mr-3 h-4 w-4" />
                          <span>{item.title}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <div className="mt-auto p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-sidebar-accent text-sidebar-primary text-xs font-semibold">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-sidebar-primary-foreground truncate">{user.name}</p>
                <p className="text-[10px] text-sidebar-foreground/50 truncate">{user.email}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-sidebar-foreground/60 hover:text-destructive hover:bg-destructive/10"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </Sidebar>

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 border-b flex items-center justify-between px-4 bg-card">
            <SidebarTrigger className="mr-2" />
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative" onClick={() => navigate("/notifications")}>
                <Bell className="h-4 w-4" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
