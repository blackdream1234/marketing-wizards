import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PageId, SiteContent } from '../types';
import { ResilientImage } from './ResilientImage';

interface BlogViewProps {
  content: SiteContent;
  onNavigate: (page: PageId) => void;
}

export function BlogView({ content, onNavigate }: BlogViewProps) {
  const { blogPage, ctaBand } = content;
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const selectedPost = blogPage.posts.find((p) => p.id === selectedPostId) || null;

  if (selectedPost) {
    const relatedPosts = blogPage.posts.filter((p) => p.id !== selectedPost.id);
    return (
      <article className="bg-white">
        <div className="max-w-[820px] mx-auto px-6 py-14 lg:py-20">
          <button
            type="button"
            onClick={() => {
              setSelectedPostId(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1D4ED8] transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{blogPage.backToAll}</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 flex-wrap">
            <span className="font-medium text-[#1D4ED8]">{selectedPost.category}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedPost.date}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedPost.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedPost.author}</span>
          </div>

          <h1
            className="font-display font-bold tracking-tight text-[#0B1221] leading-tight mb-6"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
          >
            {selectedPost.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-8">{selectedPost.excerpt}</p>

          <div className="h-[260px] sm:h-[380px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100 mb-10">
            <ResilientImage
              src={selectedPost.image}
              alt={selectedPost.title}
              fallbackTitle={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-10">
            {selectedPost.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-[#0B1221]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para) => (
                  <p key={para.slice(0, 24)} className="text-base text-slate-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#0B1221] mb-1">{ctaBand.heading}</h3>
              <p className="text-sm text-slate-600">{ctaBand.subheading}</p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{ctaBand.primaryCta}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Related articles */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-lg font-bold text-[#0B1221] mb-6">{blogPage.relatedHeading}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <button
                  key={post.id}
                  type="button"
                  onClick={() => {
                    setSelectedPostId(post.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left p-6 bg-[#FAFBFC] border border-slate-200 hover:border-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  <div className="text-xs text-slate-500 mb-2 flex items-center gap-2">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#0B1221] mb-2">{post.title}</h4>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8]">
                    {blogPage.readArticle}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <div>
      <section className="bg-white border-b border-slate-200/80 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#1D4ED8] mb-3">{blogPage.kicker}</p>
            <h1
              className="font-display font-bold tracking-tight text-[#0B1221] leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              {blogPage.heading}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {blogPage.subheading}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#FAFBFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPage.posts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPostId(post.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left flex flex-col flex-1 cursor-pointer"
                >
                  <div className="h-52 w-full bg-slate-100 border-b border-slate-200 overflow-hidden">
                    <ResilientImage
                      src={post.image}
                      alt={post.title}
                      fallbackTitle={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="text-xs text-slate-500 mb-3 flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-[#1D4ED8]">{post.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.date}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold tracking-tight text-[#0B1221] group-hover:text-[#1D4ED8] transition-colors mb-3">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-600 leading-relaxed mb-6">{post.excerpt}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B1221] group-hover:text-[#1D4ED8] transition-colors pt-4 border-t border-slate-100">
                      <span>{blogPage.readArticle}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
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
