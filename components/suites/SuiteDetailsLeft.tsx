"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

type Level = { name: string; sqft: string }

type GalleryImage = { src: string; alt: string }

export function SuiteDetailsLeft({
  suiteNumber,
  sqft,
  price,
  levels,
  maxCarCapacity,
  description,
  galleryImages,
}: {
  suiteNumber: string
  sqft: string
  price: string
  levels: Level[]
  maxCarCapacity?: string
  description: string[]
  galleryImages: GalleryImage[]
}) {
  return (
    <div className="w-full lg:w-1/2 bg-[#EDEDED] px-6 md:px-10 py-10">
      {/* Top title row */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 className="aviano text-black text-3xl md:text-4xl tracking-[0.18em] leading-none">
            SUITE
            <br />
            {suiteNumber}
          </h2>

          <p className="gill mt-3 text-sm text-black/70">{sqft}</p>
        </div>

        <div className="text-right">
          <div className="gill text-sm text-black/70">{sqft}</div>
          <div className="gill mt-2 text-sm text-black font-semibold">{price}</div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6 h-px w-full bg-black/10" />

      {/* Levels */}
      <div className="mt-6 space-y-2 gill text-sm text-black/70">
        {levels.map((lvl) => (
          <div key={lvl.name} className="flex items-center justify-between">
            <span>{lvl.name}:</span>
            <span>{lvl.sqft}</span>
          </div>
        ))}

        {maxCarCapacity && (
          <div className="flex items-center justify-between">
            <span>Max. Car Capacity:</span>
            <span>{maxCarCapacity}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-6 space-y-4 gill text-sm text-black/70 leading-relaxed">
        {description.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Gallery (simple slider-like layout to match mock) */}
      <div className="mt-8">
        <div className="relative w-full aspect-[16/9] overflow-hidden border border-black/10">
          <Image
            src={galleryImages?.[0]?.src || "/images/suite-607-gallery.jpg"}
            alt={galleryImages?.[0]?.alt || "Suite gallery"}
            fill
            className="object-cover"
          />
          {/* minimal arrows (visual only) */}
          <div className="absolute inset-y-0 left-0 flex items-center px-3 text-white/90">
            <span className="text-xl select-none">‹</span>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 text-white/90">
            <span className="text-xl select-none">›</span>
          </div>
        </div>
      </div>
    </div>
  )
}