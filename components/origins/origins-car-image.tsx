import Image from "next/image"

export function OriginsCarImage() {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="relative h-96 overflow-hidden">
          <Image
            src="/images/origins-red-supercar.jpg"
            alt="Sleek red modern supercar, low angle dramatic shot"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
