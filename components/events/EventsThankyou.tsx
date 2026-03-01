"use client"

import "@/styles/fonts/aviano.css"

export default function EventsThankYou() {
  return (
    <section className="w-full bg-white text-black py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Main Heading */}
        <h2 className="aviano text-xl md:text-2xl tracking-[0.2em] uppercase leading-relaxed">
          Thank You For
          <br />
          Visiting CollectionSuites At Moda Miami.
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-sm md:text-base text-black/70 leading-relaxed">
          Be Sure To Connect With Us Below So We Can Keep You In The
          <br className="hidden md:block" />
          Know Of All The Exciting Happenings At CollectionSuites.
        </p>

      </div>
    </section>
  )
}