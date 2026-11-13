import { useState } from 'react';
import { ArrowRight, Check, Mail, MapPin } from 'lucide-react';
import {
  COMPANY_INFO,
  IMAGES,
  OWNER_STATEMENTS,
  RoutePath,
  SERVICE_AREAS,
  SERVICES,
  ServiceId,
  TRUST_PILLARS,
} from '../data/siteData';
import { SafeImage } from '../components/SafeImage';
import { SpaceShowcase } from '../components/SpaceShowcase';
import { FaqAccordion } from '../components/FaqAccordion';

interface HomePageProps {
  onNavigate: (path: RoutePath, options?: { serviceId?: ServiceId; location?: string }) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [areaLookupInput, setAreaLookupInput] = useState('');

  const handleAreaEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('/estimate', { location: areaLookupInput.trim() });
  };

  return (
    <div>
      {/* B. Exceptional Hero */}
      <section className="bg-[#FCF9F3] pt-10 pb-14 lg:pt-14 lg:pb-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:py-4">
              <p className="text-xs sm:text-sm font-medium text-[#294C43] tracking-wide">
                Family-Owned · Owner-Operated · Oklahoma City
              </p>

              <h1 className="font-display text-[clamp(2.35rem,4.4vw,3.85rem)] leading-[1.08] font-normal tracking-tight text-[#29332F] max-w-xl">
                A Cleaner Home. A Little More Peace of Mind.
              </h1>

              <p className="text-base sm:text-lg text-[#29332F]/80 leading-relaxed max-w-xl">
                Thoughtful cleaning for homes, rentals, and businesses across Oklahoma City — personally cared for by a
                local husband-and-wife team.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
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
                  onClick={() => onNavigate('/meet-the-owners')}
                  className="px-5 py-3.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
                >
                  Meet Your Cleaning Team
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={IMAGES.heroSunlitHome}
                alt="Warm sunlit Oklahoma City living room and kitchen with spotless oak hardwood floors and fresh eucalyptus"
                fallbackTitle="What A Cleaning Services — Oklahoma City"
                priority
                wrapperClassName="w-full h-full min-h-[290px] sm:min-h-[380px] lg:min-h-[460px] rounded-2xl border border-[#29332F]/10"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Grounded 4-column strip below hero split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-[#29332F]/10">
            <div>
              <p className="font-display text-lg text-[#294C43]">Real People. Same Faces.</p>
              <p className="text-sm text-[#29332F]/75 mt-1">
                Reginald and Aleyah Berry personally clean and communicate with every client.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-[#294C43]">Six Core Services</p>
              <p className="text-sm text-[#29332F]/75 mt-1">
                House, Airbnb, Deep, Move-In/Out, Commercial, and Home Organization.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-[#294C43]">Starting From $99</p>
              <p className="text-sm text-[#29332F]/75 mt-1">
                Published starting prices with final estimates confirmed personally by the owners.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-[#294C43]">8 OKC Metro Cities</p>
              <p className="text-sm text-[#29332F]/75 mt-1">
                Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Bethany, Mustang &amp; Midwest City.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. Meet Reginald and Aleyah */}
      <section className="py-16 lg:py-24 bg-[#EEE7DA]/60 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="space-y-3">
                <SafeImage
                  src={IMAGES.ownersCraft}
                  alt="Warm oak entryway table with folded eucalyptus linen apron, amber botanical bottle, and natural brush"
                  fallbackTitle="Owner-Operated Care — Reginald & Aleyah Berry"
                  wrapperClassName="w-full aspect-[3/4] rounded-2xl border border-[#29332F]/10"
                  className="w-full h-full object-cover"
                />
                <p className="text-xs text-[#29332F]/65 leading-relaxed">
                  Editorial craft visual for this redesign concept. Real People. Remarkably Clean Spaces — owned and
                  personally operated by Reginald and Aleyah Berry.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium text-[#294C43]">Meet the Owners · Husband-and-Wife Team</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] font-normal text-[#29332F]">
                  The Owners Are Your Cleaning Team.
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#29332F]/85 leading-relaxed">
                When you invite What A Cleaning Services into your home or workplace, you never have to wonder who is
                arriving at your door. Husband and wife <strong>Reginald and Aleyah Berry</strong> own the business,
                answer your messages directly, and carry out the cleaning themselves.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-6 space-y-2.5">
                  <h3 className="font-display text-xl font-normal text-[#294C43]">Aleyah Berry</h3>
                  <p className="text-sm text-[#29332F]/80 leading-relaxed">
                    Aleyah&apos;s own journey through a season of depression taught her how hard it is to keep up with a
                    home when life feels heavy. Watching her grandparents struggle to care for their home as they aged
                    deepened her commitment to serving busy families and older adults with dignity and zero judgment.
                  </p>
                </div>

                <div className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-6 space-y-2.5">
                  <h3 className="font-display text-xl font-normal text-[#294C43]">Reginald Berry</h3>
                  <p className="text-sm text-[#29332F]/80 leading-relaxed">
                    After more than six years of U.S. military service, Reginald brought that same steady dependability
                    and pride in serving his community home to Oklahoma City — ensuring every client receives clear
                    communication and consistent follow-through.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/meet-the-owners')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                >
                  <span>Read Reginald &amp; Aleyah&apos;s Story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#FCF9F3] transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. Six Cleaning Services */}
      <section className="py-16 lg:py-24 bg-[#FCF9F3] border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium text-[#294C43]">Our Six Services · Transparent Starting Rates</p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
                Thoughtful Care for Every Kind of Space
              </h2>
              <p className="text-base text-[#29332F]/75 leading-relaxed">
                From weekly family upkeep to Airbnb turnovers, commercial suites, and calming closet resets — each
                service starts with a clear baseline price and finishes with a tailored owner confirmation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="self-start md:self-auto px-4 py-2.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Compare All 6 Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="bg-[#FCF9F3] border border-[#29332F]/12 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors hover:border-[#294C43]/40"
              >
                <div>
                  <SafeImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.title}
                    wrapperClassName="w-full aspect-[4/3]"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                  <div className="p-6 space-y-4">
                    <div className="flex items-baseline justify-between gap-3 text-xs font-medium text-[#294C43]">
                      <span className="tabular-nums">{service.number} · {service.categoryType === 'organization' ? 'Organization' : 'Cleaning'}</span>
                      <span className="tabular-nums text-[#29332F]">
                        Starting at ${service.startingPrice}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-2xl font-normal text-[#29332F]">{service.title}</h3>
                      <p className="text-sm text-[#29332F]/80 leading-relaxed">{service.summary}</p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-[#29332F]/10">
                      {service.scopeHighlights.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-[#29332F]/80 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onNavigate('/estimate', { serviceId: service.id })}
                    className="px-4 py-2.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-xs font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                  >
                    Estimate {service.shortTitle}
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="text-xs font-medium text-[#294C43] hover:text-[#C98C72] underline underline-offset-4 cursor-pointer"
                  >
                    Full Scope &amp; Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E. Transparent Pricing */}
      <section className="py-16 lg:py-24 bg-[#294C43] text-[#FCF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-medium text-[#B6C9B9]">Honest Pricing Policy</p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#FCF9F3]">
                Clear Starting Prices. Personalized Estimates.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#FCF9F3]/85 leading-relaxed">
                Explore an initial estimate based on your cleaning needs. Final pricing is confirmed after we review the
                details of your space directly with you — never automated guesswork.
              </p>
            </div>
          </div>

          <div className="bg-[#FCF9F3]/6 border border-[#FCF9F3]/15 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:gap-px bg-[#FCF9F3]/15">
              {SERVICES.map((service) => (
                <div key={service.id} className="bg-[#294C43] p-6 sm:p-7 flex flex-col justify-between gap-4">
                  <div className="space-y-1.5">
                    <p className="text-xs text-[#B6C9B9] tabular-nums">{service.number}</p>
                    <h3 className="font-display text-xl font-normal text-[#FCF9F3]">{service.title}</h3>
                    <p className="text-xs text-[#FCF9F3]/75 leading-relaxed">{service.tagline}</p>
                  </div>
                  <div className="pt-4 border-t border-[#FCF9F3]/12 flex items-baseline justify-between gap-2">
                    <div>
                      <span className="text-xs text-[#B6C9B9] block">Published starting price</span>
                      <span className="font-display text-3xl text-[#FCF9F3] tabular-nums">
                        ${service.startingPrice}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('/estimate', { serviceId: service.id })}
                      className="text-xs font-medium text-[#FCF9F3] underline underline-offset-4 hover:text-[#B6C9B9] cursor-pointer"
                    >
                      Request Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#B6C9B9] leading-relaxed max-w-3xl">
            Important note: Listed prices ($99–$249) are starting-point estimates, not binding final quotes. Square
            footage, room count, current buildup, and custom add-ons are reviewed directly with Reginald and Aleyah
            before confirming your final rate.
          </p>
        </div>
      </section>

      {/* F. How It Works */}
      <section className="py-16 lg:py-24 bg-[#FCF9F3] border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-[#294C43]">Simple, Personal Process</p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
              How Working Together Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Tell Us About Your Space',
                body: 'Select your cleaning or organization service and share basic details like your city, room count, or business size.',
              },
              {
                num: '02',
                title: 'Review Your Estimate',
                body: 'See the published starting-price reference for your selected service with full transparency and zero surprise fees.',
              },
              {
                num: '03',
                title: 'Confirm the Details',
                body: 'Connect directly with Reginald and Aleyah by email to align on your priorities, schedule, and final confirmed pricing.',
              },
            ].map((item) => (
              <div key={item.num} className="bg-[#EEE7DA]/55 border border-[#29332F]/10 rounded-2xl p-7 space-y-4">
                <p className="font-display text-3xl text-[#294C43] tabular-nums">{item.num}</p>
                <h3 className="font-display text-2xl font-normal text-[#29332F]">{item.title}</h3>
                <p className="text-sm text-[#29332F]/80 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. Space Standards & Interactive Care Gallery */}
      <section className="py-16 lg:py-24 bg-[#FCF9F3] border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium text-[#294C43]">Inside the Craft · Room-by-Room Standards</p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
                What Remarkable Care Looks Like in Every Room
              </h2>
              <p className="text-base text-[#29332F]/75 leading-relaxed">
                Explore each space type to inspect the exact details Reginald and Aleyah look after on every visit.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/our-work')}
              className="self-start md:self-auto px-4 py-2.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Explore Full Our Work Page
            </button>
          </div>

          <SpaceShowcase onNavigate={(path) => onNavigate(path)} compact />
        </div>
      </section>

      {/* H. Personal Accountability */}
      <section className="py-16 lg:py-24 bg-[#EEE7DA]/60 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-[#294C43]">Trust &amp; Accountability</p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
              The Same Faces. The Same Care.
            </h2>
            <p className="text-base text-[#29332F]/80 leading-relaxed">
              Our strongest promise is simple: you work directly with the family who owns the company, from your first
              email to the final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.number} className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-6 space-y-3">
                <p className="text-xs font-semibold text-[#C98C72] tabular-nums">{pillar.number}</p>
                <h3 className="font-display text-xl font-normal text-[#29332F]">{pillar.title}</h3>
                <p className="text-sm text-[#29332F]/75 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* I. Authentic Owner Statements & Honest Reviews Approach */}
      <section className="py-16 lg:py-24 bg-[#FCF9F3] border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <p className="text-xs font-medium text-[#294C43]">In the Owners&apos; Own Words</p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
                Why Personal Care Comes Before Everything Else
              </h2>
            </div>
            <p className="text-sm text-[#29332F]/70 max-w-md leading-relaxed">
              Transparency note: What A Cleaning Services is actively building its Google review history — we never
              display fabricated ratings or placeholder client testimonials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OWNER_STATEMENTS.map((statement) => (
              <blockquote
                key={statement.speaker}
                className="bg-[#EEE7DA]/50 border border-[#29332F]/10 rounded-2xl p-7 sm:p-9 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <p className="text-xs font-medium text-[#294C43]">Owner Statement · {statement.context}</p>
                  <p className="font-display text-xl sm:text-2xl font-normal text-[#29332F] leading-snug">
                    &ldquo;{statement.quote}&rdquo;
                  </p>
                </div>
                <footer className="pt-4 border-t border-[#29332F]/10 text-sm">
                  <span className="font-semibold text-[#29332F]">{statement.speaker}</span>
                  <span className="text-[#29332F]/60 mx-2">·</span>
                  <span className="text-[#29332F]/75">{statement.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* J. Service Areas */}
      <section className="py-16 lg:py-24 bg-[#EEE7DA]/55 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-medium text-[#294C43]">Where We Clean · OKC Metro</p>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
                  Serving Neighborhoods Across the Oklahoma City Metro
                </h2>
                <p className="text-base text-[#29332F]/80 leading-relaxed">
                  We currently serve eight confirmed communities across the Oklahoma City metropolitan area.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area.city}
                    className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl px-4 py-3 flex items-center gap-2.5"
                  >
                    <MapPin className="w-4 h-4 text-[#294C43] shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-[#29332F]">{area.city}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-[#29332F]/75">
                Don&apos;t see your city?{' '}
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="text-[#294C43] font-medium underline underline-offset-4 hover:text-[#C98C72] cursor-pointer"
                >
                  Contact us to confirm availability.
                </button>
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#FCF9F3] border border-[#29332F]/12 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-medium text-[#294C43]">Start With Your Location</p>
                <h3 className="font-display text-2xl font-normal text-[#29332F]">
                  Check Your City &amp; Start an Estimate
                </h3>
                <p className="text-sm text-[#29332F]/75 leading-relaxed">
                  Enter your city or ZIP code to begin your personalized estimate request directly with the owners.
                </p>
              </div>

              <form onSubmit={handleAreaEstimate} className="space-y-4">
                <div>
                  <label htmlFor="home-area-input" className="block text-sm font-medium text-[#29332F] mb-2">
                    Your City or ZIP Code
                  </label>
                  <input
                    id="home-area-input"
                    type="text"
                    value={areaLookupInput}
                    onChange={(e) => setAreaLookupInput(e.target.value)}
                    placeholder="e.g., Edmond, Moore, or 73120"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                  >
                    <span>Get My Cleaning Estimate</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/service-areas')}
                    className="px-4 py-3 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
                  >
                    View Coverage Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* K. FAQs */}
      <section className="py-16 lg:py-24 bg-[#FCF9F3] border-b border-[#29332F]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-3">
            <p className="text-xs font-medium text-[#294C43]">Questions &amp; Honest Answers</p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
              Frequently Asked Questions
            </h2>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* L. Final CTA */}
      <section className="py-20 lg:py-28 bg-[#FCF9F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-medium text-[#294C43]">Real People. Remarkably Clean Spaces.</p>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-[#29332F] max-w-3xl mx-auto leading-[1.12]">
            A Little Help Can Make a Big Difference.
          </h2>
          <p className="text-base sm:text-lg text-[#29332F]/80 max-w-2xl mx-auto leading-relaxed">
            Tell Reginald and Aleyah about your space and explore a cleaning service that fits your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
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
              className="px-6 py-3.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
            >
              Contact the Owners
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
