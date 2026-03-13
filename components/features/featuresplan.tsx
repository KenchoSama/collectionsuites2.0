"use client"

import "@/styles/fonts/aviano.css"

export default function FeaturesPlan() {
  return (
    <section className="w-full bg-black py-12 md:py-16">

      {/* Intro text */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <p className="gill text-white/70 text-sm md:text-base leading-relaxed">
          Our new suites range from 2,800 sq. ft. to 7,100 sq. ft. and are fully
          customizable. Every space boasts a mezzanine from 500 sq. ft. to
          1,300 sq. ft., a kitchenette, a wine cellar, state-of-the-art
          entertainment and technology features, VIP concierge services and
          much more.
        </p>
      </div>

      {/* Title */}
      <div className="text-center mt-6 md:mt-8">
        <h2 className="aviano text-white text-2xl md:text-4xl tracking-[0.18em]">
          FLOOR PLANS
        </h2>
      </div>

      {/* Floor Plan */}
      <div className="max-w-7xl mx-auto mt-8 px-6 flex justify-center">

        <div className="w-full max-w-5xl aspect-[16/10]">

          <object
            type="image/svg+xml"
            data="/images/features/map-o-new-v2-1.svg"
            className="w-full h-full"
            aria-label="Collection Suites Floor Plan"
          />

        </div>

      </div>

    </section>
  )
}