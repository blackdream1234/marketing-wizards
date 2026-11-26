import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioCategory, PortfolioItem, SiteContent } from '../types';
import { ResilientImage } from './ResilientImage';

interface PortfolioViewProps {
  content: SiteContent;
  onSelectProject: (project: PortfolioItem) => void;
}

export function PortfolioView({ content, onSelectProject }: PortfolioViewProps) {
  const { portfolioPage, featuredWork } = content;
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const categories: PortfolioCategory[] = ['all', 'web', 'ecommerce', 'branding', 'multilingual'];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioPage.items
      : portfolioPage.items.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Header + Filter Controls */}
      <section className="bg-white border-b border-slate-200/80 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#1D4ED8] mb-3">{portfolioPage.kicker}</p>
            <h1
              className="font-display font-bold tracking-tight text-[#0B1221] leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {portfolioPage.heading}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-9">
              {portfolioPage.subheading}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={portfolioPage.kicker}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-lg"
          >
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#0B1221] shadow-xs'
                      : 'text-slate-600 hover:text-[#0B1221]'
                  }`}
                >
                  {portfolioPage.filters[cat]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Client Projects Grid */}
      <section className="py-16 lg:py-20 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((project) => (
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
                      alt={`${project.title} full website design`}
                      fallbackTitle={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      objectPosition="top"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-xs text-slate-500 mb-2 flex items-center gap-2 flex-wrap">
                        <span>{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.platform}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.year}</span>
                      </div>
                      <h2 className="text-xl font-bold tracking-tight text-[#0B1221] group-hover:text-[#1D4ED8] transition-colors mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {project.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums">
                        {project.metric}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1221] whitespace-nowrap shrink-0">
                        {featuredWork.inspectProject}
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
