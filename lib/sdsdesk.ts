export const SDSDESK_URL = 'https://sdsdesk.com'

/**
 * sdsdesk.com link with UTM tags; `placement` becomes utm_content so each spot can be measured.
 * Use only for ad-style placements (bottom banner, popup). Those links are rel="sponsored".
 */
export function sdsDeskUrl(path: string, placement: string) {
  const params = new URLSearchParams({
    utm_source: 'sulmantraders',
    utm_medium: 'referral',
    utm_campaign: 'sds-desk-cross-promo',
    utm_content: placement,
  })
  return `${SDSDESK_URL}${path}?${params.toString()}`
}

/**
 * Clean sdsdesk.com link for editorial links (articles, product pages, footer).
 * No query string, so the link points straight at the canonical URL.
 */
export function sdsDeskLink(path: string = '/') {
  return `${SDSDESK_URL}${path === '/' ? '' : path}`
}

/** Products that have a matching chemical page on SDS Desk. */
export const SDSDESK_CHEMICAL_PAGES: Record<string, string> = {
  'copper-sulphate': '/chemicals/copper-sulphate-pentahydrate-7758-99-8',
  'silver-nitrate': '/chemicals/silver-nitrate-7761-88-8',
}

/** SDS Desk articles about a product. */
export const SDSDESK_PRODUCT_GUIDES: Record<string, { path: string; label: string }> = {
  'copper-sulphate': { path: '/blog/copper-sulphate-uses-hazards-sds', label: 'copper sulphate uses, hazards and SDS' },
  'silver-nitrate': { path: '/blog/silver-nitrate-uses-hazards-sds', label: 'silver nitrate uses, hazards and SDS' },
}
