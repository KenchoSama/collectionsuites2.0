import Image from "next/image"

interface HeroSectionProps {
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative h-[60vh] md:h-[80vh] bg-black">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-contain object-center contrast-105 brightness-95"
        sizes="100vw"
        quality={100}
        priority
      />

      <div className="absolute inset-0 bg-black/30" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
        <h1 className="text-white font-serif text-4xl md:text-5xl font-light tracking-wider mb-2">
          AVAILABLE
          <br />
          <span className="text-5xl md:text-6xl font-semibold">SUITES</span>
        </h1>
        <p className="text-white text-sm tracking-widest mt-8 max-w-md leading-relaxed uppercase">
          Explore the vision and
          <br />
          craftsmanship behind
          <br />
          <span className="text-amber-700">CollectionSuites</span>
        </p>
      </div>

      {/* Bottom Scroll Indicator */}
      {/* <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4">
        <div className="w-1 h-16 bg-amber-700" aria-hidden="true" />
        <div className="flex gap-2" aria-hidden="true">
          <div className="w-12 h-1 bg-amber-700" />
          <div className="w-12 h-1 bg-gray-600" />
          <div className="w-12 h-1 bg-gray-600" />
        </div>
      </div> */}
    </section>
  )
}