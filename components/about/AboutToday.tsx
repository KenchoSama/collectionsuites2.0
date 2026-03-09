"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

export default function AboutToday() {
  return (
    <section className="w-full bg-black">

      {/* Desktop / tablet */}
      <div className="relative hidden md:block w-full">
        <Image
          src="/AboutTodayNews.png"
          alt="Collection Suites Today"
          width={1920}
          height={900}
          className="w-full h-auto block"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black/80" />

        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16">
          <div className="max-w-md text-right text-white">

            <h2 className="aviano text-3xl md:text-5xl tracking-[0.25em] font-light">
              TODAY
            </h2>

            <p className="gill mt-4 text-sm md:text-base text-white/80 leading-relaxed">
              CollectionSuites is the realization of that vision. A purpose-built
              environment where collections are lived, not just kept.
              <br />
              <br />
              Created by collectors, for collectors, every detail is designed to
              bring you closer to your passion.
            </p>

            <Link
              href="/story"
              className="inline-block mt-8 bg-[#9C835D] hover:bg-[#b89a74] transition px-10 py-3 text-sm tracking-widest uppercase text-white"
            >
              Our Story
            </Link>

          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden w-full bg-black">

        {/* Image using LEFT HALF */}
        <div className="relative w-full h-[320px]">
          <Image
            src="/AboutTodayNews.png"
            alt="Collection Suites Today"
            fill
            className="object-cover object-left"
            sizes="100vw"
            priority
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Text section */}
        <div className="bg-black px-6 pt-5 pb-7 text-center text-white">

          <h2 className="aviano text-[1.55rem] tracking-[0.18em]">
            TODAY
          </h2>

          <p className="gill mx-auto mt-3 max-w-[260px] text-[12px] leading-[1.5] text-white/80">
            CollectionSuites is the realization of that vision. A purpose-built
              environment where collections are lived, not just kept.
              <br />
              <br />
              Created by collectors, for collectors, every detail is designed to
              bring you closer to your passion.
            </p>

          <Link
            href="/story"
            className="inline-block mt-5 bg-[#9C835D] px-8 py-3 text-[11px] tracking-[0.18em] uppercase text-white transition hover:bg-[#b89a74]"
          >
            Our Story
          </Link>

        </div>

      </div>
    </section>
  )
}