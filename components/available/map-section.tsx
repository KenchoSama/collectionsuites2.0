import Image from "next/image"

export function MapSection() {
  return (
    <section className="w-full">
      <Image
        src="/Fl_map.PNG"
        alt="Map showing Collection Suites locations in Palm Beach and Miami, Florida"
        width={1920}
        height={640}
        className="w-full h-auto block"
        sizes="100vw"
        priority={false}
      />
    </section>
  )
}