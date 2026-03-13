"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function FeaturesHome() {
  return (
<section className="relative w-full min-h-[520px] flex items-center justify-center bg-white pt-24 pb-16">
      {/* Background Image */}
      <Image
        src="/featuresbg.png"
        alt="Collection Suites Interior"
        fill
        priority
        className="object-cover opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

          {/* Security & Control */}
          <div className="bg-white/80 backdrop-blur-md p-8 shadow-lg">
            <h3 className="aviano text-[#DEBE8F] text-lg tracking-[0.18em] mb-4">
              SECURITY & CONTROL
            </h3>

            <p className="gill text-black/70 leading-relaxed text-sm">
              Controlled access, 24/7 monitored security, and integrated
              systems designed to protect your collection at all times,
              supported by world-class security technology.
            </p>
          </div>

          {/* Design & Space */}
          <div className="bg-white/80 backdrop-blur-md p-8 shadow-lg">
            <h3 className="aviano text-[#DEBE8F] text-lg tracking-[0.18em] mb-4">
              DESIGN & SPACE
            </h3>

            <p className="gill text-black/70 leading-relaxed text-sm">
              Suites range from 2,800 to over 7,000 square feet, with
              mezzanine levels, flexible layouts, and refined finishes
              that adapt to your collection.
            </p>
          </div>

          {/* Amenities */}
          <div className="bg-white/80 backdrop-blur-md p-8 shadow-lg">
            <h3 className="aviano text-[#DEBE8F] text-lg tracking-[0.18em] mb-4">
              AMENITIES
            </h3>

            <p className="gill text-black/70 leading-relaxed text-sm">
              Kitchenette, wine storage, and concierge services, along
              with access to curated events and experiences.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white/80 backdrop-blur-md p-8 shadow-lg">
            <h3 className="aviano text-[#DEBE8F] text-lg tracking-[0.18em] mb-4">
              EXPERIENCE
            </h3>

            <p className="gill text-black/70 leading-relaxed text-sm">
              Integrated lighting, entertainment systems, and dedicated
              gathering areas, with access to a private clubhouse designed
              to bring together a community connected by a shared passion
              for exceptional collections.
            </p>

            <p className="gill text-black/70 leading-relaxed text-sm mt-4">
              More than a place to store your collection, each suite is
              designed to be experienced, on your terms.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}