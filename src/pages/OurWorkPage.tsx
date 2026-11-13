import { ArrowRight } from 'lucide-react';
import { RoutePath } from '../data/siteData';
import { SpaceShowcase } from '../components/SpaceShowcase';

interface OurWorkPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function OurWorkPage({ onNavigate }: OurWorkPageProps) {
  return (
    <div className="bg-[#FCF9F3]">
      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs font-medium text-[#294C43]">Our Work · Care Standards &amp; Room Inspections</p>
          <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-normal text-[#29332F] max-w-3xl">
            Every Surface, Corner, and Shelf Treated With Care
          </h1>
          <p className="text-base sm:text-lg text-[#29332F]/80 max-w-2xl leading-relaxed">
            Inspect how Reginald and Aleyah approach kitchens, guest bedrooms, move-ready living areas, organized
            pantries, and local small-business spaces across the Oklahoma City metro.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpaceShowcase onNavigate={onNavigate} />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#EEE7DA]/55">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
            Ready to Talk About Your Space?
          </h2>
          <p className="text-base text-[#29332F]/80 leading-relaxed">
            Share your rooms, priorities, and city to review a clear starting-price reference and confirm details
            directly with the owners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/estimate')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
            >
              <span>Get My Cleaning Estimate</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-5 py-3.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#FCF9F3] transition-colors cursor-pointer"
            >
              Contact the Owners
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
