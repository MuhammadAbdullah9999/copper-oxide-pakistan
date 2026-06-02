'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { pageview } from '@/lib/analytics';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setHasConsent(localStorage.getItem('cookie-consent') === 'accepted');
    };

    updateConsent();
    window.addEventListener('cookie-consent-updated', updateConsent);

    return () => window.removeEventListener('cookie-consent-updated', updateConsent);
  }, []);

  useEffect(() => {
    if (pathname && hasConsent) {
      pageview(pathname);
    }
  }, [pathname, hasConsent]);

  // Only load in production
  if (
    process.env.NODE_ENV !== 'production' ||
    !process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    !hasConsent
  ) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
