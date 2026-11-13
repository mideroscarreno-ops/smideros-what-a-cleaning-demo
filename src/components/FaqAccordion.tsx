import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/siteData';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#29332F]/12 border-t border-b border-[#29332F]/12">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={faq.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full py-5 sm:py-6 flex items-start justify-between gap-6 text-left cursor-pointer group"
            >
              <span className="font-display text-lg sm:text-xl font-normal text-[#29332F] group-hover:text-[#294C43] transition-colors">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#294C43] shrink-0 mt-1 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="pb-6 pr-8 text-sm sm:text-base text-[#29332F]/80 leading-relaxed max-w-3xl">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
