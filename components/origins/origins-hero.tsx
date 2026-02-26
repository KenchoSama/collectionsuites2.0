import Image from "next/image"

const photos = [
  { src: "/images/vintage-racing-1.jpg", alt: "Vintage silver race car", rotate: "-rotate-2", aspect: "aspect-square" },
  { src: "/images/vintage-racing-2.jpg", alt: "Vintage racing scene", rotate: "rotate-1 mt-12", aspect: "aspect-[3/4]" },
  { src: "/images/vintage-racing-3.jpg", alt: "Racing driver portrait", rotate: "rotate-2", aspect: "aspect-square" },
  { src: "/images/vintage-racing-4.jpg", alt: "Wide racing scene with RENAU branding", rotate: "-rotate-1 -mt-8 col-span-2", aspect: "aspect-video" },
]

export function OriginsHero() {
  return (
    <section className="bg-card py-20 pt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            <p className="text-muted-foreground text-xs tracking-widest uppercase mb-4">
              A passion-driven vision
            </p>
            <h1 className="text-foreground font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">
              origins...
            </h1>
            <h2 className="text-foreground font-serif text-4xl md:text-5xl font-light mb-12 tracking-wide">
              origins...
            </h2>

            <div className="text-muted-foreground leading-relaxed flex flex-col gap-6 text-sm">
              <p>
                {"I've spent decades around collectors. Some acquire. Others preserve. The difference isn't subtle; it's foundational."}
              </p>
              <p>
                My father lived and breathed the golden era of motorsport, racing
                across Europe, South Africa, and Latin America. His passion defined
                the environment I grew up in. Cars {"weren't"} simply objects of desire;
                they were symbols of memory, ingenuity, and legacy. That heritage
                shaped the way I see collections today.
              </p>
              <p>
                Authentic collectors understand this distinction instinctively.{" "}
                <span className="font-semibold text-foreground">
                  Ownership is transactional; stewardship is generational.
                </span>{" "}
                {"It's the recognition that what we hold today, in some essential way, belongs to tomorrow."}
              </p>
              <p>
                Traditional storage often misses that truth. It reduces preservation to
                square footage, where climate control is an amenity instead of an
                imperative, and security becomes surveillance rather than sanctuary.
              </p>
            </div>
          </div>

          {/* Right Column - Vintage Racing Photo Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo, i) => (
                <div key={i} className={`transform ${photo.rotate}`}>
                  <div className="bg-card p-2 shadow-lg">
                    <div className={`${photo.aspect} relative overflow-hidden`}>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover"
                        priority={i < 2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
