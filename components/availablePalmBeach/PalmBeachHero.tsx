"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function PalmBeachHero() {
  return (
    <section className="relative w-full">

      {/* Background Image (scales like map, full image always visible) */}
      <Image
        src="/palmbeachwide.png"
        alt="Palm Beach"
        width={1920}
        height={900} // adjust if your image ratio is different
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40" />

      {/* Content aligned to bottom right */}
      <div className="absolute inset-0 flex items-end justify-end px-8 md:px-16 pb-12 md:pb-16">
        <h1 className="aviano text-black text-3xl md:text-5xl tracking-[0.25em] font-light">
          PALM BEACH
        </h1>
      </div>

    </section>
  )
}