"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function OriginsHero() {
  return (
    <section className="relative w-full h-[clamp(420px,75vh,780px)] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/OriginsHero.png"
        alt="Origins Collection Suites"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Top-left text */}
      <div className="absolute top-12 left-8 md:top-16 md:left-16 z-10">

        {/* Title */}
        <h1 className="aviano text-white text-3xl md:text-5xl tracking-[0.25em] font-light">
          ORIGINS
        </h1>

        {/* Subtitle */}
        <p className="gill text-[#DEBE8F] text-sm md:text-base tracking-wide mt-3">
          A Passion-Driven Vision
        </p>

      </div>
    </section>
  )
}