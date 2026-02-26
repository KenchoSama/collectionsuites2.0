import { Download, Printer } from "lucide-react"
import { SuiteGallery } from "@/components/suites/suite-gallery"
import { SuiteFloorPlan } from "@/components/suites/suite-floor-plan"

interface SuiteDetailsProps {
  suiteNumber: string
  sqft: string
  price: string
  levels: { name: string; sqft: string }[]
  maxCarCapacity?: string
  description: string[]
  galleryImages: { src: string; alt: string }[]
}

export function SuiteDetails({
  suiteNumber,
  sqft,
  price,
  levels,
  maxCarCapacity,
  description,
  galleryImages,
}: SuiteDetailsProps) {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Suite Information */}
          <div>
            <div className="flex items-center gap-6 mb-6">
              <button
                className="text-foreground hover:text-amber-700 transition-colors cursor-pointer"
                aria-label="Download suite details"
              >
                <Download className="w-6 h-6" />
              </button>
              <button
                className="text-foreground hover:text-amber-700 transition-colors cursor-pointer"
                aria-label="Print suite details"
              >
                <Printer className="w-6 h-6" />
              </button>
            </div>

            <div className="border-l-4 border-amber-700 pl-6 mb-8">
              <h1 className="text-foreground font-serif text-5xl font-light mb-2 tracking-wide">
                SUITE
              </h1>
              <p className="text-foreground font-serif text-6xl font-semibold mb-4">
                {suiteNumber}
              </p>

              <div className="text-foreground text-sm mb-6 space-y-2">
                <p>
                  <span className="font-semibold">{sqft}</span>
                </p>
                <p>
                  <span className="font-semibold">{price}</span>
                </p>
              </div>

              <div className="text-muted-foreground text-sm space-y-1">
                {levels.map((level, i) => (
                  <p key={i}>
                    {level.name}: {level.sqft}
                  </p>
                ))}
                {maxCarCapacity && <p>Max Car Capacity: {maxCarCapacity}</p>}
                {!maxCarCapacity && <p>Max Car Capacity:</p>}
              </div>
            </div>

            <div className="text-muted-foreground text-sm leading-relaxed mb-8 space-y-4">
              {description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Gallery Thumbnails */}
            <SuiteGallery images={galleryImages} />
          </div>

          {/* Right Column - Floor Plan */}
          <SuiteFloorPlan suiteNumber={suiteNumber} sqft={sqft.replace(" Sq.Ft.", "")} />
        </div>
      </div>
    </section>
  )
}
