'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight, CheckCircle2, FileCheck2, Sparkles, X } from 'lucide-react'
import { event } from '@/lib/analytics'
import { sdsDeskUrl } from '@/lib/sdsdesk'

const DELAY_MS = 20_000
const PRODUCTS_DELAY_MS = 3_000
const SNOOZE_DAYS = 7
const KEY_SNOOZE = 'sdsdesk-popup-snoozed-until'
const KEY_SHOWN = 'sdsdesk-popup-shown'
const KEY_START = 'sdsdesk-popup-start'

// Storage can throw (private mode, blocked site data), so every access is guarded.
const read = (s: Storage | undefined, k: string) => { try { return s?.getItem(k) ?? null } catch { return null } }
const write = (s: Storage | undefined, k: string, v: string) => { try { s?.setItem(k, v) } catch { /* ignore */ } }

export default function SdsDeskPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  const show = useCallback(() => {
    // ?sdsdesk-popup=1 forces it open for testing, ignoring the "already shown" and snooze memory.
    const forced = new URLSearchParams(window.location.search).has('sdsdesk-popup')
    if (forced) { setOpen(true); return }
    if (read(sessionStorage, KEY_SHOWN)) return
    const until = Number(read(localStorage, KEY_SNOOZE) ?? 0)
    if (until > Date.now()) return
    write(sessionStorage, KEY_SHOWN, '1')
    setOpen(true)
    event({ action: 'popup_view', category: 'cross_promo', label: 'sdsdesk-popup' })
  }, [])

  const close = useCallback(() => {
    write(localStorage, KEY_SNOOZE, String(Date.now() + SNOOZE_DAYS * 86_400_000))
    setOpen(false)
    event({ action: 'popup_dismiss', category: 'cross_promo', label: 'sdsdesk-popup' })
  }, [])

  // Show after 20s on the site (the clock survives page changes), or shortly after reaching Products.
  useEffect(() => {
    const forced = new URLSearchParams(window.location.search).has('sdsdesk-popup')
    if (pathname === '/contact' && !forced) return
    if (forced) { const t = setTimeout(show, 1500); return () => clearTimeout(t) }
    if (!read(sessionStorage, KEY_START)) write(sessionStorage, KEY_START, String(Date.now()))
    const elapsed = Date.now() - Number(read(sessionStorage, KEY_START) ?? Date.now())
    const onProducts = pathname === '/products' || pathname.startsWith('/products/')
    const wait = Math.max(0, onProducts ? Math.min(DELAY_MS - elapsed, PRODUCTS_DELAY_MS) : DELAY_MS - elapsed)
    const t = setTimeout(show, wait)
    return () => clearTimeout(t)
  }, [pathname, show])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  if (!open) return null

  const href = sdsDeskUrl('/', 'popup')

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6 animate-in fade-in duration-300"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sdsdesk-popup-title"
        className="relative grid max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-gray-950 shadow-[0_30px_80px_-10px_rgba(245,158,11,0.45)] animate-in zoom-in-95 slide-in-from-bottom-6 duration-500 md:grid-cols-[1.1fr_1fr]"
      >
        <span className="absolute left-9 top-5 z-10 rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/60">Ad</span>
        <button ref={closeRef} type="button" onClick={close} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-black/40 p-1.5 text-white/80 hover:bg-black/70 hover:text-white">
          <X className="h-5 w-5" />
        </button>

        {/* Offer side */}
        <div className="relative flex flex-col justify-center px-6 pb-6 pt-14 text-white md:px-9 md:py-10">
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-gray-950">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> 3 days free
            </span>
            <h2 id="sdsdesk-popup-title" className="mt-4 text-3xl font-extrabold leading-[1.05] md:text-4xl">
              Exporting chemicals?{' '}
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Your buyer will ask for an SDS.</span>
            </h2>
            <p className="mt-3 text-sm text-gray-300 md:text-base">
              Make a GHS-ready Safety Data Sheet and hazard label in minutes with <strong className="text-white">SDS Desk</strong>, built by the Sulman Traders team.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              {['16-section SDS from sourced hazard data', 'GHS labels and certificates of analysis', 'One-click PDF, ready to send to your buyer'].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />{t}
                </li>
              ))}
            </ul>
            <a
              href={href}
              style={{ cursor: 'default' }} target="_blank"
              rel="noopener"
              onClick={() => { event({ action: 'click_sdsdesk', category: 'cross_promo', label: 'popup' }); write(localStorage, KEY_SNOOZE, String(Date.now() + 30 * 86_400_000)) }}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-base font-bold text-gray-950 shadow-lg shadow-amber-500/30 transition-transform hover:scale-[1.02] animate-pulse-soft"
            >
              Start free trial <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <p className="mt-2 text-center text-xs text-gray-400">Cancel anytime before the trial ends</p>
            <button type="button" onClick={close} className="mt-1 w-full text-center text-xs text-gray-500 hover:text-gray-300">No thanks</button>
          </div>
        </div>

        {/* Product visual: real sample documents */}
        <div className="relative hidden items-center justify-center overflow-hidden bg-gradient-to-br from-amber-500 via-orange-500 to-amber-700 p-6 md:flex" aria-hidden="true">
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sdsdesk-sample-sds.png" alt="" width={744} height={1053} className="relative w-[78%] -rotate-3 rounded-md shadow-2xl ring-1 ring-black/10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/sdsdesk-sample-label.png" alt="" width={447} height={527} className="absolute -bottom-2 -right-2 w-[46%] rotate-6 rounded-md shadow-2xl ring-1 ring-black/10" />
          <span className="absolute left-4 top-12 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-900 shadow-lg">
            <FileCheck2 className="h-3.5 w-3.5 text-amber-700" /> GHS compliant
          </span>
        </div>
      </div>
    </div>
  )
}
