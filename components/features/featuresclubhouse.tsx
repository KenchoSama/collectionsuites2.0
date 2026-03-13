"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import "@/styles/fonts/aviano.css"

const images = [
  {
    src: "/images/features/Clubhouse_46-1024x576.jpeg",
    alt: "Collection Suites clubhouse interior with orange car",
  },
  {
    src: "/images/features/CS2_Exterior_FI_06-02-23-2048x1152.jpg",
    alt: "Collection Suites exterior clubhouse view",
  },
  {
    src: "/images/features/CS2_ClubHouse2_FI_06-02-23-1024x576.jpeg",
    alt: "Collection Suites clubhouse upper lounge interior",
  },
]

export default function FeaturesClubhouse() {
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    alt: string
  }>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  return (
    <>
      <section className="w-full bg-black py-16 md:py-24">
        <div className="max-w-[1800px] mx-auto">
          <div className="px-6 md:px-10 text-center">
            <h2 className="aviano text-white text-3xl md:text-5xl tracking-[0.08em]">
              THE PADDOCK CLUBHOUSE
            </h2>

            <p className="gill text-white/75 text-sm md:text-lg leading-relaxed max-w-5xl mx-auto mt-8">
              Our new development will bring to life The Paddock, a luxurious clubhouse at
              CollectionSuites 2.0. This two-level sanctuary combines bespoke storage with
              elegance and camaraderie. It features a refined lounge and grand bar for stylish
              relaxation, a venue for personal celebrations, and a vibrant community hub where
              collectors connect and unwind. Discover The Paddock—a perfect blend of luxury and
              collector culture.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative block w-full h-[260px] sm:h-[360px] md:h-[470px] overflow-hidden text-left"
                aria-label={`Open image ${index + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#DEBE8F] transition-colors"
            aria-label="Close expanded image"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-6xl h-[70vh] md:h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}