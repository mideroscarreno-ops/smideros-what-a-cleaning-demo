/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { RoutePath, SERVICES, ServiceId } from './data/siteData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServiceDetailPage, ServicesOverviewPage } from './pages/ServiceDetailPage';
import { MeetOwnersPage } from './pages/MeetOwnersPage';
import { OurWorkPage } from './pages/OurWorkPage';
import { ServiceAreasPage } from './pages/ServiceAreasPage';
import { EstimatePage } from './pages/EstimatePage';
import { ContactPage } from './pages/ContactPage';

const VALID_PATHS = new Set<RoutePath>([
  '/',
  '/services',
  '/services/house-cleaning',
  '/services/airbnb-cleaning',
  '/services/deep-cleaning',
  '/services/move-in-out-cleaning',
  '/services/office-commercial-cleaning',
  '/services/home-organization',
  '/meet-the-owners',
  '/our-work',
  '/service-areas',
  '/estimate',
  '/contact',
]);

function normalizePath(pathname: string): RoutePath {
  const cleaned = pathname.replace(/\/+$/, '') || '/';
  if (VALID_PATHS.has(cleaned as RoutePath)) {
    return cleaned as RoutePath;
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() =>
    normalizePath(typeof window !== 'undefined' ? window.location.pathname : '/')
  );
  const [estimateServiceId, setEstimateServiceId] = useState<ServiceId | undefined>(undefined);
  const [estimateLocation, setEstimateLocation] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: RoutePath, options?: { serviceId?: ServiceId; location?: string }) => {
    if (options?.serviceId) {
      setEstimateServiceId(options.serviceId);
    }
    if (options?.location !== undefined) {
      setEstimateLocation(options.location);
    }
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const matchedService = SERVICES.find((s) => s.slug === currentPath);

  return (
    <div className="min-h-screen flex flex-col bg-[#FCF9F3] text-[#29332F]">
      <Navbar currentPath={currentPath} onNavigate={(path) => navigate(path)} />

      <main className="flex-1">
        {currentPath === '/' && <HomePage onNavigate={navigate} />}
        {currentPath === '/services' && <ServicesOverviewPage onNavigate={navigate} />}
        {matchedService && <ServiceDetailPage service={matchedService} onNavigate={navigate} />}
        {currentPath === '/meet-the-owners' && <MeetOwnersPage onNavigate={(path) => navigate(path)} />}
        {currentPath === '/our-work' && <OurWorkPage onNavigate={(path) => navigate(path)} />}
        {currentPath === '/service-areas' && <ServiceAreasPage onNavigate={navigate} />}
        {currentPath === '/estimate' && (
          <EstimatePage initialServiceId={estimateServiceId} initialLocation={estimateLocation} />
        )}
        {currentPath === '/contact' && <ContactPage onNavigate={(path) => navigate(path)} />}
      </main>

      <Footer onNavigate={(path) => navigate(path)} />
    </div>
  );
}
