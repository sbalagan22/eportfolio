import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
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
    reflection: {
      competency: 'Communication Skills',
      retell:
        'I built a multilingual semantic search over the organization’s educational library and documented the algorithm, the process, and the user-testing results for a non-engineering client.',
      relate:
        'This is the communication competency with a real audience: the client judges the work by whether they can follow the explanation, not by the retrieval architecture underneath it.',
      reflect:
        'Explaining a RAG pipeline to a non-technical reader exposed exactly where my explanations break down. I default to describing how something is built when the person in front of me only needs to know what it does for them.',
    },
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
    reflection: {
      competency: 'Problem Analysis',
      retell:
        'Before rebuilding the site I researched how other engineering firms present themselves, then delivered an insights report and a roadmap alongside the finished website.',
      relate:
        'This maps to problem analysis: the client asked for a redesign, but the real problem was that the site was not built to engage engineering clients in the first place.',
      reflect:
        'I learned to spend time on the brief before the build. The research changed what I made, and handing over the reasoning gave the client something they could act on after the contract ended.',
    },
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
    reflection: {
      competency: 'Knowledge Base for Engineering',
      retell:
        'In my first co-op term I embedded Power BI into the PTAG FM web app, building the Rails services, the token and RBAC layer, and the data pipelines behind it.',
      relate:
        'This was the experiential learning cycle at its most literal: I arrived knowing none of this stack and learned Rails, DAX, and the Azure AD embedding flow by shipping with them.',
      reflect:
        'Coming back to PTAG for a second term let me see how much the first one changed me. In 2025 I was handed a defined integration; in 2026 I was trusted to design a platform from scratch, and the difference is that I had learned how production systems fail.',
    },
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

export default function ExperiencePage() {
  usePageTitle('Experience · Sukhman Balagan');

  return (
    <div className="pb-24 pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <Kicker center>Where I have worked</Kicker>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-display sm:text-6xl md:text-7xl">
              My{' '}
              <span className="opal-gradient-text opal-glow-text">
                Experience
              </span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-3xl text-secondary">
              This page is the formal record: the roles I have held across two
              co-op terms and two contracts, each one paired with a reflection
              on what it actually taught me.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-[1.7] text-tertiary">
              The apps I build on my own time live on the{' '}
              <Link
                to="/projects"
                className="rounded-sm font-medium text-secondary underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:text-primary hover:decoration-primary"
              >
                Projects page
              </Link>
              .
            </p>
          </Reveal>
        </div>

        {/* Work — the only section on this page; projects live at /projects. */}
        <section className="mt-20" aria-label="Work">
          <SectionHeader kicker="Roles" title="Work" />
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
      </div>
    </div>
  );
}
