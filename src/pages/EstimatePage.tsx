import { ServiceId } from '../data/siteData';
import { EstimateWizard } from '../components/EstimateWizard';

interface EstimatePageProps {
  initialServiceId?: ServiceId;
  initialLocation?: string;
}

export function EstimatePage({ initialServiceId, initialLocation }: EstimatePageProps) {
  return (
    <div className="bg-[#FCF9F3]">
      <section className="py-12 lg:py-16 border-b border-[#29332F]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-medium text-[#294C43]">Transparent Pricing · Personalized Confirmation</p>
          <h1 className="font-display text-[clamp(2.25rem,4vw,3.4rem)] leading-[1.1] font-normal text-[#29332F]">
            Get Your Cleaning Estimate
          </h1>
          <p className="text-base sm:text-lg text-[#29332F]/80 max-w-2xl leading-relaxed">
            Share your location, service type, and relevant space details to view our published starting-price
            reference. Final pricing and scheduling are always confirmed directly with Reginald and Aleyah Berry.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-[#EEE7DA]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EstimateWizard initialServiceId={initialServiceId} initialLocation={initialLocation} />
        </div>
      </section>
    </div>
  );
}
