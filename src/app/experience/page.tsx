import { ReactNode, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Trophy } from 'lucide-react';
import Kicker from '../../components/Kicker';
import Reflection, { ReflectionContent } from '../../components/Reflection';
import Reveal from '../../components/Reveal';
import { usePageTitle } from '../../lib/usePageTitle';

interface Job {
  role: string;
  org: string;
  location: string;
  dates: string;
  lead?: string;
  bullets: string[];
  reflection?: ReflectionContent;
}

const work: Job[] = [
  {
    role: 'Software Engineer Intern',
    org: 'PTAG Inc.',
    location: 'Markham, ON',
    dates: 'May 2026 - August 2026',
    lead: 'Built and shipped Outfitter, an internal AI operations platform used firm-wide to manage, discover, and govern AI tool usage across PTAG.',
    bullets: [
      'Designed and implemented the full-stack application from scratch: a React 18 + TypeScript frontend with a custom design system (Glacier), a Node.js 22 + Express REST API backed by PostgreSQL on Azure, and Microsoft Entra / MSAL authentication.',
      'Shipped features including a two-level catalog with category navigation, bulk CSV import, global search, bookmarks, a Builder Path onboarding system, and an AI Context Pack library of reusable prompt packs for PTAG deliverables.',
      "Integrated Trelica's API to surface per-user AI license assignments and ChatGPT/Claude usage analytics on a firm-wide stats dashboard.",
      "Migrated Trailhead's user access management functionality into Outfitter as a consolidated sidebar feature.",
      'Deployed to Azure App Service via GitHub Actions CI/CD with Key Vault secrets, managed identity, and PostgreSQL Flexible Server.',
      'Ran a parallel Ridgeline deployment apprenticeship (Azure infra) under a senior engineer.',
      'Collaborated with senior engineers and product stakeholders across scoping, architecture review, and handoff planning for a post-summer team; produced a full handoff doc and a replacement two-week plan.',
      'Finished roughly 3 to 4 weeks ahead of the master project schedule.',
    ],
    reflection: {
      competency: 'Professionalism',
      retell:
        "I built Outfitter, PTAG's internal AI operations platform, end to end across the data model, API, frontend, and Azure deployment, and shipped it to staging ahead of schedule.",
      relate:
        "This maps onto the experiential learning cycle from COOP 2100: I had to observe the team's conventions and the Glacier design system before I could build, then test my work against a real production environment rather than a classroom case.",
      reflect:
        'I learned that writing code that works on my machine is very different from shipping code that must survive in production and be maintained by a team after I leave. My confidence now rests on problems I have actually solved, not ones I have only read about.',
    },
  },
  {
    role: 'Full-Stack Developer (Contract)',
    org: 'The Groundwater Project',
    location: 'Remote',
    dates: 'May 2026 - June 2026',
    bullets: [
      "Built an AI-powered semantic search over the organization's educational library so users can ask natural-language questions and retrieve relevant content.",
      'Engineered a RAG pipeline using Supabase / pgvector for embeddings, MeiliSearch for keyword and hybrid retrieval, and Meta NLLB for multilingual support, including African languages.',
      'Built a custom search UI and documented the algorithm, development process, and user-testing and evaluation results.',
      'Assisted with a worklog for the Advance Ontario program.',
    ],
  },
  {
    role: 'Frontend Developer (Contract)',
    org: 'HMTS Machine Works',
    location: 'Remote',
    dates: 'March 2026 - April 2026',
    bullets: [
      'Rebuilt the company website to better engage engineering clients, modernizing design and UX and adding interactive features.',
      'Conducted market research and competitive analysis of engineering-firm websites to identify industry best practices and effective site structures.',
      'Delivered a research and insights report, a redesign roadmap, and the final updated website covering design, content strategy, and interactive features.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    org: 'PTAG Inc.',
    location: 'Markham, ON',
    dates: 'May 2025 - August 2025',
    bullets: [
      'Built a full-stack embedded analytics solution by integrating Power BI into the PTAG FM web app using Azure AD, Power BI Embedded, Azure DevOps for CI/CD, and the JavaScript SDK.',
      'Designed scalable data pipelines in Power BI with Power Query and DAX to transform JSON APIs into dynamic, real-time KPI reporting across projects.',
      'Built RESTful Ruby on Rails controllers for embedding logic and integrated Power BI visual components into the frontend with JavaScript for a seamless embedded analytics experience.',
      'Developed Ruby on Rails backend services powering a secure, end-to-end analytics platform with RBAC, token generation, and user-specific embedded reporting.',
      'Delivered a complete internal analytics platform from API ingestion to secure embedded reporting, enabling scalable, role-based insights within the PTAG FM platform.',
    ],
  },
];

interface Award {
  text: string;
  /* gold for a win, silver for finalist or runner-up */
  tier: 'gold' | 'silver';
}

interface Project {
  name: string;
  description: string;
  stack: string;
  award?: Award;
  link?: string;
  credit?: string;
  bullets: string[];
  reflection?: ReflectionContent;
}

const projects: Project[] = [
  {
    name: 'Bloomr',
    description:
      'AI-powered adaptive study companion that generates personalized quizzes and explanations from uploaded course material.',
    stack: 'Next.js · Supabase · OpenAI · ElevenLabs · React Three Fiber',
    award: {
      text: '1st Place · GDG × University of Toronto AI Case Competition',
      tier: 'gold',
    },
    link: 'https://bloomr-ai.com',
    bullets: [
      'Generates personalized quizzes and explanations from uploaded course material, using OpenAI for content analysis and ElevenLabs for voice-guided learning.',
      'Designed a 3D gamified garden with React Three Fiber where completed study sessions grow interactive plants, driving engagement through visual progression.',
      'Full-stack app with Next.js + Supabase handling auth, session persistence, and real-time progress tracking across multiple courses.',
      'Judged 1st on technical implementation, impact, and presentation.',
    ],
    reflection: {
      competency: 'Design',
      retell:
        'My teammate and I built Bloomr, an AI study companion, in one week and won first place at the GDG × University of Toronto AI Case Competition.',
      relate:
        'This connects to the individual and teamwork competency: the win came from trust, clear division of work, and seeing an idea through under a hard deadline.',
      reflect:
        'I learned that the best outcomes come from a partner who shares your standard, and that finishing and shipping matter as much as the idea itself.',
    },
  },
  {
    name: 'VibeCheck',
    description:
      'AI security scanner that streams vulnerabilities from a connected GitHub repo in real time, explained in plain English with one-click auto-fix PRs.',
    stack: 'Featherless AI · IBM watsonx.ai · IBM Watson NLU · SSE',
    award: {
      text: 'Winner · Best Cybersecurity & Trust, IBM Z × UNSA',
      tier: 'gold',
    },
    credit: 'Built with Nikhelesh Bhaskaran',
    bullets: [
      'Built for the age of "vibe coding": connect GitHub, pick a repo, and watch vulnerabilities (hardcoded secrets, SQL injection, broken auth) stream in real time, explained in plain English with one-click auto-fix PRs.',
      'Two-tier AI pipeline: Featherless AI (Qwen2.5-Coder-32B) for fast file-level triage and classification, IBM watsonx.ai (Granite) for deep scans on high-risk files, and Watson NLU for context-aware severity scoring.',
      'Streamed findings via server-sent events so results appear in about 25 seconds instead of 5+ minutes.',
      'IBM services used: watsonx.ai (Toronto), Watson NLU (US East), Cloud Object Storage, and Cloudant. A 36-hour build.',
    ],
  },
  {
    name: 'HomeCrowd',
    description:
      "Local-first AI system that tells Toronto small businesses what's about to hit their neighborhood before it happens, then forecasts the revenue impact for that specific business.",
    stack: 'NVIDIA GB10 · Nemotron · cuOpt · cuML · FastAPI · Deck.gl',
    award: { text: 'Finalist · NVIDIA Spark Hackathon', tier: 'silver' },
    bullets: [
      'Watches festivals, road closures, film permits, and real-time bike-share activity, then forecasts the revenue impact for that specific business.',
      'Generates a day-by-day ops plan: staff per shift, inventory to order, when to extend hours, and which deliveries to reroute before a street closes.',
      'Nemotron 30B ran fully local (no cloud, complete privacy); the cuOpt native GPU solver did mixed-integer staffing and inventory optimization; cuML RandomForest modeled per-business event-to-revenue correlation.',
      'Wired live Toronto Open Data and Bike Share Toronto (GBFS) feeds into a physics-based congestion model behind a FastAPI + Deck.gl interactive map dashboard.',
      'Built the full GPU-accelerated pipeline on DGX Spark hardware over a single weekend.',
    ],
  },
  {
    name: 'SideCode',
    description:
      'Live code companion that reviews a GitHub repo as you ship, rendering it as an interactive graph with one verdict per file and for the whole repo.',
    stack: 'Gemini API · Vertex AI · Firebase · Octokit · Monaco',
    award: {
      text: 'Runner-up · GDG York AI Case Competition',
      tier: 'silver',
    },
    link: 'https://bugtrap-puce.vercel.app',
    credit: 'Built with Nikhelesh Bhaskaran',
    bullets: [
      'Connect a repo and it renders as an interactive graph (each node a source file, sized by code volume) with one verdict per file and for the whole repo: safe to merge or blocked.',
      "Multi-agent, not one prompt: parallel security and bug specialist agents review every file, and a coordinator deduplicates overlapping findings, weighs each agent's confidence, and resolves severity disagreements into a single verdict.",
      'Findings stream onto the graph live; open any flagged file in an embedded Monaco editor with lines highlighted, then fix in one click or fix every file at once. Fixes stay non-destructive: shown as before/after diffs, committed only on confirmation.',
      'Gemini API is the reasoning engine in every agent (security, bug, coordinator, fixer), served in production through Vertex AI; Firebase (Firestore + Auth) is the zero-ops backend, and a GitHub webhook rescans changed files on every push.',
    ],
  },
  {
    name: 'OctagonAI',
    description:
      'End-to-end UFC fight prediction platform using 20+ years of historical data, generating pre-fight probabilities published through a public web dashboard.',
    stack: 'Python · CatBoost · Pandas · scikit-learn · React · Next.js',
    link: 'https://octagonai.app',
    bullets: [
      'Uses 20+ years of historical fight data (2005 to present) to generate pre-fight probabilities published through a public web dashboard.',
      'Engineered a zero-leakage data pipeline computing EMA-based fighter differentials and Glicko-2 ratings, with strict walk-forward validation across all training and backtests.',
      'Trained and calibrated a CatBoost classifier (ordered boosting plus Platt scaling), reaching roughly 60.1% blind-test accuracy (2019 to 2024) with bootstrap confidence intervals.',
      'Observed +14.2% historical ROI in walk-forward backtests when model probabilities exceeded market odds.',
      'Deployed a Next.js frontend visualizing predictions and fighter metrics, with automated weekly data updates via GitHub Actions.',
    ],
  },
];

function SectionHeader({
  kicker,
  title,
}: {
  kicker: string;
  title: ReactNode;
}) {
  return (
    <Reveal>
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-4 text-4xl font-semibold tracking-display md:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

function AwardChip({ award }: { award: Award }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full opal-border bg-card px-3.5 py-1.5 font-mono text-xs text-secondary">
      <Trophy
        size={13}
        aria-hidden="true"
        className={award.tier === 'gold' ? 'trophy-gold' : 'trophy-silver'}
      />
      {award.text}
    </span>
  );
}

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-2.5">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3 leading-[1.7] text-secondary">
          <span className="opal-dot mt-[0.6em] shrink-0" aria-hidden="true" />
          {bullet}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({
  project,
  defaultOpen = false,
}: {
  project: Project;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const reduce = useReducedMotion();
  const panelId = `project-panel-${project.name}`;

  return (
    <article className="rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-line-strong">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-start justify-between gap-4 rounded-2xl p-8 text-left"
      >
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold tracking-display">
            {project.name}
          </h3>
          <p className="mt-2 leading-[1.7] text-secondary">
            {project.description}
          </p>
          <p className="mt-3 font-mono text-xs text-tertiary">
            {project.stack}
          </p>
          {project.award && (
            <div className="mt-4">
              <AwardChip award={project.award} />
            </div>
          )}
        </div>
        <span
          className="mt-1 rounded-full border border-line-strong bg-elevated p-2 text-tertiary transition-colors duration-300 group-hover:text-primary"
          aria-hidden="true"
        >
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-line px-8 pb-8 pt-6">
              <BulletList bullets={project.bullets} />
              {(project.link || project.credit) && (
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-elevated px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-secondary transition-all duration-300 hover:text-primary hover:opal-glow-sm"
                    >
                      Visit live site
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
                  {project.credit && (
                    <p className="font-mono text-xs text-tertiary">
                      {project.credit}
                    </p>
                  )}
                </div>
              )}
              {project.reflection && <Reflection {...project.reflection} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export default function ExperiencePage() {
  usePageTitle('Experience · Sukhman Balagan');

  return (
    <div className="pb-24 pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <Kicker center>What I have built</Kicker>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-display sm:text-6xl md:text-7xl">
              My{' '}
              <span className="opal-gradient-text opal-glow-text">
                Experience
              </span>
            </h1>
          </Reveal>
        </div>

        {/* Work */}
        <section className="mt-24" aria-label="Work">
          <SectionHeader kicker="Where I have worked" title="Work" />
          <div className="mt-10 space-y-6">
            {work.map((job, i) => (
              <Reveal key={`${job.org}-${job.dates}`} delay={i * 60}>
                <article className="rounded-2xl border border-line bg-card p-8 transition-colors duration-300 hover:border-line-strong">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-semibold tracking-display">
                      {job.role}{' '}
                      <span className="opal-gradient-text">{job.org}</span>
                    </h3>
                    <p className="font-mono text-xs text-tertiary">
                      {job.location} · {job.dates}
                    </p>
                  </div>
                  {job.lead && (
                    <p className="mt-4 font-medium leading-[1.7] text-primary">
                      {job.lead}
                    </p>
                  )}
                  <div className="mt-4">
                    <BulletList bullets={job.bullets} />
                  </div>
                  {job.reflection && <Reflection {...job.reflection} />}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-24" aria-label="Projects">
          <SectionHeader kicker="Selected projects" title="Projects" />
          <div className="mt-10 space-y-6">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 60}>
                <ProjectCard project={project} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
