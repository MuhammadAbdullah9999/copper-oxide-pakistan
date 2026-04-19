'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { CUSO4_GALLERY_IMAGES } from '@/lib/cuso4-gallery-images'

const INITIAL_VISIBLE = 6

type Props = {
  heading?: string
  subheading?: string
  className?: string
  /** First image loads with priority (LCP) on product page */
  priorityFirst?: boolean
}

export default function Cuso4ProductGallery({
  heading = 'Copper sulphate (CuSO₄) in pictures',
  subheading,
  className = '',
  priorityFirst = false,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const images = CUSO4_GALLERY_IMAGES
  const hasMore = images.length > INITIAL_VISIBLE
  const visibleImages = showAll
    ? images
    : images.slice(0, INITIAL_VISIBLE)
  const hiddenCount = hasMore ? images.length - INITIAL_VISIBLE : 0

  return (
    <div
      className={`flex w-full flex-col items-center text-center ${className}`}
    >
      {(heading || subheading) && (
        <div className="mb-6 w-full max-w-3xl px-1">
          {heading && (
            <h3 className="text-xl font-bold text-gray-900 md:text-2xl">{heading}</h3>
          )}
          {subheading && (
            <p className="mt-2 text-gray-600">{subheading}</p>
          )}
        </div>
      )}
      <div className="mx-auto w-full max-w-[52rem]">
        <div className="grid grid-cols-2 justify-items-center gap-3 sm:gap-4 md:grid-cols-3">
          {visibleImages.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative aspect-[4/3] w-[min(100%,280px)] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-shadow hover:border-amber-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label={`View larger: ${item.label}`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 45vw, 280px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={priorityFirst && index === 0}
              />
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="mt-6 flex justify-center">
            {!showAll ? (
              <Button
                type="button"
                variant="outline"
                className="border-amber-600 text-amber-800 hover:bg-amber-50"
                onClick={() => setShowAll(true)}
              >
                <ChevronDown className="mr-2 h-4 w-4" aria-hidden />
                +{hiddenCount} more
              </Button>
            ) : (
              <Button
                type="button"
                variant="ghost"
                className="text-amber-800 hover:bg-amber-50"
                onClick={() => setShowAll(false)}
              >
                <ChevronUp className="mr-2 h-4 w-4" aria-hidden />
                Show less
              </Button>
            )}
          </div>
        )}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null)
        }}
      >
        <DialogContent className="max-h-[95vh] w-[min(96vw,1200px)] max-w-[min(96vw,1200px)] border-0 bg-zinc-950/95 p-2 shadow-2xl sm:p-4 [&>button]:right-3 [&>button]:top-3 [&>button]:text-white [&>button]:ring-offset-zinc-950 [&>button]:hover:bg-white/10 [&>button]:hover:text-white">
          <DialogTitle className="sr-only">
            {openIndex !== null ? CUSO4_GALLERY_IMAGES[openIndex].label : 'Image preview'}
          </DialogTitle>
          {openIndex !== null && (
            <div className="relative flex max-h-[88vh] min-h-[200px] w-full items-center justify-center">
              <div className="relative h-full w-full">
                <Image
                  src={CUSO4_GALLERY_IMAGES[openIndex].src}
                  alt={CUSO4_GALLERY_IMAGES[openIndex].label}
                  width={1600}
                  height={1200}
                  className="mx-auto max-h-[88vh] w-auto max-w-full object-contain"
                  sizes="96vw"
                  priority
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
