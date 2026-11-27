export type Language = 'en' | 'fr';

export type PageId = 'home' | 'services' | 'portfolio' | 'about' | 'blog' | 'contact';

export type PortfolioCategory = 'all' | 'web' | 'ecommerce' | 'branding' | 'multilingual';

export type ServiceCategory = 'all' | 'development' | 'seo' | 'commerce' | 'branding';

export interface StatMetric {
  value: string;
  label: string;
  context: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  title: string;
  summary: string;
  deliverables: string[];
  outcomeMetric: string;
  featured?: boolean;
  image?: string;
}

export interface PlatformItem {
  name: string;
  role: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: Exclude<PortfolioCategory, 'all'>;
  categoryLabel: string;
  year: string;
  platform: string;
  metric: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  image: string;
  imageFit?: 'top' | 'center';
  liveUrl?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  outcome: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface SeoPillar {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface SiteContent {
  metaTitle: string;
  nav: {
    services: string;
    portfolio: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
    skipToContent: string;
    menuLabel: string;
    closeMenuLabel: string;
    switchLanguageLabel: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    stats: StatMetric[];
  };
  capabilities: {
    kicker: string;
    heading: string;
    subheading: string;
    viewAll: string;
    items: ServiceItem[];
  };
  featuredWork: {
    kicker: string;
    heading: string;
    subheading: string;
    viewAll: string;
    inspectProject: string;
    visitLiveSite: string;
  };
  process: {
    kicker: string;
    heading: string;
    subheading: string;
    steps: ProcessStep[];
  };
  whyUs: {
    kicker: string;
    heading: string;
    subheading: string;
    imageAlt: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    kicker: string;
    heading: string;
    subheading: string;
    items: TestimonialItem[];
  };
  ctaBand: {
    kicker: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
  };
  servicesPage: {
    kicker: string;
    heading: string;
    subheading: string;
    filterAll: string;
    filterDev: string;
    filterSeo: string;
    filterCommerce: string;
    filterBranding: string;
    deliverablesLabel: string;
    requestServiceCta: string;
    platformsHeading: string;
    platformsSubheading: string;
    platforms: PlatformItem[];
    seoHeading: string;
    seoSubheading: string;
    seoPillars: SeoPillar[];
  };
  portfolioPage: {
    kicker: string;
    heading: string;
    subheading: string;
    filters: Record<PortfolioCategory, string>;
    items: PortfolioItem[];
    modal: {
      close: string;
      challenge: string;
      solution: string;
      deliverables: string;
      platform: string;
      impact: string;
      startSimilar: string;
      visitLiveSite: string;
      scrollHint: string;
    };
  };
  aboutPage: {
    kicker: string;
    heading: string;
    subheading: string;
    storyHeading: string;
    storyParagraphs: string[];
    imageAlt: string;
    valuesHeading: string;
    values: {
      number: string;
      title: string;
      description: string;
    }[];
    globalHeading: string;
    globalDescription: string;
    regions: {
      city: string;
      region: string;
      focus: string;
    }[];
  };
  blogPage: {
    kicker: string;
    heading: string;
    subheading: string;
    readArticle: string;
    backToAll: string;
    relatedHeading: string;
    posts: BlogPost[];
  };
  contactPage: {
    kicker: string;
    heading: string;
    subheading: string;
    directHeading: string;
    emailLabel: string;
    phoneLabel: string;
    officeLabel: string;
    hoursLabel: string;
    hoursValue: string;
    languagesLabel: string;
    languagesValue: string;
    formHeading: string;
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      postalCode: string;
      postalCodePlaceholder: string;
      service: string;
      serviceOptions: string[];
      source: string;
      sourceOptions: string[];
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    errors: {
      nameRequired: string;
      emailInvalid: string;
      phoneInvalid: string;
      messageShort: string;
    };
    success: {
      heading: string;
      body: string;
      summaryTitle: string;
      resetButton: string;
    };
  };
  footer: {
    description: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    serviceLinks: { label: string; category: ServiceCategory }[];
    languageLabel: string;
    copyright: string;
  };
}
