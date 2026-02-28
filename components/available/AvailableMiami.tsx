"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailableMiami() {
  return (
    <section className="relative w-full h-[clamp(420px,70vh,720px)] overflow-hidden">
      {/* Background */}
      <Image
        src="/miamiwide.png"
        alt="Miami"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Bottom fade like your reference */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Right aligned content */}
      <div className="relative z-10 h-full w-full flex items-center justify-end">
        <div className="max-w-xl px-8 md:px-20 text-right">
          {/* Title */}
          <h2 className="aviano text-white text-3xl md:text-5xl font-light tracking-[0.25em] mb-5">
            MIAMI
          </h2>

          {/* Description */}
          <p className="gill text-[#DEBE8F] text-xs md:text-sm leading-relaxed mb-6">
            Our flagship Miami Complex (Phase I) offers over [XX,XXX] square
            feet across 38 exclusive suites. Now, we’re accelerating to meet
            demand.
          </p>

          {/* CTA */}
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