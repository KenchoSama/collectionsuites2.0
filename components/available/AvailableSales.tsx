"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailableHero() {
  return (
    <section className="w-full bg-[#efefef] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Title */}
          <h2 className="aviano text-black text-3xl md:text-5xl" style={{ letterSpacing: '-0.02em' }}>
            RECENT SALES
          </h2>

          {/* Description */}
          <p className="gill text-black/70 text-sm md:text-base leading-relaxed max-w-md mb-8">
            With three distinct suite options—Standard, Premium, and Grand—
            Collection Suites 2.0 provides the perfect balance of luxury,
            security, and space. Whether you need a simple, secure environment
            or a grand suite with outdoor access, we have the perfect solution
            for your collection.
          </p>

          {/* CTA Button (outline style like your mock) */}
          <Link
            href="/availableSuite"
            className="inline-block border border-[#9c8463] text-[#9c8463] hover:bg-[#9c8463] hover:text-white transition px-8 py-3 text-xs md:text-sm tracking-widest uppercase"
          >
            Discover Our Luxury Suites
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[260px] md:w-[340px] lg:w-[420px] h-[180px] md:h-[220px] lg:h-[260px]">
            <Image
              src="/images/available/AvailableRooms.png"
              alt="Available Suites Layout"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}