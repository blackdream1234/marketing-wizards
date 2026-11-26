import { useEffect, useState } from 'react';
import { AboutView } from './components/AboutView';
import { BlogView } from './components/BlogView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { Navbar } from './components/Navbar';
import { PortfolioModal } from './components/PortfolioModal';
import { PortfolioView } from './components/PortfolioView';
import { ServicesView } from './components/ServicesView';
import { CONTENT } from './data/content';
import { Language, PageId, PortfolioItem, ServiceCategory } from './types';

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = window.localStorage.getItem('mw-lang');
    if (saved === 'fr' || saved === 'en') return saved;
    if (window.navigator.language.toLowerCase().startsWith('fr')) return 'fr';
  } catch {
    // Ignore storage access restrictions
  }
  return 'en';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const [activePage, setActivePage] = useState<PageId>('home');
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [contactSubject, setContactSubject] = useState<string | undefined>(undefined);

  const content = CONTENT[language];

  // Sync HTML lang attribute, document title, and localStorage for global accessibility
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.metaTitle;
    try {
      window.localStorage.setItem('mw-lang', language);
    } catch {
      // Ignore storage access restrictions
    }
  }, [language, content.metaTitle]);

  // Keep open modal project translated when user switches EN <-> FR
  const activeModalProject = selectedProject
    ? content.portfolioPage.items.find((item) => item.id === selectedProject.id) || selectedProject
    : null;

  const handleNavigate = (page: PageId, category?: ServiceCategory) => {
    setActivePage(page);
    if (page === 'services') {
      setServiceCategory(category || 'all');
    }
    if (page !== 'contact') {
      setContactSubject(undefined);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiscussService = (subject: string) => {
    setContactSubject(subject);
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFC] text-[#0F172A]">
      <Navbar
        language={language}
        onToggleLanguage={setLanguage}
        activePage={activePage}
        onNavigate={handleNavigate}
        content={content.nav}
      />

      <main id="main-content" className="flex-1">
        {activePage === 'home' && (
          <HomeView
            content={content}
            onNavigate={handleNavigate}
            onSelectProject={setSelectedProject}
            onDiscussService={handleDiscussService}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            content={content}
            selectedCategory={serviceCategory}
            onSelectCategory={setServiceCategory}
            onDiscussService={handleDiscussService}
          />
        )}

        {activePage === 'portfolio' && (
          <PortfolioView content={content} onSelectProject={setSelectedProject} />
        )}

        {activePage === 'about' && <AboutView content={content} onNavigate={handleNavigate} />}

        {activePage === 'blog' && <BlogView content={content} onNavigate={handleNavigate} />}

        {activePage === 'contact' && (
          <ContactView
            language={language}
            content={content}
            prefilledSubject={contactSubject}
          />
        )}
      </main>

      <Footer
        language={language}
        onToggleLanguage={setLanguage}
        onNavigate={handleNavigate}
        content={content}
      />

      <PortfolioModal
        project={activeModalProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={handleDiscussService}
        labels={content.portfolioPage.modal}
      />
    </div>
  );
}
