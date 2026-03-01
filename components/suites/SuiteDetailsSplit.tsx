"use client"

import { SuiteDetailsLeft } from "@/components/suites/SuiteDetailsLeft"
import { SuiteDetailsRight } from "@/components/suites/SuiteDetailsRight"

type Level = { name: string; sqft: string }
type GalleryImage = { src: string; alt: string }

export function SuiteDetailsSplit({
  suiteNumber,
  sqft,
  price,
  levels,
  maxCarCapacity,
  description,
  galleryImages,
}: {
  suiteNumber: string
  sqft: string
  price: string
  levels: Level[]
  maxCarCapacity?: string
  description: string[]
  galleryImages: GalleryImage[]
}) {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col lg:flex-row">
        <SuiteDetailsLeft
          suiteNumber={suiteNumber}
          sqft={sqft}
          price={price}
          levels={levels}
          maxCarCapacity={maxCarCapacity}
          description={description}
          galleryImages={galleryImages}
        />
        <SuiteDetailsRight />
      </div>
    </section>
  )
}