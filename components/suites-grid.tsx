import Link from "next/link"
import { Logo } from "@/components/logo"

interface SuiteCardProps {
  name: string
  number: string
  sqft: string
}

export function SuiteCard({ name, number, sqft }: SuiteCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-800 to-amber-900 p-8 relative">
      {/* Corner Logo */}
      <div className="absolute top-6 right-6" aria-hidden="true">
        <Logo size={32} />
      </div>

      <h3 className="text-white font-serif text-3xl font-light mb-1 tracking-wide">
        {name}
      </h3>
      <p className="text-white font-serif text-4xl font-semibold mb-4">
        {number}
      </p>
      <p className="text-amber-300 text-sm mb-8">{sqft}</p>

      {/* Mini floor plan placeholder */}
      <div
        className="h-24 mb-8 border border-amber-600 bg-amber-900/30"
        aria-label={`Floor plan for ${name} ${number}`}
      />

      <Link
        href={`/suites/${number}`}
        className="block w-full bg-amber-700 hover:bg-amber-600 text-white text-xs tracking-widest uppercase py-3 transition-colors text-center"
      >
        Discover
      </Link>
    </div>
  )
}

interface SuitesGridProps {
  suites: SuiteCardProps[]
}

export function SuitesGrid({ suites }: SuitesGridProps) {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-foreground font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
          RECENT SALES
        </h2>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-4">
          {"With three distinct suite options\u2014Standard, Premium, and Grande Collector\u2014each offers flexible private spaces defined by luxury, security, and space. Whether you need a simple, secure environment or a grand suite with room for entertaining, we have the perfect solution for your collection."}
        </p>

        <Link
          href="/suites"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white text-xs tracking-widest uppercase px-8 py-3 mb-12 transition-colors"
        >
          Discover Our Luxury Suites
        </Link>

        {/* Floor Plan Diagram */}
        <div className="mb-12">
          <div className="h-48 bg-secondary border border-border flex items-center justify-center text-muted-foreground text-sm">
            Building Floor Plan Schematic
          </div>
        </div>

        {/* Suite Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suites.map((suite, index) => (
            <SuiteCard key={index} {...suite} />
          ))}
        </div>

        {/* Architectural Plans Background */}
        <div className="mt-12 h-32 bg-secondary border-t border-border flex items-center justify-center text-muted-foreground/50 text-sm">
          Architectural Blueprint Background Pattern
        </div>
      </div>
    </section>
  )
}
