'use client'

import Script from 'next/script'

export const GoogleTagManager = () => (
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

export const GoogleTagManagerNoScript = () => (
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=G-5MBRGK5MJX`}
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
)