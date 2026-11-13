export interface Project {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  problemSolved: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureTier?: string;
  accent: "cyan" | "emerald" | "amber" | "indigo" | "purple";
}

export const PROJECTS: Project[] = [
  {
    id: "mentra-os",
    title: "MENTRA.OS",
    badge: "AI & Telemetry",
    tagline: "AI-Based Cognitive Telemetry & Explainable Psychometrics Platform",
    description:
      "A longitudinal biometric and psychological telemetry platform architected to detect, monitor, and contextualize student stress states through explainable machine learning models.",
    problemSolved:
      "Traditional academic wellness assessments rely on delayed, subjective surveys. MENTRA.OS fuses real-time psychological metrics with physiological indicators to compute predictive stress trends before burnout occurs.",
    highlights: [
      "Decoupled full-stack architecture running Next.js and high-throughput FastAPI microservices protected by hardened JWT authentication.",
      "Trained an ensemble Random Forest model reaching 88.6% cross-validated prediction accuracy across stratified student test cohorts.",
      "Embedded SHAP (SHapley Additive exPlanations) for transparent model explainability, pinpointing exact factor weights driving each stress score.",
      "Engineered an automated telemetry pipeline featuring an AI-analyzed Autonomic Stress Indicator with locked background-computed fields for data tampering prevention.",
      "Longitudinal state tracking with automated report generation in vector-ready PDF format for institutional counselors."
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "88.6%" },
      { label: "Explainability", value: "SHAP Weights" },
      { label: "Data Pipeline", value: "Longitudinal" },
      { label: "Backend Latency", value: "< 45ms" }
    ],
    tags: ["Next.js", "FastAPI", "Python", "Scikit-learn", "SHAP", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/mentra.os",
    architectureTier: "Next.js 14 · FastAPI · Scikit-learn · SQLite",
    accent: "cyan"
  },
  {
    id: "kickbracket-pro",
    title: "KickBracket Pro",
    badge: "Tournament Platform",
    tagline: "Broadcast-Grade Real-Time Tournament Management Engine",
    description:
      "A high-concurrency esports and athletic tournament platform orchestrating fixture automation, multi-format brackets, and live spectator score distribution.",
    problemSolved:
      "Tournament managers struggle with complex knockout/round-robin logistics, manual tiebreaker calculations, and delayed audience score dissemination. KickBracket Pro solves this with automated algorithms and a 3-second spectator replication loop.",
    highlights: [
      "Full bracket computation engine powering 6 structural formats: Single Elimination, Double Elimination, Round Robin, Swiss System, and Group + Knockout stages.",
      "Real-time spectator synchronization engine with sub-3-second live state polling using serverless proxy edge endpoints without database saturation.",
      "Multi-tenant workspace isolation with role-based auth, Google sign-in integration, and zero-setup 1-click organizer demo sandbox environments.",
      "High-density responsive tournament canvas featuring smooth fluid bracket visualization and micro-animations built with Framer Motion."
    ],
    metrics: [
      { label: "Tournament Styles", value: "6 Formats" },
      { label: "Spectator Sync", value: "3s Interval" },
      { label: "Organizer Sandbox", value: "1-Click Demo" },
      { label: "Deployment", value: "Vercel Edge" }
    ],
    tags: ["Next.js", "TypeScript", "Framer Motion", "Real-Time Sync", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Sainath-16/kickbracket-pro",
    architectureTier: "Next.js App Router · TypeScript · Edge Handlers",
    accent: "amber"
  },
  {
    id: "surfacecheck-api",
    title: "SurfaceCheck API",
    badge: "Cybersecurity Engine",
    tagline: "Automated External Attack Surface & Vulnerability Scanner",
    description:
      "A SecOps vulnerability assessment microservice pairing headless network scanners with defensive posture evaluation to audit exposed host surfaces.",
    problemSolved:
      "Unmanaged microservices and cloud assets frequently leak open TCP ports and omit fundamental HTTP security headers, leaving attack vectors wide open to automated threat reconnaissance.",
    highlights: [
      "Decoupled asynchronous scanning engine wrapping native Nmap binary invocations within a robust FastAPI and Python execution sandbox.",
      "Audits critical HTTP defensive headers (HSTS, CSP, X-Frame-Options, Permissions-Policy) against OWASP cybersecurity baseline standards.",
      "Interactive modern vulnerability triage console rendering severity classifications, exposure scoring, and contextual remediation guidelines.",
      "Automated executive report compiler generating structured PDF audit summaries ready for immediate stakeholder handoff."
    ],
    metrics: [
      { label: "Engine Core", value: "Nmap + Python" },
      { label: "Audit Standard", value: "OWASP Hardening" },
      { label: "Backend", value: "FastAPI Async" },
      { label: "Reporting", value: "Executive PDF" }
    ],
    tags: ["FastAPI", "Python", "Nmap", "Next.js", "Security Audit", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/SurfaceCheck",
    architectureTier: "FastAPI · Python 3 · Nmap · Next.js",
    accent: "emerald"
  },
  {
    id: "showmaze",
    title: "SHOWMAZE",
    badge: "Event Architecture",
    tagline: "Scalable Event Discovery, Ticketing & Webhook Payment Architecture",
    description:
      "An end-to-end event discovery, attendee registration, and transactional gateway platform engineered for seamless checkout resilience.",
    problemSolved:
      "Event ticketing requires synchronous inventory management and asynchronous payment reconciliation without webhook race conditions or payment drops.",
    highlights: [
      "Built resilient transactional checkout flows with Stripe Elements and asynchronous webhook listeners rigorously tested against ingress tunnels.",
      "Integrated zero-friction enterprise identity and session management via Clerk Authentication.",
      "Responsive event discovery directory with dynamic category filtering, venue mapping, and high-performance search indices.",
      "Decoupled order lifecycle events managing ticket issuance upon confirmed payment gateway capture."
    ],
    metrics: [
      { label: "Auth Provider", value: "Clerk Enterprise" },
      { label: "Payments", value: "Stripe Webhooks" },
      { label: "Ingress Testing", value: "ngrok Tunnels" },
      { label: "Frontend", value: "Next.js App Router" }
    ],
    tags: ["Next.js", "Clerk", "Stripe", "ngrok", "Webhooks", "TypeScript"],
    githubUrl: "https://github.com/Sainath-16/showmaze",
    architectureTier: "Next.js · Stripe · Clerk · Webhooks",
    accent: "purple"
  },
  {
    id: "ai-quiz-generator",
    title: "AI Quiz Generator",
    badge: "Core Logic",
    tagline: "Algorithmic Dynamic Quiz Generation & Evaluation Engine",
    description:
      "A Java-based algorithmic application generating structured assessment matrices, automated distractors, and dynamic answer verification pipelines.",
    problemSolved:
      "Static quizzes become repetitive and predictable; this engine generates topic-adaptive question sequences with real-time scoring evaluation.",
    highlights: [
      "Engineered object-oriented domain models governing question taxonomy, difficulty curve calibration, and multi-format validation logic.",
      "Built resilient assessment verification cycles evaluating multi-option scoring, time-weighted performance, and test summaries.",
      "Architected clean separation between core algorithmic business rules and user interaction pipelines."
    ],
    metrics: [
      { label: "Core Runtime", value: "Java SDK" },
      { label: "Logic Pattern", value: "OOP Domain Models" },
      { label: "Validation", value: "Automated Scoring" }
    ],
    tags: ["Java", "OOP", "Algorithm Design", "Test Automation"],
    githubUrl: "https://github.com/Sainath-16/AI-Quiz-Generator",
    architectureTier: "Java Core Engine · OOP Architecture",
    accent: "indigo"
  }
];

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Foundational and systems languages for scalable backend services, scripts, and type-safe frontends.",
    skills: [
      { name: "Python", level: "Primary", context: "ML modeling, FastAPI microservices, vulnerability tooling" },
      { name: "TypeScript", level: "Primary", context: "Production Next.js applications, end-to-end type safety" },
      { name: "JavaScript (ES6+)", level: "Advanced", context: "Modern web standards, asynchronous DOM pipelines" },
      { name: "Java", level: "Core", context: "Object-oriented software architecture, algorithm design" },
      { name: "SQL", level: "Core", context: "Relational schema design, query optimization, SQLite, PostgreSQL" },
      { name: "Bash / Shell", level: "Practical", context: "Linux server automation, scanner scripting, tooling execution" }
    ]
  },
  {
    title: "Frameworks & Development",
    description: "Modern application frameworks for full-stack, decoupled architectures with exceptional client performance.",
    skills: [
      { name: "Next.js (App Router)", level: "Production", context: "Server Components, API routes, streaming architecture" },
      { name: "React", level: "Production", context: "Component composition, reactive state, custom hooks" },
      { name: "FastAPI", level: "Production", context: "High-performance asynchronous Python APIs, Pydantic schemas" },
      { name: "Tailwind CSS", level: "Production", context: "Design tokens, fluid typography, dark-mode design systems" },
      { name: "Framer Motion", level: "Advanced", context: "Choreographed layout animations, micro-interactions, gesture UI" }
    ]
  },
  {
    title: "AI & Machine Learning",
    description: "Supervised predictive modeling, explainable psychometrics, and generative pipeline experimentation.",
    skills: [
      { name: "Scikit-learn", level: "Applied", context: "Random Forest, classification pipelines, cross-validation" },
      { name: "SHAP (Explainable AI)", level: "Applied", context: "Feature importance attribution, decision transparency" },
      { name: "LLM Orchestration", level: "Applied", context: "Prompt engineering, token optimization, generative models" },
      { name: "Data Analysis", level: "Applied", context: "Exploratory analysis, biometric telemetry normalization" }
    ]
  },
  {
    title: "Cybersecurity & Defenses",
    description: "Hands-on vulnerability reconnaissance, ethical attack surface auditing, and defensive header validation.",
    skills: [
      { name: "Nmap & Port Auditing", level: "Hands-on", context: "Service version discovery, hostile surface enumeration" },
      { name: "Vulnerability Assessment", level: "Hands-on", context: "OWASP Top 10 remediation, exposed host discovery" },
      { name: "Web Security Hardening", level: "Hands-on", context: "CSP, HSTS, secure JWT sessions, input sanitization" },
      { name: "Ethical Hacking Fundamentals", level: "Certified", context: "Penetration concepts, reconnaissance, defensive posture" }
    ]
  },
  {
    title: "Cloud, Infrastructure & Tools",
    description: "Developer workflows, cloud edge delivery, authentication engines, and analytics pipelines.",
    skills: [
      { name: "Git & GitHub", level: "Daily", context: "Collaborative Gitflow, branch management, release hygiene" },
      { name: "Vercel Platform", level: "Production", context: "Edge deployment, CI/CD pipelines, serverless functions" },
      { name: "Clerk Authentication", level: "Production", context: "Session tokens, multi-factor auth, social identity providers" },
      { name: "Stripe & Webhooks", level: "Production", context: "Checkout sessions, signature verification, ngrok tunnels" },
      { name: "Power BI", level: "Certified", context: "Business intelligence modeling, KPI dashboards, telemetry charts" }
    ]
  }
];

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  badge: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Cybersecurity & Ethical Hacking Intern",
    organization: "ICT Academy of Kerala",
    location: "Technopark, Thiruvananthapuram",
    period: "2025",
    badge: "Internship",
    description:
      "Intensive technical program concentrating on enterprise defensive postures, ethical reconnaissance methodologies, and practical penetration testing scenarios.",
    bulletPoints: [
      "Conducted structured network scanning and vulnerability discovery exercises utilizing industry-standard tools including Nmap and Wireshark.",
      "Audited web application vectors aligned with OWASP Top 10 threats, evaluating real-world injection risks, broken access controls, and session tampering vulnerabilities.",
      "Gained hands-on experience in defensive system hardening, baseline configuration audits, and secure development lifecycle fundamentals."
    ],
    technologies: ["Cybersecurity", "Nmap", "Penetration Testing", "Vulnerability Assessment", "Linux", "OWASP"]
  }
];

export interface CertificationItem {
  title: string;
  issuer: string;
  credentialBadge: string;
  year: string;
  description: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Cybersecurity & Ethical Hacking Training",
    issuer: "ICT Academy of Kerala",
    credentialBadge: "Security",
    year: "2025",
    description: "Hands-on training covering penetration testing concepts, network defense architectures, and vulnerability mitigation."
  },
  {
    title: "Unlocking the Power of Large Language Models (LLMs)",
    issuer: "IBM",
    credentialBadge: "AI & ML",
    year: "2024",
    description: "Technical workshop exploring transformer architectures, prompt orchestration, and generative AI enterprise integrations."
  },
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "Industry Technical Workshop",
    credentialBadge: "AI & ML",
    year: "2024",
    description: "Practical development of generative AI pipelines, model fine-tuning fundamentals, and intelligent agent workflows."
  },
  {
    title: "Data Visualization with Power BI",
    issuer: "ICT Academy of Kerala",
    credentialBadge: "Analytics",
    year: "2024",
    description: "Relational data modeling, DAX queries, and executive KPI dashboard visualization."
  },
  {
    title: "Professional Add-on Program on Internet of Things (IoT)",
    issuer: "ICT Academy of Kerala",
    credentialBadge: "Hardware & IoT",
    year: "2024",
    description: "Embedded microcontrollers, sensor telemetry acquisition, and wireless communication protocols."
  }
];

export interface FocusArea {
  title: string;
  eyebrow: string;
  description: string;
  keyPoints: string[];
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: "Cybersecurity & Attack Surface Defense",
    eyebrow: "Defensive & Offensive Mindset",
    description:
      "Focusing on automated vulnerability discovery, hostile surface reconnaissance, and proactive application hardening against evolving threat vectors.",
    keyPoints: ["Port & service exposure audits", "HTTP header posture evaluation", "OWASP defensive patterns", "Penetration testing methodologies"]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    eyebrow: "Predictive & Explainable Systems",
    description:
      "Developing machine learning models with strict explainability standards (SHAP) so predictions can be audited, understood, and trusted in real-world scenarios.",
    keyPoints: ["Biometric stress telemetry modeling", "SHAP factor transparency", "Supervised classification pipelines", "LLM workflow integration"]
  },
  {
    title: "Full-Stack System Engineering",
    eyebrow: "High-Performance Architectures",
    description:
      "Designing decoupled web architectures pairing reactive frontends with high-speed asynchronous microservices, resilient auth, and transactional pipelines.",
    keyPoints: ["Next.js App Router streaming", "FastAPI async microservices", "Role-based authentication", "Transactional payment gateways"]
  },
  {
    title: "Cloud Infrastructure & Real-Time Sync",
    eyebrow: "Edge Distribution & Resilience",
    description:
      "Deploying scalable serverless edge microservices, low-latency client synchronizations, and automated CI/CD distribution pipelines.",
    keyPoints: ["Sub-3s spectator state loops", "Vercel edge serverless deployment", "Webhook lifecycle resilience", "Secure ingress tunnel routing"]
  }
];
