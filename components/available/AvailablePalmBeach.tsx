"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailablePalmBeach() {
  return (
    <section className="relative w-full">
      <Image
        src="/palmbeachwide.png"
        alt="Palm Beach"
        width={1920}
        height={900}
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex justify-start items-end pb-6 sm:pb-10 md:pb-16">
        <div className="w-full max-w-[260px] sm:max-w-md md:max-w-xl px-3 sm:px-6 md:px-20 text-left">
          <div className="space-y-3 sm:space-y-6 md:space-y-8">
            <div>
              <h2 className="aviano text-white text-lg sm:text-2xl md:text-5xl font-light" style={{ letterSpacing: '-0.02em' }}>
                PALM <br /> BEACH
              </h2>

              <p className="gil text-white text-[9px] sm:text-xs md:text-lg leading-snug md:leading-relaxed mb-2 sm:mb-4 md:mb-6 tracking-normal md:tracking-wide max-w-[240px] sm:max-w-md">
                A refined expansion created for a market that values heritage,
                discretion, and timeless sophistication.
              </p>

              <p className="gil text-white text-[9px] sm:text-[10px] md:text-xs leading-snug md:leading-relaxed tracking-normal md:tracking-wide max-w-[240px] sm:max-w-md">
                Currently under construction. Presale opportunities now
                available with delivery anticipated early 2027.
              </p>
            </div>

            <div>
              <Link
                href="/availablePalmBeach"
                className="inline-block bg-[#9c8463] hover:bg-[#b89a74] transition px-5 sm:px-8 md:px-10 py-2 sm:py-3 text-[9px] sm:text-xs md:text-sm tracking-wide uppercase text-white"
              >
                Discover Our Luxury Suites
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}