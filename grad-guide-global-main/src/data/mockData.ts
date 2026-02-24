export const jobs = [
  {
    id: "j1", title: "Software Engineer", company: "Google", location: "Bangalore", salary: "₹18-25 LPA",
    type: "Full-time", skills: ["React", "Node.js", "Python"], description: "Build scalable web applications for Google Cloud Platform.",
    postedBy: "e1", postedDate: "2026-02-10", deadline: "2026-03-15", applicants: 45,
  },
  {
    id: "j2", title: "Data Analyst", company: "Microsoft", location: "Hyderabad", salary: "₹12-18 LPA",
    type: "Full-time", skills: ["SQL", "Python", "Power BI"], description: "Analyze business data and create actionable insights.",
    postedBy: "e2", postedDate: "2026-02-12", deadline: "2026-03-20", applicants: 32,
  },
  {
    id: "j3", title: "Frontend Developer", company: "Amazon", location: "Chennai", salary: "₹15-22 LPA",
    type: "Full-time", skills: ["React", "TypeScript", "CSS"], description: "Develop user-facing features for Amazon retail.",
    postedBy: "e3", postedDate: "2026-02-15", deadline: "2026-03-25", applicants: 58,
  },
  {
    id: "j4", title: "ML Engineer", company: "Flipkart", location: "Bangalore", salary: "₹20-30 LPA",
    type: "Full-time", skills: ["Python", "TensorFlow", "MLOps"], description: "Build recommendation systems at scale.",
    postedBy: "e4", postedDate: "2026-02-18", deadline: "2026-03-28", applicants: 27,
  },
  {
    id: "j5", title: "DevOps Engineer", company: "Infosys", location: "Pune", salary: "₹10-15 LPA",
    type: "Full-time", skills: ["AWS", "Docker", "Kubernetes"], description: "Manage cloud infrastructure and CI/CD pipelines.",
    postedBy: "e5", postedDate: "2026-02-20", deadline: "2026-04-01", applicants: 19,
  },
  {
    id: "j6", title: "Product Manager Intern", company: "Zomato", location: "Gurgaon", salary: "₹40K/month",
    type: "Internship", skills: ["Analytics", "Communication", "SQL"], description: "Assist product team in feature prioritization.",
    postedBy: "e6", postedDate: "2026-02-22", deadline: "2026-03-30", applicants: 65,
  },
];

export type ApplicationStatus = "applied" | "shortlisted" | "interview" | "selected" | "rejected";

export const applications = [
  { id: "a1", studentId: "s1", jobId: "j1", status: "shortlisted" as ApplicationStatus, appliedDate: "2026-02-11", interviewDate: "2026-03-05" },
  { id: "a2", studentId: "s1", jobId: "j3", status: "applied" as ApplicationStatus, appliedDate: "2026-02-16" },
  { id: "a3", studentId: "s1", jobId: "j4", status: "interview" as ApplicationStatus, appliedDate: "2026-02-19", interviewDate: "2026-03-10" },
  { id: "a4", studentId: "s2", jobId: "j1", status: "selected" as ApplicationStatus, appliedDate: "2026-02-11" },
  { id: "a5", studentId: "s3", jobId: "j2", status: "rejected" as ApplicationStatus, appliedDate: "2026-02-13" },
  { id: "a6", studentId: "s4", jobId: "j1", status: "shortlisted" as ApplicationStatus, appliedDate: "2026-02-12" },
  { id: "a7", studentId: "s5", jobId: "j3", status: "selected" as ApplicationStatus, appliedDate: "2026-02-16" },
  { id: "a8", studentId: "s6", jobId: "j5", status: "applied" as ApplicationStatus, appliedDate: "2026-02-21" },
];

export const notifications = [
  { id: "n1", userId: "s1", message: "You've been shortlisted for Software Engineer at Google!", read: false, createdAt: "2026-02-23" },
  { id: "n2", userId: "s1", message: "Interview scheduled for ML Engineer at Flipkart on March 10", read: false, createdAt: "2026-02-22" },
  { id: "n3", userId: "s1", message: "New job posted: DevOps Engineer at Infosys", read: true, createdAt: "2026-02-20" },
  { id: "n4", userId: "e1", message: "45 new applications received for Software Engineer", read: false, createdAt: "2026-02-23" },
];

export const placementStats = {
  totalStudents: 842,
  placedStudents: 623,
  placementRate: 74,
  avgSalary: "₹14.2 LPA",
  highestSalary: "₹45 LPA",
  totalCompanies: 56,
  totalJobs: 128,
  branchWise: [
    { branch: "CSE", placed: 185, total: 210, rate: 88 },
    { branch: "ECE", placed: 120, total: 165, rate: 73 },
    { branch: "ME", placed: 95, total: 150, rate: 63 },
    { branch: "EE", placed: 88, total: 130, rate: 68 },
    { branch: "CE", placed: 72, total: 100, rate: 72 },
    { branch: "IT", placed: 63, total: 87, rate: 72 },
  ],
  companyWise: [
    { company: "Google", hires: 12 },
    { company: "Microsoft", hires: 18 },
    { company: "Amazon", hires: 25 },
    { company: "Flipkart", hires: 15 },
    { company: "Infosys", hires: 45 },
    { company: "TCS", hires: 62 },
    { company: "Wipro", hires: 38 },
    { company: "Zomato", hires: 8 },
  ],
  monthlyTrends: [
    { month: "Sep", placements: 12 },
    { month: "Oct", placements: 35 },
    { month: "Nov", placements: 68 },
    { month: "Dec", placements: 120 },
    { month: "Jan", placements: 185 },
    { month: "Feb", placements: 203 },
  ],
  salaryDistribution: [
    { range: "3-6 LPA", count: 120 },
    { range: "6-10 LPA", count: 185 },
    { range: "10-15 LPA", count: 158 },
    { range: "15-25 LPA", count: 98 },
    { range: "25+ LPA", count: 62 },
  ],
};
