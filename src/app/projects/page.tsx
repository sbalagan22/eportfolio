import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import Kicker from '../../components/Kicker';
import Reflection, { ReflectionContent } from '../../components/Reflection';
import Reveal from '../../components/Reveal';
import { usePageTitle } from '../../lib/usePageTitle';

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

/*
 * Every fact and link below comes from Sukhman_Balagan_MASTER_Resume.md.
 * VibeCheck and HomeCrowd have no public link recorded there, so they render
 * without one rather than pointing at a URL that would not resolve.
 */
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
    name: 'DiamondAI',
    description:
      'An MLB pitch-sequence Transformer: a decoder-only causal model predicting the next pitch type, at-bat outcome, and live win probability from real game state.',
    stack:
      'JAX/Flax · Pallas · SageMaker · Kinesis · DynamoDB · AWS CDK · Next.js',
    bullets: [
      'Built a decoder-only causal Transformer of roughly 7.5M parameters, trained from scratch on about 7M Statcast pitches from 2015 to 2024 on a Kaggle TPU v5e-8.',
      'Hand-wrote a FlashAttention-style fused attention kernel in Pallas for TPU training, reaching a 1.5 to 3.3 times speedup over XLA at long context lengths.',
      'Designed an event-driven serving architecture on AWS: a Lambda ingest layer streams live MLB Stats API game events into Kinesis, decoupling ingestion from inference.',
      'Deployed the model to a SageMaker real-time endpoint with autoscaling, and pushed live predictions to the frontend over an API Gateway WebSocket instead of polling.',
      'Defined the entire pipeline as infrastructure as code in AWS CDK, with CloudWatch dashboards and X-Ray tracing across ingest, stream, inference, and fan-out.',
    ],
    reflection: {
      competency: 'Knowledge Base for Engineering',
      retell:
        'I built and deployed an MLB pitch-prediction Transformer end to end, from training the model on TPU to serving it live through an event-driven AWS pipeline.',
      relate:
        'This maps to the engineering knowledge base competency: writing the attention kernel by hand meant learning what the framework had been doing for me.',
      reflect:
        'This is the project that has humbled me most. It is the clearest evidence I have that I will go a level deeper when the problem asks for it, rather than stopping at the abstraction I was handed.',
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
    reflection: {
      competency: 'Problem Analysis',
      retell:
        'We built an AI security scanner in 36 hours that streams vulnerabilities out of a connected repository in about 25 seconds instead of 5+ minutes.',
      relate:
        'This is problem analysis under a hard constraint: the two-tier pipeline exists because we measured where the time was actually going rather than assuming.',
      reflect:
        'I learned that the winning decision was an architectural one, not a modelling one. Triaging cheaply first and reserving the expensive model for high-risk files is a trade-off I now look for by default.',
    },
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
    reflection: {
      competency: 'Use of Engineering Tools',
      retell:
        'I built a fully local GPU pipeline on DGX Spark hardware in a weekend, running the model, the optimizer, and the forecasting on-device with no cloud.',
      relate:
        'This maps to the engineering tools competency: most of the weekend was spent making unfamiliar GPU tooling behave, including catching libraries silently falling back to CPU.',
      reflect:
        'I learned to verify that a tool is doing what it claims. The pipeline looked like it worked long before it was actually using the GPU, and only measurement caught the difference.',
    },
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
    reflection: {
      competency: 'Design',
      retell:
        'We designed a multi-agent reviewer where specialist agents review every file in parallel and a coordinator resolves their disagreements into one verdict per file.',
      relate:
        'This is the design competency: the hard part was not the prompts, it was deciding how conflicting findings get reconciled into something a developer can act on.',
      reflect:
        'I learned that an interface has to commit to an answer. Showing every agent output would have been honest and useless, so the coordinator exists to turn analysis into a decision.',
    },
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
    reflection: {
      competency: 'Problem Analysis',
      retell:
        'I built a UFC prediction platform end to end, from a zero-leakage feature pipeline through a calibrated CatBoost model to a public dashboard that updates weekly.',
      relate:
        'This is problem analysis in its strictest form: walk-forward validation and bootstrap intervals exist to stop me from believing a result that has not earned it.',
      reflect:
        'I learned to distrust a good number until the validation design explains it. Roughly 60% accuracy is honest and useful; the far higher figure I first saw was leakage, and finding that changed how I evaluate every model I train.',
    },
  },
];

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
        className="group flex w-full items-start justify-between gap-4 rounded-2xl p-8 text-left"
      >
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-display">
            {project.name}
          </h2>
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

export default function ProjectsPage() {
  usePageTitle('Projects · Sukhman Balagan');

  return (
    <div className="pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <Kicker center>Projects and Practice</Kicker>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-display sm:text-6xl md:text-7xl">
              What I Build For Its{' '}
              <span className="opal-gradient-text opal-glow-text">Own Sake</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-3xl text-secondary">
              Building software is both my profession and my hobby. These are
              the apps I have made on my own time, because I wanted to
              understand how they worked. Expand any project to read the detail
              and what it taught me.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-[1.7] text-tertiary">
              The roles I have held live on the{' '}
              <Link
                to="/experience"
                className="rounded-sm font-medium text-secondary underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-primary hover:decoration-primary"
              >
                Experience page
              </Link>
              . This page is the record of what I do when nobody is grading it.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 60}>
              <ProjectCard project={project} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>

        {/* Hobbies — prose, deliberately not carded. */}
        <Reveal delay={240}>
          <section aria-labelledby="hobbies-title" className="mt-20">
            <Kicker>Outside the repositories</Kicker>
            <h2
              id="hobbies-title"
              className="mt-4 text-3xl font-semibold tracking-display md:text-4xl"
            >
              Hobbies
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-[1.8] text-secondary">
              Outside of shipped projects, I compete in hackathons often,
              usually with the same close teammate, and I contribute to
              open-source repositories to keep learning from strong codebases. I
              also train seriously on a push, pull, legs split, which is where I
              first learned the discipline of tracking data and improving
              against it over time, the same mindset I bring to engineering.
            </p>
          </section>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 rounded-2xl border border-line bg-card px-8 pb-8 pt-2 md:px-10 md:pb-10">
            <Reflection
              competency="Life-Long Learning"
              retell="I gathered the apps I build on my own time: a study companion, a pitch-sequence Transformer, two AI code reviewers, a local-first forecasting system, and a live prediction platform."
              relate="This connects to the life-long learning competency, since none of it was assigned. I built it to understand things I was curious about."
              reflect="Seeing it together confirmed that curiosity, not obligation, is what drives my best work, and that treating building as a hobby is what keeps me improving faster than any single course could."
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
