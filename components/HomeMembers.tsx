"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function HomeMembers() {
  return (
    <section className="w-full h-[clamp(500px,80vh,820px)] flex">

      {/* LEFT SIDE (content) */}
    <div className="w-1/2 bg-black flex items-center">
        <div className="px-12 md:px-20 max-w-lg text-left text-white">

          {/* Title */}
          <h2 className="aviano text-4xl md:text-5xl font-light mb-8">
            MEMBERS <br /> ONLY
          </h2>

          {/* Subtext + arrow */}
          <div className="gill text-[#DEBE8F] text-sm md:text-base flex items-center gap-3 mb-10">
            <span>Sign In. Start Up.</span>
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* Discover Button */}
          {/* Discover Button → external members portal */}
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

      {/* RIGHT SIDE (image) */}
      <div className="w-1/2 relative">
        <Image
          src="/HomeMembers.png"
          alt="Members Only"
          fill
          className="object-cover"
          priority
        />
      </div>

    </section>
  )
}