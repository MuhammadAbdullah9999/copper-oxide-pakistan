'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { GA_MEASUREMENT_ID, pageview } from '@/lib/analytics';

const MAX_GTAG_WAIT_ATTEMPTS = 20;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname || typeof window === 'undefined') {
      return;
    }

    const trackedPath = `${pathname}${window.location.search || ''}`;
    if (lastTrackedPath.current === trackedPath) return;
    if ((window as any).__gaInitialPagePath === trackedPath) {
      lastTrackedPath.current = trackedPath;
      return;
    }

    const sendWhenReady = (attempt = 0) => {
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
        });
        pageview(trackedPath);
        lastTrackedPath.current = trackedPath;
        return;
      }

      if (attempt < MAX_GTAG_WAIT_ATTEMPTS) {
        window.setTimeout(() => sendWhenReady(attempt + 1), 250);
      } else if (process.env.NODE_ENV !== 'production') {
        console.warn('[GA4] gtag was not ready; page_view not sent', {
          measurementId: GA_MEASUREMENT_ID,
          page_path: trackedPath,
        });
      }
    };

    sendWhenReady();
  }, [pathname]);

  return null;
}
