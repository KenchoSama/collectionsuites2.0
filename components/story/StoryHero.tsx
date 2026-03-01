"use client"

import Image from "next/image"

export default function StoryHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#efefef] text-black">
      {/* Background World Map */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/StoryWorld.png"
          alt="World Map"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT SIDE */}
          <div className="relative">
            {/* Top left car image */}
            <div className="mb-6">
              <Image
                src="/StoryHeroLeft.png"
                alt="Vintage car"
                width={600}
                height={300}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] mb-6">
              ORIGINS...
            </h2>

            {/* Text Content */}
            <div className="space-y-4 text-sm text-black/70 leading-relaxed max-w-md">
              <p>
                In silent decades, around collectors. Some acquire. Others preserve.
                The difference isn’t subject to standards.
              </p>
              <p>
                My father lived and breathed the golden era of motorsport, racing across Europe.
                South Africa and Asia in years. His passion defined the environment I grew up in.
              </p>
              <p>
                Automotive horsepower became generational. In time, I inherited it, with the drive
                to preserve more than just machines.
              </p>
              <p>
                Traditional storage often turns that into loss. It reduces preservation to square
                footage, where climate control is an amenity instead of an inspiration, and security
                becomes surveillance rather than sanctuary.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE COLLAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-30 w-[620px] h-[720px] lg:w-[700px] lg:h-[820px] flex items-end">
                <Image
                src="/StoryHeroRight.png"
                alt="Historic collage"
                fill
                className="object-contain drop-shadow-2xl object-bottom"
                priority
                />
            </div>
            </div>

        </div>
      </div>

      {/* Bottom accent car (optional visual detail) */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />
    </section>
  )
}