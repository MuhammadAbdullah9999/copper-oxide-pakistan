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
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
    setActiveIndex(emblaApi.selectedScrollSnap())
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
      title: "Premium Copper Oxide (CuO)",
      description: "Pakistan's leading manufacturer of high-purity Copper Oxide powder. Ideal for ceramics, batteries, and industrial applications. 99.5%+ purity guaranteed.",
      link: "/products/copper-oxide",
      alt: "High purity Copper Oxide (CuO) powder manufacturing in Pakistan"
    },
    {
      image: "/silver-nitrate-banner.png",
      title: "Laboratory Grade Silver Nitrate",
      description: "Premium Silver Nitrate (AgNO₃) crystals with 99.9%+ purity. Trusted by laboratories, medical facilities, and industries across Pakistan.",
      link: "/products/silver-nitrate",
      alt: "Premium Silver Nitrate (AgNO₃) crystals manufactured in Pakistan"
    },
    {
      image: "/copper-sulphate-banner-2.png",
      title: "Industrial Copper Sulphate",
      description: "High-grade CuSO₄ for agricultural and industrial use",
      link: "/products/copper-sulphate",
      alt: "Industrial grade copper sulphate for agricultural applications"
    },
    // {
    //   image: "/silver-chloride-banner.png",
    //   title: "Silver Chloride",
    //   description: "Premium AgCl for photographic and technical applications",
    //   link: "/products/silver-chloride",
    //   alt: "Premium silver chloride powder for technical applications"
    // }
  ]

  return (
    <section aria-label="Featured Products Slideshow">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative h-[650px]">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={90}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-start">
                  <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl">
                      {slide.description}
                    </p>
                    <Link href={slide.link} aria-label={`Learn more about ${slide.title}`}>
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
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-all"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 