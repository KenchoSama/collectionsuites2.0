"use client"

import Image from "next/image"
import { SuiteCard } from "@/components/available/SuiteCard"
const SUITES = [
  {
    id: "500",
    name: "SUITE 500",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
  },
  {
    id: "501",
    name: "SUITE 501",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
  },
  {
    id: "502",
    name: "SUITE 502",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/502.svg",
  },
]
export default function AvailableSuiteGrid() {
  return (
    <section className="relative w-full py-20 overflow-hidden">

      <Image
        src="/AvailableSalesRoom.png"
        alt="Available Suites"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {SUITES.map((suite) => (
            <SuiteCard key={suite.id} suite={suite} />
          ))}
        </div>
      </div>

    </section>
  )
}