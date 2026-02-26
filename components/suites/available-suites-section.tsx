import Image from "next/image"
import { FloorPlanDiagram } from "@/components/suites/floor-plan-diagram"
import { MiamiSuiteCard } from "@/components/suites/miami-suite-card"

const suiteData = [
  // Row 1
  { suiteNumber: "001", sqft: "2,869 Sq.Ft.", planPosition: "bottom-right" as const, planWidth: "48px", planHeight: "48px" },
  { suiteNumber: "002", sqft: "2,869 Sq.Ft.", planPosition: "top-right" as const, planWidth: "64px", planHeight: "32px" },
  { suiteNumber: "003", sqft: "2,869 Sq.Ft.", planPosition: "bottom-right" as const, planWidth: "40px", planHeight: "40px" },
  // Row 2
  { suiteNumber: "004", sqft: "2,869 Sq.Ft.", planPosition: "top-left" as const, planWidth: "56px", planHeight: "56px" },
  { suiteNumber: "005", sqft: "2,869 Sq.Ft.", planPosition: "bottom-left" as const, planWidth: "48px", planHeight: "64px" },
  { suiteNumber: "006", sqft: "2,869 Sq.Ft.", planPosition: "top-right" as const, planWidth: "64px", planHeight: "48px" },
  // Row 3
  { suiteNumber: "007", sqft: "2,869 Sq.Ft.", planPosition: "bottom-left" as const, planWidth: "40px", planHeight: "40px" },
  { suiteNumber: "008", sqft: "2,869 Sq.Ft.", planPosition: "top-left" as const, planWidth: "64px", planHeight: "40px" },
  { suiteNumber: "009", sqft: "2,869 Sq.Ft.", planPosition: "bottom-right" as const, planWidth: "48px", planHeight: "48px" },
  // Row 4
  { suiteNumber: "010", sqft: "2,869 Sq.Ft.", planPosition: "top-right" as const, planWidth: "56px", planHeight: "56px" },
  { suiteNumber: "011", sqft: "2,869 Sq.Ft.", planPosition: "bottom-left" as const, planWidth: "64px", planHeight: "40px" },
  { suiteNumber: "012", sqft: "2,869 Sq.Ft.", planPosition: "top-left" as const, planWidth: "48px", planHeight: "64px" },
  // Row 5
  { suiteNumber: "013", sqft: "2,869 Sq.Ft.", planPosition: "bottom-right" as const, planWidth: "40px", planHeight: "40px" },
  { suiteNumber: "014", sqft: "2,869 Sq.Ft.", planPosition: "top-right" as const, planWidth: "64px", planHeight: "32px" },
  { suiteNumber: "015", sqft: "2,869 Sq.Ft.", planPosition: "bottom-left" as const, planWidth: "56px", planHeight: "56px" },
  // Row 6
  { suiteNumber: "016", sqft: "2,869 Sq.Ft.", planPosition: "top-left" as const, planWidth: "48px", planHeight: "48px" },
  { suiteNumber: "017", sqft: "2,869 Sq.Ft.", planPosition: "bottom-right" as const, planWidth: "64px", planHeight: "40px" },
  { suiteNumber: "018", sqft: "2,869 Sq.Ft.", planPosition: "top-right" as const, planWidth: "40px", planHeight: "64px" },
]

export function AvailableSuitesSection() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-foreground font-serif text-4xl md:text-5xl font-light mb-6 tracking-wide">
              AVAILABLE
              <br />
              <span className="text-5xl md:text-6xl font-semibold">SUITES</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              {"With three distinct suite options\u2014Standard, Premium, and Grande Collector\u2014each offers flexible private spaces defined by luxury, security, and space. Whether you need a simple, secure environment or a grand suite with room for entertaining, we have the perfect solution for your collection."}
            </p>
          </div>
          <div className="flex items-center justify-end">
            <FloorPlanDiagram />
          </div>
        </div>

        {/* Suite Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {suiteData.map((suite, index) => (
            <MiamiSuiteCard key={index} {...suite} />
          ))}
        </div>

        {/* Architectural Blueprint Background */}
        <div className="mt-12 h-48 relative overflow-hidden">
          <Image
            src="/images/blueprint-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </div>
      </div>
    </section>
  )
}
