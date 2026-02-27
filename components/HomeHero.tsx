import Image from "next/image"

export function HomeHero() {
  return (
    <section className="w-full">
      {/* Top Image + Overlay */}
      <div className="relative w-full h-[65vh] md:h-[75vh]">

        {/* Background Image */}
        <Image
          src="/HomeHero.png"
          alt="Luxury Collection Suites Interior"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text + Logo near bottom */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-12 md:pb-16 gap-4">

          {/* Main Tagline */}
          <h1 className="text-white font-aviano tracking-[0.35em] text-2xl md:text-3xl text-center">
            COLLECT. CONNECT. PROTECT.
          </h1>

          {/* 🔥 New "ONLY AT" line */}
          <p className="text-white font-aviano tracking-[0.3em] text-xs md:text-sm text-center">
            ONLY AT
          </p>

          {/* Logo */}
          <Image
            src="/LogoSuites.png"
            alt="Collection Suites Logo"
            width={400}
            height={100}
            className="w-[55%] max-w-[380px] h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom Description Section */}
      <div
        className="w-full py-16 px-6 md:px-12 flex items-center justify-center"
        style={{ backgroundColor: "#D7B788" }}
      >
        <p className="max-w-3xl text-center text-black/80 text-sm md:text-base leading-relaxed tracking-wide">
          Collection Suites is a private community designed for collectors who demand more than storage.
          Each suite blends secure vehicle preservation with modern luxury living — featuring climate-controlled environments,
          premium finishes, and curated spaces to showcase and enjoy your collection. From Miami to Palm Beach, our developments
          bring together craftsmanship, privacy, and lifestyle into one destination built for passion, performance, and connection.
        </p>
      </div>
    </section>
  )
}