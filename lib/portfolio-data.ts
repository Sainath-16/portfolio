export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  whyItMatters: string;
  technicalDepth: string[];
  techStack: string[];
  githubUrl: string;
  accent: string;
  accentMuted: string;
  featured: boolean;
  type: "security" | "telemetry" | "realtime" | "transactional" | "algorithmic";
}

export const PROJECTS: Project[] = [
  {
    id: "surfacecheck-api",
    number: "01",
    title: "SurfaceCheck API",
    category: "Security Tooling · Attack Surface Auditing",
    tagline: "Automated network reconnaissance and OWASP defensive header verification",
    description:
      "A decoupled security reconnaissance engine that audits web hosts for open TCP ports, outdated service banners, and missing HTTP defensive headers that leave applications exposed to reconnaissance and clickjacking.",
    whyItMatters:
      "Developers frequently spin up cloud workloads with debug ports left open and without configuring critical security headers like CSP, HSTS, or X-Frame-Options. SurfaceCheck scans targets safely and translates findings into clear remediation instructions.",
    technicalDepth: [
      "FastAPI asynchronous scanning pipeline wrapping sandboxed Nmap subprocess executions",
      "Automated evaluation against OWASP defensive header baselines with severity-weighted scoring",
      "Interactive triage dashboard categorizing exposed ports and unpatched service banners",
      "Executive security audit export compiled into structured PDF reports for stakeholders"
    ],
    techStack: ["Python", "FastAPI", "Nmap", "Next.js", "Linux", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/SurfaceCheck",
    accent: "#FF493D", // Vermillion
    accentMuted: "#FFF0E5",
    featured: true,
    type: "security"
  },
  {
    id: "mentra-os",
    number: "02",
    title: "MENTRA.OS",
    category: "Explainable Machine Learning · Telemetry",
    tagline: "Student stress detection with transparent factor attribution (SHAP)",
    description:
      "A full-stack psychometric telemetry platform that analyzes psychological survey responses and physiological indicators to predict student stress states using interpretable machine learning models.",
    whyItMatters:
      "Most mental wellness interventions happen after burnout has already set in, and standard neural nets offer zero explanation for their predictions. MENTRA.OS uses SHAP values so counselors can audit exactly which features drove each alert.",
    technicalDepth: [
      "Random Forest classifier trained and cross-validated in Scikit-learn on student cohort telemetry",
      "SHAP (SHapley Additive exPlanations) attribution visualizing factor contributions per prediction",
      "Hardened backend with FastAPI, SQLite persistence, and secure JWT session authentication",
      "Calculated Autonomic Stress Indicator with locked inputs to prevent user data tampering"
    ],
    techStack: ["Python", "FastAPI", "Next.js", "Scikit-learn", "SHAP", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/mentra.os",
    accent: "#430D1C", // Black Cherry
    accentMuted: "#F8E7DB",
    featured: true,
    type: "telemetry"
  },
  {
    id: "kickbracket-pro",
    number: "03",
    title: "KickBracket Pro",
    category: "Real-Time Systems · Tournament Engine",
    tagline: "Tournament bracket manager with 3-second live spectator replication",
    description:
      "A tournament operations platform that handles 6 tournament bracket formats, automated fixture generation, organizer workspace separation, and low-latency spectator score broadcasts.",
    whyItMatters:
      "Grassroots sports and collegiate esports tournaments waste hours managing spreadsheets and paper fixtures, leading to bracket errors and delayed audience updates. KickBracket Pro synchronizes state every 3 seconds to spectator devices.",
    technicalDepth: [
      "Automated fixture generation for Single/Double Elimination, Round Robin, Swiss, and Group Knockouts",
      "Sub-3-second spectator state updates utilizing lightweight serverless proxy edge endpoints",
      "Multi-tenant workspace isolation with Google authentication and instant 1-click organizer demo sandbox",
      "Interactive bracket visualizer with smooth panning and micro-interactions powered by Framer Motion"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/Sainath-16/kickbracket-pro",
    accent: "#FF493D", // Vermillion
    accentMuted: "#F2DDCF",
    featured: true,
    type: "realtime"
  },
  {
    id: "showmaze",
    number: "04",
    title: "SHOWMAZE",
    category: "Web Engineering · Transactional Security",
    tagline: "Event discovery and registration platform with Stripe webhook reconciliation",
    description:
      "An end-to-end event discovery and ticket reservation system with secure user sessions, dynamic category filtering, and Stripe payments backed by webhook signature verification.",
    whyItMatters:
      "E-commerce checkouts must verify payment signatures asynchronously to prevent race conditions and ensure tickets are only minted upon confirmed capture.",
    technicalDepth: [
      "Resilient Stripe payment flows validating cryptographic webhook signatures",
      "Enterprise authentication and session management integrated with Clerk Auth",
      "Tested webhook ingress and replay resilience locally using ngrok tunnels"
    ],
    techStack: ["Next.js", "TypeScript", "Clerk Auth", "Stripe", "ngrok", "Tailwind CSS"],
    githubUrl: "https://github.com/Sainath-16/showmaze",
    accent: "#561626", // Deep Cherry
    accentMuted: "#F8E7DB",
    featured: false,
    type: "transactional"
  },
  {
    id: "ai-quiz-generator",
    number: "05",
    title: "AI Quiz Generator",
    category: "Software Design · Algorithmic Logic",
    tagline: "Dynamic quiz generation and scoring engine written in Java",
    description:
      "A desktop application built in Java that dynamically generates customized question sets, randomizes distractors, and calculates topic accuracy breakdowns.",
    whyItMatters:
      "Demonstrates core object-oriented principles, algorithmic validation, and clean separation between question stores, evaluation logic, and score compilation.",
    technicalDepth: [
      "Domain model architecture separating question repositories, answer validators, and scoring",
      "Dynamic question sequencing and randomized distractor generator for multiple-choice formats",
      "Real-time score calculation and detailed topic accuracy review"
    ],
    techStack: ["Java", "OOP Architecture", "Algorithms", "Software Design"],
    githubUrl: "https://github.com/Sainath-16/AI-Quiz-Generator",
    accent: "#430D1C", // Black Cherry
    accentMuted: "#F8E7DB",
    featured: false,
    type: "algorithmic"
  }
];

export interface OngoingTraining {
  programName: string;
  provider: string;
  location: string;
  duration: string;
  status: string;
  summary: string;
  tracks: {
    code: string;
    fullName: string;
    description: string;
  }[];
}

export const CURRENT_TRAINING: OngoingTraining = {
  programName: "FRCD – Cybersecurity Professional Training",
  provider: "Tech By Heart",
  location: "Thiruvananthapuram, Kerala, India",
  duration: "Six-Month Comprehensive Course",
  status: "Currently Pursuing (Ongoing Training)",
  summary:
    "An intensive, hands-on training programme covering web application security assessment, network infrastructure defense, and security operations triage.",
  tracks: [
    {
      code: "CAP",
      fullName: "Certified App Sec",
      description: "Web application vulnerability analysis, OWASP Top 10 mapping, request inspection, and defensive remediation"
    },
    {
      code: "CNP",
      fullName: "Certified Network Professional",
      description: "Network architecture analysis, protocol inspection, routing security, firewall rules, and host reconnaissance"
    },
    {
      code: "ASA",
      fullName: "Advanced SOC Analyst",
      description: "Security monitoring fundamentals, log triage, threat detection baselines, and defensive incident response"
    }
  ]
};

export interface SecurityDiscipline {
  number: string;
  title: string;
  scope: string;
  narrative: string;
  keyPractices: string[];
}

export const SECURITY_DISCIPLINES: SecurityDiscipline[] = [
  {
    number: "01",
    title: "Network Security & Reconnaissance",
    scope: "Host Discovery · Port Auditing · Protocol Inspection",
    narrative:
      "Auditing network perimeters to understand how attackers enumerate services and map hostile surfaces. I practice with Nmap, Wireshark, and custom automation scripts to identify open ports, service banners, and protocol weaknesses.",
    keyPractices: [
      "Built SurfaceCheck API to automate TCP port discovery and exposure alerts",
      "Inspecting traffic packets and protocol handshakes in Wireshark",
      "Hands-on exercises in network segmentation and subnet reconnaissance"
    ]
  },
  {
    number: "02",
    title: "Web Application & API Security",
    scope: "OWASP Top 10 · Request Tampering · Endpoint Defense",
    narrative:
      "Investigating the most common failure modes in modern web applications — including broken object level authorization (BOLA/IDOR), injection vectors, cross-site scripting, and insecure API keys.",
    keyPractices: [
      "Studying OWASP Top 10 and OWASP API Security Top 10 methodologies",
      "Hands-on practice labs in TryHackMe and PortSwigger Web Security Academy",
      "Cryptographic webhook signature verification and JWT session hardening"
    ]
  },
  {
    number: "03",
    title: "Vulnerability Assessment & Hardening",
    scope: "Defensive Baselines · HTTP Policies · System Hygiene",
    narrative:
      "Evaluating servers and web properties against established defensive baselines. I focus on actionable remediation: configuring strict Content Security Policies, HSTS, and permissions hygiene rather than just finding flaws.",
    keyPractices: [
      "Auditing HTTP response headers against OWASP security baselines (CSP, HSTS, X-Frame-Options)",
      "Linux security posture checks, file permission hardening, and environment safety",
      "Compiling structured technical vulnerability reports for engineering teams"
    ]
  },
  {
    number: "04",
    title: "Defensive & Offensive Mindset",
    scope: "Threat Modeling · Ethical Principles · Continuous Labs",
    narrative:
      "Building a security-first discipline requires understanding how systems are broken so they can be engineered defensively from day one. I combine classroom training with active lab experimentation.",
    keyPractices: [
      "Active 6-month cybersecurity training (FRCD – CAP, CNP, ASA) at Tech By Heart",
      "Completed hands-on internship in Cybersecurity & Ethical Hacking at ICT Academy of Kerala",
      "Independent practice on TryHackMe virtual machine rooms"
    ]
  }
];

export interface SkillCategory {
  title: string;
  isPrimary?: boolean;
  editorialNote: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cybersecurity & Defenses",
    isPrimary: true,
    editorialNote: "My primary professional discipline — focused on attack surfaces, web vulnerabilities, and defensive baselines.",
    skills: [
      { name: "Nmap & Port Auditing", context: "Host discovery, service fingerprinting, TCP/UDP scanning" },
      { name: "OWASP Top 10", context: "Web vulnerability analysis: SQLi, XSS, IDOR, Broken Authentication" },
      { name: "HTTP Defense Baselines", context: "Auditing & configuring CSP, HSTS, X-Frame-Options, Permissions-Policy" },
      { name: "Wireshark & Packet Inspection", context: "Protocol analysis, capturing unencrypted payloads, network triage" },
      { name: "Linux Security & Bash", context: "File permissions, service auditing, environment variable safety, shell scripting" },
      { name: "Vulnerability Documentation", context: "Structured audit reports, severity classification, remediation guidance" }
    ]
  },
  {
    title: "Programming & Web Systems",
    editorialNote: "Languages and asynchronous frameworks I write to build resilient tools and full-stack software.",
    skills: [
      { name: "Python", context: "FastAPI microservices, Nmap automation scripts, Scikit-learn pipelines" },
      { name: "TypeScript / JavaScript", context: "Type-safe frontend logic, Next.js server actions, DOM workflows" },
      { name: "FastAPI", context: "Asynchronous REST APIs, Pydantic validation schemas, JWT sessions" },
      { name: "Next.js & React", context: "App Router, Server Components, streaming UI, client state" },
      { name: "Java", context: "Object-oriented software architecture, data structures, algorithm design" },
      { name: "SQL (SQLite & Postgres)", context: "Relational schema design, query structure, parameterized queries" }
    ]
  },
  {
    title: "AI & Machine Learning",
    editorialNote: "Explainable predictive models where understanding the 'why' is as critical as the accuracy score.",
    skills: [
      { name: "Scikit-learn", context: "Supervised classification, Random Forest, cross-validation metrics" },
      { name: "SHAP (Explainable AI)", context: "Feature attribution weighting, transparent model interpretability" },
      { name: "LLM Experimentation", context: "Prompt engineering, API integration, agentic workflow prototypes" },
      { name: "Telemetry Analysis", context: "Data cleaning, feature normalization, exploratory psychometric analysis" }
    ]
  },
  {
    title: "Cloud & Developer Tools",
    editorialNote: "Everyday tools, version control hygiene, and deployment infrastructure.",
    skills: [
      { name: "Git & GitHub", context: "Version control, feature branching, open-source repositories" },
      { name: "Vercel Platform", context: "Production edge deployments, serverless routing, CI/CD" },
      { name: "Clerk & Stripe", context: "Session authentication and cryptographic webhook verification" },
      { name: "ngrok & Linux Tunnels", context: "Secure ingress tunnels for local webhook testing" },
      { name: "Power BI", context: "Relational data modeling and executive KPI dashboards (ICT certified)" }
    ]
  }
];

export interface VerifiedCertificate {
  id: string;
  title: string;
  issuer: string;
  period: string;
  duration?: string;
  dateBadge: string;
  category: "Cybersecurity" | "Data & Analytics" | "IoT & Systems" | "Artificial Intelligence" | "Software Engineering";
  pdfUrl: string;
  thumbnailUrl: string;
  description: string;
  partnerInfo?: string;
}

export const VERIFIED_CERTIFICATES: VerifiedCertificate[] = [
  {
    id: "cyber-security-internship",
    title: "Cyber Security — One-month Internship",
    issuer: "ICT Academy of Kerala",
    period: "May–July 2025",
    duration: "1 Month",
    dateBadge: "May–Jul 2025",
    category: "Cybersecurity",
    pdfUrl: "/certificates/cyber-security-internship.pdf",
    thumbnailUrl: "/certificates/thumbs/cyber-security-internship.png",
    description: "Completion of practical one-month cybersecurity internship with hands-on project execution (Grade C).",
    partnerInfo: "ICT Academy of Kerala"
  },
  {
    id: "power-bi-data-visualization",
    title: "Data Visualization with Power BI",
    issuer: "ICT Academy of Kerala",
    period: "September–October 2023",
    duration: "30 Hours",
    dateBadge: "Sep–Oct 2023",
    category: "Data & Analytics",
    pdfUrl: "/certificates/power-bi-data-visualization.pdf",
    thumbnailUrl: "/certificates/thumbs/power-bi-data-visualization.png",
    description: "30-hour Microskill Training Program in association with Mar Ivanios Centre for Professional Studies & Industrial Linkage (MICPS & IL) and Dept. of Computer Science.",
    partnerInfo: "In association with Mar Ivanios College"
  },
  {
    id: "iot-addon-program",
    title: "Add-on Program on IoT",
    issuer: "ICT Academy of Kerala",
    period: "August–September 2024",
    duration: "30 Hours",
    dateBadge: "Aug–Sep 2024",
    category: "IoT & Systems",
    pdfUrl: "/certificates/iot-addon-program.pdf",
    thumbnailUrl: "/certificates/thumbs/iot-addon-program.png",
    description: "30-hour Addon Program on IoT offered by ICT Academy of Kerala in association with Mar Ivanios College Dept. of Computer Science.",
    partnerInfo: "In association with Mar Ivanios College"
  },
  {
    id: "ibm-introduction-to-ai",
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM (offered through Coursera)",
    period: "Completed 16 February 2026",
    duration: "Course Certificate",
    dateBadge: "16 Feb 2026",
    category: "Artificial Intelligence",
    pdfUrl: "/certificates/ibm-introduction-to-ai.pdf",
    thumbnailUrl: "/certificates/thumbs/ibm-introduction-to-ai.png",
    description: "Online course authorized by IBM Skills Network covering generative AI concepts, ethical considerations, and machine learning foundations.",
    partnerInfo: "Authorized by IBM · Coursera"
  },
  {
    id: "ibm-software-engineering",
    title: "Introduction to Software Engineering",
    issuer: "IBM (offered through Coursera)",
    period: "Completed 10 February 2026",
    duration: "Course Certificate",
    dateBadge: "10 Feb 2026",
    category: "Software Engineering",
    pdfUrl: "/certificates/ibm-software-engineering.pdf",
    thumbnailUrl: "/certificates/thumbs/ibm-software-engineering.png",
    description: "Online course authorized by IBM Skills Network covering SDLC methodologies, software architectures, Agile fundamentals, and tooling.",
    partnerInfo: "Authorized by IBM · Coursera"
  },
  {
    id: "nxtwave-generative-ai-workshop",
    title: "AI for Students: Build Your Own Generative AI Model",
    issuer: "NxtWave",
    period: "Issued 18 May 2024",
    duration: "Hands-on Project Workshop",
    dateBadge: "18 May 2024",
    category: "Artificial Intelligence",
    pdfUrl: "/certificates/nxtwave-generative-ai-workshop.pdf",
    thumbnailUrl: "/certificates/thumbs/nxtwave-generative-ai-workshop.png",
    description: "Hands-on project workshop conducted by AI expert and IIT Delhi alumnus Mr. Trivikrama on generative AI model building.",
    partnerInfo: "Conducted by IIT Delhi Alumnus Mr. Trivikrama"
  }
];

export interface ResearchPublication {
  title: string;
  conference: string;
  conferenceShort: string;
  conferenceDate: string;
  publicationType: string;
  isbn: string;
  authors: {
    name: string;
    role?: string;
    isUser?: boolean;
  }[];
  affiliation: string;
  department: string;
  userRole: string;
  shortDescription: string;
  pdfUrl: string;
  coverThumbnail: string;
  pageThumbnail: string;
  technicalHighlights: string[];
  reportedMetrics: {
    accuracy: string;
    f1Score: string;
    context: string;
  };
}

export const MENTRA_RESEARCH: ResearchPublication = {
  title: "MENTRA.OS: Building and Analyzing an AI-Based Cognitive Telemetry System for Student Stress Prediction",
  conference: "International Conference on Emerging Trends in Artificial Intelligence (ICETAI'26)",
  conferenceShort: "ICETAI'26",
  conferenceDate: "24 April 2026",
  publicationType: "Conference Proceedings",
  isbn: "978-81-987260-7-0",
  authors: [
    { name: "Sainath S", role: "First Author & Paper Presenter", isUser: true },
    { name: "Dr. Pradeepa P", role: "Associate Professor & Project Guide" },
    { name: "Sreejith AS", role: "Co-Author" },
    { name: "Surya S Nair", role: "Co-Author" }
  ],
  affiliation: "Department of Computer Science, Mar Ivanios College, Thiruvananthapuram, Kerala, India",
  department: "Department of Computer Science",
  userRole: "First Author and Research Paper Presenter",
  shortDescription: "Research on an AI-based cognitive telemetry system for predicting student stress using multidimensional lifestyle data, Random Forest classification and SHAP-based Explainable AI.",
  pdfUrl: "/research/mentra-os-research-paper.pdf",
  coverThumbnail: "/research/thumbs/mentra-cover.png",
  pageThumbnail: "/research/thumbs/mentra-paper-first-page.png",
  technicalHighlights: [
    "Random Forest-based student stress prediction",
    "SHAP Explainable AI for feature attribution",
    "Multidimensional cognitive telemetry",
    "Next.js frontend",
    "FastAPI backend",
    "SQLite database"
  ],
  reportedMetrics: {
    accuracy: "88.6%",
    f1Score: "0.89 macro-average F1-Score",
    context: "Experimental model benchmark reported in the published conference paper (evaluating multidimensional cognitive telemetry parameters; not presented as clinical diagnostic performance)."
  }
};

export interface CompletedCredential {
  title: string;
  issuer: string;
  year: string;
  track: "Security" | "AI & ML" | "Analytics" | "Systems";
  pdfUrl?: string;
}

export const COMPLETED_CREDENTIALS: CompletedCredential[] = VERIFIED_CERTIFICATES.map(c => ({
  title: c.title,
  issuer: c.issuer,
  year: c.dateBadge,
  track: c.category === "Cybersecurity" ? "Security" : c.category === "Data & Analytics" ? "Analytics" : c.category === "IoT & Systems" ? "Systems" : "AI & ML",
  pdfUrl: c.pdfUrl
}));
