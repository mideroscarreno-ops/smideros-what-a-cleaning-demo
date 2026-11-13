import { useState, useMemo } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Info, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREAS, SERVICES, ServiceId } from '../data/siteData';

interface EstimateWizardProps {
  initialServiceId?: ServiceId;
  initialLocation?: string;
}

type StepNumber = 1 | 2 | 3 | 4 | 5;

export function EstimateWizard({ initialServiceId, initialLocation = '' }: EstimateWizardProps) {
  const [step, setStep] = useState<StepNumber>(1);
  const [locationInput, setLocationInput] = useState(initialLocation);
  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>(initialServiceId || 'house-cleaning');

  // Step 3 fields by service category
  const [bedrooms, setBedrooms] = useState('3');
  const [bathrooms, setBathrooms] = useState('2');
  const [sqft, setSqft] = useState('');
  const [resFrequency, setResFrequency] = useState('Biweekly');

  const [turnoverNeed, setTurnoverNeed] = useState('Full linen reset, kitchen, bath & floors');
  const [airbnbSchedule, setAirbnbSchedule] = useState('');

  const [businessType, setBusinessType] = useState('Small Office / Studio');
  const [commSqft, setCommSqft] = useState('1,000 – 2,500 sq ft');
  const [commFrequency, setCommFrequency] = useState('Weekly');
  const [commHours, setCommHours] = useState('');

  const [orgSpaceType, setOrgSpaceType] = useState('Walk-In Closet or Wardrobe');
  const [orgProjectSize, setOrgProjectSize] = useState('Single space / room');
  const [orgDetails, setOrgDetails] = useState('');

  // Step 5 Contact fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedDemo, setSubmittedDemo] = useState(false);

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0],
    [selectedServiceId]
  );

  const areaMatch = useMemo(() => {
    const cleaned = locationInput.trim().toLowerCase();
    if (!cleaned) return null;
    const matchedCity = SERVICE_AREAS.find(
      (area) =>
        area.city.toLowerCase() === cleaned ||
        cleaned.includes(area.city.toLowerCase()) ||
        area.zips.some((zip) => cleaned.includes(zip))
    );
    return matchedCity || 'unlisted';
  }, [locationInput]);

  const stepLabels = [
    '01. Service Area',
    '02. Select Service',
    '03. Space Details',
    '04. Starting Price',
    '05. Contact Owners',
  ];

  const handleNext = () => {
    setFormError('');
    if (step === 1 && !locationInput.trim()) {
      setFormError('Please enter your city or ZIP code to continue.');
      return;
    }
    if (step < 5) {
      setStep((prev) => (prev + 1) as StepNumber);
    }
  };

  const handleBack = () => {
    setFormError('');
    if (step > 1) {
      setStep((prev) => (prev - 1) as StepNumber);
    }
  };

  const buildSummaryText = () => {
    const lines = [
      `Estimate Request Summary — ${COMPANY_INFO.name}`,
      `Service: ${selectedService.title} (Published starting price: $${selectedService.startingPrice})`,
      `City / ZIP: ${locationInput.trim() || 'Not provided'}`,
    ];

    if (selectedService.categoryType === 'residential') {
      lines.push(`Bedrooms: ${bedrooms}`, `Bathrooms: ${bathrooms}`);
      if (sqft.trim()) lines.push(`Approx. Sq Ft: ${sqft.trim()}`);
      lines.push(
        selectedService.id === 'house-cleaning' ? `Frequency: ${resFrequency}` : `Visit Type: ${selectedService.title}`
      );
    } else if (selectedService.categoryType === 'airbnb') {
      lines.push(`Bedrooms: ${bedrooms}`, `Bathrooms: ${bathrooms}`, `Turnover Scope: ${turnoverNeed}`);
      if (airbnbSchedule.trim()) lines.push(`Preferred Schedule: ${airbnbSchedule.trim()}`);
    } else if (selectedService.categoryType === 'commercial') {
      lines.push(
        `Business Type: ${businessType}`,
        `Approx. Size: ${commSqft}`,
        `Cleaning Frequency: ${commFrequency}`
      );
      if (commHours.trim()) lines.push(`Preferred Hours: ${commHours.trim()}`);
    } else if (selectedService.categoryType === 'organization') {
      lines.push(`Space Type: ${orgSpaceType}`, `Project Size: ${orgProjectSize}`);
      if (orgDetails.trim()) lines.push(`Details: ${orgDetails.trim()}`);
    }

    lines.push(
      `Name: ${fullName.trim()}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone (optional): ${phone.trim()}` : '',
      notes.trim() ? `Notes: ${notes.trim()}` : ''
    );
    return lines.filter(Boolean).join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setFormError('Please enter a valid email address so Reginald and Aleyah know where to reply.');
      return;
    }
    setSubmittedDemo(true);
  };

  if (submittedDemo) {
    const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
      `Cleaning Estimate Request — ${selectedService.title} (${locationInput.trim()})`
    )}&body=${encodeURIComponent(buildSummaryText())}`;

    return (
      <div className="bg-[#FCF9F3] border border-[#29332F]/15 rounded-2xl p-6 sm:p-10 space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-full bg-[#294C43]/10 text-[#294C43] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#294C43]">Demonstration Preview — No Real Inquiry Was Sent</p>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
              Your Estimate Summary Is Ready
            </h3>
            <p className="text-sm sm:text-base text-[#29332F]/80 leading-relaxed max-w-2xl">
              Because this website is an independent redesign concept by S.Mideros Agency without a connected live
              server, submitting this form does not automatically email the business. To send your real request to
              Reginald and Aleyah Berry, use the email button below.
            </p>
          </div>
        </div>

        <div className="bg-[#EEE7DA]/65 border border-[#29332F]/10 rounded-xl p-5 sm:p-6 space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#29332F]/10 pb-3">
            <span className="text-sm font-semibold text-[#29332F]">{selectedService.title}</span>
            <span className="text-sm font-medium text-[#294C43] tabular-nums">
              Published Starting Price: ${selectedService.startingPrice} (Final pricing confirmed by owners)
            </span>
          </div>
          <pre className="text-xs sm:text-sm text-[#29332F]/85 whitespace-pre-wrap font-sans leading-relaxed">
            {buildSummaryText()}
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            <span>Open Email Draft to {COMPANY_INFO.email}</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmittedDemo(false);
              setStep(1);
            }}
            className="px-4 py-3 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
          >
            Start Another Estimate
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FCF9F3] border border-[#29332F]/12 rounded-2xl overflow-hidden">
      {/* Progress Steps Header */}
      <div className="bg-[#EEE7DA]/70 border-b border-[#29332F]/10 px-4 sm:px-8 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {stepLabels.map((label, idx) => {
            const stepNum = (idx + 1) as StepNumber;
            const isCurrent = step === stepNum;
            const isCompleted = step > stepNum;
            return (
              <button
                key={label}
                type="button"
                onClick={() => {
                  if (stepNum <= step || (stepNum === 2 && locationInput.trim())) {
                    setFormError('');
                    setStep(stepNum);
                  }
                }}
                className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isCurrent
                    ? 'bg-[#294C43] text-[#FCF9F3]'
                    : isCompleted
                    ? 'bg-[#B6C9B9]/40 text-[#294C43]'
                    : 'text-[#29332F]/55 hover:text-[#29332F]'
                }`}
              >
                <span className="block truncate tabular-nums">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8" noValidate>
        {/* STEP 1: Confirm Service Area */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#294C43]">Step 1 of 5 · Confirm Service Area</p>
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
                Where is your home or business located?
              </h2>
              <p className="text-sm sm:text-base text-[#29332F]/75 max-w-2xl leading-relaxed">
                We serve eight primary communities across the Oklahoma City metropolitan area. Enter your city or ZIP
                code below, or select a city directly.
              </p>
            </div>

            <div className="max-w-md space-y-2">
              <label htmlFor="estimate-location" className="block text-sm font-medium text-[#29332F]">
                City or ZIP Code
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#294C43]/70 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                <input
                  id="estimate-location"
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  placeholder="e.g., Oklahoma City, Edmond, or 73013"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F] placeholder:text-[#29332F]/45 focus:border-[#294C43]"
                />
              </div>
            </div>

            {/* 8 Published Service Cities */}
            <div className="space-y-3">
              <p className="text-xs font-medium text-[#29332F]/65">Published Service Areas (Click to select)</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SERVICE_AREAS.map((area) => {
                  const selected = locationInput.trim().toLowerCase() === area.city.toLowerCase();
                  return (
                    <button
                      key={area.city}
                      type="button"
                      onClick={() => {
                        setLocationInput(area.city);
                        setFormError('');
                      }}
                      className={`px-3.5 py-2.5 rounded-lg border text-sm font-medium text-left transition-colors cursor-pointer ${
                        selected
                          ? 'bg-[#294C43] border-[#294C43] text-[#FCF9F3]'
                          : 'bg-white border-[#29332F]/15 text-[#29332F] hover:border-[#294C43]/50'
                      }`}
                    >
                      {area.city}
                    </button>
                  );
                })}
              </div>
            </div>

            {areaMatch && areaMatch !== 'unlisted' && (
              <div className="p-4 rounded-xl bg-[#B6C9B9]/25 border border-[#294C43]/20 text-sm text-[#29332F]">
                <strong className="font-semibold text-[#294C43]">{areaMatch.city}</strong> is within our published OKC
                metro coverage list. Final address and schedule availability are confirmed directly with Reginald and
                Aleyah.
              </div>
            )}

            {areaMatch === 'unlisted' && (
              <div className="p-4 rounded-xl bg-[#EEE7DA] border border-[#C98C72]/40 text-sm text-[#29332F]">
                Don&apos;t see your city on our primary list? You can still continue your estimate request or email{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="underline text-[#294C43] font-medium">
                  {COMPANY_INFO.email}
                </a>{' '}
                to confirm availability.
              </div>
            )}
          </div>
        )}

        {/* STEP 2: Select Service */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#294C43]">Step 2 of 5 · Select Service</p>
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
                Which service fits your space best?
              </h2>
              <p className="text-sm sm:text-base text-[#29332F]/75 max-w-2xl leading-relaxed">
                Select one of our six core services below. Starting prices are published references — final pricing is
                tailored to your specific space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((service) => {
                const isSelected = service.id === selectedServiceId;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`p-5 rounded-xl border text-left transition-colors flex flex-col justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? 'bg-[#294C43] border-[#294C43] text-[#FCF9F3]'
                        : 'bg-white border-[#29332F]/15 text-[#29332F] hover:border-[#294C43]/50'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className={`text-xs font-medium tabular-nums ${isSelected ? 'text-[#B6C9B9]' : 'text-[#294C43]'}`}>
                          {service.number}
                        </span>
                        <span className={`text-xs font-medium tabular-nums ${isSelected ? 'text-[#FCF9F3]/90' : 'text-[#29332F]/70'}`}>
                          Starting at ${service.startingPrice}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-normal">{service.title}</h3>
                      <p className={`text-xs leading-relaxed ${isSelected ? 'text-[#FCF9F3]/80' : 'text-[#29332F]/70'}`}>
                        {service.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Relevant Property Details */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#294C43]">
                Step 3 of 5 · {selectedService.title} Details
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
                Tell us a bit about your space
              </h2>
              <p className="text-sm sm:text-base text-[#29332F]/75 max-w-2xl leading-relaxed">
                These details help Reginald and Aleyah prepare an accurate, thoughtful follow-up for your{' '}
                {selectedService.title.toLowerCase()}.
              </p>
            </div>

            {selectedService.categoryType === 'residential' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                <div>
                  <label htmlFor="est-bedrooms" className="block text-sm font-medium text-[#29332F] mb-2">
                    Number of Bedrooms
                  </label>
                  <select
                    id="est-bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    {['1', '2', '3', '4', '5', '6+'].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === '1' ? 'Bedroom' : 'Bedrooms'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="est-bathrooms" className="block text-sm font-medium text-[#29332F] mb-2">
                    Number of Bathrooms
                  </label>
                  <select
                    id="est-bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    {['1', '1.5', '2', '2.5', '3', '3.5', '4+'].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === '1' ? 'Bathroom' : 'Bathrooms'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="est-sqft" className="block text-sm font-medium text-[#29332F] mb-2">
                    Approximate Square Footage (optional)
                  </label>
                  <input
                    id="est-sqft"
                    type="text"
                    value={sqft}
                    onChange={(e) => setSqft(e.target.value)}
                    placeholder="e.g., 1,850 sq ft"
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>

                <div>
                  <label htmlFor="est-frequency" className="block text-sm font-medium text-[#29332F] mb-2">
                    {selectedService.id === 'house-cleaning' ? 'Preferred Cleaning Frequency' : 'Service Timing'}
                  </label>
                  <select
                    id="est-frequency"
                    value={resFrequency}
                    onChange={(e) => setResFrequency(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    {(selectedService.frequencies || ['One-Time']).map((freq) => (
                      <option key={freq} value={freq}>
                        {freq}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {selectedService.categoryType === 'airbnb' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                <div>
                  <label htmlFor="airbnb-beds" className="block text-sm font-medium text-[#29332F] mb-2">
                    Guest Bedrooms
                  </label>
                  <select
                    id="airbnb-beds"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    {['Studio / 1', '2', '3', '4', '5+'].map((n) => (
                      <option key={n} value={n}>
                        {n} {n.includes('1') ? 'Bedroom' : 'Bedrooms'}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="airbnb-baths" className="block text-sm font-medium text-[#29332F] mb-2">
                    Guest Bathrooms
                  </label>
                  <select
                    id="airbnb-baths"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    {['1', '1.5', '2', '2.5', '3+'].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === '1' ? 'Bathroom' : 'Bathrooms'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="airbnb-turnover" className="block text-sm font-medium text-[#29332F] mb-2">
                    Turnover Requirements
                  </label>
                  <select
                    id="airbnb-turnover"
                    value={turnoverNeed}
                    onChange={(e) => setTurnoverNeed(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    <option value="Full linen reset, kitchen, bath & floors">
                      Full linen reset, kitchen, bathroom &amp; floor turnover
                    </option>
                    <option value="Turnover cleaning + host supply restock check">
                      Turnover cleaning + host-provided supply restock check
                    </option>
                    <option value="Deep seasonal refresh for active rental">
                      Deep seasonal refresh for active short-term rental
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="airbnb-schedule" className="block text-sm font-medium text-[#29332F] mb-2">
                    Preferred Turnover Schedule or Check-In Window (optional)
                  </label>
                  <input
                    id="airbnb-schedule"
                    type="text"
                    value={airbnbSchedule}
                    onChange={(e) => setAirbnbSchedule(e.target.value)}
                    placeholder="e.g., Typical 11:00 AM check-out / 3:00 PM check-in window"
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>
              </div>
            )}

            {selectedService.categoryType === 'commercial' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                <div>
                  <label htmlFor="comm-type" className="block text-sm font-medium text-[#29332F] mb-2">
                    Business Type
                  </label>
                  <select
                    id="comm-type"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    <option value="Small Office / Studio">Small Office / Creative Studio</option>
                    <option value="Retail Shop / Showroom">Retail Shop / Showroom</option>
                    <option value="Medical / Wellness Practice">Wellness or Client Practice</option>
                    <option value="Other Commercial Space">Other Local Business Space</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comm-sqft" className="block text-sm font-medium text-[#29332F] mb-2">
                    Approximate Square Footage
                  </label>
                  <select
                    id="comm-sqft"
                    value={commSqft}
                    onChange={(e) => setCommSqft(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
                    <option value="1,000 – 2,500 sq ft">1,000 – 2,500 sq ft</option>
                    <option value="2,500 – 5,000 sq ft">2,500 – 5,000 sq ft</option>
                    <option value="5,000+ sq ft">5,000+ sq ft</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comm-freq" className="block text-sm font-medium text-[#29332F] mb-2">
                    Cleaning Frequency
                  </label>
                  <select
                    id="comm-freq"
                    value={commFrequency}
                    onChange={(e) => setCommFrequency(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    <option value="Weekly">Weekly</option>
                    <option value="Biweekly">Biweekly</option>
                    <option value="Multiple Visits / Week">Multiple Visits Per Week</option>
                    <option value="One-Time">One-Time Commercial Clean</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comm-hours" className="block text-sm font-medium text-[#29332F] mb-2">
                    Preferred Cleaning Hours (optional)
                  </label>
                  <input
                    id="comm-hours"
                    type="text"
                    value={commHours}
                    onChange={(e) => setCommHours(e.target.value)}
                    placeholder="e.g., After 5:30 PM or weekends"
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>
              </div>
            )}

            {selectedService.categoryType === 'organization' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                <div>
                  <label htmlFor="org-space" className="block text-sm font-medium text-[#29332F] mb-2">
                    Type of Space
                  </label>
                  <select
                    id="org-space"
                    value={orgSpaceType}
                    onChange={(e) => setOrgSpaceType(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    <option value="Walk-In Closet or Wardrobe">Walk-In Closet or Wardrobe</option>
                    <option value="Kitchen Pantry">Kitchen Pantry</option>
                    <option value="Linen Closet or Utility Room">Linen Closet or Utility Room</option>
                    <option value="Home Office or Living Space">Home Office or Shared Living Space</option>
                    <option value="Multiple Home Areas">Multiple Home Spaces</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="org-size" className="block text-sm font-medium text-[#29332F] mb-2">
                    Approximate Project Size
                  </label>
                  <select
                    id="org-size"
                    value={orgProjectSize}
                    onChange={(e) => setOrgProjectSize(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  >
                    <option value="Single space / closet">Single space or closet</option>
                    <option value="Full room or pantry + utility">Full room or pantry &amp; utility zone</option>
                    <option value="Multi-room organization project">Multi-room organization project</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="org-details" className="block text-sm font-medium text-[#29332F] mb-2">
                    Additional Details (optional)
                  </label>
                  <textarea
                    id="org-details"
                    rows={3}
                    value={orgDetails}
                    onChange={(e) => setOrgDetails(e.target.value)}
                    placeholder="Share what feels most helpful to sort, simplify, or reset."
                    className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 4: Honest Estimate Presentation */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#294C43]">Step 4 of 5 · Transparent Starting Price</p>
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
                Your Preliminary Reference
              </h2>
              <p className="text-sm sm:text-base text-[#29332F]/75 max-w-2xl leading-relaxed">
                Because every home and business space has unique layout and condition needs, we share our verified
                starting price up front and confirm your exact quote directly after reviewing your details.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-6 bg-[#294C43] text-[#FCF9F3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-[#B6C9B9]">Published Starting Price · Preliminary Estimate</p>
                  <h3 className="font-display text-2xl font-normal">{selectedService.title}</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-display text-5xl sm:text-6xl font-normal tabular-nums">
                    ${selectedService.startingPrice}
                    <span className="text-lg font-sans text-[#B6C9B9] ml-2">+ starting</span>
                  </p>
                  <p className="text-xs text-[#FCF9F3]/80 leading-relaxed">
                    Selected location: {locationInput.trim()}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#EEE7DA]/80 border border-[#29332F]/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-2">
                    <h4 className="font-display text-xl font-normal text-[#29332F]">
                      Not a Final Binding Quote
                    </h4>
                    <p className="text-sm text-[#29332F]/80 leading-relaxed">
                      The amount shown (${selectedService.startingPrice}) is the published starting price for{' '}
                      {selectedService.title}. Final pricing depends on square footage, current condition, number of
                      rooms, and any specific requests — and is always confirmed directly with Reginald and Aleyah
                      before scheduling.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[#29332F]/65 pt-3 border-t border-[#29332F]/10">
                  No obligation, no surprise add-ons, and no automated third-party dispatch.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Contact */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium text-[#294C43]">Step 5 of 5 · Direct Owner Follow-Up</p>
              <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
                Where should Reginald &amp; Aleyah reach you?
              </h2>
              <p className="text-sm sm:text-base text-[#29332F]/75 max-w-2xl leading-relaxed">
                Final pricing and scheduling are confirmed directly with the owners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
              <div>
                <label htmlFor="est-name" className="block text-sm font-medium text-[#29332F] mb-2">
                  Full Name <span className="text-[#C98C72]">*</span>
                </label>
                <input
                  id="est-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                />
              </div>

              <div>
                <label htmlFor="est-email" className="block text-sm font-medium text-[#29332F] mb-2">
                  Email Address <span className="text-[#C98C72]">*</span>
                </label>
                <input
                  id="est-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="est-phone" className="block text-sm font-medium text-[#29332F] mb-2">
                  Phone Number (optional)
                </label>
                <input
                  id="est-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Optional — email is our primary communication channel"
                  className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="est-notes" className="block text-sm font-medium text-[#29332F] mb-2">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="est-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Pets in the home, priority rooms, preferred days, or any helpful context"
                  className="w-full px-3.5 py-3 rounded-lg bg-white border border-[#29332F]/20 text-sm text-[#29332F]"
                />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#EEE7DA]/70 border border-[#29332F]/10 text-xs text-[#29332F]/75 leading-relaxed max-w-3xl">
              Redesign Demonstration Note: This interactive form previews your estimate summary locally and prepares a
              ready-to-send email draft to {COMPANY_INFO.email}. It does not transmit data to an external backend server.
            </div>
          </div>
        )}

        {formError && (
          <div role="alert" className="p-3.5 rounded-lg bg-[#C98C72]/15 border border-[#C98C72]/40 text-sm text-[#29332F]">
            {formError}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="pt-6 border-t border-[#29332F]/10 flex flex-wrap items-center justify-between gap-4">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Previous Step</span>
            </button>
          ) : (
            <span className="text-xs text-[#29332F]/60">Direct owner review · No obligation</span>
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
            >
              <span>Request My Personalized Estimate</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
