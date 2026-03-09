"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function EventsHero() {
  return (
    <section className="relative w-full h-[620px] md:h-[720px] lg:h-[820px] overflow-hidden bg-black">
      
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/EventsHero.png"
          alt="Events hero background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Full-width logo ribbon */}
      <div className="absolute left-0 top-1/2 z-20 w-full -translate-y-1/2">
        <div className="relative w-full h-[110px] md:h-[130px] lg:h-[150px]">
          <Image
            src="/EventsLogo.png"
            alt="Collection Suites Official Sponsor"
            fill
            priority
            className="object-fill"
            sizes="100vw"
          />
        </div>
      </div>

    </section>
  )
}