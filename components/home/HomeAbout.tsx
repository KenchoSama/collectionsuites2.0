"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomeAbout() {
  return (
    <section className="relative w-full h-[520px] md:h-[clamp(480px,80vh,820px)] overflow-hidden">
      <Image
        src="/HomeAbout.png"
        alt="About Collection Suites"
        fill
        priority
        className="object-cover object-[35%_center] md:object-[20%_center]"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full w-full flex items-end md:items-center justify-center md:justify-end pb-20 md:pb-0">
        <div className="max-w-xl px-8 md:px-20 text-center md:text-right text-white">

          {/* Title */}
          <h2 className="aviano text-3xl md:text-5xl mb-6">
            ABOUT
          </h2>

          {/* Subtitle */}
          <div className="gill text-sm md:text-base text-[#DEBE8F] leading-relaxed mb-8 flex items-center justify-center md:justify-end gap-2">
            <p>
              How Racing Through 1950s Europe Created <br />
              A New Standard For Collectors
            </p>
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </div>

          {/* Button */}
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