"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AvailableHero() {
  return (
    <section className="relative w-full h-[clamp(480px,75vh,820px)] overflow-hidden">

      {/* Background */}
      <Image
        src="/OrangeCarRoom.png"
        alt="Available Suites"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark gradient overlay (left side readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-start">
        <div className="max-w-xl px-8 md:px-20 text-left">

          {/* Title */}
          <h1 className="aviano text-white text-4xl md:text-6xl font-light tracking-[0.25em] mb-6 leading-tight">
            AVAILABLE <br /> SUITES
          </h1>

          {/* Subtitle */}
          <p className="gill text-[#DEBE8F] text-xs md:text-sm leading-relaxed mb-8 tracking-wide max-w-md">
            EXPLORE THE VISION AND CRAFTSMANSHIP BEHIND COLLECTIONSUITES
          </p>

        </div>
      </div>

    </section>
  )
}