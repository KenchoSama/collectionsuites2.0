"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import "@/styles/fonts/aviano.css"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="relative w-full h-[clamp(480px,80vh,820px)] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/HomeAbout.png"
        alt="About Collection Suites"
        fill
        priority
        className="object-cover object-[20%_center]"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-end">
        <div className="max-w-xl px-10 md:px-20 text-right text-white">

          {/* Title */}
          <h2 className="aviano text-4xl md:text-5xl font-light mb-6">
            ABOUT
          </h2>

          {/* Subtitle + inline arrow */}
          <div className="gill text-sm md:text-base text-[#DEBE8F] leading-relaxed mb-8 flex items-center justify-end gap-2">
            <p className="text-right">
              How Racing Through 1950s Europe Created <br />
              A New Standard For Collectors
            </p>

            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </div>

          {/* Discover button (unchanged) */}
          <Link href="/about">
  <button className="bg-[#9c8463] hover:bg-[#b89a74] transition px-8 py-3 text-sm tracking-widest uppercase text-white">
    Discover
  </button>
</Link>

        </div>
      </div>
    </section>
  )
}