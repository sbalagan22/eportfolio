import { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Kicker from '../../components/Kicker';
import Reflection, { ReflectionContent } from '../../components/Reflection';
import Reveal from '../../components/Reveal';
import { usePageTitle } from '../../lib/usePageTitle';

const portfolios = [
  { id: 'dreams-and-goals', number: '01', title: 'Dreams and Goals' },
  { id: 'interests-and-skills', number: '02', title: 'Interests and Skills' },
  {
    id: 'values-and-personality',
    number: '03',
    title: 'Values and Personality',
  },
  {
    id: 'building-credentials',
    number: '04',
    title: 'Building Credentials',
  },
];

/* Goals are rendered verbatim from smart-goals.md — do not paraphrase. */
interface SmartGoal {
  text: string;
  target: string;
}

const competencies: { name: string; goals: SmartGoal[]; why: string }[] = [
  {
    name: 'Communication Skills',
    goals: [
      {
        text: 'By August 22, 2026, produce a complete written handoff package for the Outfitter platform (architecture overview, feature documentation, and a two-week replacement plan for the incoming team) and deliver a 30-minute verbal walkthrough to my manager and the future maintainers, then use their questions and feedback to revise at least two sections of the documentation for clarity.',
        target: 'Aug 22, 2026',
      },
      {
        text: 'By June 30, 2026, write and deliver clear technical documentation for the Groundwater Project semantic search system (covering the search algorithm, development process, and user-testing results) and present my findings to the client, using their feedback to revise at least one section so a non-technical reader can follow it.',
        target: 'Jun 30, 2026',
      },
    ],
    why: 'I selected Communication because my technical work has consistently outpaced my ability to explain it. I can build a full-stack AI platform end to end, but the harder skill, and the one that matters most as I move toward roles at the intersection of AI and product, is translating that work into language that stakeholders, teammates, and non-technical decision makers can act on. I see communication as the multiplier on everything else I do: strong engineering that no one understands has limited impact, and developing this competency now, while I have real audiences at work and on contract, is the most direct path toward the career I want.',
  },
  {
    name: 'Collaboration and Leadership Skills',
    goals: [
      {
        text: 'By February 28, 2027, lead a hackathon team of at least three people in a role that goes beyond coding (owning project scoping, task delegation, and the final pitch) at a minimum of two events, and after each event collect one piece of peer feedback on my coordination to refine how I run the next team.',
        target: 'Feb 28, 2027',
      },
      {
        text: 'By August 22, 2026, take ownership of coordination on at least one cross-person Outfitter feature by aligning with the relevant infrastructure and product stakeholders, driving the feature through weekly architecture reviews to a shipped state, and documenting the decisions so the dependency is unblocked without me having to chase it repeatedly.',
        target: 'Aug 22, 2026',
      },
    ],
    why: 'I selected Collaboration and Leadership because I am moving from being the person who writes the code to the person who helps a team decide what to build and how to work together. Leadership at this stage is not about authority, it is about reliability, clear delegation, and making the people around me more effective. I currently lean toward doing things myself rather than distributing work, which does not scale. By deliberately practicing team leadership in lower-stakes settings like hackathons, and by driving cross-person coordination at work, I can build the habits I will need for senior technical and product roles.',
  },
  {
    name: 'Initiative Taking and Entrepreneurial Skills',
    goals: [
      {
        text: 'By August 22, 2026, identify and propose at least one Outfitter feature improvement that was not in the original master project plan, scope it into a short written spec, get sign-off from my manager, and ship it to the staging environment, demonstrating ownership beyond my assigned deliverables.',
        target: 'Aug 22, 2026',
      },
      {
        text: 'By October 31, 2026, complete and publicly deploy my independent MLB pitch-sequence transformer project (a trained model with four prediction heads on TPU, a documented architecture write-up, and a hand-written attention kernel) and publish it on GitHub and LinkedIn as evidence of self-directed technical depth.',
        target: 'Oct 31, 2026',
      },
    ],
    why: 'I selected Initiative and Entrepreneurship because the work I am most proud of has come from building things no one assigned me. I am targeting frontier AI lab and product roles, and those environments reward people who identify a gap and act on it without waiting for permission. I want to turn this instinct into a repeatable habit rather than something that only appears under hackathon deadline pressure. Initiative is what turns skills into impact: technical ability is common, but the willingness to start, finish, and ship self-directed work is rarer and far more valuable to the teams I want to join.',
  },
];

const workCredentials = [
  {
    entry: 'Software Engineer Intern · PTAG Inc.',
    dates: 'May – Aug 2026',
  },
  {
    entry: 'Software Engineer Intern · PTAG Inc.',
    dates: 'May – Aug 2025',
  },
  {
    entry: 'Full-Stack Developer (Contract) · The Groundwater Project',
    dates: 'May – Jun 2026',
  },
  {
    entry: 'Frontend Developer (Contract) · HMTS Machine Works',
    dates: 'Mar – Apr 2026',
  },
];

const awards = [
  'Bloomr · 1st Place, GDG × University of Toronto',
  'VibeCheck · Best Cybersecurity & Trust, IBM Z × UNSA',
  'HomeCrowd · Finalist, NVIDIA Spark',
  'SideCode · Runner-up, GDG York',
];

const dreamsProse = [
  'I have had a knack for technology since I was a kid. Growing up in Brampton, Ontario — first near Cassie Campbell, then in the quieter Castlemore area — I found my community playing basketball with the kids on my street, and I found my direction in the problems I chose to chase on my own. Most of what I am proud of started as something nobody assigned me.',
  'I chose Computer Science because I love breaking hard problems down and building working solutions. That instinct turned into full-stack AI platforms, weekend hackathon projects, and a habit of seeing ideas through until they are real. I do not wait to be told to learn something.',
  'Where I want this to go is just as clear: a career as a full-stack engineer shipping production AI platforms end to end, and over time product work at the intersection of AI and engineering — layering feature specs, scoping, and stakeholder coordination on top of hands-on building.',
];

function TodoNote({ children }: { children: string }) {
  return (
    <p className="rounded-md border border-dashed border-line-strong bg-elevated/50 px-4 py-3 font-mono text-xs leading-[1.8] text-tertiary">
      {children}
    </p>
  );
}

function PortfolioCard({
  id,
  number,
  title,
  intro,
  reflection,
  delay = 0,
  children,
}: {
  id: string;
  number: string;
  title: string;
  intro: string;
  reflection: ReflectionContent;
  delay?: number;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
      <Reveal delay={delay}>
        <article className="rounded-2xl border border-line bg-card p-8 transition-colors duration-300 hover:border-line-strong md:p-10">
          <Kicker>Portfolio {number}</Kicker>
          <h2
            id={`${id}-title`}
            className="mt-4 text-3xl font-semibold tracking-display md:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 text-secondary">{intro}</p>
          <div className="mt-6 border-t border-line pt-6">{children}</div>
          <Reflection {...reflection} />
        </article>
      </Reveal>
    </section>
  );
}

export default function GoalsPage() {
  usePageTitle('Goals & Portfolios · Sukhman Balagan');

  return (
    <div className="pb-24 pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <Kicker center>Goals and Portfolios</Kicker>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-display sm:text-6xl md:text-7xl">
              Discover{' '}
              <span className="opal-gradient-text opal-glow-text">Myself</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-8 max-w-3xl text-secondary">
              This section is organized around a single goal, discovering who I
              am as an engineer and a person. Each portfolio below collects
              evidence and reflections that document what I have learned about
              my interests, values, and credentials.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <nav aria-label="Portfolios in this section" className="mt-10">
              <ul className="flex flex-wrap justify-center gap-2">
                {portfolios.map((portfolio) => (
                  <li key={portfolio.id}>
                    <a
                      href={`#${portfolio.id}`}
                      className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2 font-mono text-xs text-secondary transition-all duration-300 hover:border-line-strong hover:text-primary hover:opal-glow-sm"
                    >
                      <span className="text-tertiary" aria-hidden="true">
                        {portfolio.number}
                      </span>
                      {portfolio.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>
        </div>

        <div className="mt-16 space-y-8">
          <PortfolioCard
            id="dreams-and-goals"
            number="01"
            title="Dreams and Goals"
            intro="Where this started, and where I want it to go."
            reflection={{
              competency: 'Life-Long Learning',
              retell:
                'I traced my path from a kid who was drawn to technology to a CS student who now builds production software, and I articulated where I want that path to go.',
              relate:
                'This connects to the life-long learning competency and to the self-discovery aim of COOP 2100: naming my own motivation makes my goals deliberate rather than accidental.',
              reflect:
                'Writing this out clarified that the work I am proudest of has always been self-directed, and that my strongest goals are the ones that build on that instinct rather than fight it.',
            }}
          >
            <div className="space-y-5">
              {dreamsProse.map((paragraph) => (
                <p key={paragraph} className="leading-[1.7] text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>
          </PortfolioCard>

          <PortfolioCard
            id="interests-and-skills"
            number="02"
            title="Interests and Skills"
            intro="My personal development goals for this year, set with the SMART framework."
            delay={60}
            reflection={{
              competency: 'Communication Skills',
              retell:
                'I set six SMART goals across three competencies I most want to develop this year, and anchored each to a real vehicle at PTAG or in my own projects.',
              relate:
                'This is the goal-setting framework from COOP 2100 in practice: each goal is specific, measurable, and time-bound, which forces me to define what progress actually looks like.',
              reflect:
                'Writing measurable goals showed me that my weakest area is not technical, it is speaking up early with proposals rather than waiting until I have already solved something alone.',
            }}
          >
            <div className="space-y-8">
              {competencies.map((competency) => (
                <div key={competency.name}>
                  <h3 className="text-xl font-semibold tracking-display">
                    {competency.name}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {competency.goals.map((goal) => (
                      <li
                        key={goal.text}
                        className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                      >
                        <p className="leading-[1.7] text-secondary">
                          {goal.text}
                        </p>
                        <span className="shrink-0 rounded-full border border-line bg-elevated px-3 py-1 font-mono text-xs text-tertiary">
                          {goal.target}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-line pt-5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">
                      Why this competency
                    </p>
                    <p className="mt-3 leading-[1.7] text-secondary">
                      {competency.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </PortfolioCard>

          <PortfolioCard
            id="values-and-personality"
            number="03"
            title="Values and Personality"
            intro="What I value, and how I actually learn."
            delay={60}
            reflection={{
              competency: 'Professionalism',
              retell:
                'I looked at my emotional intelligence results and at how I actually learn, then connected both to how I show up at work.',
              relate:
                'This links to the experiential learning ideas in COOP 2100: my learning style is concrete and active, which is why a co-op placement teaches me more than a classroom case ever could.',
              reflect:
                'Knowing that I learn by doing changed how I approach new tasks: I now try to get to a working prototype fast instead of over-planning, because building is where my understanding actually forms.',
            }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold tracking-display">
                  Emotional Intelligence
                </h3>
                {/* TODO: paste EQ assessment result + short reflection from Week 7-8 submission */}
                <div className="mt-4">
                  <TodoNote>
                    TODO: paste EQ assessment result + short reflection from
                    Week 7-8 submission
                  </TodoNote>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-display">
                  Learning Style at Work
                </h3>
                <p className="mt-4 leading-[1.7] text-secondary">
                  My learning style is hands-on and technical: I learn fastest
                  by building and testing rather than by reading in the
                  abstract. At PTAG this showed up immediately, I had to
                  observe the team&apos;s conventions and the design system
                  first, then learn the rest by shipping features and debugging
                  real production failures rather than studying them.
                </p>
                {/* TODO: paste learning-style inventory result */}
              </div>
            </div>
          </PortfolioCard>

          <PortfolioCard
            id="building-credentials"
            number="04"
            title="Building Credentials"
            intro="The projects, wins, and work that document my progress."
            delay={60}
            reflection={{
              competency: 'Individual and Teamwork',
              retell:
                'I gathered my strongest credentials in one place: two co-op terms, two contracts, and four hackathon results.',
              relate:
                'This maps to the individual and teamwork competency, since most of these came from small teams where I owned real scope.',
              reflect:
                'Seeing them together showed me a consistent thread: my best results come from taking ownership of a whole problem rather than a slice of one, which is the kind of role I want to keep seeking out.',
            }}
          >
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">
                  Work
                </p>
                <ul className="mt-4 space-y-3">
                  {workCredentials.map((credential) => (
                    <li
                      key={`${credential.entry}-${credential.dates}`}
                      className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <p className="leading-[1.7] text-secondary">
                        {credential.entry}
                      </p>
                      <span className="shrink-0 font-mono text-xs text-tertiary">
                        {credential.dates}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">
                  Hackathons and awards
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {awards.map((award) => (
                    <li
                      key={award}
                      className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated px-3.5 py-1.5 font-mono text-xs text-secondary"
                    >
                      <span className="opal-dot" aria-hidden="true" />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="leading-[1.7] text-secondary">
                This is the short version; the full detail on every role and
                project lives on the{' '}
                <Link
                  to="/career"
                  className="inline-flex items-baseline gap-1 font-medium text-primary underline decoration-line-strong underline-offset-4 transition-colors duration-300 hover:decoration-primary"
                >
                  Career page
                  <ArrowUpRight
                    size={13}
                    aria-hidden="true"
                    className="self-center"
                  />
                </Link>
                .
              </p>
            </div>
          </PortfolioCard>
        </div>
      </div>
    </div>
  );
}
