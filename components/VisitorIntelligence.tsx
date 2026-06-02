'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function getDevice() {
  if (typeof navigator === 'undefined') return 'unknown';
  const ua = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipod/.test(ua)) return 'mobile';
  if (/ipad|tablet/.test(ua)) return 'tablet';
  return 'desktop';
}

function VisitorIntelligenceInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    if (localStorage.getItem('cookie-consent') !== 'accepted') return;

    const key = `visitor-intelligence:${pathname}:${searchParams.toString()}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, 'sent');

    fetch('/api/visitor-intelligence', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        consent: true,
        path: `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`,
        title: document.title,
        referrer: document.referrer,
        language: navigator.language,
        device: getDevice(),
        utmSource: searchParams.get('utm_source') || '',
        utmMedium: searchParams.get('utm_medium') || '',
        utmCampaign: searchParams.get('utm_campaign') || '',
      }),
    }).catch(() => {
      sessionStorage.removeItem(key);
    });
  }, [pathname, searchParams]);

  return null;
}

export default function VisitorIntelligence() {
  return (
    <Suspense fallback={null}>
      <VisitorIntelligenceInner />
    </Suspense>
  );
}
