export const SDSDESK_URL = 'https://sdsdesk.com'

/** sdsdesk.com link with UTM tags; `placement` becomes utm_content so each spot can be measured. */
export function sdsDeskUrl(path: string, placement: string) {
  const params = new URLSearchParams({
    utm_source: 'sulmantraders',
    utm_medium: 'referral',
    utm_campaign: 'sds-desk-cross-promo',
    utm_content: placement,
  })
  return `${SDSDESK_URL}${path}?${params.toString()}`
}
