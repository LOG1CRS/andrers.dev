/**
 * Every string on the page lives here, mirroring CONTENT.md.
 * Inside role copy, [[double brackets]] mark a term that renders emphasised.
 */

export const person = {
  name: "André Ruiz",
  fullName: "André Ruiz Sandoval",
  email: "contact@andrers.dev",
  linkedin: {
    label: "LinkedIn /in/andre-marco-rs",
    href: "https://www.linkedin.com/in/andre-marco-rs",
  },
  resume: { label: "Resume — PDF", href: "/andre-ruiz-cv.pdf" },
  location: "Guadalajara, Mexico",
};

/** Nav order. Hero, Scale and Languages are deliberately not listed. */
export const navItems = [
  { id: "about", label: "About" },
  { id: "principles", label: "Principles" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
] as const;

/** Drives the document title as each section comes into view. */
export const titledSections = [
  { id: "about", label: "About" },
  { id: "principles", label: "Principles" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "languages", label: "Languages" },
  { id: "certifications", label: "Certifications" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  lines: [
    { muted: "Where", accent: "data" },
    { muted: "becomes", accent: "product," },
    { muted: "and", accent: "product" },
    { muted: "becomes", accent: "impact." },
  ],
  sub: "I work at the intersection of product, software, and data, creating and leading technically complex digital products that solve meaningful problems and move the business forward.",
  primary: { label: "Get in touch", href: "#contact" },
  secondary: { label: "Get to know me", href: "#about" },
};

export const scale = [
  {
    value: "6",
    label: "Years of experience",
    qualifier: ["Building digital products", "since 2020"],
  },
  {
    value: "4",
    label: "Industries",
    qualifier: ["Technology · Supply chain", "Pharma · Banking"],
  },
  {
    value: "14",
    label: "Manufacturing plants",
    qualifier: ["Supported by products &", "data platforms"],
  },
  {
    value: "7",
    label: "Supply chain domains",
    qualifier: ["From sourcing through logistics"],
  },
  {
    value: "1,000+",
    label: "Employees supported",
    qualifier: ["Through enterprise products", "& data platforms"],
  },
];

export const about = {
  eyebrow: "About",
  title: "Turning unclear problems into products people use.",
  lead: "I'm a technologist who enjoys turning ideas and unclear problems into products people can actually use. My interest in programming started with something simple: I wanted to make my own ideas real.",
  body: [
    "Learning to build gave me a way to experiment, create from scratch, and eventually use technology to solve problems that could genuinely help other people. Over time, that curiosity expanded beyond software into data, cloud architecture, product design, and technical leadership.",
    "I've gone from building individual applications to shaping enterprise products and data platforms that support thousands of people across complex organizations. What inspires me most is understanding how people work, where they struggle, and how technology can make their jobs easier, their decisions better, or their processes simpler.",
    "That evolution is shaping where I want to go next. I want to keep growing into product and technology leadership, creating useful digital products that solve meaningful problems, help people, and move businesses forward, while staying close to the technical foundation that made me want to build in the first place.",
  ],
  facts: [
    {
      label: "Current role",
      value: ["Senior Analytics Specialist", "PiSA Farmacéutica"],
    },
    {
      label: "Current scope",
      value: [
        "Technical direction of digital products and data platforms across 14 manufacturing plants",
      ],
    },
    { label: "Career direction", value: ["Technical Product Management"] },
    { label: "Based", value: ["Guadalajara, Mexico", "Open to remote & hybrid"] },
  ],
};

export const principles = {
  eyebrow: "Principles",
  title: "How I work.",
  note: "Three ideas run through everything I build — and they run in this order.",
  items: [
    {
      index: "01",
      name: "Data",
      align: "left" as const,
      statement:
        "Data only creates value when people can trust it enough to make decisions.",
      body: "I turn data into a foundation for action, connecting information across systems and making it reliable enough to power analytics, workflows, and automation. The real value comes when data stops being something people only look at and starts helping them make better decisions, simplify work, and move processes forward.",
    },
    {
      index: "02",
      name: "Product",
      align: "right" as const,
      statement:
        "Great products begin with understanding the problem, not rushing to build the solution.",
      body: "I start by understanding the people, processes, and business behind a problem before deciding what is worth building. The goal is not to ship more features, but to create products that solve the right problem, make sense for the people using them, and work technically and strategically.",
    },
    {
      index: "03",
      name: "Impact",
      align: "left" as const,
      statement:
        "The work is not finished when something ships. It is finished when something changes.",
      body: "A product matters when it changes something for the better. I care about adoption, better decisions, simpler processes, and meaningful outcomes for the people using what I build. Impact is what connects the technology we create to the reason we decided to build it in the first place.",
    },
  ],
};

export const experience = {
  eyebrow: "Experience",
  title: "Six years, four industries, one direction.",
  note: "Four roles, each one moving further from writing the code and closer to deciding what gets built.",
  roles: [
    {
      date: "2023 — Present",
      company: "PiSA Farmacéutica",
      title: "Senior Analytics Specialist",
      description:
        "Lead the design, development, and delivery of software applications and data platforms for manufacturing and quality operations across [[14]] production plants. Primary technical owner of each solution: define the approach and architecture, coordinate the engineers building it, and own delivery through to adoption, working directly with central directors of Manufacturing and Quality, plant directors, and area managers.",
      bullets: [
        "Architected and delivered the [[Manufacturing Data Warehouse]] on BigQuery in 8 months, centralizing and automating production and quality data from all [[14]] plants under unified business rules. Eliminated manual data consolidation and established the foundation layer now powering company-wide analytics and automation, from executive dashboards to shop-floor tools used daily by [[1,000+]] employees.",
        'Designed and automated "[[Red Neuronal]]," a Power BI based measurement platform that gave leadership first-ever visibility into production release performance. Adopted as the official monthly metric used by the central directors to evaluate all [[14]] plants ([[300]] users: directors, managers, engineers).',
        'Built "[[Metrix]]", a suite of Power BI KPI dashboards (Laboratory, Compliance, Manufacturing, Quality) covering input, process, and output metrics, standardizing performance measurement and replacing manual reporting for [[300]] area analysts.',
        'Developed "[[DMX]]," a progressive web app (PWA) for project and activity tracking used by [[1,000+]] employees to monitor day-to-day work and improve area-level execution and compliance.',
      ],
    },
    {
      date: "2022 — 2023",
      company: "Genpact",
      title: "Senior Web Developer",
      description:
        "Led full stack projects end-to-end for enterprise clients in banking, technology, and supply chain: scoped needs with stakeholders, authored solution proposals, designed architecture, and drove development through deployment.",
      bullets: [
        'Built "[[GSF]]" (Global Solution Finder), an internal platform cataloging every solution delivered across the organization so teams could find work already proven at one client and apply it to another. Used by [[2,000+]] employees to accelerate delivery through reuse instead of rebuilding from scratch.',
      ],
    },
    {
      date: "2021 — 2022",
      company: "Genpact",
      title: "Web Developer",
      description:
        "Developed full stack web applications on MERN/PERN stacks (React, Node.js, Express, PostgreSQL, MongoDB) for multiple enterprise clients across industries, working with senior developers and stakeholders to ship high-quality, scalable solutions. Promoted to Senior in 12 months based on delivery quality and growing ownership of client-facing work.",
      bullets: [],
    },
    {
      date: "2020 — 2021",
      company: "Freelance",
      title: "Web Developer",
      description:
        "Designed and built landing pages, web APIs, microservices, inventory database systems, and workflow automations for business clients, owning the full cycle from requirements to delivery.",
      bullets: [],
    },
  ],
};

export const education = {
  eyebrow: "Education",
  title: "How I learned to think about systems.",
  note: "An engineering programme built around reasoning about systems, not only implementing them.",
  years: "2017 — 2020",
  university: ["Universidad", "Panamericana,", "Guadalajara"],
  degree: "B.S. Computer Graphics and Systems Engineering",
  quote:
    "Engineering program focused on how software systems are designed and reasoned about: algorithms and complexity, data structures, computer architecture, operating systems, networks, and database theory, alongside mathematics and applied engineering projects.",
};

export const languages = {
  eyebrow: "Languages",
  title: "Working in two languages.",
  note: "Comfortable working, writing and presenting in both.",
  items: [
    { key: "Spanish", value: "Native" },
    { key: "English", value: "Professional working proficiency" },
  ],
};

export const certifications = {
  eyebrow: "Certifications",
  title: "Formal training.",
  note: "Four programmes in process improvement, agile delivery and structured problem-solving.",
  items: [
    { year: "2024", name: "Analysis & Problem-Solving", issuer: "4PAR" },
    { year: "2023", name: "Agile Intermediate", issuer: "Genpact" },
    { year: "2022", name: "Lean Six Sigma Green Belt", issuer: "Genpact" },
    { year: "2021", name: "Lean & Data Lean", issuer: "Genpact" },
  ],
};

export const skills = {
  eyebrow: "Skills",
  title: "What I actually do.",
  note: "Six capabilities that overlap more than they separate.",
  items: [
    {
      index: "01",
      name: "Product & discovery",
      statement: "Understanding the problem before defining the solution.",
      body: "I work from discovery and stakeholder conversations through requirements, prioritization, product design, and prototyping. The goal is to understand what people need, what the business needs, and decide what is worth building before engineering effort begins.",
      tags: [
        "Product discovery",
        "Requirements",
        "Prioritization",
        "Design thinking",
        "Product design",
        "Prototyping",
        "Figma",
        "Lean Six Sigma",
      ],
    },
    {
      index: "02",
      name: "Technical leadership & delivery",
      statement:
        "Giving a product clear technical direction from definition through adoption.",
      body: "I take technical ownership of projects, define the approach, make architecture decisions, coordinate engineers and stakeholders, and stay accountable through delivery and adoption. Leadership, for me, is as much about creating clarity and direction as it is about making technical decisions.",
      tags: [
        "Technical leadership",
        "Product delivery",
        "Technical decision-making",
        "Stakeholder management",
        "Solution ownership",
        "Agile Scrum",
        "Jira",
        "Confluence",
      ],
    },
    {
      index: "03",
      name: "Software engineering",
      statement:
        "Knowing how products are built changes the way I decide what should be built.",
      body: "Six years in full stack engineering let me stay close to implementation and make product decisions with real technical constraints in mind. I can move from product conversations into architecture and engineering without treating them as separate worlds.",
      tags: [
        "React",
        "Next.js",
        "TypeScript & JavaScript",
        "Node.js & Express",
        "Python",
        "REST APIs",
        "PostgreSQL & MongoDB",
        "Git & GitHub",
      ],
    },
    {
      index: "04",
      name: "Data platforms & analytics",
      statement:
        "Good products depend on data people can understand, trust, and act on.",
      body: "I design the data foundations behind applications and decision-making, from source integration and modeling to pipelines, warehousing, unified business rules, and analytics. In many of my projects, building the right product also means building the data layer underneath it.",
      tags: [
        "Data modeling",
        "Data pipelines",
        "Data warehousing",
        "SQL & NoSQL",
        "BigQuery",
        "Dataform",
        "Datastream",
        "Power BI",
      ],
    },
    {
      index: "05",
      name: "Cloud & solution architecture",
      statement:
        "Turning product decisions into systems that can actually be built and operated.",
      body: "I define how applications, data, services, and integrations fit together, translating product requirements into technical architecture while considering enterprise constraints, scalability, maintainability, and how each component fits into the broader system.",
      tags: [
        "Google Cloud Platform",
        "Solution architecture",
        "System design",
        "Event-driven systems",
        "Microservices",
        "API architecture",
        "Enterprise integrations",
      ],
    },
    {
      index: "06",
      name: "AI & automation",
      statement:
        "Using AI as a capability across product, engineering, and automation.",
      body: "I use AI both to accelerate how I build and as a capability inside the products I create, from LLM integrations and agent workflows to MCP-enabled tools and workflow automation.",
      tags: [
        "LLM integration",
        "MCP",
        "Agent workflows",
        "Prompt engineering",
        "AI-assisted development",
        "Workflow automation",
        "Power Automate",
      ],
    },
  ],
};

export const contact = {
  leadStart: "Good ideas usually start with ",
  leadAccent: "a conversation.",
  sub: "Let's talk...",
};

export const footer = {
  left: "© 2026 · Andrers.dev",
  right: "Guadalajara · MX",
  rightShort: "GDL · MX",
};
