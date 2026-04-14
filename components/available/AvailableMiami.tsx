"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailableMiami() {
  return (
    <section className="relative w-full">
      <Image
        src="/miamiwide.png"
        alt="Miami"
        width={1920}
        height={900}
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Bottom-right content */}
      <div className="absolute inset-0 flex justify-end items-end pb-6 sm:pb-10 md:pb-16">
        <div className="w-full max-w-[260px] sm:max-w-md md:max-w-xl px-3 sm:px-6 md:px-20 text-right">

          {/* tighter spacing */}
          <div className="space-y-3 sm:space-y-6 md:space-y-8">

            {/* MIAMI */}
            <div>
              <h2 className="aviano text-white text-lg sm:text-2xl md:text-5xl font-light mb-0 md:mb-4" style={{ letterSpacing: '-0.02em' }}>
  MIAMI
</h2>

              <p className="gil text-white text-[9px] sm:text-xs md:text-sm leading-snug tracking-normal max-w-[240px] sm:max-w-md ml-auto">
                Our flagship Miami Complex (Phase I) offers over [XX,XXX] square
                feet across 38 exclusive suites. Now, we’re accelerating to meet demand.
              </p>
            </div>

            {/* MIAMI 2.0 */}
            <div>
              <h2 className="aviano text-white text-lg sm:text-2xl md:text-5xl font-light" style={{ letterSpacing: '-0.02em' }}>
  MIAMI 2.0
</h2>

              <p className="gil text-white text-[9px] sm:text-xs md:text-sm leading-snug tracking-normal max-w-[240px] sm:max-w-md ml-auto">
                An expansion of our existing property, introducing 14 new luxury
                suites with enhanced amenities, larger spaces, and a shared clubhouse
                experience designed for connection and lifestyle.
              </p>
            </div>

            {/* BUTTON */}
            <div>
              <Link
                href="/availableMiami"
                className="inline-block bg-[#9c8463] hover:bg-[#b89a74] transition px-5 sm:px-8 md:px-10 py-2 text-[9px] sm:text-xs md:text-sm tracking-wide uppercase text-white"
              >
                Discover Suites
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}