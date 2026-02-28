"use client"

import Image from "next/image"
import { SuiteCard } from "@/components/available/SuiteCard"
const SUITES = Array.from({ length: 18 }, (_, i) => {
  const num = String(i + 1).padStart(3, "0")

  return {
    id: num,
    name: `SUITE ${num}`,
    sqft: "2,869 Sq.Ft",
    shapeSrc: `/suite-shapes/suite${(i % 3) + 1}.png`,
  }
})
export default function AvailableSuiteGrid() {
  return (
<section className="relative w-full py-20 overflow-hidden bg-[#EDEDED]">

  {/* Background using CSS (stacked vertically) */}
  <div
    className="absolute inset-0 bg-center bg-repeat-y bg-contain"
    style={{
      backgroundImage: "url('/AvailableSalesRoom.png')",
    }}
  />

  {/* Light overlay */}
  <div className="absolute inset-0 bg-[#EDEDED]/20" />

  {/* Grid content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
      {SUITES.map((suite) => (
        <SuiteCard key={suite.id} suite={suite} />
      ))}
    </div>
  </div>

</section>
  )
}