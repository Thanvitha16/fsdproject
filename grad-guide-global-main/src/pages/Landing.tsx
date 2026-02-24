import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GraduationCap, Building2, Users, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { placementStats } from "@/data/mockData";

const features = [
  { icon: GraduationCap, title: "Student Portal", desc: "Browse jobs, apply with one click, and track your application status in real-time." },
  { icon: Building2, title: "Employer Hub", desc: "Post jobs, review candidates, schedule interviews, and hire top talent efficiently." },
  { icon: Users, title: "Placement Office", desc: "Monitor placement drives, generate reports, and track placement rates across branches." },
  { icon: TrendingUp, title: "Analytics Dashboard", desc: "Interactive charts and insights for data-driven placement management." },
];

const stats = [
  { value: `${placementStats.placedStudents}+`, label: "Students Placed" },
  { value: `${placementStats.totalCompanies}+`, label: "Partner Companies" },
  { value: `${placementStats.placementRate}%`, label: "Placement Rate" },
  { value: placementStats.highestSalary, label: "Highest Package" },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">CampusPlace</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild><Link to="/login">Log in</Link></Button>
            <Button asChild><Link to="/register">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-6">
              <CheckCircle2 className="h-3.5 w-3.5" /> Trusted by 50+ colleges
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6" style={{ color: "white" }}>
              Empowering Careers Through{" "}
              <span className="text-gradient">Smart Placements</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: "hsl(210 20% 75%)" }}>
              A unified platform connecting students, employers, and placement officers for seamless campus recruitment management.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild className="text-base px-8">
                <Link to="/register">Start Free Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-primary/30 text-primary-foreground bg-primary/10 hover:bg-primary/20">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-extrabold text-gradient">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Everything You Need</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">One platform for complete placement lifecycle management — from job posting to final offer.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4" style={{ color: "white" }}>Ready to Transform Campus Placements?</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "hsl(210 20% 75%)" }}>Join hundreds of colleges already using CampusPlace to streamline their placement process.</p>
          <Button size="lg" asChild className="text-base px-8">
            <Link to="/register">Get Started Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded gradient-primary flex items-center justify-center">
              <GraduationCap className="h-3 w-3 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-foreground">CampusPlace</span>
          </div>
          <p>© 2026 CampusPlace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
