import { useState } from 'react';
import { Home } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  wrapperClassName = '',
  fallbackTitle,
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EEE7DA] via-[#FCF9F3] to-[#B6C9B9]/40 text-[#294C43] p-6 text-center ${wrapperClassName}`}
      >
        <div className="w-11 h-11 rounded-full bg-[#294C43]/10 flex items-center justify-center mb-3">
          <Home className="w-5 h-5 text-[#294C43]" aria-hidden="true" />
        </div>
        <p className="font-display text-base font-medium text-[#29332F]">
          {fallbackTitle || 'What A Cleaning Services'}
        </p>
        <p className="text-xs text-[#29332F]/70 mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={className}
      />
    </div>
  );
}
