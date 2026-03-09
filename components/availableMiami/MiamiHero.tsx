"use client"

import Image from "next/image"

export default function MiamiHero() {
  return (
    <section className="relative w-full">
      {/* Background Image (scales like map, no cropping) */}
      <Image
        src="/miamiwide.png"
        alt="Miami"
        width={1920}
        height={900} // adjust if your image ratio is different
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40" />

      {/* Content aligned to bottom right */}
      <div className="absolute inset-0 flex items-end justify-end px-8 md:px-16 pb-12 md:pb-16">
        <h1 className="aviano text-white text-3xl md:text-5xl tracking-[0.25em] font-light">
          MIAMI 2.0
        </h1>
      </div>
    </section>
  )
}