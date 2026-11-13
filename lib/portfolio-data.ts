export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  whatIBuilt: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  visualType: "dashboard" | "security" | "bracket" | "events" | "quiz";
}

export const PROJECTS: Project[] = [
  {
    id: "mentra-os",
    number: "01",
    title: "MENTRA.OS",
    category: "Machine Learning · Telemetry",
    tagline: "Stress detection platform powered by explainable AI",
    description:
      "A platform built to detect student stress levels early using psychological responses and physiological indicators, with a heavy emphasis on making model predictions interpretable rather than a black box.",
    whyItMatters:
      "Most mental wellness forms are retrospective self-reports filled out when burnout is already setting in. MENTRA.OS looks at continuous telemetry patterns and uses SHAP values so clinicians and counselors understand exactly which variables triggered an alert.",
    whatIBuilt: [
      "Decoupled web architecture with a Next.js frontend and a FastAPI backend with JWT session auth",
      "Trained and evaluated a Random Forest classifier in Scikit-learn on student wellness survey datasets",
      "Integrated SHAP (SHapley Additive exPlanations) to calculate and visualize individual feature importance",
      "Built an Autonomic Stress Indicator with calculated background fields to prevent data manipulation",
      "Implemented historical tracking in SQLite and automated PDF summary generation for review"
    ],
    techStack: ["Python", "FastAPI", "Next.js", "Scikit-learn", "SHAP", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/mentra.os",
    accentColor: "#2563eb",
    visualType: "dashboard"
  },
  {
    id: "kickbracket-pro",
    number: "02",
    title: "KickBracket Pro",
    category: "Full-Stack Web App · Real-Time",
    tagline: "Tournament bracket manager with live score sync",
    description:
      "A full-stack football tournament manager designed for grassroots organizers to build tournament brackets, manage teams, and push live match updates to spectators without manual coordination.",
    whyItMatters:
      "Grassroots tournaments frequently get delayed because managing brackets across paper sheets or spreadsheets causes bracket mismatch errors. KickBracket Pro handles the math and syncs state to spectator devices every 3 seconds.",
    whatIBuilt: [
      "Automated bracket generation supporting 6 formats: Single Elimination, Double Elimination, Round Robin, Swiss System, and Group + Knockout stages",
      "3-second live spectator score updates using lightweight serverless proxy routes",
      "Workspace isolation with Google authentication and instant 1-click organizer demo accounts",
      "Responsive tournament bracket canvas with smooth drag and bracket navigation using Framer Motion"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/Sainath-16/kickbracket-pro",
    accentColor: "#d97706",
    visualType: "bracket"
  },
  {
    id: "surfacecheck-api",
    number: "03",
    title: "SurfaceCheck API",
    category: "Cybersecurity · Automation",
    tagline: "Automated network port and HTTP security header scanner",
    description:
      "A security tool that runs automated scans on domain targets to identify exposed ports, out-of-date service banners, and missing defense headers that leave websites vulnerable.",
    whyItMatters:
      "Small teams frequently deploy web apps without verifying whether debug ports are exposed or essential headers like CSP, HSTS, and X-Frame-Options are set. SurfaceCheck flags these gaps before attackers scan them.",
    whatIBuilt: [
      "FastAPI asynchronous scanning engine wrapping Nmap binary routines in a sandboxed process",
      "HTTP header evaluation engine benchmarking configurations against OWASP security baselines",
      "Clean web dashboard presenting open ports, severity ratings, and recommended remediation steps",
      "Automated executive security audit export in PDF format for technical and non-technical stakeholders"
    ],
    techStack: ["Python", "FastAPI", "Nmap", "Next.js", "Linux", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/SurfaceCheck",
    accentColor: "#059669",
    visualType: "security"
  },
  {
    id: "showmaze",
    number: "04",
    title: "SHOWMAZE",
    category: "Full-Stack Web App · Payments",
    tagline: "Event discovery and ticket booking platform with Stripe webhooks",
    description:
      "An event discovery and registration platform built to handle user registration, ticket bookings, and reliable payment confirmation via Stripe webhooks.",
    whyItMatters:
      "Handling online payments requires tight webhook reconciliation so users never pay without receiving their confirmed ticket, even if their browser disconnects during checkout.",
    whatIBuilt: [
      "Secure user authentication and session management integrated with Clerk",
      "Stripe payment checkout flow with asynchronous webhook listeners verified through ngrok tunnels",
      "Searchable event directory with category filters, venue details, and ticket tier management",
      "Decoupled order fulfillment workflow that triggers confirmation immediately upon gateway capture"
    ],
    techStack: ["Next.js", "TypeScript", "Clerk Auth", "Stripe", "ngrok", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/showmaze",
    accentColor: "#7c3aed",
    visualType: "events"
  },
  {
    id: "ai-quiz-generator",
    number: "05",
    title: "AI Quiz Generator",
    category: "Algorithms · Core Software",
    tagline: "Dynamic topic-based quiz generator written in Java",
    description:
      "A desktop application built in Java that generates customized question sets and answer validation logic across selected topics, demonstrating core object-oriented principles.",
    whyItMatters:
      "Building quiz generation and automated scoring from scratch requires strict object modeling for question pools, difficulty weighting, and edge-case handling on user answers.",
    whatIBuilt: [
      "Domain model architecture separating question repositories, answer validators, and score calculation",
      "Dynamic question sequencing and randomized distractor generator for multiple-choice formats",
      "End-of-quiz scoring report displaying topic accuracy breakdowns and review hints"
    ],
    techStack: ["Java", "OOP Architecture", "Algorithms", "Software Design"],
    githubUrl: "https://github.com/Sainath-16/AI-Quiz-Generator",
    accentColor: "#4f46e5",
    visualType: "quiz"
  }
];

export interface SkillGroup {
  name: string;
  summary: string;
  items: {
    title: string;
    description: string;
  }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Languages & Core",
    summary: "The languages I write regularly for apps, scripts, and algorithms.",
    items: [
      { title: "Python", description: "FastAPI services, Scikit-learn ML scripts, Nmap automation" },
      { title: "TypeScript", description: "Typed React components, Next.js server actions, APIs" },
      { title: "JavaScript", description: "Modern ES6+ standards, browser DOM APIs, event handling" },
      { title: "Java", description: "Object-oriented programming, data structures, test logic" },
      { title: "SQL", description: "Relational schema design, SQLite queries, PostgreSQL" },
      { title: "Bash / Shell", description: "Linux environments, scanner scripting, server automation" }
    ]
  },
  {
    name: "Web & Frameworks",
    summary: "The tools I use to build responsive, performant user interfaces and APIs.",
    items: [
      { title: "Next.js", description: "App Router, Server Components, API routes, edge hosting" },
      { title: "React", description: "Component composition, custom hooks, reactive state" },
      { title: "FastAPI", description: "Asynchronous Python REST APIs, Pydantic data schemas" },
      { title: "Tailwind CSS", description: "Utility-first design systems, responsive layouts, theme tokens" },
      { title: "Framer Motion", description: "Scroll-linked animation, layout transitions, micro-interactions" }
    ]
  },
  {
    name: "AI & Machine Learning",
    summary: "Techniques and libraries I use for training, evaluating, and explaining models.",
    items: [
      { title: "Scikit-learn", description: "Classification pipelines, Random Forest, model evaluation" },
      { title: "SHAP", description: "Explainable AI, feature contribution weighting, transparency" },
      { title: "LLM Experimentation", description: "Prompt structuring, API integrations, context orchestration" },
      { title: "Data Analysis", description: "Feature normalization, exploratory analysis on telemetry data" }
    ]
  },
  {
    name: "Cybersecurity & Defenses",
    summary: "Practical experience auditing attack surfaces and defending web applications.",
    items: [
      { title: "Nmap", description: "Network port auditing, service version enumeration, host discovery" },
      { title: "Vulnerability Scanning", description: "Identifying misconfigured servers and unpatched endpoints" },
      { title: "HTTP Defense Baselines", description: "Auditing CSP, HSTS, X-Frame-Options against OWASP criteria" },
      { title: "Ethical Hacking Basics", description: "Trained on reconnaissance, scanning, and remediation basics" }
    ]
  },
  {
    name: "Cloud & Developer Tools",
    summary: "Platforms and workflows that keep builds running and deployments smooth.",
    items: [
      { title: "Git & GitHub", description: "Version control, branching workflows, open-source projects" },
      { title: "Vercel", description: "Production deployments, serverless functions, edge routing" },
      { title: "Clerk & Stripe", description: "Modern user authentication and webhook-backed payments" },
      { title: "Linux & ngrok", description: "Command-line environments and secure local webhook tunnels" },
      { title: "Power BI", description: "Relational data dashboards and KPI metric visualizations" }
    ]
  }
];

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  overview: string;
  points: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Cybersecurity & Ethical Hacking Intern",
    organization: "ICT Academy of Kerala",
    location: "Technopark, Thiruvananthapuram",
    period: "2025",
    overview:
      "A hands-on training and internship program focused on foundational cybersecurity concepts, ethical reconnaissance, and practical vulnerability testing.",
    points: [
      "Conducted network reconnaissance exercises using Nmap to scan open ports and examine active service banners",
      "Studied common web application security risks aligned with the OWASP Top 10 guidelines",
      "Worked through defensive configuration exercises to understand how system hardening prevents unauthorized access"
    ]
  }
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  topic: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Cybersecurity & Ethical Hacking Training",
    issuer: "ICT Academy of Kerala",
    year: "2025",
    topic: "Security"
  },
  {
    title: "Unlocking the Power of Large Language Models (LLMs)",
    issuer: "IBM",
    year: "2024",
    topic: "AI"
  },
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "Technical Workshop",
    year: "2024",
    topic: "AI"
  },
  {
    title: "Data Visualization with Power BI",
    issuer: "ICT Academy of Kerala",
    year: "2024",
    topic: "Data"
  },
  {
    title: "Add-on Program on Internet of Things (IoT)",
    issuer: "ICT Academy of Kerala",
    year: "2024",
    topic: "Systems"
  }
];
