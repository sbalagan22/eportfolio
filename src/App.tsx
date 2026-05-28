import { Mail, Github, Linkedin } from 'lucide-react';
import OpalButton from './components/OpalButton';
import OpalCard from './components/OpalCard';

const currentlyList = ['Interning at PTAG', 'Studying at York University'];

const work = [
  {
    company: 'PTAG',
    role: 'Software Engineering Intern · Summer 2026',
    description:
      'Contributing to Outfitter and Ridgeline — internal tools that streamline how project teams plan, track, and report on complex capital programs. Working across the full stack to ship production features used by real client engagements.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <main className="max-w-content mx-auto px-6 md:px-10 pt-20 pb-32">
        {/* Hero */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
            <div className="order-2 md:order-1">
              <h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tight font-semibold opal-text-glow">
                Sukhman Balagan
              </h1>
              <p className="mt-4 text-lg md:text-xl text-paper/85">
                Software Engineering Student · Full-Stack Developer
              </p>
              <p className="mt-6 text-base text-paper/65 leading-relaxed max-w-prose">
                Currently building production tools at PTAG. Studying at York
                University through the Rippen Advance Ontario Program.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <OpalButton variant="primary" href="#">
                  View Resume
                </OpalButton>
                <OpalButton variant="secondary" href="#contact">
                  Get in Touch
                </OpalButton>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div
                className="relative rounded-full overflow-hidden opal-glow-anim opal-border"
                style={{
                  width: 'clamp(240px, 40vw, 320px)',
                  height: 'clamp(240px, 40vw, 320px)',
                }}
              >
                <img
                  src="/avatar.png"
                  alt="Sukhman Balagan"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-semibold opal-text-glow">
            About
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-5 text-base leading-relaxed text-paper/80">
              <p>
                I'm a software engineering student who likes building things
                that quietly work — internal tools, search systems, the
                infrastructure that makes other people's work faster. I tend
                to gravitate toward the messy seams between systems, where a
                little careful design saves a lot of downstream pain.
              </p>
              <p>
                Lately that's meant shipping internal product features at
                PTAG — getting comfortable inside a real codebase, learning
                how product decisions ripple through the stack, and making
                small improvements that other engineers notice.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-paper/50 mb-4">
                Currently
              </p>
              <ul className="space-y-3">
                {currentlyList.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-paper/85"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-paper shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Work */}
        <section className="mt-32">
          <h2 className="text-4xl md:text-5xl font-semibold opal-text-glow">
            Work
          </h2>
          <div className="mt-10 flex flex-col gap-6">
            {work.map((item) => (
              <OpalCard key={item.company}>
                <p className="font-medium text-xl">{item.company}</p>
                <p className="mt-1 text-sm text-paper/55">{item.role}</p>
                <p className="mt-4 text-base leading-relaxed text-paper/80">
                  {item.description}
                </p>
              </OpalCard>
            ))}
            <OpalCard>
              <p className="text-paper/55">More projects coming soon</p>
            </OpalCard>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="mt-32 pt-12 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-8">
            <FooterLink href="mailto:#" icon={<Mail size={16} />}>
              Email
            </FooterLink>
            <FooterLink href="#" icon={<Github size={16} />}>
              GitHub
            </FooterLink>
            <FooterLink href="#" icon={<Linkedin size={16} />}>
              LinkedIn
            </FooterLink>
          </div>
          <p className="mt-8 text-sm text-paper/50">© 2026 Sukhman Balagan</p>
        </footer>
      </main>
    </div>
  );
}

function FooterLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="opal-underline inline-flex items-center gap-2 text-base text-paper/85 hover:text-paper transition-colors duration-300 focus-visible-opal rounded-sm"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
