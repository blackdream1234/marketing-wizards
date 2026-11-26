import { useState } from 'react';
import { Globe } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  objectPosition?: 'top' | 'center';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  objectPosition = 'center',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-slate-100 text-slate-500 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Globe className="w-8 h-8 text-slate-400 mb-2" aria-hidden="true" />
        <span className="text-sm font-medium text-slate-600">{fallbackTitle || alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setHasError(true)}
      className={`${className} ${objectPosition === 'top' ? 'object-top' : 'object-center'}`}
    />
  );
}
