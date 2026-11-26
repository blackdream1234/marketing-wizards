import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ServiceCategory, SiteContent } from '../types';

interface ServicesViewProps {
  content: SiteContent;
  selectedCategory: ServiceCategory;
  onSelectCategory: (cat: ServiceCategory) => void;
  onDiscussService: (serviceTitle: string) => void;
}

export function ServicesView({
  content,
  selectedCategory,
  onSelectCategory,
  onDiscussService,
}: ServicesViewProps) {
  const { servicesPage, capabilities } = content;

  const filterOptions: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: servicesPage.filterAll },
    { id: 'development', label: servicesPage.filterDev },
    { id: 'seo', label: servicesPage.filterSeo },
    { id: 'commerce', label: servicesPage.filterCommerce },
    { id: 'branding', label: servicesPage.filterBranding },
  ];

  const filteredServices =
    selectedCategory === 'all'
      ? capabilities.items
      : capabilities.items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Header Band */}
      <section className="bg-white border-b border-slate-200/80 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#1D4ED8] mb-3">{servicesPage.kicker}</p>
            <h1
              className="font-display font-bold tracking-tight text-[#0B1221] leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {servicesPage.heading}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-9">
              {servicesPage.subheading}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label={servicesPage.kicker}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-lg"
          >
            {filterOptions.map((opt) => {
              const active = selectedCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onSelectCategory(opt.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#0B1221] shadow-xs'
                      : 'text-slate-600 hover:text-[#0B1221]'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filtered Services Grid */}
      <section className="py-16 lg:py-20 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-4">
                    <span className="font-mono font-semibold text-[#1D4ED8] tabular-nums">
                      {service.number}
                    </span>
                    <span>{service.categoryLabel}</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#0B1221] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <p className="text-xs font-semibold text-[#0B1221] mb-3">
                    {servicesPage.deliverablesLabel}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 mb-6">
                    {service.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0"
                          aria-hidden="true"
                        />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-xs font-medium text-slate-600 tabular-nums">
                    {service.outcomeMetric}
                  </span>
                  <button
                    type="button"
                    onClick={() => onDiscussService(service.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>{servicesPage.requestServiceCta}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms & Frameworks Matrix */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1221] mb-3">
              {servicesPage.platformsHeading}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {servicesPage.platformsSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPage.platforms.map((platform) => (
              <div
                key={platform.name}
                className="p-6 bg-[#FAFBFC] border border-slate-200 rounded-xl space-y-2"
              >
                <p className="text-xs text-[#1D4ED8] font-medium">{platform.role}</p>
                <h3 className="text-lg font-bold text-[#0B1221]">{platform.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Pillar SEO & AI Search Architecture */}
      <section className="py-16 lg:py-20 bg-[#0B1221] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
              {servicesPage.seoHeading}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {servicesPage.seoSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesPage.seoPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-7 rounded-xl border border-slate-800 bg-slate-900/40"
              >
                <span className="font-mono text-xs font-semibold text-sky-400 tabular-nums block mb-3">
                  {pillar.number}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {pillar.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
            <p className="text-sm text-slate-300 max-w-xl">{content.ctaBand.subheading}</p>
            <button
              type="button"
              onClick={() => onDiscussService(servicesPage.seoHeading)}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>{content.ctaBand.primaryCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
