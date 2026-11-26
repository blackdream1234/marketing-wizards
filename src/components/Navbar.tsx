import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import { ASSETS } from '../data/content';
import { Language, PageId, SiteContent } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  content: SiteContent['nav'];
}

export function Navbar({
  language,
  onToggleLanguage,
  activePage,
  onNavigate,
  content,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'services', label: content.services },
    { id: 'portfolio', label: content.portfolio },
    { id: 'about', label: content.about },
    { id: 'blog', label: content.blog },
    { id: 'contact', label: content.contact },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#0B1221] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-medium"
      >
        {content.skipToContent}
      </a>

      <header className="sticky top-0 z-40 h-16 bg-white/95 backdrop-blur-sm border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand mark + single-line wordmark */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-[#0B1221] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <img
              src={ASSETS.logoNavy}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="h-8 w-auto object-contain shrink-0"
            />
            <span>MarketingWizards</span>
          </button>

          {/* Zone 2: 5 clean single-line text nav links */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#0B1221] font-semibold'
                      : 'text-slate-600 hover:text-[#0B1221]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#1D4ED8] transition-transform duration-150 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language toggle + Primary CTA */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <button
              type="button"
              onClick={() => onToggleLanguage(language === 'en' ? 'fr' : 'en')}
              aria-label={content.switchLanguageLabel}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#0B1221] transition-colors whitespace-nowrap shrink-0 py-2 px-1 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
              <span className={language === 'en' ? 'text-[#0B1221] font-semibold' : 'text-slate-400'}>
                EN
              </span>
              <span aria-hidden="true" className="text-slate-300">
                /
              </span>
              <span className={language === 'fr' ? 'text-[#0B1221] font-semibold' : 'text-slate-400'}>
                FR
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="px-4 py-2 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {content.cta}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onToggleLanguage(language === 'en' ? 'fr' : 'en')}
              aria-label={content.switchLanguageLabel}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 px-2.5 py-2 min-h-[44px] whitespace-nowrap cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span>{language === 'en' ? 'FR' : 'EN'}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? content.closeMenuLabel : content.menuLabel}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-1 shadow-lg">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleLinkClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-100 text-[#0B1221] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 px-4 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
              >
                {content.cta}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
