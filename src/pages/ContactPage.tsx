import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, RoutePath, SERVICE_AREAS } from '../data/siteData';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please enter a short note about how we can help.');
      return;
    }
    setSubmitted(true);
  };

  const mailtoHref = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Inquiry from ${name.trim() || 'Website Visitor'}${city.trim() ? ` (${city.trim()})` : ''}`
  )}&body=${encodeURIComponent(
    `Name: ${name.trim()}\nEmail: ${email.trim()}\nCity / Area: ${city.trim() || 'Not specified'}\n\nMessage:\n${message.trim()}`
  )}`;

  return (
    <div className="bg-[#FCF9F3]">
      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="text-xs font-medium text-[#294C43]">Direct Owner Communication</p>
          <h1 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] font-normal text-[#29332F]">
            Contact Reginald &amp; Aleyah
          </h1>
          <p className="text-base sm:text-lg text-[#29332F]/80 max-w-2xl leading-relaxed">
            Have a question about cleaning scope, home organization, or availability in your neighborhood? Email is our
            primary, confirmed contact channel.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact Info & Next Steps */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#EEE7DA]/60 border border-[#29332F]/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="space-y-1">
                <h2 className="font-display text-2xl font-normal text-[#29332F]">{COMPANY_INFO.name}</h2>
                <p className="text-sm text-[#29332F]/75">Owned &amp; Operated by {COMPANY_INFO.owners}</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-[#29332F]/10">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-[#29332F]/65">Primary Contact Email</p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-medium text-[#294C43] hover:text-[#C98C72] underline underline-offset-4 break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-medium text-[#29332F]/65">Service Coverage</p>
                    <p className="text-sm font-medium text-[#29332F]">{COMPANY_INFO.region}</p>
                    <p className="text-xs text-[#29332F]/75 mt-1 leading-relaxed">
                      {SERVICE_AREAS.map((a) => a.city).join(' · ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29332F]/10 space-y-3">
                <p className="text-xs font-semibold text-[#294C43]">Transparent Next Steps</p>
                <ol className="space-y-2 text-sm text-[#29332F]/80 leading-relaxed list-decimal list-inside">
                  <li>Send an email or complete our 5-step estimate form.</li>
                  <li>Reginald and Aleyah review your space details and city.</li>
                  <li>Together, we confirm final pricing, scope, and scheduling directly.</li>
                </ol>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/estimate')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                >
                  <span>Get My Cleaning Estimate</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#EEE7DA]/50 border border-[#29332F]/12 rounded-2xl p-7 sm:p-10 space-y-6">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-[#294C43] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-[#294C43]">
                      Demonstration Preview — No Real Inquiry Was Sent
                    </p>
                    <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">
                      Your Message Draft Is Ready
                    </h2>
                    <p className="text-sm sm:text-base text-[#29332F]/80 leading-relaxed">
                      Because this site is an independent redesign concept without a live mail server, your message
                      was prepared locally. Click below to open your email app addressed directly to{' '}
                      {COMPANY_INFO.email}.
                    </p>
                  </div>
                </div>

                <div className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-xl p-5 text-sm text-[#29332F]/85 space-y-1.5">
                  <p>
                    <strong>Name:</strong> {name}
                  </p>
                  <p>
                    <strong>Email:</strong> {email}
                  </p>
                  {city && (
                    <p>
                      <strong>City / ZIP:</strong> {city}
                    </p>
                  )}
                  <p className="pt-2 whitespace-pre-wrap">{message}</p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
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
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-3 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors cursor-pointer"
                  >
                    Write Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white border border-[#29332F]/12 rounded-2xl p-6 sm:p-10 space-y-6"
              >
                <div className="space-y-1.5">
                  <h2 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">Send a Message</h2>
                  <p className="text-sm text-[#29332F]/75">
                    Questions go straight to Reginald and Aleyah Berry.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-[#29332F] mb-2">
                      Full Name <span className="text-[#C98C72]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-3 rounded-lg bg-[#FCF9F3] border border-[#29332F]/20 text-sm text-[#29332F]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-[#29332F] mb-2">
                      Email Address <span className="text-[#C98C72]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-3 rounded-lg bg-[#FCF9F3] border border-[#29332F]/20 text-sm text-[#29332F]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-city" className="block text-sm font-medium text-[#29332F] mb-2">
                    City or ZIP Code (optional)
                  </label>
                  <input
                    id="contact-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g., Oklahoma City, Edmond, Norman"
                    className="w-full px-3.5 py-3 rounded-lg bg-[#FCF9F3] border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[#29332F] mb-2">
                    How Can We Help? <span className="text-[#C98C72]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your home, rental, office, or any scheduling questions."
                    className="w-full px-3.5 py-3 rounded-lg bg-[#FCF9F3] border border-[#29332F]/20 text-sm text-[#29332F]"
                  />
                </div>

                {error && (
                  <div role="alert" className="p-3.5 rounded-lg bg-[#C98C72]/15 border border-[#C98C72]/40 text-sm text-[#29332F]">
                    {error}
                  </div>
                )}

                <div className="space-y-3 pt-1">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#294C43] text-[#FCF9F3] text-sm font-medium hover:bg-[#1f3b34] transition-colors cursor-pointer"
                  >
                    <span>Prepare Message for the Owners</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <p className="text-xs text-[#29332F]/65 leading-relaxed">
                    Redesign Demonstration Note: Submitting prepares a local preview and direct email draft to{' '}
                    {COMPANY_INFO.email}. No automated backend submission occurs.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
