interface SuiteFloorPlanProps {
  suiteNumber: string
  sqft: string
}

export function SuiteFloorPlan({ suiteNumber, sqft }: SuiteFloorPlanProps) {
  return (
    <div className="bg-foreground p-8 flex items-center justify-center min-h-[500px] lg:min-h-[600px]">
      <div className="w-full max-w-md">
        <div className="relative">
          {/* Mezzanine label */}
          <div className="text-amber-700 text-sm tracking-widest mb-4 text-center font-sans">
            MEZZANINE
          </div>

          {/* Floor plan outline */}
          <div className="border-2 border-amber-700 p-8 relative" style={{ minHeight: "500px" }}>
            {/* Mezzanine area - top section */}
            <div className="absolute top-8 left-8 right-8 h-32 border-2 border-amber-700">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground px-2 text-amber-700 text-xs tracking-wider font-sans">
                MEZZANINE
              </div>
              {/* Curved wall detail */}
              <div className="absolute -right-8 top-0 bottom-0 w-16">
                <svg viewBox="0 0 64 128" className="w-full h-full" aria-hidden="true">
                  <path d="M0,0 Q64,64 0,128" stroke="#9c8463" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Main suite area - bottom section */}
            <div className="absolute bottom-8 left-8 right-8 border-2 border-amber-700" style={{ height: "300px" }}>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-foreground px-2 text-amber-700 text-xs tracking-wider font-sans">
                {`SUITE ${suiteNumber}`}
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-foreground px-2 text-amber-700 text-xs font-sans">
                {`${sqft} SQ.FT`}
              </div>

              {/* Interior details */}
              <div className="absolute top-4 left-4 w-20 h-12 border border-amber-700" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-amber-700" />
              <div className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-24 border border-amber-700" />
            </div>

            {/* Measurement indicators */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-700 text-xs">
              <span className="tracking-wider writing-mode-vertical" style={{ writingMode: "vertical-rl" }}>
                M
              </span>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-amber-700 text-xs">
              <span className="tracking-wider">M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
