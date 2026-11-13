export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  securityOrArchitectureHighlights: string[];
  techStack: string[];
  githubUrl: string;
  accent: string;
  tier: "primary" | "secondary";
  visualType: "security" | "telemetry" | "realtime" | "transactional" | "algorithmic";
}

export const PROJECTS: Project[] = [
  {
    id: "surfacecheck-api",
    number: "01",
    title: "SurfaceCheck API",
    category: "Offensive Reconnaissance · Security Tooling",
    tagline: "Automated network attack surface scanner & OWASP header auditor",
    description:
      "A decoupled security reconnaissance tool that conducts automated port scanning, service banner enumeration, and HTTP security header compliance checks against target web properties.",
    whyItMatters:
      "Modern web servers frequently expose unnecessary management ports or fail to enforce basic defensive HTTP headers (CSP, HSTS, X-Frame-Options), leaving organizations open to clickjacking and reconnaissance. SurfaceCheck automates these audits into actionable remediation steps.",
    securityOrArchitectureHighlights: [
      "Sandboxed asynchronous Nmap process execution wrapped within FastAPI and Python",
      "Automated evaluation against OWASP defensive header baselines with severity scoring",
      "Interactive triage dashboard classifying exposed services into risk tiers",
      "Automated export of structured vulnerability audit summaries in executive PDF format"
    ],
    techStack: ["Python", "FastAPI", "Nmap", "Next.js", "Linux", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/SurfaceCheck",
    accent: "#10b981",
    tier: "primary",
    visualType: "security"
  },
  {
    id: "mentra-os",
    number: "02",
    title: "MENTRA.OS",
    category: "Explainable Machine Learning · Telemetry",
    tagline: "Student stress detection system powered by explainable AI (SHAP)",
    description:
      "A full-stack psychometric telemetry platform that analyzes physiological and psychological survey indicators to predict student stress states using transparent machine learning models.",
    whyItMatters:
      "Black-box machine learning models provide predictions without context, making it hard for counselors to trust the output. MENTRA.OS uses SHAP values to explain the exact feature contributions behind every prediction.",
    securityOrArchitectureHighlights: [
      "Trained and evaluated a Random Forest classifier in Scikit-learn with cross-validated accuracy",
      "Embedded SHAP (SHapley Additive exPlanations) for transparent factor attribution per assessment",
      "Hardened backend with FastAPI, SQLite persistence, and secure JWT authentication sessions",
      "Background-calculated Autonomic Stress Indicator with locked inputs to maintain data integrity"
    ],
    techStack: ["Python", "FastAPI", "Next.js", "Scikit-learn", "SHAP", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/mentra.os",
    accent: "#38bdf8",
    tier: "primary",
    visualType: "telemetry"
  },
  {
    id: "kickbracket-pro",
    number: "03",
    title: "KickBracket Pro",
    category: "Real-Time Systems · Tournament Engine",
    tagline: "Live tournament fixture orchestrator with 3-second spectator replication",
    description:
      "A full-stack tournament management platform supporting 6 tournament bracket formats, organizer workspace separation, and low-latency spectator score distribution.",
    whyItMatters:
      "Managing complex sports brackets manually results in scheduling bottlenecks and delayed score distribution. KickBracket Pro solves this with automated algorithms and a 3-second live sync loop.",
    securityOrArchitectureHighlights: [
      "Automated bracket generation for Single/Double Elimination, Round Robin, Swiss, and Group Knockout",
      "Real-time spectator state replication operating every 3 seconds via serverless proxy endpoints",
      "Multi-tenant workspace isolation with Google authentication and instant demo sandboxes",
      "Responsive tournament bracket canvas with smooth drag navigation powered by Framer Motion"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/Sainath-16/kickbracket-pro",
    accent: "#f59e0b",
    tier: "primary",
    visualType: "realtime"
  },
  {
    id: "showmaze",
    number: "04",
    title: "SHOWMAZE",
    category: "Web Applications · Transactional Security",
    tagline: "Event discovery and ticket booking engine with Stripe webhook verification",
    description:
      "An event ticketing and discovery application built with Next.js, Clerk authentication, and Stripe payments with resilient webhook signature verification.",
    whyItMatters:
      "Handling event ticket reservations requires strict webhook verification to prevent payment race conditions and ensure tickets are only generated after confirmed gateway capture.",
    securityOrArchitectureHighlights: [
      "Stripe payment checkout flows with asynchronous cryptographic webhook signature validation",
      "Enterprise session security and user authentication managed through Clerk Auth",
      "Tested webhook ingress and replay resilience locally using secure ngrok tunnels"
    ],
    techStack: ["Next.js", "TypeScript", "Clerk Auth", "Stripe", "ngrok", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/showmaze",
    accent: "#a855f7",
    tier: "secondary",
    visualType: "transactional"
  },
  {
    id: "ai-quiz-generator",
    number: "05",
    title: "AI Quiz Generator",
    category: "Software Engineering · Algorithmic Logic",
    tagline: "Dynamic quiz generation and scoring engine written in Java",
    description:
      "A desktop application built in Java that dynamically generates customized question sets, randomizes distractors, and calculates topic accuracy breakdowns.",
    whyItMatters:
      "Demonstrates core object-oriented principles, algorithmic validation, and clean separation between question stores, evaluation logic, and score compilation.",
    securityOrArchitectureHighlights: [
      "Domain model architecture separating question repositories, answer validators, and scoring",
      "Dynamic question sequencing and randomized distractor generator for multiple-choice formats",
      "Real-time score calculation and detailed topic accuracy review"
    ],
    techStack: ["Java", "OOP Architecture", "Algorithms", "Software Design"],
    githubUrl: "https://github.com/Sainath-16/AI-Quiz-Generator",
    accent: "#6366f1",
    tier: "secondary",
    visualType: "algorithmic"
  }
];

export interface SecurityPillar {
  title: string;
  focus: string;
  description: string;
  practicalWork: string[];
}

export const SECURITY_PILLARS: SecurityPillar[] = [
  {
    title: "Network Security & Reconnaissance",
    focus: "Port auditing, active host discovery, protocol analysis",
    description:
      "Auditing network attack surfaces using tools like Nmap and Wireshark to identify exposed administrative ports, misconfigured firewalls, and unpatched service banners.",
    practicalWork: [
      "Built SurfaceCheck API wrapping Nmap to automate TCP port discovery and exposure alerts",
      "Network packet inspection, host reconnaissance, and service fingerprinting drills",
      "Hands-on labs on network segmentation, subnet discovery, and protocol security"
    ]
  },
  {
    title: "Web Application & API Security",
    focus: "OWASP Top 10, defensive headers, API endpoints",
    description:
      "Analyzing web applications for common vulnerability patterns including broken access control, injection vulnerabilities, and missing defensive HTTP configurations.",
    practicalWork: [
      "Studying OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR, SSRF)",
      "Hands-on lab exercises in PortSwigger Web Security Academy and TryHackMe rooms",
      "Cryptographic webhook signature verification and JWT authentication implementations"
    ]
  },
  {
    title: "Vulnerability Assessment & Hardening",
    focus: "Security baselines, system hardening, remediation",
    description:
      "Learning structured vulnerability assessment methodologies to evaluate system configurations, review defense baselines, and suggest actionable remediation steps.",
    practicalWork: [
      "Auditing HTTP response headers against OWASP security baselines (CSP, HSTS, X-Frame-Options)",
      "Linux security posture checks, permissions hygiene, and credential handling",
      "Formulating structured vulnerability audit reports in clean PDF format for review"
    ]
  },
  {
    title: "Defensive & Offensive Foundations",
    focus: "Ethical hacking concepts, threat modeling, security hygiene",
    description:
      "Developing a security-first mindset by understanding how attackers map targets and how defensive engineering protects application state and data assets.",
    practicalWork: [
      "Ongoing 6-month intensive training program (FRCD – CAP, CNP, ASA) at Tech By Heart",
      "Completed hands-on internship in Cybersecurity & Ethical Hacking at ICT Academy of Kerala",
      "Practicing structured capture-the-flag (CTF) and defensive reconnaissance scenarios"
    ]
  }
];

export interface TrainingProgram {
  title: string;
  track: string;
  institution: string;
  location: string;
  duration: string;
  status: string;
  description: string;
  competencies: string[];
}

export const CURRENT_TRAINING: TrainingProgram = {
  title: "FRCD – CAP, CNP, ASA",
  track: "Foundations in Cybersecurity, Certified Application & Network Penetration",
  institution: "Tech By Heart",
  location: "Thiruvananthapuram, Kerala, India",
  duration: "Six-Month Comprehensive Training",
  status: "Currently Pursuing",
  description:
    "An intensive, practical training programme dedicated to network security architecture, vulnerability assessment methodologies, web application penetration fundamentals, and system security administration.",
  competencies: [
    "Certified Network Professional (CNP) curriculum — network topologies, protocol analysis, firewall defense",
    "Certified Application Penetration (CAP) — web vulnerability discovery, OWASP mapping, request tampering",
    "Advanced Security Administration (ASA) — system hardening, incident triage fundamentals, defensive hygiene"
  ]
};

export interface SkillCategory {
  name: string;
  isPrimary?: boolean;
  tagline: string;
  skills: {
    name: string;
    description: string;
    badge?: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Cybersecurity & Defenses",
    isPrimary: true,
    tagline: "Primary professional focus — tools, attack surfaces, and defensive standards.",
    skills: [
      { name: "Nmap & Port Auditing", description: "Host reconnaissance, TCP/UDP scanning, service banner enumeration", badge: "Core" },
      { name: "OWASP Top 10", description: "Web application vulnerability analysis (SQLi, XSS, IDOR, Broken Auth)", badge: "Core" },
      { name: "HTTP Defense Baselines", description: "Configuring and auditing CSP, HSTS, X-Frame-Options, Permissions-Policy", badge: "Applied" },
      { name: "Wireshark & Packet Analysis", description: "Traffic inspection, protocol breakdown, unencrypted credential detection", badge: "Hands-on" },
      { name: "Linux Security & Bash", description: "File permissions, service auditing, environment variable safety, shell scripting", badge: "Hands-on" },
      { name: "Vulnerability Remediation", description: "Security report documentation, risk tiering, remediation guidance", badge: "Applied" }
    ]
  },
  {
    name: "Programming & Backend",
    tagline: "Languages and asynchronous frameworks for secure web services and tooling.",
    skills: [
      { name: "Python", description: "FastAPI microservices, Nmap automation scripts, Scikit-learn pipelines", badge: "Primary" },
      { name: "TypeScript / JavaScript", description: "Type-safe frontend logic, Next.js server actions, DOM workflows", badge: "Primary" },
      { name: "FastAPI", description: "Asynchronous REST APIs, Pydantic validation schemas, JWT sessions", badge: "Framework" },
      { name: "Next.js & React", description: "App Router, Server Components, client state, streaming UI", badge: "Framework" },
      { name: "Java", description: "Object-oriented architecture, data structures, algorithm design", badge: "Core" },
      { name: "SQL (SQLite & Postgres)", description: "Relational schema design, query structure, parameterized queries", badge: "Data" }
    ]
  },
  {
    name: "AI & Machine Learning",
    tagline: "Explainable predictive models and AI experimentation.",
    skills: [
      { name: "Scikit-learn", description: "Supervised classification, Random Forest, model evaluation metrics", badge: "ML" },
      { name: "SHAP (Explainable AI)", description: "Feature importance weighting, interpretability for predictive models", badge: "XAI" },
      { name: "LLM Orchestration", description: "Prompt structuring, API integrations, agentic workflows", badge: "Applied" },
      { name: "Data Analysis", description: "Feature normalization, exploratory analysis on telemetry datasets", badge: "Analytics" }
    ]
  },
  {
    name: "Cloud, Infrastructure & Ops",
    tagline: "Development workflows, edge hosting, and security integrations.",
    skills: [
      { name: "Git & GitHub", description: "Version control, code reviews, open-source repositories", badge: "Daily" },
      { name: "Vercel Platform", description: "Production edge deployments, serverless routing, CI/CD", badge: "Cloud" },
      { name: "Clerk & Stripe", description: "Modern session auth and cryptographic webhook verification", badge: "Auth/Pay" },
      { name: "ngrok & Linux Tunnels", description: "Secure ingress tunnels for local webhook testing", badge: "Tooling" },
      { name: "Power BI", description: "Data visualization and executive KPI dashboards (ICT certified)", badge: "Analytics" }
    ]
  }
];

export interface VerifiedCredential {
  title: string;
  issuer: string;
  year: string;
  category: "Security" | "AI & ML" | "Analytics" | "Systems";
}

export const VERIFIED_CREDENTIALS: VerifiedCredential[] = [
  {
    title: "Cybersecurity & Ethical Hacking Training",
    issuer: "ICT Academy of Kerala",
    year: "2025",
    category: "Security"
  },
  {
    title: "Unlocking the Power of Large Language Models (LLMs)",
    issuer: "IBM",
    year: "2024",
    category: "AI & ML"
  },
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "Industry Workshop",
    year: "2024",
    category: "AI & ML"
  },
  {
    title: "Data Visualization with Power BI",
    issuer: "ICT Academy of Kerala",
    year: "2024",
    category: "Analytics"
  },
  {
    title: "Add-on Program on Internet of Things (IoT)",
    issuer: "ICT Academy of Kerala",
    year: "2024",
    category: "Systems"
  }
];
