import Image from "next/image"

export function ClassicCarsSection() {
  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src="/images/classic-cars-display.jpg"
            alt="Three classic vintage race cars on display"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
