"use client"

import Image from "next/image"
import { Download, Printer, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { useState } from "react"
import type { Suite } from "@/lib/suites"

export function SuiteDetails({ suite }: { suite: Suite }) {
  const [currentImage, setCurrentImage] = useState(0)
  const images = suite.galleryImages

  const prev = () => setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1))
  console.log("layoutSrc:", suite.layoutSrc)

  return (
    <section className="w-full flex flex-col lg:flex-row">

      {/* ── LEFT: Suite Info ── */}
      <div className="w-full lg:w-1/2 bg-[#EDEDED] px-6 md:px-10 py-10 md:py-12">

        {/* Top row */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-stretch">
            <div className="border-y border-r border-[#b79c72] pr-6 py-3 md:py-4">
              <h2 className="montserrat-medium text-black text-3xl md:text-5xl tracking-[0.12em] leading-[0.92]">
                SUITE
                <br />
                {suite.id}
              </h2>
            </div>

            <div className="flex min-w-[150px] md:min-w-[180px] flex-col justify-center border-y border-[#b79c72] pl-6 pr-6 py-3 md:py-4">
              <p className="gill text-base md:text-[1.15rem] text-black">{suite.sqft}</p>
              <div className="my-2 h-px w-full bg-[#b79c72]" />
              <p className="gill text-base md:text-[1.15rem] text-black">{suite.price}</p>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 md:gap-4 pt-1 text-black">
            <button type="button" aria-label="Download" className="transition-opacity hover:opacity-70">
              <Download size={18} strokeWidth={1.8} />
            </button>
            <button type="button" aria-label="Print" className="transition-opacity hover:opacity-70">
              <Printer size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Levels */}
        <div className="mt-6 gill text-[14px] md:text-[15px] leading-[1.35] text-black/70">
          {suite.levels.map((lvl) => (
            <p key={lvl.name}>
              {lvl.name}: {lvl.sqft}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-5 h-px w-full bg-[#b79c72]" />

        {/* Description */}
        <div className="mt-5 space-y-4 gill text-[14px] md:text-[15px] leading-[1.45] text-black/65">
          {suite.description.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-8">
          <div className="relative w-full overflow-hidden border border-black/10 bg-white">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
                className="object-cover"
                priority
              />
            </div>

            <button
              type="button"
              aria-label="Zoom image"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/45"
            >
              <Search size={15} strokeWidth={2} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/40"
            >
              <ChevronLeft size={24} strokeWidth={2} />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/40"
            >
              <ChevronRight size={24} strokeWidth={2} />
            </button>

            <div className="absolute bottom-3 left-4 right-4 h-[2px] bg-white/30">
              <div
                className="h-full bg-white transition-all"
                style={{ width: `${((currentImage + 1) / images.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

{/* ── RIGHT: Layout Image ── */}
<div className="relative w-full lg:w-1/2 min-h-[500px]">
  <Image
    src={suite.layoutSrc}
    alt={`Suite ${suite.id} layout`}
    fill
    className="object-contain bg-black"
    priority
  />
</div>

    </section>
  )
}