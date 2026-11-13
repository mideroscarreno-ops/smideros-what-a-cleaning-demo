import { useState } from 'react';
import { ArrowRight, Check, Eye } from 'lucide-react';
import { RoutePath, SHOWCASE_SPACES } from '../data/siteData';
import { SafeImage } from './SafeImage';

interface SpaceShowcaseProps {
  onNavigate: (path: RoutePath) => void;
  compact?: boolean;
}

export function SpaceShowcase({ onNavigate, compact = false }: SpaceShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showScopeDetails, setShowScopeDetails] = useState(true);
  const activeSpace = SHOWCASE_SPACES[activeIndex];

  return (
    <div className="space-y-8">
      {/* Space Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#29332F]/12 pb-4" role="tablist" aria-label="Featured Cleaning Spaces">
        {SHOWCASE_SPACES.map((space, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={space.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#294C43] text-[#FCF9F3]'
                  : 'bg-[#EEE7DA]/70 text-[#29332F]/80 hover:bg-[#EEE7DA] hover:text-[#29332F]'
              }`}
            >
              {space.title}
            </button>
          );
        })}
      </div>

      {/* Main Split Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-[#EEE7DA]">
          <SafeImage
            src={activeSpace.image}
            alt={activeSpace.imageAlt}
            fallbackTitle={activeSpace.title}
            wrapperClassName="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[460px]"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#29332F]/85 via-[#29332F]/40 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-[#FCF9F3]">
              <p className="text-xs font-medium text-[#B6C9B9]">{activeSpace.spaceType}</p>
              <h3 className="font-display text-2xl font-normal mt-1">{activeSpace.title}</h3>
            </div>
            <button
              type="button"
              onClick={() => setShowScopeDetails((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FCF9F3]/95 text-[#29332F] text-xs font-medium hover:bg-[#FCF9F3] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{showScopeDetails ? 'Hide Care Notes' : 'Inspect Care Scope'}</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between bg-[#EEE7DA]/55 border border-[#29332F]/10 rounded-2xl p-6 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium text-[#294C43]">{activeSpace.spaceType}</p>
              <p className="text-base text-[#29332F]/85 leading-relaxed mt-2">{activeSpace.caption}</p>
            </div>

            {showScopeDetails && (
              <div className="space-y-4 pt-4 border-t border-[#29332F]/10">
                <p className="text-xs font-semibold tracking-wide text-[#29332F]/70">
                  What Reginald &amp; Aleyah Focus On Here
                </p>
                <ul className="space-y-4">
                  {activeSpace.focusAreas.map((focus) => (
                    <li key={focus.label} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#294C43]/10 text-[#294C43] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#29332F]">{focus.label}</p>
                        <p className="text-sm text-[#29332F]/75 leading-relaxed mt-0.5">{focus.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="pt-8 mt-6 border-t border-[#29332F]/10 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/estimate')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
              >
                <span>Get My Cleaning Estimate</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              {!compact && (
                <button
                  type="button"
                  onClick={() => onNavigate(`/services/${activeSpace.serviceId}` as RoutePath)}
                  className="px-4 py-2.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
                >
                  View Service Details
                </button>
              )}
            </div>
            <p className="text-xs text-[#29332F]/60 leading-relaxed">
              Concept visual note: Images shown represent editorial interior standards for this redesign concept.
              Completed client project photographs are published on what-a-cleaning.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
