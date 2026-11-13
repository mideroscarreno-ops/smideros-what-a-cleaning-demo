import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { COMPANY_INFO, RoutePath, SERVICES } from '../data/siteData';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  const handleLinkClick = (path: RoutePath) => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
  };

  const isServicesActive = currentPath === '/services' || currentPath.startsWith('/services/');

  return (
    <header className="sticky top-0 z-40 bg-[#FCF9F3]/95 backdrop-blur-md border-b border-[#29332F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="font-display text-xl sm:text-2xl font-medium tracking-tight text-[#294C43] whitespace-nowrap shrink-0"
        >
          {COMPANY_INFO.shortName}
        </a>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#29332F]/80">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#294C43] ${
              currentPath === '/' ? 'text-[#294C43] underline underline-offset-8 decoration-[#C98C72] decoration-2' : ''
            }`}
          >
            Home
          </a>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              aria-expanded={servicesDropdownOpen}
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1 whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#294C43] ${
                isServicesActive ? 'text-[#294C43] underline underline-offset-8 decoration-[#C98C72] decoration-2' : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesDropdownOpen && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-72 bg-[#FCF9F3] border border-[#29332F]/12 rounded-xl shadow-lg p-2 z-50"
              >
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('/services');
                  }}
                  className="block px-3 py-2.5 rounded-lg text-xs font-semibold tracking-wide text-[#294C43] hover:bg-[#EEE7DA] transition-colors"
                >
                  All Six Cleaning &amp; Organization Services
                </a>
                <div className="my-1 border-t border-[#29332F]/10" />
                {SERVICES.map((service) => (
                  <a
                    key={service.id}
                    href={service.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(service.slug);
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                      currentPath === service.slug
                        ? 'bg-[#EEE7DA] text-[#294C43] font-medium'
                        : 'text-[#29332F]/85 hover:bg-[#EEE7DA]/70 hover:text-[#294C43]'
                    }`}
                  >
                    <span className="truncate">{service.shortTitle}</span>
                    <span className="text-xs text-[#29332F]/60 tabular-nums shrink-0 ml-2">
                      From ${service.startingPrice}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/meet-the-owners"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/meet-the-owners');
            }}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#294C43] ${
              currentPath === '/meet-the-owners'
                ? 'text-[#294C43] underline underline-offset-8 decoration-[#C98C72] decoration-2'
                : ''
            }`}
          >
            Meet the Owners
          </a>

          <a
            href="/our-work"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/our-work');
            }}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#294C43] ${
              currentPath === '/our-work'
                ? 'text-[#294C43] underline underline-offset-8 decoration-[#C98C72] decoration-2'
                : ''
            }`}
          >
            Our Work
          </a>

          <a
            href="/service-areas"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/service-areas');
            }}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#294C43] ${
              currentPath === '/service-areas'
                ? 'text-[#294C43] underline underline-offset-8 decoration-[#C98C72] decoration-2'
                : ''
            }`}
          >
            Service Areas
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/contact');
            }}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#294C43] ${
              currentPath === '/contact'
                ? 'text-[#294C43] underline underline-offset-8 decoration-[#C98C72] decoration-2'
                : ''
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Action Area */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="text-sm font-medium text-[#294C43] hover:text-[#C98C72] transition-colors whitespace-nowrap shrink-0"
          >
            Email the Owners
          </a>
          <button
            type="button"
            onClick={() => handleLinkClick('/estimate')}
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-[#294C43] text-[#FCF9F3] hover:bg-[#1f3b34] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get My Cleaning Estimate
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('/estimate')}
            className="px-3.5 py-2 text-xs font-medium rounded-lg bg-[#294C43] text-[#FCF9F3] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get Estimate
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="w-11 h-11 inline-flex items-center justify-center rounded-lg border border-[#29332F]/15 text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#FCF9F3] border-b border-[#29332F]/10 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="px-4 py-5 space-y-1">
            {[
              { label: 'Home', path: '/' as RoutePath },
              { label: 'All Services', path: '/services' as RoutePath },
              { label: 'Meet the Owners', path: '/meet-the-owners' as RoutePath },
              { label: 'Our Work', path: '/our-work' as RoutePath },
              { label: 'Service Areas', path: '/service-areas' as RoutePath },
              { label: 'Contact', path: '/contact' as RoutePath },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.path);
                }}
                className={`block px-3 py-3 rounded-lg text-base font-medium ${
                  currentPath === item.path ? 'bg-[#EEE7DA] text-[#294C43]' : 'text-[#29332F] hover:bg-[#EEE7DA]/60'
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 pb-1 px-3">
              <p className="text-xs font-medium text-[#29332F]/60 mb-2">Individual Services</p>
              <div className="space-y-1 pl-2 border-l border-[#29332F]/15">
                {SERVICES.map((service) => (
                  <a
                    key={service.id}
                    href={service.slug}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(service.slug);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm ${
                      currentPath === service.slug ? 'bg-[#EEE7DA] text-[#294C43] font-medium' : 'text-[#29332F]/85'
                    }`}
                  >
                    <span>{service.title}</span>
                    <span className="text-xs text-[#29332F]/60 tabular-nums">From ${service.startingPrice}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 px-3 space-y-3 border-t border-[#29332F]/10">
              <button
                type="button"
                onClick={() => handleLinkClick('/estimate')}
                className="w-full py-3.5 px-5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium text-center cursor-pointer"
              >
                Get My Cleaning Estimate
              </button>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="block w-full py-3 px-5 rounded-lg border border-[#294C43]/30 text-[#294C43] text-sm font-medium text-center"
              >
                Email the Owners ({COMPANY_INFO.email})
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
