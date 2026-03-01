"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function AboutHistory() {
  return (
    <section className="w-full bg-[#EDEDED] pt-16 md:pt-20 pb-0">

      {/* Top Row: Title + Description */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-10 mb-6">

        {/* Left Title */}
        <h2 className="aviano text-black text-3xl md:text-5xl tracking-[0.25em]">
          HISTORY
        </h2>

        {/* Right Description */}
        <p className="gill text-black/70 text-sm md:text-base max-w-md leading-relaxed">
          CollectionSuites was never built to store cars. It was built to safeguard
          heritage, because what we preserve today becomes the legacy we pass on
          to future generations.
        </p>
      </div>

      {/* Image Strip (flush to bottom) */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/AboutHistory.png"
          alt="Collection Suites racing heritage"
          width={2000}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

    </section>
  )
}