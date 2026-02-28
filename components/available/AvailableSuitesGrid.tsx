"use client"

import Image from "next/image"
import { SuiteCard } from "@/components/available/SuiteCard"
const SUITES = [
  {
    id: "001",
    name: "SUITE 001",
    sqft: "2,869 Sq.Ft",
    shapeSrc: "/suite-shapes/suite1.png",
  },
  {
    id: "002",
    name: "SUITE 002",
    sqft: "2,869 Sq.Ft",
    shapeSrc: "/suite-shapes/suite2.png",
  },
  {
    id: "003",
    name: "SUITE 003",
    sqft: "2,869 Sq.Ft",
    shapeSrc: "/suite-shapes/suite3.png",
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