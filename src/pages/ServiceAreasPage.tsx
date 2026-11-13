import { useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, RoutePath, SERVICE_AREAS } from '../data/siteData';

interface ServiceAreasPageProps {
  onNavigate: (path: RoutePath, options?: { location?: string }) => void;
}

export function ServiceAreasPage({ onNavigate }: ServiceAreasPageProps) {
  const [cityQuery, setCityQuery] = useState('');

  const matchedArea = cityQuery.trim()
    ? SERVICE_AREAS.find(
        (area) =>
          area.city.toLowerCase().includes(cityQuery.trim().toLowerCase()) ||
          area.zips.some((zip) => zip.startsWith(cityQuery.trim()))
      )
    : null;

  return (
    <div className="bg-[#FCF9F3]">
      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs font-medium text-[#294C43]">Oklahoma City Metro Area, Oklahoma</p>
          <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-normal text-[#29332F] max-w-3xl">
            Neighborhoods &amp; Cities We Serve
          </h1>
          <p className="text-base sm:text-lg text-[#29332F]/80 max-w-2xl leading-relaxed">
            What A Cleaning Services serves eight confirmed communities across the Oklahoma City metropolitan area.
            Because Reginald and Aleyah personally handle every visit, service availability is always confirmed directly
            with you.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onNavigate('/estimate', { location: cityQuery.trim() });
            }}
            className="max-w-xl pt-2 flex flex-col sm:flex-row gap-3"
          >
            <div className="flex-1">
              <label htmlFor="areas-search" className="sr-only">
                Enter your city or ZIP code
              </label>
              <input
                id="areas-search"
                type="text"
                value={cityQuery}
                onChange={(e) => setCityQuery(e.target.value)}
                placeholder="Type your city or ZIP code (e.g., Edmond or 73013)"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Start Estimate</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>

          {cityQuery.trim() && (
            <div className="max-w-xl p-4 rounded-xl bg-[#EEE7DA]/80 border border-[#29332F]/12 text-sm text-[#29332F]">
              {matchedArea ? (
                <span>
                  <strong className="text-[#294C43]">{matchedArea.city}</strong> is on our confirmed OKC metro service
                  list. Exact address and schedule availability will be confirmed by Reginald and Aleyah.
                </span>
              ) : (
                <span>
                  Don&apos;t see your city listed?{' '}
                  <a href={`mailto:${COMPANY_INFO.email}`} className="underline font-medium text-[#294C43]">
                    Contact us at {COMPANY_INFO.email}
                  </a>{' '}
                  to confirm availability.
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.city}
                className="bg-[#EEE7DA]/45 border border-[#29332F]/10 rounded-2xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#294C43]">
                    <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <h2 className="font-display text-2xl font-normal text-[#29332F]">{area.city}</h2>
                  </div>
                  <p className="text-sm text-[#29332F]/80 leading-relaxed">{area.note}</p>
                  <p className="text-xs text-[#29332F]/60 tabular-nums">
                    Common ZIPs: {area.zips.slice(0, 4).join(', ')}
                    {area.zips.length > 4 ? ' +' : ''}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('/estimate', { location: area.city })}
                  className="self-start text-xs font-medium text-[#294C43] underline underline-offset-4 hover:text-[#C98C72] cursor-pointer"
                >
                  Request Estimate in {area.city}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#EEE7DA]/55">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-display text-3xl font-normal text-[#29332F]">
            Don&apos;t see your city? Contact us to confirm availability.
          </h2>
          <p className="text-base text-[#29332F]/80 leading-relaxed">
            If your home, short-term rental, or small business is just outside these eight Oklahoma City metro
            communities, send a quick note to Reginald and Aleyah so we can check travel availability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Service Area Availability Inquiry')}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email {COMPANY_INFO.email}</span>
            </a>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-5 py-3.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#FCF9F3] transition-colors cursor-pointer"
            >
              Open Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
