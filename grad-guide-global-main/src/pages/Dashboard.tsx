import { useAuth } from "@/contexts/AuthContext";
import StudentDashboard from "./StudentDashboard";
import EmployerDashboard from "./EmployerDashboard";
import OfficerDashboard from "./OfficerDashboard";
import AdminDashboard from "./AdminDashboard";

export default function Dashboard() {
  const { user } = useAuth();
  if (!user) return null;

  switch (user.role) {
    case "student": return <StudentDashboard />;
    case "employer": return <EmployerDashboard />;
    case "officer": return <OfficerDashboard />;
    case "admin": return <AdminDashboard />;
    default: return <StudentDashboard />;
  }
}
