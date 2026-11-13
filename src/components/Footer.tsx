import { Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, RoutePath, SERVICE_AREAS, SERVICES } from '../data/siteData';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: RoutePath) => {
    onNavigate(path);
  };

  return (
    <footer className="bg-[#29332F] text-[#FCF9F3] border-t border-[#FCF9F3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('/');
              }}
              className="font-display text-2xl font-medium text-[#FCF9F3] inline-block"
            >
              {COMPANY_INFO.name}
            </a>
            <p className="text-sm text-[#FCF9F3]/75 leading-relaxed max-w-sm">
              Real People. Remarkably Clean Spaces. Family-owned and owner-operated by Reginald and Aleyah Berry, serving
              households, rentals, and local businesses with personal care.
            </p>
            <div className="space-y-2.5 pt-2 text-sm">
              <div className="flex items-center gap-2.5 text-[#FCF9F3]/85">
                <MapPin className="w-4 h-4 text-[#B6C9B9] shrink-0" aria-hidden="true" />
                <span>{COMPANY_INFO.region}</span>
              </div>
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2.5 text-[#FCF9F3] hover:text-[#B6C9B9] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B6C9B9] shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-base font-medium text-[#FCF9F3]">Cleaning &amp; Organization</h3>
            <ul className="space-y-2.5 text-sm text-[#FCF9F3]/75">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href={service.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(service.slug);
                    }}
                    className="hover:text-[#FCF9F3] transition-colors inline-flex items-center justify-between gap-2 w-full max-w-[240px]"
                  >
                    <span>{service.title}</span>
                    <span className="text-xs text-[#B6C9B9] tabular-nums">From ${service.startingPrice}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-base font-medium text-[#FCF9F3]">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[#FCF9F3]/75">
              {[
                { label: 'Home', path: '/' as RoutePath },
                { label: 'Meet the Owners', path: '/meet-the-owners' as RoutePath },
                { label: 'Our Work', path: '/our-work' as RoutePath },
                { label: 'Service Areas', path: '/service-areas' as RoutePath },
                { label: 'Get an Estimate', path: '/estimate' as RoutePath },
                { label: 'Contact', path: '/contact' as RoutePath },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.path);
                    }}
                    className="hover:text-[#FCF9F3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-base font-medium text-[#FCF9F3]">OKC Metro Coverage</h3>
            <p className="text-sm text-[#FCF9F3]/75 leading-relaxed">
              {SERVICE_AREAS.map((area) => area.city).join(' · ')}
            </p>
            <p className="text-xs text-[#FCF9F3]/60 leading-relaxed">
              Starting prices shown are preliminary references. Final pricing and scheduling are confirmed directly with
              Reginald and Aleyah Berry.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => handleNav('/estimate')}
                className="px-4 py-2.5 rounded-lg bg-[#FCF9F3] text-[#294C43] text-sm font-medium hover:bg-[#EEE7DA] transition-colors cursor-pointer"
              >
                Get My Cleaning Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Quiet Legal & Agency Attribution Bar */}
        <div className="mt-14 pt-8 border-t border-[#FCF9F3]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#FCF9F3]/60">
          <p>{COMPANY_INFO.name} · Family-Owned &amp; Owner-Operated · Oklahoma City Metro Area</p>
          <p>{COMPANY_INFO.agencyCredit}</p>
        </div>
      </div>
    </footer>
  );
}
