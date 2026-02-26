import Image from "next/image"
import Link from "next/link"

export function TodaySection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-wide">
              TODAY
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              With locations in Miami and Palm Beach, we{"'"}ve just started to
              bring our vision to the world.
            </p>
            <Link
              href="/"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-xs tracking-widest uppercase px-8 py-3 transition-colors"
            >
              Our Story
            </Link>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src="/images/collector-discussion.jpg"
              alt="Two people in conversation discussing a collector car"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
