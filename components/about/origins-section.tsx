import Image from "next/image"

const photos = [
  { src: "/images/vintage-racing-1.jpg", alt: "Vintage racing photo", rotate: "-rotate-3" },
  { src: "/images/vintage-racing-2.jpg", alt: "Vintage racing car", rotate: "rotate-2" },
  { src: "/images/vintage-racing-3.jpg", alt: "Racing driver portrait", rotate: "-rotate-1" },
  { src: "/images/vintage-racing-4.jpg", alt: "Classic racing scene", rotate: "rotate-3" },
  { src: "/images/vintage-racing-5.jpg", alt: "Pit crew vintage", rotate: "rotate-1" },
  { src: "/images/vintage-racing-6.jpg", alt: "Racing car close-up", rotate: "-rotate-2" },
  { src: "/images/vintage-racing-7.jpg", alt: "Motorsport event", rotate: "rotate-2" },
  { src: "/images/vintage-racing-8.jpg", alt: "Classic car racing", rotate: "-rotate-1" },
]

export function OriginsSection() {
  return (
    <section className="bg-secondary py-20 pt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="text-foreground font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
            ORIGINS
          </h1>
          <p className="text-muted-foreground text-sm tracking-wider">
            A Passion Driven Vision
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {photos.map((photo, i) => (
            <div key={i} className={`aspect-square relative overflow-hidden ${photo.rotate}`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
