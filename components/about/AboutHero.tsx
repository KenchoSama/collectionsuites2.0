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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text (pushed down below header) */}
      <div className="absolute top-24 md:top-32 left-8 md:left-16 z-10">

        <h1 className="aviano text-white text-3xl md:text-5xl tracking-[0.25em] font-light">
          ORIGINS
        </h1>

        <p className="gill text-[#DEBE8F] text-sm md:text-base tracking-wide mt-3">
          A Passion-Driven Vision
        </p>

      </div>
    </section>
  )
}