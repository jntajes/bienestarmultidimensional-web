import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, BRAND, CONTACTS } from '../../content';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">{BRAND.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              {BRAND.shortDescription}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Navegación</p>
            <ul className="grid grid-cols-2 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-mint-bright transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white mb-4">Contacto</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACTS.whatsappLink}
                  className="flex items-center gap-2 text-sm hover:text-mint-bright transition-colors"
                >
                  <MessageCircle size={15} />
                  {CONTACTS.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-2 text-sm hover:text-mint-bright transition-colors"
                >
                  <Mail size={15} />
                  {CONTACTS.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href={CONTACTS.instagramLink}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-mint-bright hover:text-mint-bright transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {BRAND.tagline}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/50">
            Sitio en desarrollo
          </p>
        </div>
      </div>
    </footer>
  );
}
