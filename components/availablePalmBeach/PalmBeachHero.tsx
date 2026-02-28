"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function MiamiHero() {
  return (
    <section className="relative w-full h-[clamp(420px,70vh,720px)] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/palmbeachwide.png"
        alt="Palm Beach"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40" />

      {/* Content aligned to bottom right */}
      <div className="relative z-10 w-full h-full flex items-end justify-end px-8 md:px-16 pb-12 md:pb-16">
        <h1 className="aviano text-black text-3xl md:text-5xl tracking-[0.25em] font-light">
          PALM BEACH
        </h1>
      </div>

    </section>
  )
}