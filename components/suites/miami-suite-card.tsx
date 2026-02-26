import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/components/logo"

interface MiniFloorPlanProps {
  position: "bottom-right" | "top-right" | "bottom-left" | "top-left"
  width: string
  height: string
}

function MiniFloorPlan({ position, width, height }: MiniFloorPlanProps) {
  const positionClasses = {
    "bottom-right": "bottom-2 right-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "top-left": "top-2 left-2",
  }

  return (
    <div className="h-24 mb-8 border border-amber-600 bg-amber-900/30 relative">
      <div
        className={`absolute ${positionClasses[position]} border border-amber-600`}
        style={{ width, height }}
      />
    </div>
  )
}

interface MiamiSuiteCardProps {
  suiteNumber: string
  sqft: string
  planPosition: MiniFloorPlanProps["position"]
  planWidth: string
  planHeight: string
}

export function MiamiSuiteCard({
  suiteNumber,
  sqft,
  planPosition,
  planWidth,
  planHeight,
}: MiamiSuiteCardProps) {
  return (
    <div className="bg-gradient-to-br from-amber-800 to-amber-900 relative overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BANNER%205-h8TvjLrq6rdEVhgUQ43d6YjQEIKfp8.png"
          alt="Luxury mezzanine lounge with pool table"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8 relative">
        <div className="absolute top-6 right-6" aria-hidden="true">
          <Logo size={32} />
        </div>

        <h3 className="text-white font-serif text-3xl font-light mb-1 tracking-wide">
          SUITE
        </h3>
      <p className="text-white font-serif text-4xl font-semibold mb-4">
        {suiteNumber}
      </p>
      <p className="text-amber-300 text-sm mb-8">{sqft}</p>

      <MiniFloorPlan
        position={planPosition}
        width={planWidth}
        height={planHeight}
      />

        <Link
          href={`/suites/${suiteNumber}`}
          className="block w-full bg-amber-700 hover:bg-amber-600 text-white text-xs tracking-widest uppercase py-3 transition-colors text-center"
        >
          Discover
        </Link>
      </div>
    </div>
  )
}
