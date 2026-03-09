"use client"

import Image from "next/image"
import { Download, Printer, ChevronLeft, ChevronRight, Search } from "lucide-react"
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
    <div className="w-full lg:w-1/2 bg-[#EDEDED] px-6 md:px-10 py-10 md:py-12">
      {/* Top row */}
      <div className="flex items-start justify-between gap-6">
        {/* Left boxed header */}
        <div className="flex items-stretch">
          {/* Suite number block */}
          <div className="border-y border-r border-[#b79c72] pr-6 py-3 md:py-4">
            <h2 className="montserrat-medium text-black text-3xl md:text-5xl tracking-[0.12em] leading-[0.92]">
              SUITE
              <br />
              {suiteNumber}
            </h2>
          </div>

          {/* Sqft + price block */}
          <div className="flex min-w-[150px] md:min-w-[180px] flex-col justify-center border-y border-[#b79c72] pl-6 pr-6 py-3 md:py-4">
            <p className="gill text-base md:text-[1.15rem] text-black">{sqft}</p>
            <div className="my-2 h-px w-full bg-[#b79c72]" />
            <p className="gill text-base md:text-[1.15rem] text-black">{price}</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-4 pt-1 text-black">
          <button
            type="button"
            aria-label="Download"
            className="transition-opacity hover:opacity-70"
          >
            <Download size={18} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Print"
            className="transition-opacity hover:opacity-70"
          >
            <Printer size={18} strokeWidth={1.8} />
          </button>
        </div>
      </div>

      {/* Levels */}
      <div className="mt-6 gill text-[14px] md:text-[15px] leading-[1.35] text-black/70">
        {levels.map((lvl) => (
          <p key={lvl.name}>
            {lvl.name}: {lvl.sqft}
          </p>
        ))}

        <p>
          Max. Car Capacity:
          {maxCarCapacity ? ` ${maxCarCapacity}` : ""}
        </p>
      </div>

      {/* Divider */}
      <div className="mt-5 h-px w-full bg-[#b79c72]" />

      {/* Description */}
      <div className="mt-5 space-y-4 gill text-[14px] md:text-[15px] leading-[1.45] text-black/65">
        {description.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-8">
        <div className="relative w-full overflow-hidden border border-black/10 bg-white">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={galleryImages?.[0]?.src || "/OrangeCarRoom.png"}
              alt={galleryImages?.[0]?.alt || "OrangeCarRoom"}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Zoom icon */}
          <button
            type="button"
            aria-label="Zoom image"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/45"
          >
            <Search size={15} strokeWidth={2} />
          </button>

          {/* Left arrow */}
          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/40"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/40"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>

          {/* Bottom progress line */}
          <div className="absolute bottom-3 left-4 right-4 h-[2px] bg-white/30">
            <div className="h-full w-[72%] bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}