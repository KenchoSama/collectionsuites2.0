"use client"

import Image from "next/image"
import "@/styles/fonts/aviano.css"

export default function StoryToday() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">

      {/* Main container */}
<div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="relative flex flex-col h-full">

            {/* TODAY title centered */}
            <h2 className="aviano text-4xl md:text-5xl tracking-[0.25em] mb-6 text-center">
              TODAY
            </h2>

            {/* Spacer so image stays at bottom */}
            <div className="flex-grow min-h-[40px] md:min-h-[60px]" />

            {/* Bottom image (taller + flush bottom) */}
            <div className="relative w-full h-[440px] md:h-[520px] border border-white/10 overflow-hidden">
              <Image
                src="/StoryToday.png"
                alt="Collection Suites Interior"
                fill
                className="object-cover object-bottom"
              />
            </div>

          </div>

          {/* RIGHT SIDE (Text content) */}
<div className="flex items-start">            
<div className="w-full max-w-xl lg:max-w-2xl space-y-6 text-sm md:text-base text-white/80 leading-relaxed pb-10 md:pb-14">              <p>
                At CollectionSuites, we built on a different principle: permanence,
                not as a marketing line but as an architectural promise. Museum-grade
                systems that anticipate environmental shifts. Lighting that honors
                what each exhibit deserves. Spaces that dignify the art of collecting.
              </p>

              <p>
                This isn’t excess. It’s responsibility. Because every collection
                represents a piece of history, machines that shaped eras, defined
                craftsmanship, and captured human aspiration. To be their custodian
                is to understand that preservation isn’t about holding value—it’s
                about <span className="text-white font-semibold">safeguarding heritage.</span>
              </p>

              <p>
                When collectors walk through our suites, there’s a moment of
                recognition. They realize it’s not about storage, but about respect —
                a shared understanding that true luxury lies in permanence.
              </p>

              <p>
                CollectionSuites wasn’t built to solve a storage problem. It was
                built to honor the responsibility that authentic collectors
                understand: what we preserve today becomes the heritage we pass
                on to future generations.
              </p>

              {/* RIGHT-ALIGNED SIGNATURE BLOCK ONLY */}
              <div className="mt-10 w-full flex justify-end">
                <div className="text-right">

                  <p className="text-white font-semibold text-lg">
                    Crafted for Legacy.
                  </p>

                  <div className="mt-4 text-sm text-white/70">
                    <p>— Juan Manuel Fayen</p>
                    <p className="text-white/50">Founder, CollectionSuites</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}