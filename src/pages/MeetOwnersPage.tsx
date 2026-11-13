import { ArrowRight, Check, Mail } from 'lucide-react';
import { COMPANY_INFO, IMAGES, OWNER_STATEMENTS, RoutePath, TRUST_PILLARS } from '../data/siteData';
import { SafeImage } from '../components/SafeImage';

interface MeetOwnersPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function MeetOwnersPage({ onNavigate }: MeetOwnersPageProps) {
  return (
    <div className="bg-[#FCF9F3]">
      {/* Hero */}
      <section className="py-14 lg:py-20 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-medium text-[#294C43]">
                Meet the Owners · Family-Owned &amp; Owner-Operated
              </p>
              <h1 className="font-display text-[clamp(2.25rem,4.2vw,3.6rem)] leading-[1.1] font-normal text-[#29332F]">
                Real People. Remarkably Clean Spaces.
              </h1>
              <p className="text-base sm:text-lg text-[#29332F]/80 leading-relaxed max-w-2xl">
                What A Cleaning Services is led and operated every day by husband and wife{' '}
                <strong>Reginald and Aleyah Berry</strong>. Instead of sending out unfamiliar rotating crews, we build
                direct, lasting relationships with the Oklahoma City families, hosts, and small businesses we serve.
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
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg border border-[#29332F]/20 text-sm font-medium text-[#29332F] hover:bg-[#EEE7DA] transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <SafeImage
                src={IMAGES.ownersCraft}
                alt="Warm oak console with folded eucalyptus linen apron and botanical care supplies"
                fallbackTitle="Reginald & Aleyah Berry"
                priority
                wrapperClassName="w-full aspect-[3/4] rounded-2xl border border-[#29332F]/10"
                className="w-full h-full object-cover"
              />
              <p className="text-xs text-[#29332F]/65 leading-relaxed">
                Note: Editorial still life created for this redesign concept — authentic photographs of Reginald and
                Aleyah Berry can be viewed on what-a-cleaning.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Their Stories, Treated With Dignity */}
      <section className="py-16 lg:py-24 bg-[#EEE7DA]/55 border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-[#294C43]">Why We Started</p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#29332F]">
              Built From Lived Empathy and Service
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <article className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-2xl p-8 space-y-4">
              <p className="text-xs font-medium text-[#294C43]">Co-Owner &amp; Cleaner</p>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">Aleyah Berry</h3>
              <p className="text-base text-[#29332F]/80 leading-relaxed">
                Aleyah&apos;s motivation for founding What A Cleaning Services grew from two deeply personal places:
                navigating her own season of depression and witnessing her grandparents struggle to keep up with the
                daily upkeep of their home as they grew older.
              </p>
              <p className="text-base text-[#29332F]/80 leading-relaxed">
                Those experiences shaped how the company approaches every doorstep today — with patience, respect, and a
                genuine desire to relieve stress for busy families, older adults, and anyone who simply needs a steady
                helping hand without judgment.
              </p>
            </article>

            <article className="bg-[#FCF9F3] border border-[#29332F]/10 rounded-2xl p-8 space-y-4">
              <p className="text-xs font-medium text-[#294C43]">Co-Owner &amp; Cleaner</p>
              <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#29332F]">Reginald Berry</h3>
              <p className="text-base text-[#29332F]/80 leading-relaxed">
                Reginald brings more than six years of U.S. military service and a grounded commitment to helping people
                in his community. That background informs the dependability, thoroughness, and straightforward honesty
                clients experience from the first message onward.
              </p>
              <p className="text-base text-[#29332F]/80 leading-relaxed">
                Together, Reginald and Aleyah answer inquiries personally, show up consistently as the same two-person
                team, and take direct pride in leaving every home, rental, or office calmer than they found it.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Owner Statements */}
      <section className="py-16 lg:py-24 bg-[#FCF9F3] border-b border-[#29332F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="font-display text-3xl font-normal text-[#29332F]">In Their Words</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OWNER_STATEMENTS.map((statement) => (
              <blockquote
                key={statement.speaker}
                className="bg-[#EEE7DA]/45 border border-[#29332F]/10 rounded-2xl p-7 sm:p-8 space-y-5"
              >
                <p className="text-xs font-medium text-[#294C43]">{statement.context}</p>
                <p className="font-display text-xl text-[#29332F] leading-relaxed">&ldquo;{statement.quote}&rdquo;</p>
                <footer className="text-sm text-[#29332F]/75">
                  <strong className="text-[#29332F]">{statement.speaker}</strong> · {statement.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 lg:py-24 bg-[#294C43] text-[#FCF9F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-medium text-[#B6C9B9]">What You Can Expect</p>
            <h2 className="font-display text-3xl sm:text-4xl font-normal">The Same Faces. The Same Care.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar) => (
              <div key={pillar.number} className="bg-[#FCF9F3]/8 border border-[#FCF9F3]/15 rounded-xl p-6 space-y-3">
                <Check className="w-5 h-5 text-[#B6C9B9]" aria-hidden="true" />
                <h3 className="font-display text-xl font-normal text-[#FCF9F3]">{pillar.title}</h3>
                <p className="text-sm text-[#FCF9F3]/80 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
