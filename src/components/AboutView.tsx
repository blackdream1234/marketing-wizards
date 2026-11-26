import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/content';
import { PageId, SiteContent } from '../types';
import { ResilientImage } from './ResilientImage';

interface AboutViewProps {
  content: SiteContent;
  onNavigate: (page: PageId) => void;
}

export function AboutView({ content, onNavigate }: AboutViewProps) {
  const { aboutPage, hero, ctaBand } = content;

  return (
    <div>
      {/* Header */}
      <section className="bg-white border-b border-slate-200/80 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#1D4ED8] mb-3">{aboutPage.kicker}</p>
            <h1
              className="font-display font-bold tracking-tight text-[#0B1221] leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {aboutPage.heading}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {aboutPage.subheading}
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="space-y-1.5">
                <p className="font-mono text-3xl font-semibold text-[#0B1221] tabular-nums">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-[#0B1221]">{stat.label}</p>
                <p className="text-xs text-slate-500">{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Split */}
      <section className="py-16 lg:py-20 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#0B1221] mb-6">
                {aboutPage.storyHeading}
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                {aboutPage.storyParagraphs.map((para) => (
                  <p key={para.slice(0, 24)}>{para}</p>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="h-[320px] sm:h-[400px] lg:h-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={ASSETS.wireframeDesk}
                  alt={aboutPage.imageAlt}
                  fallbackTitle="MarketingWizards Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B1221] mb-12">
            {aboutPage.valuesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutPage.values.map((val) => (
              <div key={val.number} className="pt-5 border-t border-slate-200 space-y-2.5">
                <span className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums block">
                  {val.number}
                </span>
                <h3 className="text-lg font-bold text-[#0B1221]">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 lg:py-20 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#0B1221] mb-3">
              {aboutPage.globalHeading}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {aboutPage.globalDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {aboutPage.regions.map((reg) => (
              <div
                key={reg.city}
                className="bg-white border border-slate-200 rounded-xl p-7 space-y-2"
              >
                <p className="text-xs font-medium text-[#1D4ED8]">{reg.region}</p>
                <h3 className="text-xl font-bold text-[#0B1221]">{reg.city}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{reg.focus}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0B1221] rounded-2xl px-8 py-10 sm:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-2">{ctaBand.heading}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{ctaBand.subheading}</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#2563EB] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{ctaBand.primaryCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
