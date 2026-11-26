import { Globe } from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/content';
import { Language, PageId, ServiceCategory, SiteContent } from '../types';

interface FooterProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  onNavigate: (page: PageId, serviceFilter?: ServiceCategory) => void;
  content: SiteContent;
}

export function Footer({
  language,
  onToggleLanguage,
  onNavigate,
  content,
}: FooterProps) {
  const { footer, nav } = content;
  const localizedAddress = language === 'fr' ? CONTACT_INFO.addressFr : CONTACT_INFO.addressEn;

  return (
    <footer className="bg-[#0B1221] text-slate-300 border-t border-slate-800/80">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand summary */}
          <div className="md:col-span-5 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors cursor-pointer"
            >
              <img
                src={ASSETS.logoWhite}
                alt=""
                aria-hidden="true"
                referrerPolicy="no-referrer"
                className="h-9 w-auto object-contain shrink-0"
              />
              <span>MarketingWizards</span>
            </button>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              {footer.description}
            </p>
            <p className="font-mono text-xs text-slate-500 tabular-nums">
              ICE: {CONTACT_INFO.ice}
            </p>
          </div>

          {/* Company links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {footer.navTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {(
                [
                  { id: 'services', label: nav.services },
                  { id: 'portfolio', label: nav.portfolio },
                  { id: 'about', label: nav.about },
                  { id: 'blog', label: nav.blog },
                  { id: 'contact', label: nav.contact },
                ] as { id: PageId; label: string }[]
              ).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {footer.servicesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footer.serviceLinks.map((service) => (
                <li key={service.label}>
                  <button
                    type="button"
                    onClick={() => onNavigate('services', service.category)}
                    className="text-left text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-sm font-semibold text-white tracking-wide">
              {footer.contactTitle}
            </h3>
            <div className="space-y-2.5 text-sm text-slate-400">
              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT_INFO.phoneHref}
                  className="font-mono tabular-nums hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p className="leading-relaxed">{localizedAddress}</p>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright & Language Toggle */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>{footer.copyright}</p>

          <div className="flex items-center gap-3">
            <Globe className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
            <span className="text-slate-500">{footer.languageLabel}:</span>
            <button
              type="button"
              onClick={() => onToggleLanguage('en')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                language === 'en'
                  ? 'text-white font-semibold bg-slate-800'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => onToggleLanguage('fr')}
              className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                language === 'fr'
                  ? 'text-white font-semibold bg-slate-800'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Français
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
