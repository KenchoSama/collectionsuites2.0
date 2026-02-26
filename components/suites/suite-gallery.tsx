"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface SuiteGalleryProps {
  images: { src: string; alt: string }[]
}

export function SuiteGallery({ images }: SuiteGalleryProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

  return (
    <div className="relative">
      <div className="relative w-full h-48 md:h-64 overflow-hidden bg-foreground">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-2">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}
