'use client'

import { ArrowRight } from 'lucide-react'
import { event } from '@/lib/analytics'
import { sdsDeskUrl } from '@/lib/sdsdesk'

// Permanent bottom banner, styled like an anchored display ad. The spacer keeps page content from sitting under it.
export default function SdsDeskBanner() {
  const href = sdsDeskUrl('/', 'banner')
  return (
    <>
      <div className="h-[72px] sm:h-[76px]" aria-hidden="true" />
      <aside
        aria-label="Advertisement: SDS Desk"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-500/40 bg-gray-950 text-white shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener"
          onClick={() => event({ action: 'click_sdsdesk', category: 'cross_promo', label: 'banner' })}
          style={{ cursor: 'default' }}
          className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-2.5 sm:gap-5 sm:px-5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sdsdesk-sample-sds.png" alt="" width={744} height={1053} className="hidden h-[52px] w-auto -rotate-3 rounded-sm shadow-lg ring-1 ring-white/20 sm:block" />
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/60">Ad</span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate text-sm font-bold sm:text-base">
              Exporting chemicals? <span className="text-amber-400">Make your SDS &amp; GHS labels in minutes.</span>
            </span>
            <span className="hidden truncate text-xs text-gray-400 sm:block">SDS Desk by the Sulman Traders team · 16-section SDS, hazard labels, certificates of analysis</span>
          </span>
          <span style={{ cursor: 'default' }} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 px-3.5 py-2 text-sm font-bold text-gray-950 sm:px-5">
            Try free <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </aside>
    </>
  )
}
