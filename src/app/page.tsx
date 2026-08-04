import { ArrowUpRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import Kicker from '../components/Kicker';
import Reveal from '../components/Reveal';
import { SITE } from '../lib/site';
import { usePageTitle } from '../lib/usePageTitle';

const secondaryLinks = [
  { href: SITE.github, label: 'GitHub', icon: GithubIcon },
  { href: SITE.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
];

/* Table of contents — every section of the portfolio, reachable in one click. */
const contents = [
  {
    to: '/purpose',
    label: 'Purpose',
    blurb: 'Why this portfolio exists and what it is trying to prove.',
  },
  {
    to: '/about',
    label: 'About Me',
    blurb: 'My story, where I come from, and what shaped how I work.',
  },
  {
    to: '/experience',
    label: 'Experience',
    blurb: 'The formal record: two co-op terms and two contracts.',
  },
  {
    to: '/projects',
    label: 'Projects',
    blurb: 'The apps I have built on my own time, and what each one taught me.',
  },
  {
    to: '/goals',
    label: 'Goals and Portfolios',
    blurb: 'SMART goals, self-discovery portfolios, and an honest critique.',
  },
];

export default function HomePage() {
  usePageTitle('Sukhman Balagan · ePortfolio');

  return (
    <section className="relative overflow-hidden">
      <div
        className="opal-orb bg-opal-blue"
        style={{ width: 480, height: 480, top: '-8%', left: '-6%' }}
        aria-hidden="true"
      />
      <div
        className="opal-orb bg-opal-lilac"
        style={{
          width: 420,
          height: 420,
          bottom: '-10%',
          right: '-4%',
          animationDelay: '-9s',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 pb-24 pt-36 text-center md:pt-40">
        <Reveal>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-display sm:text-7xl lg:text-8xl">
            Sukhman{' '}
            <span className="opal-gradient-text opal-glow-text">Balagan</span>
          </h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.7] text-secondary">
            I build production AI platforms end to end: data model, API,
            frontend, and cloud deploy. I compete in hackathons often, with
            multiple wins and finalist finishes.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={SITE.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-ink opal-glow transition-all duration-300 hover:opal-glow-lg hover:scale-[1.03] active:scale-[0.97]"
            >
              <FileText size={16} aria-hidden="true" />
              View Resume
            </a>
            {secondaryLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-card/60 px-7 text-sm font-medium text-primary transition-all duration-300 hover:bg-elevated hover:-translate-y-0.5 hover:opal-glow-sm"
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        {/* About Me video — the introduction to the whole portfolio. */}
        <Reveal delay={180}>
          <div className="mt-20 text-left">
            <div className="flex justify-center">
              <Kicker>About me, in 60 seconds</Kicker>
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-card p-3 opal-glow-sm sm:p-4">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-elevated">
                <iframe
                  src="https://drive.google.com/file/d/1xGI38N5lIPzWiEApmkgKQF8l-fQcI58Y/preview"
                  title="About Me: a 60-second video introduction to Sukhman Balagan"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-xs text-tertiary">
              A short introduction to who I am and what I build.
            </p>
          </div>
        </Reveal>

        {/* One-line purpose, so intent is evident immediately. */}
        <Reveal delay={240}>
          <p className="mx-auto mt-12 max-w-2xl text-secondary">
            This site exists to show my work, not just describe it, and to
            document how I am growing as an engineer.
          </p>
          <Link
            to="/purpose"
            className="mt-4 inline-flex items-center gap-1.5 rounded-full font-mono text-xs uppercase tracking-[0.14em] text-tertiary transition-colors duration-300 hover:text-primary"
          >
            Read the full purpose
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </Reveal>

        {/* Table of contents. */}
        <Reveal delay={300}>
          <nav aria-label="Portfolio contents" className="mt-20 text-left">
            <div className="flex justify-center">
              <Kicker>What is in this portfolio</Kicker>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {contents.map((item, i) => (
                <li
                  key={item.to}
                  className={
                    i === contents.length - 1 && contents.length % 2 === 1
                      ? 'sm:col-span-2'
                      : undefined
                  }
                >
                  <Link
                    to={item.to}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:opal-glow-sm"
                  >
                    <span className="flex items-center justify-between gap-3 text-lg font-semibold tracking-display">
                      {item.label}
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 text-tertiary transition-colors duration-300 group-hover:text-primary"
                      />
                    </span>
                    <span className="mt-2 text-sm leading-[1.7] text-secondary">
                      {item.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
