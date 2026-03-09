"use client"

import Image from "next/image"

export default function AvailableHero() {
  return (
    <section className="relative w-full">

      {/* Background image (responsive like map) */}
      <Image
        src="/OrangeCarRoom.png"
        alt="Available Suites"
        width={1920}
        height={1080}
        className="w-full h-auto block"
        sizes="100vw"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl px-8 md:px-20 text-left">

          <h1 className="aviano text-white text-4xl md:text-6xl tracking-[0.25em] mb-6 leading-tight">
            AVAILABLE <br /> SUITES
          </h1>

          <p className="gill text-white text-xs md:text-sm leading-relaxed mb-8 tracking-wide max-w-md">
            EXPLORE THE VISION AND <br />
            CRAFTSMANSHIP BEHIND <br /> 
            COLLECTIONSUITES <br />
          </p>

        </div>
      </div>

    </section>
  )
}