import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/experience', label: 'Experience' },
];

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="flex items-center gap-0.5 rounded-full border border-line bg-ink/70 p-1.5 opal-glow-sm backdrop-blur-xl sm:gap-1"
      >
        {links.map((link) => {
          const isActive =
            link.to === '/' ? pathname === '/' : pathname.startsWith(link.to);
          return (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={`relative rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-300 sm:px-4 sm:text-xs ${
                isActive ? 'text-primary' : 'text-tertiary hover:text-primary'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-elevated opal-glow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
