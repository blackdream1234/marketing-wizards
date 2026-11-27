import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { ASSETS } from '../data/content';
import { PageId, PortfolioItem, SiteContent } from '../types';
import { ResilientImage } from './ResilientImage';

interface HomeViewProps {
  content: SiteContent;
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: PortfolioItem) => void;
  onDiscussService: (serviceTitle: string) => void;
}

export function HomeView({
  content,
  onNavigate,
  onSelectProject,
  onDiscussService,
}: HomeViewProps) {
  const { hero, capabilities, featuredWork, process, whyUs, testimonials, ctaBand } = content;
  const featuredProjects = content.portfolioPage.items.filter((item) => item.featured);

  return (
    <div>
      {/* 1. Hero Proposition */}
      <section className="bg-white border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6 pt-12 pb-14 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col justify-between py-1">
              <div>
                <p className="text-sm font-medium text-[#1D4ED8] mb-5">{hero.kicker}</p>
                <h1
                  className="font-display font-bold tracking-tight text-[#0B1221] leading-[1.08] mb-6"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
                >
                  {hero.headline}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-[54ch] mb-9">
                  {hero.subheadline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B1221] bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{hero.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Right Dominant Focal Visual */}
            <div className="lg:col-span-6">
              <div className="h-[320px] sm:h-[400px] lg:h-full lg:min-h-[420px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={ASSETS.heroStudio}
                  alt={hero.imageAlt}
                  fallbackTitle="MarketingWizards Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Full-width 4-column Quantitative Proof Strip */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="space-y-1.5">
                <p className="font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-[#0B1221] tabular-nums">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#0B1221]">{stat.label}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Core Capabilities Asymmetric Bento Grid */}
      <section className="py-20 lg:py-24 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#1D4ED8] mb-3">{capabilities.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1221] leading-tight">
                {capabilities.heading}
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {capabilities.subheading}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{capabilities.viewAll}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Asymmetric Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Marquee Card 01 (7 cols) */}
            {capabilities.items[0] && (
              <article className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-4">
                    <span className="font-mono font-medium text-[#1D4ED8] tabular-nums">
                      {capabilities.items[0].number}
                    </span>
                    <span>{capabilities.items[0].categoryLabel}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[#0B1221] mb-3">
                    {capabilities.items[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-xl">
                    {capabilities.items[0].summary}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 mb-6">
                    {capabilities.items[0].deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-xs font-medium text-slate-600 tabular-nums">
                    {capabilities.items[0].outcomeMetric}
                  </span>
                  <button
                    type="button"
                    onClick={() => onDiscussService(capabilities.items[0].title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>{content.servicesPage.requestServiceCta}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            )}

            {/* Marquee Card 02 (5 cols, Dark Navy Contrast Anchor) */}
            {capabilities.items[1] && (
              <article className="lg:col-span-5 bg-[#0B1221] text-white border border-slate-800 rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs text-slate-400 mb-4">
                    <span className="font-mono font-medium text-sky-400 tabular-nums">
                      {capabilities.items[1].number}
                    </span>
                    <span>{capabilities.items[1].categoryLabel}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                    {capabilities.items[1].title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {capabilities.items[1].summary}
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-200 mb-6">
                    {capabilities.items[1].deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <span className="font-mono text-xs font-medium text-sky-300 tabular-nums">
                    {capabilities.items[1].outcomeMetric}
                  </span>
                  <button
                    type="button"
                    onClick={() => onDiscussService(capabilities.items[1].title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-sky-300 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>{content.servicesPage.requestServiceCta}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            )}

            {/* Remaining 4 Capability Cards (Asymmetric 5 / 7 then 6 / 6) */}
            {capabilities.items.slice(2).map((service, idx) => {
              const spanClass =
                idx === 0
                  ? 'lg:col-span-5'
                  : idx === 1
                    ? 'lg:col-span-7'
                    : 'lg:col-span-6';
              return (
                <article
                  key={service.id}
                  className={`${spanClass} bg-white border border-slate-200 rounded-xl p-7 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-3">
                      <span className="font-mono font-medium text-[#1D4ED8] tabular-nums">
                        {service.number}
                      </span>
                      <span>{service.categoryLabel}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#0B1221] mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-xs text-slate-500 tabular-nums">
                      {service.outcomeMetric}
                    </span>
                    <button
                      type="button"
                      onClick={() => onDiscussService(service.title)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors whitespace-nowrap cursor-pointer"
                    >
                      <span>{content.servicesPage.requestServiceCta}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Selected Client Work (Claim-to-Proof Adjacency) */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#1D4ED8] mb-3">{featuredWork.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1221] leading-tight">
                {featuredWork.heading}
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {featuredWork.subheading}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{featuredWork.viewAll}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1"
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-left flex flex-col flex-1 cursor-pointer"
                >
                  <div className="h-64 w-full bg-slate-100 border-b border-slate-200 overflow-hidden">
                    <ResilientImage
                      src={project.image}
                      alt={`${project.title} project preview`}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      objectPosition={project.imageFit || 'top'}
                    />
                  </div>
                  <div className="p-6 pb-4 flex flex-col flex-1">
                    <div className="text-xs text-slate-500 mb-2 flex items-center gap-2 flex-wrap">
                      <span>{project.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-[#0B1221] group-hover:text-[#1D4ED8] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                    <p className="mt-auto font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums">
                      {project.metric}
                    </p>
                  </div>
                </button>

                <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1221] hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>{featuredWork.inspectProject}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-[#1D4ED8] transition-colors whitespace-nowrap shrink-0"
                    >
                      <span>{featuredWork.visitLiveSite}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Delivery Methodology (Deep Navy Editorial Band) */}
      <section className="py-20 lg:py-24 bg-[#0B1221] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-medium text-sky-400 mb-3">{process.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              {process.heading}
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              {process.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.steps.map((step) => (
              <div
                key={step.number}
                className="pt-6 border-t border-slate-700/80 flex flex-col justify-between space-y-5"
              >
                <div>
                  <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{step.description}</p>
                </div>
                <p className="text-xs font-medium text-slate-400 pt-3 border-t border-slate-800">
                  {step.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why MarketingWizards (Split Editorial Band) */}
      <section className="py-20 lg:py-24 bg-[#FAFBFC] border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5">
              <div className="h-[300px] sm:h-[380px] lg:h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={ASSETS.wireframeDesk}
                  alt={whyUs.imageAlt}
                  fallbackTitle="MarketingWizards Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#1D4ED8] mb-3">{whyUs.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1221] leading-tight mb-4">
                {whyUs.heading}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-10 max-w-2xl">
                {whyUs.subheading}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {whyUs.points.map((point, idx) => (
                  <div key={point.title} className="pt-4 border-t border-slate-200">
                    <span className="font-mono text-xs text-slate-400 tabular-nums block mb-2">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-base font-bold text-[#0B1221] mb-2">{point.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Attributable Client Testimonials */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-[#1D4ED8] mb-3">{testimonials.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1221] leading-tight">
              {testimonials.heading}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {testimonials.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.items.map((item) => (
              <figure
                key={item.id}
                className="bg-[#FAFBFC] border border-slate-200 rounded-xl p-7 flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums mb-4">
                    {item.outcome}
                  </p>
                  <blockquote className="text-sm sm:text-[15px] text-slate-700 leading-relaxed mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="pt-4 border-t border-slate-200/80">
                  <p className="text-sm font-semibold text-[#0B1221]">{item.author}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.role} · {item.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Conversion Band */}
      <section className="py-20 bg-[#FAFBFC] border-t border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#0B1221] rounded-2xl px-8 py-12 sm:px-14 sm:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-sky-400 mb-3">{ctaBand.kicker}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
                {ctaBand.heading}
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">{ctaBand.subheading}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{ctaBand.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>{ctaBand.secondaryCta}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
