import Image from "next/image"

export function OriginsTodaySection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/origins-garage-collection.jpg"
              alt="Luxury garage interior with exotic car collection"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Text Content */}
          <div>
            <h2 className="font-serif text-5xl md:text-6xl font-light mb-12 tracking-wide">
              TODAY
            </h2>

            <div className="text-gray-300 leading-relaxed flex flex-col gap-6 text-sm">
              <p>
                At CollectionSuites, we built on a different principle, permanence,
                not as a marketing line but as an architectural promise. Museum-grade
                systems that anticipate environmental shifts. Lighting that honors
                rather than exhibits. Spaces that dignify the art of collecting.
              </p>
              <p>
                {"This isn't excess. It's responsibility. Because every collection represents a piece of history, machines that shaped eras, defined craftsmanship, and captured human aspiration. To be their custodian is to understand that preservation isn't about holding value; it's about"}{" "}
                <span className="font-semibold text-white">
                  safeguarding heritage.
                </span>
              </p>
              <p>
                {"When collectors walk through our suites, there's a moment of recognition. They realize it's not about storage, but about respect — a shared understanding that true luxury lies in permanence."}
              </p>
              <p>
                {"When collectors walk through our suites, there's a moment of recognition. They realize it's not about storage, but about respect — a shared understanding that true luxury lies in permanence."}
              </p>
              <p>
                <span className="font-semibold text-white">CollectionSuites</span>{" "}
                {"wasn't built to solve a storage problem. It was built to honor the responsibility that authentic collectors understand: what we preserve today, becomes the heritage we pass on to future generations."}
              </p>
              <p className="text-amber-700 font-semibold italic text-base mt-8">
                Crafted for Legacy.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-700">
                <p className="text-sm">
                  <span className="font-semibold text-white">
                    {"— Juan Manuel Fayen"}
                  </span>
                  <br />
                  <span className="text-gray-400">
                    Founder, CollectionSuites
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
