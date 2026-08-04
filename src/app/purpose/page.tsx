import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Kicker from '../../components/Kicker';
import Reflection from '../../components/Reflection';
import Reveal from '../../components/Reveal';
import { usePageTitle } from '../../lib/usePageTitle';

const prose = [
  'This portfolio exists to show my work, not just describe it. It is a living record of how I am growing as an engineer, built around one idea: that I do my best work when I take ownership of a whole problem, from the data model to the interface a person actually uses.',
  'Everything here, my projects, my co-op experience, my goals, and my reflections, is chosen to document that growth honestly rather than to list every task I have ever done. I have left out the raw assessments and kept only what says something real about how I think.',
  'If you are reading this as an employer, a peer, or a future version of myself, the purpose is the same: to make it clear who I am, how I think, and where I am headed.',
];

const readingPaths = [
  {
    to: '/about',
    label: 'Start with who I am',
    blurb: 'The story, the people, and the habits behind the work.',
  },
  {
    to: '/experience',
    label: 'Start with the record',
    blurb: 'Two co-op terms and two contracts, in full detail.',
  },
  {
    to: '/projects',
    label: 'Start with the curiosity',
    blurb: 'The apps I build when nobody assigns them.',
  },
  {
    to: '/goals',
    label: 'Start with the growth',
    blurb: 'SMART goals, self-discovery portfolios, and an honest critique.',
  },
];

export default function PurposePage() {
  usePageTitle('Purpose · Sukhman Balagan');

  return (
    <section className="pb-24 pt-32 md:pb-40 md:pt-40">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Reveal>
              <Kicker center>Purpose</Kicker>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-display sm:text-6xl md:text-7xl">
                Why This Portfolio{' '}
                <span className="opal-gradient-text opal-glow-text">
                  Exists
                </span>
              </h1>
            </Reveal>
          </div>

          <div className="mt-16 space-y-6">
            {prose.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-lg leading-[1.8] text-secondary">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="mt-16 rounded-2xl border border-line bg-card p-8 md:p-10">
              <Kicker>How to read it</Kicker>
              <p className="mt-4 leading-[1.7] text-secondary">
                Every page answers a different question, and every artifact on
                this site carries a reflection explaining why it is here. Pick
                whichever thread you care about.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {readingPaths.map((path) => (
                  <li key={path.to}>
                    <Link
                      to={path.to}
                      className="group flex h-full flex-col rounded-xl border border-line bg-elevated p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:opal-glow-sm"
                    >
                      <span className="flex items-center justify-between gap-3 font-medium text-primary">
                        {path.label}
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className="shrink-0 text-tertiary transition-colors duration-300 group-hover:text-primary"
                        />
                      </span>
                      <span className="mt-1.5 text-sm leading-[1.7] text-secondary">
                        {path.blurb}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 rounded-2xl border border-line bg-card px-8 pb-8 pt-2 md:px-10 md:pb-10">
              <Reflection
                competency="Communication Skills"
                retell="I wrote a single statement of what this portfolio is for, then curated every page against it rather than publishing everything I produced this term."
                relate="This is the communication competency applied to my own work: deciding what to leave out is the part of writing that actually makes a point land."
                reflect="Naming the purpose changed the site. I cut the raw assessment results I had first planned to paste in, because a score with no interpretation says nothing about how I think, and that is the only thing this portfolio is here to show."
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
