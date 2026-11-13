import { ArrowLeft, ArrowRight, Check, Info, Mail } from 'lucide-react';
import { COMPANY_INFO, RoutePath, SERVICES, ServiceId, ServiceItem } from '../data/siteData';
import { SafeImage } from '../components/SafeImage';

interface ServicesOverviewProps {
  onNavigate: (path: RoutePath, options?: { serviceId?: ServiceId }) => void;
}

export function ServicesOverviewPage({ onNavigate }: ServicesOverviewProps) {
  return (
    <div className="bg-[#FCF9F3]">
      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="text-xs font-medium text-[#294C43]">What A Cleaning Services · Complete Menu</p>
          <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-normal text-[#29332F] max-w-3xl">
            Six Services. Personally Cared For by the Owners.
          </h1>
          <p className="text-base sm:text-lg text-[#29332F]/80 max-w-2xl leading-relaxed">
            Every cleaning and organization service below is carried out directly by Reginald and Aleyah Berry across the
            Oklahoma City metro area.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-[#EEE7DA]/40 border border-[#29332F]/10 rounded-2xl overflow-hidden p-6 sm:p-8"
            >
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <SafeImage
                  src={service.image}
                  alt={service.imageAlt}
                  fallbackTitle={service.title}
                  wrapperClassName="w-full h-full min-h-[260px] rounded-xl"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-[#294C43]">
                    <span className="tabular-nums">{service.number} · {service.title}</span>
                    <span className="text-[#29332F] tabular-nums">Published starting price: ${service.startingPrice}</span>
                  </div>
                  <h2 className="font-display text-3xl font-normal text-[#29332F]">{service.title}</h2>
                  <p className="text-base text-[#29332F]/80 leading-relaxed">{service.editorialDescription}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.scopeHighlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-[#29332F]/80">
                        <Check className="w-4 h-4 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#29332F]/10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('/estimate', { serviceId: service.id })}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                  >
                    <span>Estimate {service.shortTitle}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="px-4 py-2.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#FCF9F3] transition-colors cursor-pointer"
                  >
                    Explore Checklist &amp; Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

interface ServiceDetailPageProps {
  service: ServiceItem;
  onNavigate: (path: RoutePath, options?: { serviceId?: ServiceId }) => void;
}

export function ServiceDetailPage({ service, onNavigate }: ServiceDetailPageProps) {
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div className="bg-[#FCF9F3]">
      {/* Breadcrumb & Hero Split */}
      <section className="py-12 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#294C43] hover:text-[#C98C72] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Back to All Six Services</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-medium text-[#294C43] tabular-nums">
                Service {service.number} · Owner-Operated in OKC Metro
              </p>
              <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-normal text-[#29332F]">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-[#29332F]/80 leading-relaxed">{service.editorialDescription}</p>

              <div className="bg-[#EEE7DA]/70 border border-[#29332F]/12 rounded-xl p-5 space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-xs font-medium text-[#294C43]">Published Starting Price</span>
                  <span className="font-display text-3xl text-[#29332F] tabular-nums">${service.startingPrice}+</span>
                </div>
                <p className="text-xs text-[#29332F]/75 leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    Starting price reference only — final pricing is confirmed directly with Reginald and Aleyah after
                    reviewing your space details.
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => onNavigate('/estimate', { serviceId: service.id })}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                >
                  <span>Get My {service.shortTitle} Estimate</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Question about ${service.title}`)}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Email the Owners</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SafeImage
                src={service.image}
                alt={service.imageAlt}
                fallbackTitle={service.title}
                priority
                wrapperClassName="w-full h-full min-h-[300px] sm:min-h-[400px] rounded-2xl border border-[#29332F]/10"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope Checklist & Ideal Fit */}
      <section className="py-14 lg:py-20 bg-[#EEE7DA]/45 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-medium text-[#294C43]">Care Scope Overview</p>
                <h2 className="font-display text-3xl font-normal text-[#29332F]">What We Focus On</h2>
              </div>

              <div className="space-y-6">
                {service.roomChecklist.map((group) => (
                  <div key={group.area} className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-6 space-y-4">
                    <h3 className="font-display text-xl font-normal text-[#294C43]">{group.area}</h3>
                    <ul className="space-y-2.5">
                      {group.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2.5 text-sm text-[#29332F]/85 leading-relaxed">
                          <Check className="w-4 h-4 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-6 sm:p-7 space-y-4">
                <p className="text-xs font-medium text-[#294C43]">Ideal For</p>
                <h3 className="font-display text-2xl font-normal text-[#29332F]">Who This Service Helps Most</h3>
                <ul className="space-y-3 pt-2">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#29332F]/80 leading-relaxed">
                      <Check className="w-4 h-4 text-[#C98C72] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.frequencies && (
                <div className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-6 sm:p-7 space-y-3">
                  <p className="text-xs font-medium text-[#294C43]">Available Options</p>
                  <h3 className="font-display text-xl font-normal text-[#29332F]">Scheduling Cadence</h3>
                  <p className="text-sm text-[#29332F]/80 leading-relaxed">{service.frequencies.join(' · ')}</p>
                </div>
              )}

              <div className="bg-[#294C43] text-[#FCF9F3] rounded-xl p-6 sm:p-7 space-y-4">
                <h3 className="font-display text-2xl font-normal">Always the Same Familiar Team</h3>
                <p className="text-sm text-[#FCF9F3]/85 leading-relaxed">
                  You speak directly with Reginald and Aleyah Berry from estimate to completion — never a rotating
                  outside crew.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/estimate', { serviceId: service.id })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FCF9F3] text-[#294C43] text-sm font-medium hover:bg-[#EEE7DA] transition-colors cursor-pointer"
                >
                  <span>Start Estimate Request</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="py-14 lg:py-20 bg-[#FCF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">Explore Our Other Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {otherServices.map((other) => (
              <button
                key={other.id}
                type="button"
                onClick={() => onNavigate(other.slug)}
                className="p-5 rounded-xl bg-[#EEE7DA]/50 border border-[#29332F]/10 hover:border-[#294C43]/40 text-left space-y-2 transition-colors cursor-pointer"
              >
                <p className="text-xs font-medium text-[#294C43] tabular-nums">From ${other.startingPrice}</p>
                <p className="font-display text-lg text-[#29332F]">{other.shortTitle}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
