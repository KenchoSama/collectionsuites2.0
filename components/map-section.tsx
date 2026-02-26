import Image from "next/image"

export function MapSection() {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative w-full h-[300px] md:h-[360px] overflow-hidden">
          <Image
            src="/images/Group780.png"
            alt="Map showing Collection Suites locations in Palm Beach and Miami, Florida"
            fill
            className="object-cover object-[center_30%]
"  // 🔴 CHANGED HERE
            sizes="100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}