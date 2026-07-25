import { FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import Reveal from '../components/Reveal';
import { SITE } from '../lib/site';
import { usePageTitle } from '../lib/usePageTitle';

const secondaryLinks = [
  { href: SITE.github, label: 'GitHub', icon: GithubIcon },
  { href: SITE.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
];

export default function HomePage() {
  usePageTitle('Sukhman Balagan · ePortfolio');

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
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
      <div className="relative mx-auto w-full max-w-4xl px-6 py-28 text-center">
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
      </div>
    </section>
  );
}
