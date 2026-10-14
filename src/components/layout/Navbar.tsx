import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, BRAND } from '../../content';
import { useActiveSection } from '../../hooks';

const SECTION_IDS = NAV_ITEMS.map((n) => n.href.replace('#', ''));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-gray-light/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-content px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          className="inline-flex min-w-0 items-center gap-2 text-xs font-semibold leading-tight tracking-tight text-ink sm:gap-2.5 sm:text-lg"
        >
          <img
            src="/assets/logo-jb.png"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto shrink-0 object-contain sm:h-10"
          />
          <span>{BRAND.tagline}</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-mint ${
                  active === item.href.replace('#', '')
                    ? 'text-mint'
                    : 'text-gray-DEFAULT'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
          id="mobile-navigation"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-5 mt-3 rounded-2xl bg-cream border border-gray-light/60 shadow-lg p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active === item.href.replace('#', '')
                    ? 'bg-mint-lighter text-mint'
                    : 'text-gray-DEFAULT hover:bg-mint-lighter/50'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
