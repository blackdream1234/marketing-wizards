import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { PortfolioItem, SiteContent } from '../types';
import { ResilientImage } from './ResilientImage';

interface PortfolioModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
  labels: SiteContent['portfolioPage']['modal'];
}

export function PortfolioModal({
  project,
  onClose,
  onStartSimilar,
  labels,
}: PortfolioModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1221]/75 backdrop-blur-xs p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Scrollable full-page website capture */}
        <div className="lg:w-3/5 bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col max-h-[45vh] lg:max-h-[90vh]">
          <div className="px-5 py-3 bg-white border-b border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span className="font-medium text-slate-700 truncate">{project.client}</span>
            <span className="hidden sm:inline whitespace-nowrap shrink-0">{labels.scrollHint}</span>
          </div>
          <div className="overflow-y-auto flex-1 bg-slate-50">
            <ResilientImage
              src={project.image}
              alt={`${project.title} full website design preview`}
              fallbackTitle={project.title}
              className="w-full h-auto block"
              objectPosition="top"
            />
          </div>
        </div>

        {/* Right: Structured case study details */}
        <div className="lg:w-2/5 flex flex-col max-h-[45vh] lg:max-h-[90vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <div className="text-xs text-slate-500 mb-2 flex items-center gap-2 flex-wrap">
                <span>{project.industry}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>
              <h2
                id="portfolio-modal-title"
                className="text-2xl font-bold tracking-tight text-[#0B1221]"
              >
                {project.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label={labels.close}
              className="p-2 rounded-lg text-slate-500 hover:text-[#0B1221] hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quantified impact strip */}
          <div className="py-4 border-y border-slate-200 mb-6 grid grid-cols-1 gap-3">
            <div>
              <p className="text-xs text-slate-500 mb-1">{labels.impact}</p>
              <p className="font-mono text-sm font-semibold text-[#1D4ED8] tabular-nums">
                {project.metric}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 mb-1">{labels.platform}</p>
              <p className="text-sm font-medium text-[#0B1221]">{project.platform}</p>
            </div>
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-slate-600 flex-1">
            <div>
              <h3 className="text-xs font-semibold text-[#0B1221] mb-1.5">{labels.challenge}</h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#0B1221] mb-1.5">{labels.solution}</h3>
              <p>{project.solution}</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-[#0B1221] mb-2">{labels.deliverables}</h3>
              <ul className="space-y-1.5 text-slate-700">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#1D4ED8] shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartSimilar(project.title);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
            >
              <span>{labels.startSimilar}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
