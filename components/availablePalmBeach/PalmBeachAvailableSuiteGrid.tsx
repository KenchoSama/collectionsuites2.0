"use client"

import { SuiteCard } from "@/components/available/SuiteCard"
import { palmBeachSuites } from "@/lib/suites"

export default function PalmBeachAvailableSuiteGrid() {
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
          {palmBeachSuites.map((suite) => (
            <SuiteCard key={suite.id} suite={suite} />
          ))}
        </div>
      </div>

    </section>
  )
}