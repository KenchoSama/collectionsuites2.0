"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function OriginsHero() {
  return (
    <section className="w-full bg-black">

      {/* Image section */}
      <div className="relative w-full aspect-[1440/760] min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[560px] xl:min-h-[640px]">
        
        <Image
          src="/images/About/OriginsHero.png"
          alt="Origins Collection Suites"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Desktop overlay text */}
        <div className="hidden md:block absolute left-[8%] top-[22%] z-10">
          <h1 className="aviano text-white text-[clamp(1.8rem,3.6vw,3.5rem)] tracking-[0.16em] leading-none" style={{ letterSpacing: '-0.02em' }}>
            ORIGINS
          </h1>

          <p className="gill mt-3 text-[#DEBE8F] text-[clamp(0.8rem,1.1vw,1rem)] tracking-[0.06em]">
            A Passion-Driven Vision
          </p>
        </div>

      </div>

      {/* Mobile text section */}
      <div className="md:hidden bg-black px-6 pt-4 pb-5">
        <h1 className="aviano text-white text-xl tracking-[0.18em]">
          ORIGINS
        </h1>

        <p className="gill mt-1 text-[#DEBE8F] text-sm tracking-wide">
          A Passion-Driven Vision
        </p>
      </div>

    </section>
  )
}