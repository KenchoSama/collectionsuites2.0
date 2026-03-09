"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailablePalmBeach() {
  return (
    <section className="relative w-full">
      {/* Background image (scales like your map now) */}
      <Image
        src="/palmbeachwide.png"
        alt="Palm Beach"
        width={1920}
        height={900} // adjust if your image ratio is different
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      {/* Bottom fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Left-aligned content */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="max-w-xl px-8 md:px-20 text-left">
          {/* Title */}
          <h2 className="aviano text-white text-3xl md:text-5xl font-light tracking-[0.25em] mb-5">
            PALM <br /> BEACH
          </h2>

          {/* Description */}
<p className="gil text-white base md:text-lg leading-relaxed mb-6 tracking-wide max-w-md">            A refined expansion created for a market that values heritage, discretion, and timeless sophistication.
          </p>
<p className="gil text-[10px] md:text-xs text-white leading-relaxed mb-8 tracking-wide max-w-md">
  Currently under construction. Presale opportunities now available with delivery anticipated early 2027.
</p>

          {/* CTA */}
          <Link
            href="/availablePalmBeach"
            className="inline-block bg-[#9c8463] hover:bg-[#b89a74] transition px-8 md:px-10 py-3 text-xs md:text-sm tracking-widest uppercase text-white"
          >
            Discover Our Luxury Suites
          </Link>
        </div>
      </div>
    </section>
  )
}