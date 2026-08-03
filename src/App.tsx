import { useEffect } from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import Nav from './components/Nav';
import PageWrap from './components/PageWrap';
import AboutPage from './app/about/page';
import ExperiencePage from './app/experience/page';
import GoalsPage from './app/goals/page';
import HomePage from './app/page';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70dvh] w-full max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center md:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">
        404
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-display">
        Page <span className="opal-gradient-text">not found</span>
      </h1>
      <Link
        to="/"
        className="mt-8 inline-flex h-11 items-center rounded-full border border-line-strong bg-card px-6 text-sm font-medium text-primary transition-all duration-300 hover:bg-elevated hover:-translate-y-0.5"
      >
        Back home
      </Link>
    </section>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrap>
              <HomePage />
            </PageWrap>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrap>
              <AboutPage />
            </PageWrap>
          }
        />
        <Route
          path="/experience"
          element={
            <PageWrap>
              <ExperiencePage />
            </PageWrap>
          }
        />
        <Route
          path="/goals"
          element={
            <PageWrap>
              <GoalsPage />
            </PageWrap>
          }
        />
        <Route path="/career" element={<Navigate to="/experience" replace />} />
        <Route
          path="*"
          element={
            <PageWrap>
              <NotFound />
            </PageWrap>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-dvh flex-col bg-ink text-primary">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:border focus:border-line-strong focus:bg-elevated focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-primary"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
