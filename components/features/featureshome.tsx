"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function FeaturesHome() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center">

      {/* Background Image */}
      <Image
        src="/featuresbg.png"
        alt="Collection Suites Interior"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">
        <div className="bg-black/80 backdrop-blur-sm px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

          {/* Security & Control */}
          <div>
            <h3 className="aviano text-white text-lg tracking-[0.18em] mb-4">
              SECURITY & CONTROL
            </h3>

            <p className="gill text-white/80 leading-relaxed text-sm">
              Controlled access, 24/7 monitored security, and integrated
              systems designed to protect your collection at all times,
              supported by world-class security technology.
            </p>
          </div>

          {/* Design & Space */}
          <div>
            <h3 className="aviano text-white text-lg tracking-[0.18em] mb-4">
              DESIGN & SPACE
            </h3>

            <p className="gill text-white/80 leading-relaxed text-sm">
              Suites range from 2,800 to over 7,000 square feet, with
              mezzanine levels, flexible layouts, and refined finishes
              that adapt to your collection.
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="aviano text-white text-lg tracking-[0.18em] mb-4">
              AMENITIES
            </h3>

            <p className="gill text-white/80 leading-relaxed text-sm">
              Kitchenette, wine storage, and concierge services, along
              with access to curated events and experiences.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="aviano text-white text-lg tracking-[0.18em] mb-4">
              EXPERIENCE
            </h3>

            <p className="gill text-white/80 leading-relaxed text-sm">
              Integrated lighting, entertainment systems, and dedicated
              gathering areas, with access to a private clubhouse designed
              to bring together a community connected by a shared passion
              for exceptional collections.
            </p>

            <p className="gill text-white/80 leading-relaxed text-sm mt-6">
              More than a place to store your collection, each suite is
              designed to be experienced, on your terms.
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}