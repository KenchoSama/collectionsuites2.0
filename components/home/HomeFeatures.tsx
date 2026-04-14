import Image from "next/image"
import Link from "next/link"

export function HomeFeatures() {
  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="flex flex-col md:flex-row w-full">

        {/* LEFT TEXT CONTENT */}
        <div className="w-full md:w-[45%] flex flex-col justify-center items-center px-10 md:px-16 pt-12 pb-20 text-center">

          {/* Title */}
          <h2 className="aviano text-black text-2xl md:text-3xl mb-6" style={{ letterSpacing: '-0.02em' }}>
            SUITE<br />FEATURES
          </h2>

          {/* Subtitle */}
          <p className="text-xs text-[#DEBE8F] tracking-widest mb-6 font-aviano">
            Essential Craftsmanship & Vision
          </p>

          {/* Button */}
          <Link
            href="/features"
            className="bg-[#c7a97b] hover:bg-[#b89a6c] text-white text-xs tracking-widest uppercase px-8 py-3 w-fit mx-auto transition-colors"
          >
            Discover
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-[55%] h-[350px] md:h-[600px]">
          <Image
            src="/HomeFeatures.png"
            alt="Collection Suites Materials and Craftsmanship"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

      </div>
    </section>
  )
}