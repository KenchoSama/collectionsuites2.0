"use client"

import Image from "next/image"

export default function AvailableHero() {
  return (
    <section className="relative w-full">

      <Image
        src="/images/available/OrangeCarRoom.png"
        alt="Available Suites"
        width={1920}
        height={1080}
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* FIXED: bottom-left + mobile scaling */}
      <div className="absolute inset-0 flex items-end pb-6 sm:pb-10 md:pb-16">
        <div className="w-full max-w-[260px] sm:max-w-md md:max-w-xl px-3 sm:px-6 md:px-20 text-left">

          <div className="space-y-3 sm:space-y-6 md:space-y-8">

            <div>
              <h1 className="aviano text-white text-xl sm:text-3xl md:text-6xl mb-0 md:mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                AVAILABLE <br /> SUITES
              </h1>

              <p className="gill text-white text-[9px] sm:text-xs md:text-sm leading-snug md:leading-relaxed tracking-normal md:tracking-wide max-w-[240px] sm:max-w-md">
                EXPLORE THE VISION AND <br />
                CRAFTSMANSHIP BEHIND <br /> 
                COLLECTIONSUITES
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}