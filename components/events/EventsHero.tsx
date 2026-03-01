"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function EventsHero() {
  return (
<section className="relative w-full overflow-hidden bg-black pt-28 md:pt-32 lg:pt-36">      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/EventsHero.png"
          alt="Events hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* subtle darkening for readability */}
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Content wrapper */}
      <div className="relative mx-auto max-w-7xl px-0 py-10 md:py-14">
        <div className="relative w-full aspect-[16/7] md:aspect-[16/6]">

          {/* Middle ribbon - FULL WIDTH */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20">
            <div className="relative w-full h-[56px] md:h-[64px] lg:h-[72px]">
              <Image
                src="/EventsLogo.png"
                alt="CollectionSuites Official Sponsor ribbon"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* subtle top divider line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/15" />
        </div>
      </div>
    </section>
  )
}