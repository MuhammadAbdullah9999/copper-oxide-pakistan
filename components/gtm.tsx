'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export const GoogleTagManager = () => {
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const updateConsent = () => {
      setHasConsent(localStorage.getItem('cookie-consent') === 'accepted')
    }

    updateConsent()
    window.addEventListener('cookie-consent-updated', updateConsent)

    return () => window.removeEventListener('cookie-consent-updated', updateConsent)
  }, [])

  if (!hasConsent) return null

  return (
    <>
      <Script
        id="gtm-script-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtm.js?id=G-5MBRGK5MJX`}
      />
      <Script
        id="gtm-script-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              event:'gtm.js'
            });
          `,
        }}
      />
    </>
  )
}

export const GoogleTagManagerNoScript = () => (
  null
)
