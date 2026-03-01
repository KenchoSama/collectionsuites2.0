"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AboutToday() {
  return (
    <section className="relative w-full">

      {/* Background Image (scales like map) */}
      <Image
        src="/AboutTodayNews.png"
        alt="Collection Suites Today"
        width={1920}
        height={900} // adjust if needed to match your real image ratio
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      {/* Right side dark gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black/80" />

      {/* Content aligned right */}
      <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">

        <div className="max-w-md text-right text-white">

          {/* Title */}
          <h2 className="aviano text-3xl md:text-5xl tracking-[0.25em] font-light">
            TODAY
          </h2>

          {/* Description */}
          <p className="gill mt-4 text-sm md:text-base text-white/80 leading-relaxed">
            With locations in Miami and Palm Beach, we've just started to bring
            our vision to the world.
          </p>

          <Link
            href="/story"
            className="inline-block mt-8 bg-[#9C835D] hover:bg-[#b89a74] transition px-10 py-3 text-sm tracking-widest uppercase text-white"
          >
            Our Story
          </Link>

        </div>
      </div>

    </section>
  )
}