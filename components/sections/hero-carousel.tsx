'use client'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    
    // Autoplay
    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => {
      clearInterval(autoplayInterval)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const slides = [
    {
      image: "/copper-oxide-banner.png",
      title: "Premium Copper Oxide",
      description: "High-quality copper oxide products for industrial applications, manufactured in Lahore, Pakistan with international standards. ",
      link: "/products/copper-oxide"
    },
    {
      image: "/silver-nitrate-banner.png",
      title: "Pure Silver Nitrate",
      description: "Laboratory grade AgNO₃ for analytical and industrial use",
      link: "/products/silver-nitrate"
    },
    {
      image: "/copper-sulphate-banner-2.png",
      title: "Copper Sulphate",
      description: "High-quality CuSO₄ for agricultural and industrial applications",
      link: "/products/copper-sulphate"
    },
    // {
    //   image: "/silver-chloride-banner.png",
    //   title: "Silver Chloride",
    //   description: "Premium AgCl for photographic and technical applications",
    //   link: "/products/silver-chloride"
    // }
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[650px]">
              <div className="absolute inset-0 bg-black/60 z-10" />
              <Image
                src={slide.image}
                alt={slide.title}
                width={100}
                height={100}
                className="w-full h-full "
                priority={index === 0}
              />
              <div className="absolute inset-0 z-20 flex items-center justify-start">
                <div className="container mx-auto px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  )
} 