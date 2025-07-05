'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete' | 'onError'> {
  fallbackSrc?: string;
}

export function OptimizedImage({
  src,
  alt,
  className,
  fallbackSrc = '/placeholder.svg',
  sizes,
  priority = false,
  fill,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // If using fill, don't wrap in a div as the parent should handle positioning
  if (fill) {
    return (
      <>
        <Image
          src={error ? fallbackSrc : src}
          alt={alt}
          fill
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          className={`transition-opacity duration-500 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className || ''}`}
          loading={priority ? 'eager' : 'lazy'}
          quality={80}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          {...props}
        />
        
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } object-cover`}
        loading={priority ? 'eager' : 'lazy'}
        quality={80}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
      
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
} 