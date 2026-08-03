import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { SITE } from '../lib/site';

const links = [
  { href: SITE.github, label: 'GitHub', icon: GithubIcon, external: true },
  { href: SITE.linkedin, label: 'LinkedIn', icon: LinkedinIcon, external: true },
  { href: `mailto:${SITE.email}`, label: SITE.email, icon: Mail, external: false },
  { href: SITE.resume, label: 'Resume', icon: FileText, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="font-mono text-xs tracking-wide text-tertiary">
            {SITE.name}
          </p>
          <p className="font-mono text-xs tracking-wide text-tertiary">
            Last updated {SITE.lastUpdated}
          </p>
        </div>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {links.map(({ href, label, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="inline-flex items-center gap-2 rounded-sm font-mono text-xs tracking-wide text-tertiary transition-colors duration-300 hover:text-primary"
              >
                <Icon size={14} aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
