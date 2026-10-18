'use client'

import { ArrowRight, FileText, ShieldCheck } from 'lucide-react'
import { event } from '@/lib/analytics'
import { sdsDeskUrl } from '@/lib/sdsdesk'

type Variant = 'banner' | 'card' | 'inline'

type ChemDocsPromoProps = {
  variant?: Variant
  /** Where on this site the promo sits; becomes utm_content so each placement can be measured. */
  placement: string
  /** Path on sdsdesk.com to land on. Defaults to the home page. */
  path?: string
  title?: string
  body?: string
  cta?: string
}

const defaults = {
  title: 'Selling chemicals? Create your own SDS and GHS labels.',
  body: 'SDS Desk is the Safety Data Sheet software we built for chemical traders and manufacturers: GHS-classified 16-section SDS, hazard labels and certificates of analysis, exported as PDF. 7-day free trial.',
  cta: 'Try SDS Desk free',
}

export default function ChemDocsPromo({
  variant = 'card',
  placement,
  path = '/',
  title = defaults.title,
  body = defaults.body,
  cta = defaults.cta,
}: ChemDocsPromoProps) {
  const href = sdsDeskUrl(path, placement)
  const track = () => event({ action: 'click_sdsdesk', category: 'cross_promo', label: placement })

  if (variant === 'inline') {
    return (
      <p className="my-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <ShieldCheck className="mr-2 inline h-4 w-4 text-amber-700" aria-hidden="true" />
        {body}{' '}
        <a href={href} style={{ cursor: 'default' }} target="_blank" rel="noopener" onClick={track} className="font-semibold text-amber-800 underline underline-offset-2">
          {cta}
        </a>
      </p>
    )
  }

  if (variant === 'banner') {
    return (
      <section className="bg-gray-900 py-12 text-white" aria-labelledby={`promo-${placement}`}>
        <div className="container mx-auto flex flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" /> New from the Sulman Traders team
            </div>
            <h2 id={`promo-${placement}`} className="text-2xl font-bold md:text-3xl">{title}</h2>
            <p className="mt-3 text-gray-300">{body}</p>
          </div>
          <a
            href={href}
            style={{ cursor: 'default' }} target="_blank"
            rel="noopener"
            onClick={track}
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-amber-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-500"
          >
            {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    )
  }

  return (
    <aside className="my-10 rounded-xl border border-amber-300 bg-amber-50 p-6 not-prose" aria-label="SDS Desk">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-800">
        <ShieldCheck className="h-4 w-4" aria-hidden="true" /> SDS Desk
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{body}</p>
      <a
        href={href}
        style={{ cursor: 'default' }} target="_blank"
        rel="noopener"
        onClick={track}
        className="mt-4 inline-flex items-center gap-2 rounded-md bg-amber-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-amber-800"
      >
        {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </aside>
  )
}
