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
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center px-10 md:px-16 pb-16 pt-12 bg-white text-center order-1 md:order-2">

          {/* Title */}
          <h2 className="aviano text-black text-2xl md:text-3xl tracking-[0.28em] mb-4 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            AVAILABLE<br />SUITES
          </h2>


          {/* Button */}
          <div className="w-full flex justify-center">
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