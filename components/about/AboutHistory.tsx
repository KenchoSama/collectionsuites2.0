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
<p className="gill text-black/70 text-sm md:text-base max-w-2xl leading-relaxed tracking-wide">         
 CollectionSuites was born to redefine the art of collecting. <br /> 
<br />
After decades immersed in the world of rare and significant acquisitions, Juan Manuel Fayen recognized that the industry was focused on storage, when it should have been focused on stewardship. He envisioned a sanctuary that didn't just house objects, but honored the passion behind them. <br /> 
<br />

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