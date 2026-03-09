import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HomeAvailable() {
  return (
    <section className="w-full bg-white">
      <div className="flex flex-col md:flex-row w-full">

        {/* IMAGE */}
        <div className="relative w-full md:w-[60%] h-[400px] md:h-[600px] order-2 md:order-1">
          <Image
            src="/HomeAvailableSuites.png"
            alt="Collection Suites Available Suites"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* CONTENT */}
        <div className="w-full md:w-[40%] flex flex-col justify-center md:justify-end items-center md:items-end px-10 md:px-16 pb-16 pt-12 bg-white text-center md:text-right order-1 md:order-2">

          {/* Title */}
          <h2 className="aviano text-black text-2xl md:text-3xl tracking-[0.28em] mb-4 leading-tight">
            AVAILABLE<br />SUITES
          </h2>

          {/* Subtitle */}
          <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-[#DEBE8F] mb-10 font-aviano">
            <span>Explore the Suites.</span>
            <ArrowRight className="w-4 h-4 text-[#DEBE8F]" />
          </div>

          {/* Button */}
          <div className="w-full flex justify-center md:justify-center">
            <Link
              href="/availableSuite"
              className="bg-[#c7a97b] hover:bg-[#b89a6c] text-white text-xs tracking-widest uppercase px-8 py-3 transition-colors"
            >
              Explore
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}