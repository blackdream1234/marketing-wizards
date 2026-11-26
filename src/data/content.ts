import { Language, SiteContent } from '../types';

export const ASSETS = {
  logoNavy: '/assets/aistudio/mw-logo-navy.png',
  logoWhite: '/assets/aistudio/mw-logo-white.png',
  heroStudio: '/assets/aistudio/WebsiteDesign-Header_daae7c3f.webp',
  wireframeDesk: '/assets/aistudio/pexels-picjumbo-com-55570-196644-1536x1024-1_1ef97322.webp',
  webflowWorkspace: '/assets/aistudio/webflow-services_4f6c0ce5.webp',
  ecommerceMockup: '/assets/aistudio/wix-design_fa87afd3.webp',
  staticDesign: '/assets/aistudio/static-website-design-use_90f095cd.webp',
  dynamicDesign: '/assets/aistudio/Dynamic-Website-Design_99ff040f.webp',
  wordpressDesign: '/assets/aistudio/wordpress-website-design_1a843b92.jpg',
  portfolio: {
    trussHaus: '/assets/aistudio/38_cd8695cb.webp',
    enueke: '/assets/aistudio/44_8b5af6f1.webp',
    garrettField: '/assets/aistudio/32_99cb5462.webp',
    goldenberry: '/assets/aistudio/31_762f2fcf.webp',
    sharlasLaw: '/assets/aistudio/43_7bea9776.webp',
    cultAesthetics: '/assets/aistudio/33_9b2eb924.webp',
    allisonVilla: '/assets/aistudio/35_11100fa8.webp',
    torrenFoot: '/assets/aistudio/41_e3766967.webp',
    whyOhWhy: '/assets/aistudio/42_5c19d33f.webp',
  },
};

export const CONTACT_INFO = {
  email: 'info@marketingwizards.com',
  phone: '+212 661 40 37 38',
  phoneHref: 'tel:+212661403738',
  addressEn:
    'Avenue Moulay Ismail, Résidence Volubilis, Bloc C, 1er Étage, N° 53, Province of Tanger-Assilah, Tanger-Médina, Morocco',
  addressFr:
    'Avenue Moulay Ismail, Résidence Volubilis, Bloc C, 1er Étage, N° 53, Province de Tanger-Assilah, Tanger-Médina, Maroc',
  ice: '003678706000028',
};

export const CONTENT: Record<Language, SiteContent> = {
  en: {
    metaTitle: 'MarketingWizards — Digital Marketing, Web Engineering & SEO Agency',
    nav: {
      services: 'Services',
      portfolio: 'Work',
      about: 'About',
      blog: 'Insights',
      contact: 'Contact',
      cta: 'Request a Quote',
      skipToContent: 'Skip to main content',
      menuLabel: 'Open navigation menu',
      closeMenuLabel: 'Close navigation menu',
      switchLanguageLabel: 'Switch language to French',
    },
    hero: {
      kicker: 'Tangier, Morocco · Global English & French Delivery',
      headline: 'Websites and search strategies engineered for measurable growth.',
      subheadline:
        'MarketingWizards builds fast, conversion-focused websites, technical SEO architectures, and multi-market digital campaigns for ambitious businesses across North America, Europe, and worldwide.',
      primaryCta: 'Schedule a Consultation',
      secondaryCta: 'Explore Client Work',
      imageAlt: 'Minimalist studio workstation displaying a responsive MarketingWizards web layout on a laptop',
      stats: [
        {
          value: '14+',
          label: 'Years in Production',
          context: 'Delivering web & growth systems since 2012',
        },
        {
          value: '180+',
          label: 'Websites Launched',
          context: 'Across React, WordPress, Webflow & Shopify',
        },
        {
          value: '+142%',
          label: 'Avg. Organic Traffic Lift',
          context: 'Measured across SEO retainers over 6 months',
        },
        {
          value: 'EN / FR',
          label: 'Bilingual Architecture',
          context: 'Native localization for global accessibility',
        },
      ],
    },
    capabilities: {
      kicker: 'Core Capabilities',
      heading: 'Integrated design, engineering, and acquisition under one roof.',
      subheading:
        'Every engagement connects visual clarity with technical speed and search visibility—eliminating the gap between brand presentation and pipeline performance.',
      viewAll: 'View All Services',
      items: [
        {
          id: 'custom-web',
          number: '01.',
          category: 'development',
          categoryLabel: 'Web Engineering',
          title: 'Custom & Dynamic Website Development',
          summary:
            'Responsive corporate platforms, React interfaces, WordPress ecosystems, and database-driven web applications built for sub-second load times and effortless content management.',
          deliverables: [
            'Custom React, WordPress, Webflow & Squarespace builds',
            'PHP, Node & SQL dynamic portals and admin dashboards',
            'WCAG AA accessibility & multilingual EN/FR structure',
            'Core Web Vitals optimization & technical QA',
          ],
          outcomeMetric: '95+ Lighthouse performance target on every production launch',
          featured: true,
          image: ASSETS.webflowWorkspace,
        },
        {
          id: 'seo-ai-search',
          number: '02.',
          category: 'seo',
          categoryLabel: 'Search & AI Visibility',
          title: 'Technical SEO & AI Search Optimization',
          summary:
            'Data-backed organic acquisition combining technical crawl audits, structured schema markup, topical authority content, and optimization for modern AI-driven search engines.',
          deliverables: [
            'Full technical crawl & indexation architecture',
            'On-page semantic hierarchy & keyword mapping',
            'AI search citation & structured data (JSON-LD)',
            'Local, national & bilingual international SEO',
          ],
          outcomeMetric: '+140% qualified organic sessions within 6 months',
          featured: true,
        },
        {
          id: 'ecommerce',
          number: '03.',
          category: 'commerce',
          categoryLabel: 'E-Commerce',
          title: 'Conversion-Driven Online Stores',
          summary:
            'High-converting storefronts on Shopify, WooCommerce, and BigCommerce engineered to reduce checkout friction, handle complex catalogs, and increase average order value.',
          deliverables: [
            'Custom product page & cart UX architecture',
            'Multi-currency & bilingual storefront setup',
            'Payment gateway, shipping & ERP integration',
          ],
          outcomeMetric: '28% average reduction in checkout abandonment',
          image: ASSETS.ecommerceMockup,
        },
        {
          id: 'digital-marketing',
          number: '04.',
          category: 'seo',
          categoryLabel: 'Growth Campaigns',
          title: 'Paid Acquisition & Social Marketing',
          summary:
            'Disciplined paid search, social advertising, and landing page testing designed around cost-per-qualified-lead and measurable return on ad spend.',
          deliverables: [
            'Google Ads & Meta campaign architecture',
            'Dedicated conversion landing pages',
            'Attribution tracking & monthly ROI reporting',
          ],
          outcomeMetric: '3.4x median return on tracked ad spend',
        },
        {
          id: 'ceo-branding',
          number: '05.',
          category: 'branding',
          categoryLabel: 'Brand Strategy',
          title: 'Corporate & Executive CEO Branding',
          summary:
            'Positioning systems for founders, executives, and growth-stage firms—unifying visual identity, editorial messaging, and digital authority to accelerate trust.',
          deliverables: [
            'Executive positioning & messaging frameworks',
            'Visual identity systems & typography guidelines',
            'Thought-leadership hubs & media kits',
          ],
          outcomeMetric: 'Consistent brand recognition across every touchpoint',
        },
        {
          id: 'maintenance',
          number: '06.',
          category: 'development',
          categoryLabel: 'Lifecycle Care',
          title: 'Website Maintenance, Security & Support',
          summary:
            'Proactive monitoring, security patching, speed tuning, bug resolution, and continuous feature iteration so your digital infrastructure stays resilient after launch.',
          deliverables: [
            'Automated daily backups & security hardening',
            'Same-day bug fixes & CMS dependency updates',
            'Monthly performance & uptime reporting',
          ],
          outcomeMetric: '99.9% uptime SLA with priority technical response',
        },
      ],
    },
    featuredWork: {
      kicker: 'Selected Client Work',
      heading: 'Proven digital builds across architecture, law, commerce, and bilingual nonprofits.',
      subheading:
        'Explore real websites engineered by our team. Select any project to inspect the full-page layout, technical stack, and business outcome.',
      viewAll: 'View Full Portfolio',
      inspectProject: 'Inspect Full Page',
    },
    process: {
      kicker: 'Delivery Methodology',
      heading: 'How we turn strategy into a live, high-performing asset.',
      subheading:
        'A transparent four-stage workflow designed to eliminate guesswork, protect timelines, and align every design decision with measurable commercial targets.',
      steps: [
        {
          number: '01',
          title: 'Discovery & Commercial Audit',
          description:
            'We audit your current site, search footprint, competitors, and buyer journey to define concrete KPIs, sitemap architecture, and bilingual content priorities.',
          deliverable: 'Strategy Brief & Technical Sitemap',
        },
        {
          number: '02',
          title: 'Interface & Brand Architecture',
          description:
            'We design bespoke, accessible layouts tailored to your visual identity—structuring clear hierarchy, reading rhythm, and high-intent conversion paths.',
          deliverable: 'Interactive Design System & Prototypes',
        },
        {
          number: '03',
          title: 'Full-Stack Engineering & SEO',
          description:
            'Using modern frameworks and clean semantic markup, we build responsive, fast-loading pages pre-configured with technical SEO, schema, and analytics.',
          deliverable: 'Staging Environment & Core Web Vitals QA',
        },
        {
          number: '04',
          title: 'Launch, Growth & Ongoing Care',
          description:
            'Post-launch, we monitor search rankings, optimize landing page conversion rates, and provide continuous security updates and technical support.',
          deliverable: 'Live Deployment & Monthly Growth Review',
        },
      ],
    },
    whyUs: {
      kicker: 'Why MarketingWizards',
      heading: 'Senior execution without agency bloat.',
      subheading:
        'Clients stay with us because we speak plainly, ship on schedule, and build maintainable digital systems that compound in value over years.',
      imageAlt: 'UI wireframes sketched in a notebook beside a smartphone on a warm wood desk',
      points: [
        {
          title: 'Commercial Focus First',
          description:
            'We structure every page around user intent, lead qualification, and clear calls to action—not decorative trends that slow down conversion.',
        },
        {
          title: '14+ Years of Multi-Platform Mastery',
          description:
            'Deep hands-on expertise across React, WordPress, Shopify, Webflow, Squarespace, and custom PHP/SQL stacks means we recommend the right tool for your team.',
        },
        {
          title: 'Global English & French Accessibility',
          description:
            'From North America to Francophone Europe and West Africa, we build natively localized sites with clean hreflang SEO and WCAG AA accessibility.',
        },
        {
          title: 'Direct End-to-End Accountability',
          description:
            'From initial discovery through post-launch maintenance, you work directly with the strategists and engineers shipping your site.',
        },
      ],
    },
    testimonials: {
      kicker: 'Client Perspectives',
      heading: 'Measurable outcomes reported by the teams we partner with.',
      subheading:
        'Long-term partnerships built on technical reliability, transparent reporting, and steady pipeline growth.',
      items: [
        {
          id: 'ryan',
          quote:
            'MarketingWizards rebuilt our website and restructured our digital acquisition funnel from the ground up. Within a single quarter, inbound inquiries doubled and our cost per lead dropped noticeably.',
          author: 'Ryan Brooks',
          role: 'Managing Director',
          company: 'Brooks Advisory Group',
          outcome: '2.1x Monthly Qualified Leads',
        },
        {
          id: 'olivia',
          quote:
            'Their team paired sharp web engineering with disciplined search and paid campaigns. Brand visibility across our priority markets improved steadily, with clear reporting at every milestone.',
          author: 'Olivia Carter',
          role: 'VP of Growth',
          company: 'Veridian Commerce',
          outcome: '+138% Organic Revenue in 6 Mo.',
        },
        {
          id: 'emily',
          quote:
            'Before working with MarketingWizards, our outdated site cost us credibility with enterprise prospects. The new build loads in under a second and immediately lifted demo bookings.',
          author: 'Emily Parker',
          role: 'Founder',
          company: 'Northstar Logistics',
          outcome: '+64% Consultation Bookings',
        },
        {
          id: 'daniel',
          quote:
            'We appreciated how seamlessly they combined brand positioning with technical SEO and clean development. Our website now accurately reflects our firm and generates consistent monthly leads.',
          author: 'Daniel Walker',
          role: 'Principal Partner',
          company: 'Walker & Co. Architecture',
          outcome: 'Top-3 Rankings for 18 Key Terms',
        },
        {
          id: 'sophia',
          quote:
            'Proactive, communicative, and deeply technical. MarketingWizards modernized our entire web presence and implemented tracking that finally gave us clarity on campaign ROI.',
          author: 'Sophia Mitchell',
          role: 'Head of Marketing',
          company: 'Meridian Health Clinics',
          outcome: '3.6x Verified Campaign ROAS',
        },
        {
          id: 'michael',
          quote:
            'Thanks to their technical SEO overhaul and site redesign, we now outrank legacy competitors in search and attract better-qualified B2B clients across both English and French regions.',
          author: 'Michael Thompson',
          role: 'Operations Director',
          company: 'Apex Global Supply',
          outcome: '+165% Bilingual Organic Traffic',
        },
      ],
    },
    ctaBand: {
      kicker: 'Start a Project',
      heading: 'Ready to build a faster, higher-converting digital presence?',
      subheading:
        'Book a free 30-minute discovery consultation. We will review your current website, identify immediate SEO and conversion gains, and map a clear roadmap.',
      primaryCta: 'Request a Free Consultation',
      secondaryCta: 'Explore Case Studies',
    },
    servicesPage: {
      kicker: 'Capabilities & Technical Stack',
      heading: 'Full-spectrum web engineering, search optimization, and brand growth.',
      subheading:
        'Filter our capabilities by discipline to review deliverables, platform expertise, and our structured SEO methodology.',
      filterAll: 'All Services',
      filterDev: 'Web Engineering',
      filterSeo: 'SEO & Growth',
      filterCommerce: 'E-Commerce',
      filterBranding: 'Branding',
      deliverablesLabel: 'Included Deliverables',
      requestServiceCta: 'Discuss This Service',
      platformsHeading: 'Platforms & Frameworks We Architect',
      platformsSubheading:
        'Whether your team needs a custom React web application, an editorial Webflow flagship, or a scalable WordPress or Shopify storefront, we build clean, maintainable code.',
      platforms: [
        {
          name: 'React & Tailwind CSS',
          role: 'Modern Web Applications',
          description: 'Fast, component-driven interfaces with multilingual routing, accessibility, and custom API integrations.',
        },
        {
          name: 'WordPress & WooCommerce',
          role: 'Flexible CMS & Publishing',
          description: 'Custom-engineered themes, lean plugin architecture, enterprise security hardening, and high-speed caching.',
        },
        {
          name: 'Webflow',
          role: 'Design-Led Marketing Sites',
          description: 'Pixel-accurate responsive sites with structured CMS collections that marketing teams can update effortlessly.',
        },
        {
          name: 'Shopify & BigCommerce',
          role: 'Scalable E-Commerce',
          description: 'Custom storefronts optimized for mobile checkout speed, international currencies, and retention flows.',
        },
        {
          name: 'Squarespace & Wix Studio',
          role: 'Rapid Brand Launches',
          description: 'Clean redesigns, technical migrations, custom CSS/JS extensions, and on-page SEO restructuring.',
        },
        {
          name: 'Dynamic PHP, Node & SQL',
          role: 'Custom Business Portals',
          description: 'Membership portals, custom admin panels, database optimization, and third-party CRM automation.',
        },
      ],
      seoHeading: 'Our Four-Pillar SEO & AI Search Framework',
      seoSubheading:
        'Sustainable rankings require technical precision, authoritative content, and off-page credibility working in lockstep.',
      seoPillars: [
        {
          number: '01.',
          title: 'Technical SEO & Site Performance',
          description: 'Eliminate crawl bottlenecks and deliver sub-second rendering across desktop and mobile devices.',
          items: [
            'Core Web Vitals & asset compression',
            'XML sitemaps, canonicals & crawl budget cleanup',
            'Structured JSON-LD schema for Google & AI search',
            'Clean bilingual hreflang implementation (EN / FR)',
          ],
        },
        {
          number: '02.',
          title: 'On-Page Architecture & Semantics',
          description: 'Align every landing page with commercial search intent and clear topical structure.',
          items: [
            'Intent-driven keyword & topic clustering',
            'Semantic heading hierarchy & metadata optimization',
            'Internal link graphs distributing page authority',
            'Conversion-focused page layouts & clear CTAs',
          ],
        },
        {
          number: '03.',
          title: 'Content & AI Search Readiness',
          description: 'Publish authoritative, well-structured answers that win both traditional rankings and AI citations.',
          items: [
            'Editorial roadmaps targeting high-intent queries',
            'Bilingual English & French content localization',
            'Clear entity definitions and factual proof points',
            'Continuous content refresh for decaying pages',
          ],
        },
        {
          number: '04.',
          title: 'Off-Page Authority & Local Visibility',
          description: 'Build verifiable trust signals that compound domain strength over time.',
          items: [
            'Digital PR & high-relevance editorial backlinks',
            'Google Business Profile & local citation accuracy',
            'Competitor backlink gap analysis',
            'Transparent monthly ranking & lead attribution',
          ],
        },
      ],
    },
    portfolioPage: {
      kicker: 'Client Portfolio',
      heading: 'Selected websites engineered for clarity, speed, and conversion.',
      subheading:
        'Every preview below is a real project delivered by our team. Click any showcase to scroll the complete page design and read the technical breakdown.',
      filters: {
        all: 'All Projects',
        web: 'Web Design',
        ecommerce: 'E-Commerce',
        branding: 'Brand & Editorial',
        multilingual: 'Multilingual',
      },
      modal: {
        close: 'Close preview',
        challenge: 'The Challenge',
        solution: 'Our Approach',
        deliverables: 'Key Deliverables',
        platform: 'Platform',
        impact: 'Measured Outcome',
        startSimilar: 'Start a Similar Project',
        scrollHint: 'Scroll inside preview to inspect full layout',
      },
      items: [
        {
          id: 'ground-up-truss-haus',
          title: 'Ground Up — Truss Haus',
          client: 'Ground Up Architecture',
          industry: 'Architecture & Interior Design',
          category: 'web',
          categoryLabel: 'Web Design',
          year: '2025',
          platform: 'Custom Responsive Web',
          metric: '+84% Private Project Inquiries in 4 Months',
          summary:
            'An editorial dark-canvas architectural showcase highlighting residential hillside engineering and full-bleed spatial photography.',
          challenge:
            'The studio needed a restrained digital portfolio where complex architectural projects could speak through crisp photography without cluttered interface chrome.',
          solution:
            'We built a minimal dark-slate grid with sticky project narratives, fast progressive WebP image galleries, and streamlined consultation routing.',
          deliverables: ['Custom Editorial Layout', 'Progressive Image Gallery', 'Mobile-First Navigation', 'Technical SEO'],
          image: ASSETS.portfolio.trussHaus,
          featured: true,
        },
        {
          id: 'enueke-foundation',
          title: 'Enueke Foundation',
          client: 'Enueke Foundation',
          industry: 'Education & Youth Nonprofit',
          category: 'multilingual',
          categoryLabel: 'Multilingual',
          year: '2025',
          platform: 'Bilingual FR / EN Web Platform',
          metric: '+112% International Partner Applications',
          summary:
            'A bilingual French-and-English institutional website supporting educational modernization and youth leadership programs across West Africa.',
          challenge:
            'The foundation needed a trustworthy, accessible bilingual web presence that resonated equally with Francophone educators and international donors.',
          solution:
            'We engineered a clear editorial hierarchy with a dedicated FR/EN switcher, structured intervention pillars, and friction-free recruitment and partner contact paths.',
          deliverables: ['Bilingual FR/EN Architecture', 'Program Showcase', 'Recruitment Flows', 'WCAG Accessibility'],
          image: ASSETS.portfolio.enueke,
          featured: true,
        },
        {
          id: 'goldenberry-farms',
          title: 'Goldenberry Farms',
          client: 'Goldenberry Farms',
          industry: 'Agri-Food Export & Traceability',
          category: 'multilingual',
          categoryLabel: 'Multilingual',
          year: '2025',
          platform: 'WordPress Multilingual',
          metric: '+95% B2B Importer Inquiries',
          summary:
            'A vibrant, multilingual farm-to-market brand platform showcasing full supply-chain traceability for international produce buyers.',
          challenge:
            'Global retail buyers needed immediate proof of farm-level traceability, export certifications, and seasonal product catalogs across multiple languages.',
          solution:
            'We designed an inviting storytelling experience paired with multilingual localization, interactive fruit product showcases, and direct wholesale inquiry capture.',
          deliverables: ['Multilingual Localization', 'Traceability Storytelling', 'Product Catalog', 'B2B Lead Capture'],
          image: ASSETS.portfolio.goldenberry,
          featured: true,
        },
        {
          id: 'garrett-field-estancia',
          title: 'Garrett Field Estancia',
          client: 'Garrett Field',
          industry: 'Luxury Event Venue & Polo Estate',
          category: 'branding',
          categoryLabel: 'Brand & Editorial',
          year: '2025',
          platform: 'Squarespace Custom',
          metric: '3.2x Private Venue Tour Bookings',
          summary:
            'An understated heritage digital estate for a historic 1959 Northshore polo training field and luxury wedding venue.',
          challenge:
            'The estate needed to convey old-world warmth and architectural versatility while simplifying private tour inquiries for high-end wedding planners.',
          solution:
            'We paired refined editorial serif typography with curated venue galleries, embedded estate cinema playback, and a clean inquiry workflow.',
          deliverables: ['Brand Web Design', 'Curated Media Galleries', 'Video Integration', 'Private Tour Funnel'],
          image: ASSETS.portfolio.garrettField,
        },
        {
          id: 'sharlas-law',
          title: "Sharla's Law, PL",
          client: "Sharla J. Edwards, Esq.",
          industry: 'Entertainment & IP Legal Practice',
          category: 'branding',
          categoryLabel: 'Brand & Editorial',
          year: '2025',
          platform: 'WordPress Custom Theme',
          metric: '+76% Scheduled Legal Consultations',
          summary:
            'An authoritative executive legal platform serving entrepreneurs, creatives, and brand founders across IP protection and entertainment law.',
          challenge:
            'Communicate legal rigor and executive credibility while remaining approachable for creative founders seeking trademark and contract representation.',
          solution:
            'We crafted a warm high-contrast executive layout featuring clear areas of practice, client trust proof, and direct consultation scheduling.',
          deliverables: ['Executive Positioning', 'Practice Area Architecture', 'Consultation Funnel', 'Local Legal SEO'],
          image: ASSETS.portfolio.sharlasLaw,
        },
        {
          id: 'cult-aesthetics',
          title: 'CULT Aesthetics Conferences',
          client: 'CULT Aesthetics',
          industry: 'Medical Aesthetics & Live Events',
          category: 'ecommerce',
          categoryLabel: 'E-Commerce',
          year: '2025',
          platform: 'Shopify & Event Ticketing',
          metric: 'Sold-Out Conference Cohorts in 3 Weeks',
          summary:
            'A high-converting editorial conference and membership site built to sell retreat tickets and connect licensed aesthetic practitioners.',
          challenge:
            'Drive rapid ticket sell-outs for intimate, high-ticket medical education retreats while clearly qualifying attendee eligibility.',
          solution:
            'We built a structured conversion narrative covering curriculum, eligibility criteria, ticket inclusions, and frictionless invitation requests.',
          deliverables: ['Event Conversion Page', 'Ticket & Membership Flow', 'Editorial Photography Grid', 'Email Capture'],
          image: ASSETS.portfolio.cultAesthetics,
        },
        {
          id: 'allison-villa',
          title: 'Allison Villa — Executive Practice',
          client: 'Allison Villa',
          industry: 'Coaching, Podcast & Digital Programs',
          category: 'branding',
          categoryLabel: 'Brand & Editorial',
          year: '2025',
          platform: 'Custom CMS & Quiz Funnel',
          metric: '+120% Program Waitlist Signups',
          summary:
            'A serene personal-brand hub integrating signature coaching programs, podcast distribution, editorial blog, and an interactive quiz funnel.',
          challenge:
            'Unify therapy services, a flagship online program, podcast episodes, and newsletter growth inside one cohesive, tranquil digital home.',
          solution:
            'We designed a warm editorial platform with clear navigation between coaching offers, lead-magnet quizzes, and long-form thought leadership.',
          deliverables: ['Personal Brand System', 'Interactive Quiz Funnel', 'Podcast & Blog Hub', 'SEO Optimization'],
          image: ASSETS.portfolio.allisonVilla,
        },
        {
          id: 'torren-foot',
          title: 'Torren Foot — Global Tour Hub',
          client: 'Torren Foot Management',
          industry: 'Music & Live Entertainment',
          category: 'ecommerce',
          categoryLabel: 'E-Commerce',
          year: '2025',
          platform: 'Custom Web & Seated Ticketing',
          metric: '+58% Direct Fan List Conversions',
          summary:
            'A bold, high-contrast touring and fan-capture web experience integrating live global festival dates and direct ticket routing.',
          challenge:
            'Convert festival discovery traffic into direct ticket sales and owned SMS/email fan signups with zero mobile friction.',
          solution:
            'We built a striking obsidian-and-amber mobile-first hub featuring live Seated show schedules and an integrated dual-channel signup module.',
          deliverables: ['Custom Artist Website', 'Live Tour Ticketing API', 'Fan Acquisition Funnel', 'Performance Tuning'],
          image: ASSETS.portfolio.torrenFoot,
        },
        {
          id: 'why-oh-why-music',
          title: 'Why Oh Why Music',
          client: 'Why Oh Why Studios',
          industry: 'Broadcast & Film Composition',
          category: 'web',
          categoryLabel: 'Web Design',
          year: '2025',
          platform: 'Custom Portfolio CMS',
          metric: 'Sub-1.2s Media Archive Load Time',
          summary:
            'A clean, gallery-driven broadcast composition portfolio showcasing original scores for HBO, Viceland, and documentary productions.',
          challenge:
            'Present dozens of broadcast credits and audio/video reels cleanly for television music supervisors without slow page loads.',
          solution:
            'We engineered a lightweight responsive archive grid with lazy-loaded media thumbnails, composer roster directories, and direct licensing inquiries.',
          deliverables: ['Media Archive Grid', 'Composer Roster CMS', 'Lazy-Load Performance', 'Licensing Contact Flow'],
          image: ASSETS.portfolio.whyOhWhy,
        },
      ],
    },
    aboutPage: {
      kicker: 'About MarketingWizards',
      heading: 'Fourteen years of pairing technical craftsmanship with commercial growth.',
      subheading:
        'We are a multidisciplinary digital agency helping founders, mid-market firms, and international organizations turn their websites into reliable growth engines.',
      storyHeading: 'Built on discipline, clarity, and measurable results.',
      storyParagraphs: [
        'MarketingWizards began with a straightforward conviction: too many businesses invest in websites that look polished on launch day yet fail to rank in search, load quickly on mobile, or convert qualified visitors.',
        'Over the past 14+ years, our strategists, designers, and engineers have shipped more than 180 production websites and multi-channel search campaigns across React, WordPress, Webflow, Shopify, and custom database platforms.',
        'Today, headquartered in Tangier, Morocco with global English and French delivery, we partner with clients across Europe, North America, and MENA who value direct senior communication, transparent data, and digital systems engineered to last.',
      ],
      imageAlt: 'MarketingWizards UX wireframing notebook and mobile prototype on a wooden studio table',
      valuesHeading: 'How We Operate',
      values: [
        {
          number: '01.',
          title: 'Clarity Over Complexity',
          description:
            'Plain-language strategy, clean interfaces, and maintainable codebases your internal team can actually understand and own.',
        },
        {
          number: '02.',
          title: 'Performance Is Design',
          description:
            'Speed, accessibility, and search indexability are engineered into the first commit—never patched on as an afterthought.',
        },
        {
          number: '03.',
          title: 'Measured Against Revenue',
          description:
            'We judge our work by qualified leads, organic market share, and conversion lift rather than vanity impressions.',
        },
        {
          number: '04.',
          title: 'Global & Bilingual Ready',
          description:
            'Full support for English and French audiences ensures your brand communicates with cultural nuance across borders.',
        },
      ],
      globalHeading: 'Global Delivery, Local Precision',
      globalDescription:
        'From our headquarters in Tangier, Morocco, we support English- and French-speaking teams across Europe, North America, the Middle East, and Africa.',
      regions: [
        {
          city: 'Tangier, Morocco',
          region: 'Global Headquarters',
          focus: 'Strategic marketing, web engineering, SEO/SEM & bilingual regional hub',
        },
        {
          city: 'Europe & Benelux',
          region: 'European Markets',
          focus: 'Native French & English localization, European accessibility & B2B growth',
        },
        {
          city: 'North America & International',
          region: 'Global Delivery',
          focus: 'Cross-border e-commerce, dynamic portals & dedicated technical support',
        },
      ],
    },
    blogPage: {
      kicker: 'Agency Insights',
      heading: 'Practical research on web engineering, SEO, and global growth.',
      subheading:
        'Technical guides and strategic frameworks written by the engineers and marketers building our client systems.',
      readArticle: 'Read Article',
      backToAll: 'Back to All Insights',
      relatedHeading: 'Continue Reading',
      posts: [
        {
          id: 'dynamic-website-design-redesign-seo',
          title: 'Dynamic Website Design, Redesign, and SEO: Building Platforms That Scale',
          category: 'Web Engineering',
          date: 'March 2026',
          readTime: '5 min read',
          author: 'MarketingWizards Engineering Team',
          excerpt:
            'How database-driven architecture, modular React components, and structured SEO turn a static brochure site into a scalable business system.',
          image: ASSETS.dynamicDesign,
          sections: [
            {
              heading: 'Why Static Templates Hit a Ceiling',
              paragraphs: [
                'Early-stage companies often launch on rigid brochure templates to get online quickly. Within twelve months, marketing teams struggle to publish localized landing pages, connect CRM pipelines, or update catalog data without breaking layouts.',
                'A dynamic website architecture separates structured content from presentation—allowing your team to publish new case studies, service pages, and multilingual updates cleanly while keeping Core Web Vitals fast.',
              ],
            },
            {
              heading: 'Preserving Search Equity During a Redesign',
              paragraphs: [
                'One of the costliest mistakes in a website redesign is losing years of organic rankings due to broken URL structures, stripped metadata, or missing 301 redirect maps.',
                'At MarketingWizards, every redesign begins with a complete URL crawl, traffic-weighted redirect blueprint, and pre-launch schema verification so organic visibility climbs immediately after deployment.',
              ],
            },
            {
              heading: 'Continuous Iteration After Launch',
              paragraphs: [
                'High-performing websites are never static. Pairing clean modular code with monthly analytics reviews lets you refine headlines, streamline lead forms, and expand high-converting search clusters systematically.',
              ],
            },
          ],
        },
        {
          id: 'ai-search-optimization-technical-seo',
          title: 'Technical SEO & AI Search Optimization: Earning Visibility in 2026',
          category: 'Search Strategy',
          date: 'February 2026',
          readTime: '6 min read',
          author: 'MarketingWizards Search Practice',
          excerpt:
            'How clean semantic HTML, structured JSON-LD entities, and evidence-backed content help your brand win both classic search and AI answers.',
          image: ASSETS.webflowWorkspace,
          sections: [
            {
              heading: 'How Search Discovery Has Shifted',
              paragraphs: [
                'Buyers now discover vendors across both traditional organic results and generative AI summaries. While algorithms evolve, the underlying technical signals remain grounded in clarity, crawlability, and verifiable expertise.',
                'Pages bloated with client-side scripts or vague marketing buzzwords get ignored. Fast, semantically structured pages that answer concrete buyer questions win citations and high-intent clicks.',
              ],
            },
            {
              heading: 'Four Technical Foundations That Matter Most',
              paragraphs: [
                'First, enforce clean heading hierarchies and descriptive internal links. Second, deploy validated JSON-LD structured data for Organization, Service, and Article entities. Third, keep mobile Largest Contentful Paint under 1.8 seconds. Fourth, back every service claim with real case-study metrics.',
              ],
            },
          ],
        },
        {
          id: 'bilingual-en-fr-global-accessibility',
          title: 'Designing Bilingual English & French Websites for Global Accessibility',
          category: 'Global UX',
          date: 'January 2026',
          readTime: '4 min read',
          author: 'MarketingWizards Design Team',
          excerpt:
            'Best practices for text expansion, WCAG AA legibility, native copywriting, and international SEO when serving English and Francophone audiences.',
          image: ASSETS.wireframeDesk,
          sections: [
            {
              heading: 'Plan for Text Expansion From Day One',
              paragraphs: [
                'French interface copy is typically 15% to 25% longer than its English equivalent. Buttons, navigation links, and headlines designed strictly around short English phrases often wrap awkwardly or clip when translated.',
                'By stress-testing layouts in both languages during prototyping and enforcing disciplined button widths and balanced headlines, your site feels natively crafted in every locale.',
              ],
            },
            {
              heading: 'Technical Accessibility & Language Attributes',
              paragraphs: [
                'True global accessibility goes beyond translation. Dynamically updating the HTML lang attribute, maintaining 4.5:1 text contrast, supporting keyboard navigation, and writing idiomatic French copy ensures screen readers and international buyers experience effortless clarity.',
              ],
            },
          ],
        },
      ],
    },
    contactPage: {
      kicker: 'Get in Touch',
      heading: 'Tell us about your project and growth goals.',
      subheading:
        'Share a few details below and a senior strategist will reply within one business day—in English or French—with initial observations and next steps.',
      directHeading: 'Direct Channels',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      officeLabel: 'Headquarters',
      hoursLabel: 'Response Time',
      hoursValue: 'Within 1 business day (Mon–Fri, WET / CET)',
      languagesLabel: 'Consultation Languages',
      languagesValue: 'English & Français',
      formHeading: 'Request a Project Quote',
      fields: {
        name: 'Full Name',
        namePlaceholder: 'Alex Morgan',
        email: 'Work Email',
        emailPlaceholder: 'alex@company.com',
        phone: 'Phone Number',
        phonePlaceholder: '+212 661 40 37 38',
        postalCode: 'Postal / Zip Code',
        postalCodePlaceholder: '90000',
        service: 'Primary Service Needed',
        serviceOptions: [
          'Custom Website Design & Development',
          'Technical SEO & AI Search Optimization',
          'E-Commerce Storefront (Shopify / WooCommerce)',
          'Paid Advertising & Digital Marketing',
          'Business & Executive Branding',
          'Website Maintenance & Support',
        ],
        source: 'How did you find us?',
        sourceOptions: [
          'Google Search',
          'Search Advertisement',
          'LinkedIn / Social Media',
          'Client Referral',
          'Google Business Profile',
        ],
        message: 'Project Details',
        messagePlaceholder:
          'Tell us about your current website, target timeline, and key business goals...',
        submit: 'Send Project Inquiry',
        submitting: 'Sending Inquiry...',
      },
      errors: {
        nameRequired: 'Please enter your full name.',
        emailInvalid: 'Please enter a valid email address.',
        phoneInvalid: 'Please enter a valid phone number (at least 7 digits).',
        messageShort: 'Please share at least a brief overview of your project (15+ characters).',
      },
      success: {
        heading: 'Inquiry received — thank you.',
        body: 'Our strategy team has received your project brief and will respond within one business day with tailored recommendations.',
        summaryTitle: 'Submission Summary',
        resetButton: 'Send Another Inquiry',
      },
    },
    footer: {
      description:
        'MarketingWizards is a full-service digital marketing and web engineering agency helping businesses grow through custom websites, technical SEO, and measurable campaigns.',
      navTitle: 'Company',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      serviceLinks: [
        { label: 'Custom Web Engineering', category: 'development' },
        { label: 'SEO & AI Search', category: 'seo' },
        { label: 'E-Commerce Solutions', category: 'commerce' },
        { label: 'Executive & Brand Strategy', category: 'branding' },
      ],
      languageLabel: 'Language',
      copyright: '© 2026 MarketingWizards. All rights reserved.',
    },
  },

  fr: {
    metaTitle: 'MarketingWizards — Agence de Marketing Digital, Développement Web & SEO',
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'À propos',
      blog: 'Articles',
      contact: 'Contact',
      cta: 'Demander un devis',
      skipToContent: 'Aller au contenu principal',
      menuLabel: 'Ouvrir le menu de navigation',
      closeMenuLabel: 'Fermer le menu de navigation',
      switchLanguageLabel: 'Passer le site en anglais',
    },
    hero: {
      kicker: 'Tanger, Maroc · Accompagnement International Français & Anglais',
      headline: 'Des sites web et stratégies SEO conçus pour une croissance mesurable.',
      subheadline:
        'MarketingWizards conçoit des sites rapides orientés conversion, des architectures SEO techniques et des campagnes digitales multi-marchés pour les entreprises ambitieuses en Amérique du Nord, en Europe et à l’international.',
      primaryCta: 'Planifier une consultation',
      secondaryCta: 'Voir nos réalisations',
      imageAlt: 'Poste de travail minimaliste affichant une interface web MarketingWizards sur ordinateur portable',
      stats: [
        {
          value: '14+',
          label: 'Années d’expertise',
          context: 'Ingénierie web & acquisition depuis 2012',
        },
        {
          value: '180+',
          label: 'Sites livrés',
          context: 'Sur React, WordPress, Webflow et Shopify',
        },
        {
          value: '+142%',
          label: 'Hausse trafic organique',
          context: 'Moyenne mesurée sur 6 mois de suivi SEO',
        },
        {
          value: 'FR / EN',
          label: 'Architecture bilingue',
          context: 'Localisation native et accessibilité globale',
        },
      ],
    },
    capabilities: {
      kicker: 'Nos Expertises',
      heading: 'Design, ingénierie web et acquisition réunis au sein d’une même équipe.',
      subheading:
        'Chaque projet relie l’exigence visuelle à la performance technique et à la visibilité sur les moteurs de recherche, sans rupture entre image de marque et résultats commerciaux.',
      viewAll: 'Voir tous nos services',
      items: [
        {
          id: 'custom-web',
          number: '01.',
          category: 'development',
          categoryLabel: 'Ingénierie Web',
          title: 'Développement de Sites Sur Mesure & Dynamiques',
          summary:
            'Plateformes corporate réactives, interfaces React, écosystèmes WordPress et applications dynamiques conçus pour charger en moins d’une seconde et rester simples à administrer.',
          deliverables: [
            'Développement sur mesure React, WordPress, Webflow et Squarespace',
            'Portails dynamiques PHP, Node & SQL avec tableaux de bord',
            'Accessibilité WCAG AA et architecture bilingue FR/EN',
            'Optimisation Core Web Vitals et assurance qualité',
          ],
          outcomeMetric: 'Objectif de performance Lighthouse 95+ à chaque mise en ligne',
          featured: true,
          image: ASSETS.webflowWorkspace,
        },
        {
          id: 'seo-ai-search',
          number: '02.',
          category: 'seo',
          categoryLabel: 'SEO & Recherche IA',
          title: 'Référencement Technique (SEO) & Optimisation IA',
          summary:
            'Acquisition organique pilotée par la donnée : audits d’indexation, données structurées, contenu d’autorité et optimisation pour les moteurs de recherche assistés par IA.',
          deliverables: [
            'Audit technique complet et architecture d’indexation',
            'Hiérarchie sémantique on-page et stratégie de mots-clés',
            'Données structurées JSON-LD et visibilité recherche IA',
            'SEO local, national et international bilingue',
          ],
          outcomeMetric: '+140% de trafic organique qualifié en 6 mois',
          featured: true,
        },
        {
          id: 'ecommerce',
          number: '03.',
          category: 'commerce',
          categoryLabel: 'E-Commerce',
          title: 'Boutiques en Ligne Orientées Conversion',
          summary:
            'Boutiques performantes sous Shopify, WooCommerce et BigCommerce conçues pour fluidifier le passage en caisse, gérer des catalogues riches et augmenter le panier moyen.',
          deliverables: [
            'Expérience fiches produits et tunnel d’achat optimisé',
            'Configuration multi-devises et boutiques bilingues',
            'Intégration paiements, expéditions et outils ERP',
          ],
          outcomeMetric: '28% de réduction moyenne des abandons de panier',
          image: ASSETS.ecommerceMockup,
        },
        {
          id: 'digital-marketing',
          number: '04.',
          category: 'seo',
          categoryLabel: 'Acquisition',
          title: 'Publicité Digitale & Réseaux Sociaux',
          summary:
            'Campagnes Google Ads, réseaux sociaux et tests de pages d’atterrissage pilotés selon le coût par prospect qualifié et le retour sur investissement réel.',
          deliverables: [
            'Architecture de campagnes Google Ads & Meta',
            'Pages d’atterrissage dédiées à la conversion',
            'Suivi d’attribution et rapports ROI mensuels',
          ],
          outcomeMetric: '3,4x de retour médian sur dépenses publicitaires',
        },
        {
          id: 'ceo-branding',
          number: '05.',
          category: 'branding',
          categoryLabel: 'Stratégie de Marque',
          title: 'Image de Marque Corporate & Dirigeants',
          summary:
            'Positionnement stratégique pour fondateurs, dirigeants et entreprises en croissance : identité visuelle, discours éditorial et présence digitale cohérente.',
          deliverables: [
            'Positionnement exécutif et plateforme de messages',
            'Systèmes d’identité visuelle et charte typographique',
            'Espaces éditoriaux et dossiers presse digitaux',
          ],
          outcomeMetric: 'Crédibilité immédiate sur chaque point de contact',
        },
        {
          id: 'maintenance',
          number: '06.',
          category: 'development',
          categoryLabel: 'Suivi & Support',
          title: 'Maintenance, Sécurité & Support Continu',
          summary:
            'Surveillance proactive, correctifs de sécurité, optimisation de vitesse, résolution de bugs et évolutions régulières pour garder votre site fiable dans la durée.',
          deliverables: [
            'Sauvegardes quotidiennes automatisées et durcissement sécurité',
            'Corrections rapides et mises à jour CMS/dépendances',
            'Rapports mensuels de disponibilité et performance',
          ],
          outcomeMetric: 'Disponibilité garantie à 99,9% et support prioritaire',
        },
      ],
    },
    featuredWork: {
      kicker: 'Réalisations Choisies',
      heading: 'Des projets concrets en architecture, droit, e-commerce et organisations bilingues.',
      subheading:
        'Découvrez de vrais sites livrés par notre équipe. Sélectionnez un projet pour parcourir la maquette complète, la pile technique et l’impact obtenu.',
      viewAll: 'Voir tout le portfolio',
      inspectProject: 'Explorer la page',
    },
    process: {
      kicker: 'Méthodologie',
      heading: 'Comment nous transformons une stratégie en actif digital performant.',
      subheading:
        'Un processus clair en quatre étapes pour sécuriser les délais, supprimer l’incertitude et relier chaque choix de design à vos objectifs commerciaux.',
      steps: [
        {
          number: '01',
          title: 'Audit & Cadrage Commercial',
          description:
            'Analyse de votre site existant, de votre empreinte SEO, de vos concurrents et du parcours client afin de définir des KPI précis et une arborescence bilingue.',
          deliverable: 'Feuille de route & Arborescence technique',
        },
        {
          number: '02',
          title: 'Architecture d’Interface & Design',
          description:
            'Conception de maquettes sur mesure et accessibles, fidèles à votre identité, avec une hiérarchie lisible et des parcours de conversion fluides.',
          deliverable: 'Système de design & Prototypes interactifs',
        },
        {
          number: '03',
          title: 'Développement Full-Stack & SEO',
          description:
            'Intégration propre et réactive avec balisage sémantique, données structurées SEO, optimisation des temps de chargement et tests multi-écrans.',
          deliverable: 'Pré-production & Contrôle Core Web Vitals',
        },
        {
          number: '04',
          title: 'Mise en Ligne & Suivi Continu',
          description:
            'Après le lancement, nous suivons vos positions SEO, optimisons les taux de conversion et assurons la maintenance sécurisée de la plateforme.',
          deliverable: 'Déploiement & Bilan mensuel de croissance',
        },
      ],
    },
    whyUs: {
      kicker: 'Pourquoi MarketingWizards',
      heading: 'Une exécution senior sans lourdeur d’agence.',
      subheading:
        'Nos clients travaillent avec nous sur le long terme pour notre clarté, le respect des délais et la robustesse technique de nos livrables.',
      imageAlt: 'Maquettes filaires dessinées dans un carnet à côté d’un smartphone sur un bureau en bois',
      points: [
        {
          title: 'Priorité aux résultats commerciaux',
          description:
            'Chaque page est pensée autour de l’intention utilisateur, de la qualification des prospects et d’appels à l’action limpides.',
        },
        {
          title: '14+ ans de maîtrise multi-plateformes',
          description:
            'Notre expérience terrain sur React, WordPress, Shopify, Webflow, Squarespace et PHP/SQL garantit un choix technologique adapté à votre équipe.',
        },
        {
          title: 'Accessibilité globale Français & Anglais',
          description:
            'De l’Amérique du Nord à l’Europe francophone et l’Afrique de l’Ouest, nous concevons des sites nativement bilingues conformes WCAG AA.',
        },
        {
          title: 'Accompagnement direct de bout en bout',
          description:
            'De la stratégie initiale à la maintenance continue, vous échangez directement avec les experts qui conçoivent et déploient votre site.',
        },
      ],
    },
    testimonials: {
      kicker: 'Retours Clients',
      heading: 'Des résultats concrets constatés par les équipes accompagnées.',
      subheading:
        'Des collaborations durables fondées sur la fiabilité technique, la transparence des indicateurs et la progression régulière des leads.',
      items: [
        {
          id: 'ryan',
          quote:
            'MarketingWizards a entièrement repensé notre site web et restructuré notre acquisition digitale. En un trimestre, nos demandes entrantes qualifiées ont doublé.',
          author: 'Ryan Brooks',
          role: 'Directeur Général',
          company: 'Brooks Advisory Group',
          outcome: '2,1x prospects qualifiés / mois',
        },
        {
          id: 'olivia',
          quote:
            'Leur équipe a su combiner ingénierie web rigoureuse et campagnes de recherche disciplinées. Notre visibilité sur nos marchés clés a progressé avec des rapports clairs à chaque étape.',
          author: 'Olivia Carter',
          role: 'VP Croissance',
          company: 'Veridian Commerce',
          outcome: '+138% revenus organiques en 6 mois',
        },
        {
          id: 'emily',
          quote:
            'Notre ancien site freinait notre crédibilité auprès des grands comptes. La nouvelle plateforme charge en moins d’une seconde et a immédiatement accru nos réservations de démos.',
          author: 'Emily Parker',
          role: 'Fondatrice',
          company: 'Northstar Logistics',
          outcome: '+64% prises de rendez-vous',
        },
        {
          id: 'daniel',
          quote:
            'Nous avons apprécié leur capacité à unir image de marque, SEO technique et développement soigné. Notre site reflète enfin notre niveau d’exigence et génère des contacts chaque mois.',
          author: 'Daniel Walker',
          role: 'Associé Principal',
          company: 'Walker & Co. Architecture',
          outcome: 'Top 3 sur 18 requêtes clés',
        },
        {
          id: 'sophia',
          quote:
            'Équipe réactive, transparente et techniquement très solide. MarketingWizards a modernisé notre présence en ligne et fiabilisé la mesure du ROI de nos campagnes.',
          author: 'Sophia Mitchell',
          role: 'Directrice Marketing',
          company: 'Meridian Health Clinics',
          outcome: 'ROAS vérifié de 3,6x',
        },
        {
          id: 'michael',
          quote:
            'Grâce à leur refonte et à l’audit SEO technique, nous devançons désormais des concurrents historiques et attirons des clients B2B qualifiés en anglais comme en français.',
          author: 'Michael Thompson',
          role: 'Directeur des Opérations',
          company: 'Apex Global Supply',
          outcome: '+165% trafic organique bilingue',
        },
      ],
    },
    ctaBand: {
      kicker: 'Démarrer un Projet',
      heading: 'Prêt à bâtir une présence digitale plus rapide et plus rentable ?',
      subheading:
        'Réservez une consultation découverte gratuite de 30 minutes. Nous analysons votre site actuel, identifions les gains SEO immédiats et traçons un plan d’action concret.',
      primaryCta: 'Demander une consultation gratuite',
      secondaryCta: 'Découvrir nos études de cas',
    },
    servicesPage: {
      kicker: 'Expertises & Technologies',
      heading: 'Ingénierie web complète, référencement technique et stratégie de marque.',
      subheading:
        'Filtrez nos services par domaine pour consulter les livrables inclus, notre maîtrise technologique et notre méthode SEO.',
      filterAll: 'Tous les services',
      filterDev: 'Ingénierie Web',
      filterSeo: 'SEO & Acquisition',
      filterCommerce: 'E-Commerce',
      filterBranding: 'Marque',
      deliverablesLabel: 'Livrables inclus',
      requestServiceCta: 'Échanger sur ce service',
      platformsHeading: 'Plateformes & Frameworks Maîtrisés',
      platformsSubheading:
        'Application React sur mesure, site vitrine Webflow, écosystème WordPress ou boutique Shopify : nous choisissons l’architecture la plus pertinente pour votre autonomie.',
      platforms: [
        {
          name: 'React & Tailwind CSS',
          role: 'Applications Web Modernes',
          description: 'Interfaces rapides et modulaires avec gestion multilingue, accessibilité native et intégrations API.',
        },
        {
          name: 'WordPress & WooCommerce',
          role: 'CMS Flexible & Éditorial',
          description: 'Thèmes sur mesure légers, sécurité renforcée, mise en cache avancée et administration intuitive.',
        },
        {
          name: 'Webflow',
          role: 'Sites Marketing Sur Mesure',
          description: 'Intégrations fidèles au pixel avec collections CMS structurées que vos équipes éditent facilement.',
        },
        {
          name: 'Shopify & BigCommerce',
          role: 'E-Commerce Évolutif',
          description: 'Boutiques optimisées pour la vitesse mobile, les ventes multi-devises et la fidélisation client.',
        },
        {
          name: 'Squarespace & Wix Studio',
          role: 'Lancements Rapides',
          description: 'Refontes complètes, migrations propres, extensions CSS/JS sur mesure et restructuration SEO.',
        },
        {
          name: 'PHP, Node & SQL Dynamique',
          role: 'Portails Métier Sur Mesure',
          description: 'Espaces membres, panneaux d’administration personnalisés, bases de données et automatisations CRM.',
        },
      ],
      seoHeading: 'Notre Méthode SEO & Recherche IA en 4 Piliers',
      seoSubheading:
        'Un positionnement durable repose sur la rigueur technique, la qualité éditoriale et l’autorité externe.',
      seoPillars: [
        {
          number: '01.',
          title: 'SEO Technique & Performance',
          description: 'Supprimer les freins d’indexation et garantir un affichage quasi instantané sur mobile et ordinateur.',
          items: [
            'Optimisation Core Web Vitals et compression médias',
            'Sitemaps XML, balises canoniques et budget de crawl',
            'Données structurées JSON-LD pour Google et moteurs IA',
            'Implémentation hreflang bilingue propre (FR / EN)',
          ],
        },
        {
          number: '02.',
          title: 'Architecture On-Page & Sémantique',
          description: 'Aligner chaque page stratégique avec l’intention de recherche commerciale de vos acheteurs.',
          items: [
            'Cartographie des mots-clés et groupes thématiques',
            'Hiérarchie Hn sémantique et balises méta optimisées',
            'Maillage interne structuré distribuant l’autorité',
            'Mise en page orientée conversion et appels à l’action',
          ],
        },
        {
          number: '03.',
          title: 'Contenu & Visibilité Recherche IA',
          description: 'Produire des réponses fiables et structurées qui performent dans les résultats classiques et IA.',
          items: [
            'Calendriers éditoriaux ciblant les requêtes à forte intention',
            'Localisation éditoriale native en français et en anglais',
            'Preuves chiffrées et définitions d’entités claires',
            'Actualisation continue des pages à fort potentiel',
          ],
        },
        {
          number: '04.',
          title: 'Autorité Externe & SEO Local',
          description: 'Renforcer durablement la crédibilité de votre domaine auprès des moteurs de recherche.',
          items: [
            'Relations presse digitales et liens éditoriaux pertinents',
            'Optimisation Google Business Profile et citations locales',
            'Analyse des écarts d’autorité face aux concurrents',
            'Suivi mensuel transparent des positions et leads',
          ],
        },
      ],
    },
    portfolioPage: {
      kicker: 'Portfolio Client',
      heading: 'Des sites web conçus pour la clarté, la vitesse et la conversion.',
      subheading:
        'Chaque aperçu ci-dessous correspond à une réalisation réelle de notre équipe. Cliquez sur un projet pour explorer la page complète et les détails techniques.',
      filters: {
        all: 'Tous les projets',
        web: 'Design Web',
        ecommerce: 'E-Commerce',
        branding: 'Marque & Éditorial',
        multilingual: 'Multilingue',
      },
      modal: {
        close: 'Fermer l’aperçu',
        challenge: 'Le Défi',
        solution: 'Notre Approche',
        deliverables: 'Livrables Clés',
        platform: 'Plateforme',
        impact: 'Résultat Mesuré',
        startSimilar: 'Lancer un projet similaire',
        scrollHint: 'Faites défiler l’aperçu pour voir la page complète',
      },
      items: [
        {
          id: 'ground-up-truss-haus',
          title: 'Ground Up — Truss Haus',
          client: 'Ground Up Architecture',
          industry: 'Architecture & Design Intérieur',
          category: 'web',
          categoryLabel: 'Design Web',
          year: '2025',
          platform: 'Site Web Sur Mesure',
          metric: '+84% de demandes de projets privés en 4 mois',
          summary:
            'Un portfolio architectural sur fond sombre mettant en valeur des projets résidentiels contemporains et des galeries plein cadre.',
          challenge:
            'Le cabinet souhaitait un écrin digital sobre laissant toute la place à la photographie architecturale sans surcharger l’interface.',
          solution:
            'Nous avons créé une grille éditoriale minimaliste avec récits de projet fixes, chargement progressif WebP et prise de contact directe.',
          deliverables: ['Design éditorial sur mesure', 'Galeries progressives', 'Navigation mobile fluide', 'SEO technique'],
          image: ASSETS.portfolio.trussHaus,
          featured: true,
        },
        {
          id: 'enueke-foundation',
          title: 'Enueke Foundation',
          client: 'Fondation Enueke',
          industry: 'Éducation & ONG Jeunesse',
          category: 'multilingual',
          categoryLabel: 'Multilingue',
          year: '2025',
          platform: 'Plateforme Bilingue FR / EN',
          metric: '+112% de candidatures partenaires internationaux',
          summary:
            'Site institutionnel bilingue français/anglais soutenant la modernisation scolaire et le leadership des jeunes en Afrique de l’Ouest.',
          challenge:
            'La fondation avait besoin d’une présence accessible et crédible auprès des établissements francophones comme des bailleurs internationaux.',
          solution:
            'Nous avons conçu une architecture éditoriale claire avec sélecteur FR/EN, domaines d’intervention structurés et parcours de recrutement simplifiés.',
          deliverables: ['Architecture bilingue FR/EN', 'Présentation programmes', 'Parcours recrutement', 'Accessibilité WCAG'],
          image: ASSETS.portfolio.enueke,
          featured: true,
        },
        {
          id: 'goldenberry-farms',
          title: 'Goldenberry Farms',
          client: 'Goldenberry Farms',
          industry: 'Export Agroalimentaire & Traçabilité',
          category: 'multilingual',
          categoryLabel: 'Multilingue',
          year: '2025',
          platform: 'WordPress Multilingue',
          metric: '+95% de demandes d’importateurs B2B',
          summary:
            'Plateforme multilingue mettant en avant la traçabilité agricole jusqu’au producteur pour les distributeurs internationaux.',
          challenge:
            'Les acheteurs internationaux avaient besoin d’accéder immédiatement aux preuves de traçabilité, certifications et fiches produits dans leur langue.',
          solution:
            'Nous avons réalisé une narration visuelle claire associée à une localisation multilingue, un catalogue produits et un formulaire grossistes.',
          deliverables: ['Localisation multilingue', 'Storytelling traçabilité', 'Catalogue produits', 'Capture de leads B2B'],
          image: ASSETS.portfolio.goldenberry,
          featured: true,
        },
        {
          id: 'garrett-field-estancia',
          title: 'Garrett Field Estancia',
          client: 'Garrett Field',
          industry: 'Domaine Événementiel & Polo',
          category: 'branding',
          categoryLabel: 'Marque & Éditorial',
          year: '2025',
          platform: 'Squarespace Sur Mesure',
          metric: '3,2x plus de visites privées réservées',
          summary:
            'Vitrine digitale élégante pour un domaine historique fondé en 1959, combinant réceptions haut de gamme et terrains de polo.',
          challenge:
            'Transmettre le charme patrimonial du lieu tout en simplifiant la demande de visite pour les organisateurs d’événements.',
          solution:
            'Association d’une typographie éditoriale raffinée, de galeries immersives, d’une vidéo de présentation et d’un tunnel de contact fluide.',
          deliverables: ['Direction artistique web', 'Galeries éditoriales', 'Intégration vidéo', 'Tunnel de réservation'],
          image: ASSETS.portfolio.garrettField,
        },
        {
          id: 'sharlas-law',
          title: "Sharla's Law, PL",
          client: "Sharla J. Edwards, Esq.",
          industry: 'Cabinet Juridique IP & Créateurs',
          category: 'branding',
          categoryLabel: 'Marque & Éditorial',
          year: '2025',
          platform: 'Thème WordPress Sur Mesure',
          metric: '+76% de consultations juridiques planifiées',
          summary:
            'Plateforme exécutive dédiée à la propriété intellectuelle, au droit des affaires et à l’accompagnement d’entrepreneurs créatifs.',
          challenge:
            'Affirmer la rigueur juridique du cabinet tout en restant accessible aux fondateurs cherchant un accompagnement en marques et contrats.',
          solution:
            'Création d’une mise en page contrastée mettant en avant les domaines d’intervention, les références clients et la prise de rendez-vous.',
          deliverables: ['Positionnement dirigeant', 'Architecture expertises', 'Tunnel consultation', 'SEO juridique local'],
          image: ASSETS.portfolio.sharlasLaw,
        },
        {
          id: 'cult-aesthetics',
          title: 'CULT Aesthetics Conferences',
          client: 'CULT Aesthetics',
          industry: 'Médecine Esthétique & Conférences',
          category: 'ecommerce',
          categoryLabel: 'E-Commerce',
          year: '2025',
          platform: 'Shopify & Billetterie',
          metric: 'Éditions complètes en 3 semaines',
          summary:
            'Site événementiel et billetterie conçu pour vendre des conférences immersives destinées aux praticiens certifiés.',
          challenge:
            'Accélérer les réservations pour des séminaires à capacité limitée tout en précisant les critères d’éligibilité des participants.',
          solution:
            'Parcours éditorial structuré détaillant le programme, les inclusions billets et un formulaire de demande d’invitation sans friction.',
          deliverables: ['Page événementielle', 'Billetterie & adhésion', 'Grille photographique', 'Capture newsletter'],
          image: ASSETS.portfolio.cultAesthetics,
        },
        {
          id: 'allison-villa',
          title: 'Allison Villa — Conseil & Programmes',
          client: 'Allison Villa',
          industry: 'Coaching, Podcast & Formations',
          category: 'branding',
          categoryLabel: 'Marque & Éditorial',
          year: '2025',
          platform: 'CMS Sur Mesure & Quiz',
          metric: '+120% d’inscriptions liste d’attente',
          summary:
            'Écosystème de marque personnelle regroupant accompagnement individuel, programme signature, podcast et quiz d’orientation.',
          challenge:
            'Rassembler consultations, formations en ligne, épisodes de podcast et articles dans un univers calme et cohérent.',
          solution:
            'Interface éditoriale chaleureuse guidant chaque visiteur vers le quiz interactif, les programmes ou les ressources éditoriales.',
          deliverables: ['Identité web personnelle', 'Quiz interactif', 'Hub podcast & blog', 'Optimisation SEO'],
          image: ASSETS.portfolio.allisonVilla,
        },
        {
          id: 'torren-foot',
          title: 'Torren Foot — Hub Tournée Mondiale',
          client: 'Torren Foot Management',
          industry: 'Musique & Spectacle Vivant',
          category: 'ecommerce',
          categoryLabel: 'E-Commerce',
          year: '2025',
          platform: 'Web Sur Mesure & Billetterie Seated',
          metric: '+58% de conversions liste fans',
          summary:
            'Site de tournée à fort contraste intégrant les dates de festivals internationaux, la billetterie directe et l’inscription fans.',
          challenge:
            'Transformer le trafic mobile issu des festivals en ventes de billets et inscriptions directes sans aucune latence.',
          solution:
            'Interface sombre orientée mobile intégrant le calendrier Seated en direct et un module d’inscription e-mail/SMS instantané.',
          deliverables: ['Site artiste sur mesure', 'API billetterie concerts', 'Tunnel acquisition fans', 'Optimisation vitesse'],
          image: ASSETS.portfolio.torrenFoot,
        },
        {
          id: 'why-oh-why-music',
          title: 'Why Oh Why Music',
          client: 'Why Oh Why Studios',
          industry: 'Composition Musicale & TV',
          category: 'web',
          categoryLabel: 'Design Web',
          year: '2025',
          platform: 'CMS Portfolio Sur Mesure',
          metric: 'Chargement archive média sous 1,2s',
          summary:
            'Archive éditoriale présentant des compositions originales pour HBO, Viceland et de grandes productions documentaires.',
          challenge:
            'Exposer des dizaines de références télévisuelles et extraits audio/vidéo aux superviseurs musicaux sans ralentir la navigation.',
          solution:
            'Grille média légère avec chargement différé des vignettes, répertoire des compositeurs et formulaire direct de licences.',
          deliverables: ['Grille archive média', 'Annuaire compositeurs', 'Chargement différé', 'Contact licences'],
          image: ASSETS.portfolio.whyOhWhy,
        },
      ],
    },
    aboutPage: {
      kicker: 'À propos de MarketingWizards',
      heading: 'Quatorze ans d’exigence technique au service de la croissance commerciale.',
      subheading:
        'Nous sommes une agence digitale pluridisciplinaire qui aide les dirigeants, PME et organisations internationales à faire de leur site un véritable levier d’acquisition.',
      storyHeading: 'Fondée sur la rigueur, la clarté et la preuve par les chiffres.',
      storyParagraphs: [
        'MarketingWizards est née d’un constat simple : trop d’entreprises investissent dans des sites esthétiques le jour du lancement, mais lents sur mobile, mal indexés sur Google et incapables de convertir leurs visiteurs.',
        'Depuis plus de 14 ans, nos stratèges, designers et développeurs ont déployé plus de 180 sites en production et campagnes SEO sur React, WordPress, Webflow, Shopify et des architectures dynamiques sur mesure.',
        'Aujourd’hui, basée à Tanger au Maroc et active auprès de clients francophones et anglophones en Europe, en Amérique du Nord et dans la région MENA, notre équipe privilégie la communication directe, les données transparentes et un code conçu pour durer.',
      ],
      imageAlt: 'Carnet de croquis UX MarketingWizards et prototype mobile sur une table en bois',
      valuesHeading: 'Nos Principes d’Action',
      values: [
        {
          number: '01.',
          title: 'La clarté avant le superflu',
          description:
            'Une stratégie lisible, des interfaces épurées et un code maintenable que vos équipes internes comprennent et maîtrisent.',
        },
        {
          number: '02.',
          title: 'La performance fait partie du design',
          description:
            'Vitesse d’affichage, accessibilité et indexation SEO sont intégrées dès la première ligne de code, jamais rajoutées après coup.',
        },
        {
          number: '03.',
          title: 'Mesuré sur le chiffre d’affaires',
          description:
            'Nous évaluons chaque mission sur les prospects qualifiés, la part de voix organique et la conversion réelle.',
        },
        {
          number: '04.',
          title: 'Pensé pour l’international',
          description:
            'Notre maîtrise native du français et de l’anglais permet à votre marque de s’exprimer avec justesse sur chaque marché.',
        },
      ],
      globalHeading: 'Déploiement International, Précision Locale',
      globalDescription:
        'Depuis notre siège à Tanger, au Maroc, nous accompagnons des équipes francophones et anglophones en Europe, en Amérique du Nord, au Moyen-Orient et en Afrique.',
      regions: [
        {
          city: 'Tanger, Maroc',
          region: 'Siège Social',
          focus: 'Marketing stratégique, ingénierie web, SEO/SEM et pôle régional bilingue',
        },
        {
          city: 'Europe & Benelux',
          region: 'Marchés Européens',
          focus: 'Localisation native français/anglais, accessibilité européenne et croissance B2B',
        },
        {
          city: 'Amérique du Nord & International',
          region: 'Accompagnement Global',
          focus: 'E-commerce transfrontalier, portails dynamiques et support dédié',
        },
      ],
    },
    blogPage: {
      kicker: 'Analyses & Ressources',
      heading: 'Guides pratiques sur l’ingénierie web, le SEO et la croissance internationale.',
      subheading:
        'Retours d’expérience techniques et méthodes concrètes rédigés par les ingénieurs et stratèges de notre équipe.',
      readArticle: 'Lire l’article',
      backToAll: 'Retour aux articles',
      relatedHeading: 'À lire également',
      posts: [
        {
          id: 'dynamic-website-design-redesign-seo',
          title: 'Création, refonte de site dynamique et SEO : bâtir une plateforme évolutive',
          category: 'Ingénierie Web',
          date: 'Mars 2026',
          readTime: '5 min de lecture',
          author: 'Équipe Ingénierie MarketingWizards',
          excerpt:
            'Comment une architecture orientée données, des composants React modulaires et un SEO structuré transforment un site vitrine en outil de croissance.',
          image: ASSETS.dynamicDesign,
          sections: [
            {
              heading: 'Pourquoi les modèles statiques atteignent vite leurs limites',
              paragraphs: [
                'Beaucoup d’entreprises démarrent sur des thèmes figés pour être visibles rapidement. En moins d’un an, il devient difficile de publier des pages localisées, connecter un CRM ou enrichir un catalogue sans dégrader la mise en page.',
                'Une architecture dynamique sépare clairement les données de l’interface : votre équipe publie études de cas, pages services et versions bilingues tout en conservant d’excellents temps de chargement.',
              ],
            },
            {
              heading: 'Préserver votre capital SEO lors d’une refonte',
              paragraphs: [
                'L’erreur la plus coûteuse lors d’une refonte consiste à perdre des années de référencement naturel à cause d’URL modifiées sans redirections 301 ni balises structurées.',
                'Chez MarketingWizards, chaque refonte débute par un crawl complet, un plan de redirection pondéré par le trafic et une vérification stricte des données structurées avant la mise en production.',
              ],
            },
            {
              heading: 'L’amélioration continue après le lancement',
              paragraphs: [
                'Un site rentable évolue en permanence. Associer un code modulaire à des bilans analytiques mensuels permet d’affiner vos titres, simplifier vos formulaires et élargir vos positions SEO.',
              ],
            },
          ],
        },
        {
          id: 'ai-search-optimization-technical-seo',
          title: 'SEO technique et optimisation recherche IA : capter la visibilité en 2026',
          category: 'Stratégie SEO',
          date: 'Février 2026',
          readTime: '6 min de lecture',
          author: 'Pôle Recherche MarketingWizards',
          excerpt:
            'Comment un HTML sémantique propre, le balisage JSON-LD et des contenus documentés renforcent vos positions sur Google et les moteurs IA.',
          image: ASSETS.webflowWorkspace,
          sections: [
            {
              heading: 'L’évolution de la découverte en ligne',
              paragraphs: [
                'Les décideurs comparent désormais les prestataires à travers les résultats organiques classiques et les synthèses générées par IA. Malgré l’évolution des algorithmes, la clarté technique et la preuve factuelle restent déterminantes.',
                'Les pages alourdies de scripts inutiles ou de discours creux sont écartées au profit de contenus rapides, structurés et capables de répondre précisément aux questions métier.',
              ],
            },
            {
              heading: 'Quatre fondations techniques prioritaires',
              paragraphs: [
                'Premièrement, une hiérarchie de titres rigoureuse et un maillage interne lisible. Deuxièmement, des données structurées JSON-LD validées. Troisièmement, un affichage mobile LCP inférieur à 1,8 seconde. Quatrièmement, des études de cas chiffrées qui appuient chaque promesse.',
              ],
            },
          ],
        },
        {
          id: 'bilingual-en-fr-global-accessibility',
          title: 'Concevoir un site bilingue français/anglais réellement accessible',
          category: 'UX Globale',
          date: 'Janvier 2026',
          readTime: '4 min de lecture',
          author: 'Équipe Design MarketingWizards',
          excerpt:
            'Bonnes pratiques de foisonnement typographique, contrastes WCAG AA, rédaction native et SEO international pour toucher les marchés francophones et anglophones.',
          image: ASSETS.wireframeDesk,
          sections: [
            {
              heading: 'Anticiper l’allongement des textes dès la maquette',
              paragraphs: [
                'Les libellés d’interface en français sont en moyenne 15% à 25% plus longs qu’en anglais. Les boutons et menus pensés uniquement pour l’anglais débordent souvent dès qu’on ajoute une seconde langue.',
                'En validant chaque composant dans les deux langues dès le prototypage, l’expérience reste parfaitement équilibrée et fluide sur ordinateur comme sur mobile.',
              ],
            },
            {
              heading: 'Accessibilité technique et attributs de langue',
              paragraphs: [
                'L’accessibilité globale dépasse la simple traduction : mise à jour dynamique de l’attribut HTML lang, contrastes supérieurs à 4,5:1, navigation clavier complète et rédaction idiomatique garantissent un confort optimal à tous les utilisateurs.',
              ],
            },
          ],
        },
      ],
    },
    contactPage: {
      kicker: 'Contactez-nous',
      heading: 'Parlez-nous de votre projet et de vos objectifs de croissance.',
      subheading:
        'Partagez quelques éléments ci-dessous : un stratège senior vous répondra sous un jour ouvré — en français ou en anglais — avec de premières recommandations concrètes.',
      directHeading: 'Coordonnées Directes',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      officeLabel: 'Siège social',
      hoursLabel: 'Délai de réponse',
      hoursValue: 'Sous 1 jour ouvré (Lun–Ven, WET / CET)',
      languagesLabel: 'Langues de consultation',
      languagesValue: 'Français & English',
      formHeading: 'Demander un Devis',
      fields: {
        name: 'Nom complet',
        namePlaceholder: 'Camille Laurent',
        email: 'E-mail professionnel',
        emailPlaceholder: 'camille@entreprise.ma',
        phone: 'Téléphone',
        phonePlaceholder: '+212 661 40 37 38',
        postalCode: 'Code postal',
        postalCodePlaceholder: '90000',
        service: 'Service principal souhaité',
        serviceOptions: [
          'Création ou refonte de site sur mesure',
          'SEO technique & optimisation recherche IA',
          'Boutique E-Commerce (Shopify / WooCommerce)',
          'Publicité digitale & marketing d’acquisition',
          'Stratégie de marque & dirigeants',
          'Maintenance web & support technique',
        ],
        source: 'Comment nous avez-vous connus ?',
        sourceOptions: [
          'Recherche Google',
          'Annonce sponsorisée',
          'LinkedIn / Réseaux sociaux',
          'Recommandation client',
          'Fiche Google Business',
        ],
        message: 'Détails du projet',
        messagePlaceholder:
          'Décrivez votre site actuel, votre calendrier souhaité et vos principaux objectifs...',
        submit: 'Envoyer ma demande',
        submitting: 'Envoi en cours...',
      },
      errors: {
        nameRequired: 'Veuillez indiquer votre nom complet.',
        emailInvalid: 'Veuillez saisir une adresse e-mail valide.',
        phoneInvalid: 'Veuillez saisir un numéro de téléphone valide (au moins 7 chiffres).',
        messageShort: 'Veuillez décrire brièvement votre projet (15 caractères minimum).',
      },
      success: {
        heading: 'Demande bien reçue — merci.',
        body: 'Notre équipe a bien enregistré votre demande et reviendra vers vous sous un jour ouvré avec une première analyse.',
        summaryTitle: 'Récapitulatif de votre demande',
        resetButton: 'Envoyer une autre demande',
      },
    },
    footer: {
      description:
        'MarketingWizards est une agence complète de marketing digital et d’ingénierie web qui aide les entreprises à croître grâce à des sites rapides, un SEO technique rigoureux et des campagnes mesurables.',
      navTitle: 'Agence',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      serviceLinks: [
        { label: 'Ingénierie Web Sur Mesure', category: 'development' },
        { label: 'SEO & Recherche IA', category: 'seo' },
        { label: 'Solutions E-Commerce', category: 'commerce' },
        { label: 'Stratégie de Marque', category: 'branding' },
      ],
      languageLabel: 'Langue',
      copyright: '© 2026 MarketingWizards. Tous droits réservés.',
    },
  },
};
