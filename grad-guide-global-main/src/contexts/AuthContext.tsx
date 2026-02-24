import React, { createContext, useContext, useState, useCallback } from "react";

export type UserRole = "student" | "employer" | "officer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const MOCK_USERS: Record<string, User> = {
  "student@campus.edu": { id: "s1", name: "Arjun Sharma", email: "student@campus.edu", role: "student" },
  "employer@techcorp.com": { id: "e1", name: "Priya Patel", email: "employer@techcorp.com", role: "employer" },
  "officer@campus.edu": { id: "o1", name: "Dr. Rajesh Kumar", email: "officer@campus.edu", role: "officer" },
  "admin@campus.edu": { id: "a1", name: "System Admin", email: "admin@campus.edu", role: "admin" },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("campus_user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = useCallback(async (email: string, _password: string) => {
    const mockUser = MOCK_USERS[email];
    if (mockUser) {
      setUser(mockUser);
      localStorage.setItem("campus_user", JSON.stringify(mockUser));
    } else {
      // Default to student for demo
      const newUser: User = { id: "demo", name: "Demo User", email, role: "student" };
      setUser(newUser);
      localStorage.setItem("campus_user", JSON.stringify(newUser));
    }
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string, role: UserRole) => {
    const newUser: User = { id: Date.now().toString(), name, email, role };
    setUser(newUser);
    localStorage.setItem("campus_user", JSON.stringify(newUser));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("campus_user");
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
