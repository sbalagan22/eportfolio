import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/BrandIcons';
import Kicker from '../../components/Kicker';
import Reveal from '../../components/Reveal';
import { SITE } from '../../lib/site';
import { usePageTitle } from '../../lib/usePageTitle';

const meta = [
  'Computer Science',
  'Lassonde School of Engineering',
  'Expected 2028',
];

const bio = [
  'My name is Sukhman Balagan and I am a Computer Science student in the Lassonde School of Engineering at York University. I am a builder before anything else. I like taking an idea and turning it into something real, from full-stack AI platforms to weekend hackathon projects, and most of what I am proud of started as something nobody assigned me. Outside of building, I lift seriously on a push, pull, legs split, treating fitness the way I treat my projects: with consistency and measurable progress. I also compete in hackathons often, usually with the same close friend.',
  'I grew up in Brampton, Ontario, first near Cassie Campbell in a busy suburban area, then moving to the quieter Castlemore area in grade 9. In both neighbourhoods I played basketball with the kids on my street, which is how I made friends. Brampton is a predominantly Punjabi city, and growing up surrounded by that culture and a tight circle of Punjabi friends gave me a strong sense of community and identity.',
  'I chose York mainly for proximity, so I could commute and stay close to my family while pursuing a serious engineering education. I chose Computer Science because I have had a knack for technology since I was a kid and I genuinely love problem solving. My biggest strengths going in are self-direction and discipline: I do not wait to be told to learn something, and I take on hard projects and see them through.',
  'My biggest inspiration is my mom. She works incredibly hard and has a discipline I have always looked up to, quiet and consistent rather than loud. She taught me that hard work is a habit you keep up even when nobody is watching. Every time I finish something I started, I am drawing on what she modeled.',
];

const profiles = [
  { href: SITE.linkedin, label: 'LinkedIn', icon: LinkedinIcon, external: true },
  { href: SITE.github, label: 'GitHub', icon: GithubIcon, external: true },
  { href: `mailto:${SITE.email}`, label: 'Email', icon: Mail, external: false },
];

export default function AboutPage() {
  usePageTitle('About Me · Sukhman Balagan');

  return (
    <section className="pb-24 pt-32 md:pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <Reveal>
            <Kicker center>Who I am</Kicker>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-display sm:text-6xl md:text-7xl">
              About <span className="opal-gradient-text opal-glow-text">Me</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <ul
              className="mt-8 flex flex-wrap justify-center gap-2"
              aria-label="At a glance"
            >
              {meta.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-secondary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            {bio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="leading-[1.8] text-secondary">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Reveal>
              <div className="rounded-2xl border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:opal-glow-sm">
                <Kicker>Education</Kicker>
                <h2 className="mt-4 text-2xl font-semibold tracking-display">
                  York University
                </h2>
                <p className="mt-2 leading-[1.7] text-secondary">
                  Bachelor of Science in Computer Science (Co-op Program),
                  expected 2028
                </p>
                <p className="mt-1 font-mono text-xs text-tertiary">
                  Toronto, ON · September 2024 - Present
                </p>
                <p className="mt-4 border-t border-line pt-4 font-mono text-xs leading-[1.8] text-tertiary">
                  Relevant coursework: Data Structures, Algorithm Analysis,
                  Object-Oriented Programming, Computer Systems, Software
                  Tools, Theory of Computation
                </p>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="rounded-2xl border border-line bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:opal-glow-sm">
                <Kicker>Where I am headed</Kicker>
                <p className="mt-4 leading-[1.7] text-secondary">
                  I am building toward a career as a full-stack engineer
                  shipping production AI platforms end to end, and over time
                  toward product management at the intersection of AI and
                  engineering, layering feature specs, scoping, and
                  stakeholder coordination on top of hands-on building.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl border border-line bg-card p-8">
                <Kicker>Find me</Kicker>
                <div className="mt-5 flex flex-wrap gap-3" aria-label="Profiles">
                  {profiles.map(({ href, label, icon: Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-line-strong bg-elevated px-5 font-mono text-xs uppercase tracking-[0.14em] text-secondary transition-all duration-300 hover:text-primary hover:opal-glow-sm hover:-translate-y-0.5"
                    >
                      <Icon size={14} aria-hidden="true" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
