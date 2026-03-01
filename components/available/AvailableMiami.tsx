"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailableMiami() {
  return (
    <section className="relative w-full">

      {/* Background image (scales like your map now) */}
      <Image
        src="/miamiwide.png"
        alt="Miami"
        width={1920}
        height={900} // adjust if needed to match your actual image ratio
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      {/* Bottom fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Right aligned content */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="max-w-xl px-8 md:px-20 text-right">

          <h2 className="aviano text-white text-3xl md:text-5xl font-light tracking-[0.25em] mb-5">
            MIAMI
          </h2>

          <p className="gill text-[#DEBE8F] text-xs md:text-sm leading-relaxed mb-6">
            Our flagship Miami Complex (Phase I) offers over [XX,XXX] square
            feet across 38 exclusive suites. Now, we’re accelerating to meet
            demand.
          </p>

          <Link
            href="/availableMiami"
            className="inline-block bg-[#9c8463] hover:bg-[#b89a74] transition px-8 md:px-10 py-3 text-xs md:text-sm tracking-widest uppercase text-white"
          >
            Discover Our Luxury Suites
          </Link>

        </div>
      </div>

    </section>
  )
}