import Image from "next/image"
import Link from "next/link"

interface LocationSectionProps {
  title: string
  description?: string
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
  contentPosition?: "bottom" | "center"
}

export function LocationSection({
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText = "Discover Our Luxury Suites",
  ctaHref,
  contentPosition = "bottom",
}: LocationSectionProps) {
  return (
    <section className="relative h-screen">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div
        className={`absolute inset-0 flex flex-col px-6 md:px-12 ${
          contentPosition === "bottom" ? "justify-end pb-16" : "justify-center"
        }`}
      >
        <h2 className="text-white font-serif text-5xl md:text-6xl font-light tracking-widest mb-6 text-balance">
          {title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
        {description && (
          <p className="text-white text-xs leading-relaxed max-w-2xl mb-8">
            {description}
          </p>
        )}
        {ctaHref ? (
          <Link
            href={ctaHref}
            className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-xs tracking-widest uppercase px-8 py-3 w-fit transition-colors"
          >
            {ctaText}
          </Link>
        ) : (
          <button className="bg-amber-700 hover:bg-amber-800 text-white text-xs tracking-widest uppercase px-8 py-3 w-fit transition-colors">
            {ctaText}
          </button>
        )}
      </div>
    </section>
  )
}
