"use client"

import Image from "next/image"

export default function StoryCar() {
  return (
<section className="relative w-full h-[180px] md:h-[210px] lg:h-[240px] bg-black overflow-hidden">
      {/* TOP HALF GREY SHADE OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-1/2">
        <Image
          src="/StoryGreysHADE.png"
          alt="Grey texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* RED CAR (VERTICALLY CENTERED LEFT) */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10">
        <div className="relative w-[460px] md:w-[580px] lg:w-[720px] ml-6 md:ml-12 lg:ml-20">
          <Image
            src="/StoryRedCar.png"
            alt="Red Ferrari"
            width={500}
            height={400}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* subtle top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/20" />

    </section>
  )
}