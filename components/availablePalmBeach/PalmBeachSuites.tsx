"use client"

import { useState } from "react"
import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function AvailableHero() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full bg-[#efefef] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Title */}
          <h2 className="aviano text-black text-3xl md:text-5xl tracking-[0.2em] font-light mb-6">
            AVAILABLE SUITES
          </h2>

          {/* Description */}
          <p className="gill text-black/70 text-sm md:text-base leading-relaxed max-w-md mb-6">
            Each suite is designed with security, discretion, and experience in mind. <br />
            A smart, fully integrated system allows you to control your space, from access and lighting to entertainment and security, all from a single app.
          </p>

<button
  type="button"
  onClick={() => setOpen((v) => !v)}
  className="bg-[#c7a97b] hover:bg-[#b89a6c] text-white text-xs tracking-widest uppercase px-8 py-3 transition-colors"
>
  {open ? "Hide Details" : "Learn More"}
</button>

          {/* Dropdown Content */}
          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              open ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="border-l border-black/10 pl-5 max-w-md">
              <div className="space-y-5">
                <div>
                  <h3 className="gill text-black text-sm md:text-base tracking-wide font-semibold">
                    Security &amp; Control
                  </h3>
                  <p className="gill text-black/70 text-sm leading-relaxed">
                    Controlled access, 24/7 monitored security, and integrated systems designed to protect your collection at all times, supported by world-class security technology.
                  </p>
                </div>

                <div>
                  <h3 className="gill text-black text-sm md:text-base tracking-wide font-semibold">
                    Design &amp; Space
                  </h3>
                  <p className="gill text-black/70 text-sm leading-relaxed">
                    Suites range from 2,800 to over 7,000 square feet, with mezzanine levels, flexible layouts, and refined finishes that adapt to your collection.
                  </p>
                </div>

                <div>
                  <h3 className="gill text-black text-sm md:text-base tracking-wide font-semibold">
                    Experience
                  </h3>
                  <p className="gill text-black/70 text-sm leading-relaxed">
                    Integrated lighting, entertainment systems, and dedicated gathering areas, with access to a private clubhouse designed to bring together a community connected by a shared passion for exceptional collections.
                  </p>
                </div>

                <div>
                  <h3 className="gill text-black text-sm md:text-base tracking-wide font-semibold">
                    Amenities
                  </h3>
                  <p className="gill text-black/70 text-sm leading-relaxed">
                    Kitchenette, wine storage, and concierge services, along with access to curated events and experiences.
                  </p>
                </div>

                <p className="gill text-black/70 text-sm leading-relaxed">
                  More than a place to store your collection, each suite is designed to be experienced, on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[260px] md:w-[340px] lg:w-[420px] h-[180px] md:h-[220px] lg:h-[260px]">
            <Image
              src="/AvailablesuitesMiami.png"
              alt="Available Suites Layout"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  )
}