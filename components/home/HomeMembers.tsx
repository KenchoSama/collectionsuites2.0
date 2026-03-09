"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import "@/styles/fonts/aviano.css"

export default function HomeMembers() {
  return (
    <section className="relative w-full h-[clamp(400px,64vh,656px)] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/HomeMembers.png"
        alt="Members Only"
        fill
        priority
        className="object-cover"
      />

      {/* Dark gradient (stronger on left, fades right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex items-center">
        <div className="px-8 md:px-20 max-w-lg text-white">
          {/* Title */}
          <h2 className="aviano text-4xl md:text-5xl mb-8">
            MEMBERS <br /> ONLY
          </h2>

          {/* Subtext + arrow */}
          <div className="gill text-[#DEBE8F] text-sm md:text-base flex items-center gap-3 mb-10">
            <span>Sign In. Start Up.</span>
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* Discover Button */}
          <a
            href="https://my.collection-suites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9c8463] hover:bg-[#b89a74] transition px-10 py-3 text-sm tracking-widest uppercase text-white"
          >
            Discover
          </a>
        </div>
      </div>
    </section>
  )
}