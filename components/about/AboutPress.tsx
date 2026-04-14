"use client"

import { useMemo, useState } from "react"
import { Eye, MessageCircle } from "lucide-react"

type PressTab = "Articles" | "Events" | "Interviews"

type PressItem = {
  id: string
  title: string
  publishedTime: string
  views: number
  comments: number
  imageUrl?: string
}

const TABS: PressTab[] = ["Articles", "Events", "Interviews"]

const MOCK: Record<PressTab, PressItem[]> = {
  Articles: Array.from({ length: 6 }).map((_, i) => ({
    id: `a-${i}`,
    title: "Name/AAAA",
    publishedTime: "Published Time:",
    views: 100000,
    comments: 10000,
  })),
  Events: Array.from({ length: 6 }).map((_, i) => ({
    id: `e-${i}`,
    title: "Name/AAAA",
    publishedTime: "Published Time:",
    views: 80000,
    comments: 7000,
  })),
  Interviews: Array.from({ length: 6 }).map((_, i) => ({
    id: `i-${i}`,
    title: "Name/AAAA",
    publishedTime: "Published Time:",
    views: 120000,
    comments: 14000,
  })),
}

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n)
}

export function PressSection() {
  const [active, setActive] = useState<PressTab>("Articles")

  const items = useMemo(() => MOCK[active], [active])

  return (
    <section className="relative w-full bg-[#0b0b0c]">
      {/* subtle top gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-14">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="text-4xl font-light text-white md:text-5xl">
            PRESS
          </h2>

          <p className="max-w-md text-xs leading-5 text-white/40 md:mt-2">
            Lorem ipsum dolor sit amet,
            <br />
            Lorem ipsum dolor sit amet,
            <br />
            Lorem ipsum dolor sit amet,
          </p>
        </div>

        {/* Tabs line */}
        <div className="mt-10">
          <div className="relative">
            {/* baseline */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />

            <div className="relative grid grid-cols-3 items-center">
              {TABS.map((tab, idx) => {
                const isActive = active === tab
                const align =
                  idx === 0 ? "justify-self-start" : idx === 1 ? "justify-self-center" : "justify-self-end"

                return (
                  <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={[
                      "group z-10 inline-flex items-center rounded-full border px-4 py-1 text-xs tracking-wide transition",
                      align,
                      isActive
                        ? "border-[#b79a62] bg-[#b79a62] text-black"
                        : "border-white/25 bg-[#0b0b0c] text-white/80 hover:border-white/45 hover:text-white",
                    ].join(" ")}
                    aria-pressed={isActive}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Cards grid */}
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.id} className="group">
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden border border-white/15 bg-white/85">
                  {item.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  ) : null}
                </div>

                {/* Meta */}
                <div className="mt-3 flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <div className="truncate text-xs text-white/80">{item.title}</div>
                    <div className="text-[10px] text-white/45">{item.publishedTime}</div>
                  </div>

                  <div className="flex flex-col items-end gap-1 text-[10px] text-white/55">
                    <div className="flex items-center gap-2">
                      <Eye className="h-3.5 w-3.5 text-white/45" />
                      <span>{formatNumber(item.views)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-3.5 w-3.5 text-white/45" />
                      <span>{formatNumber(item.comments)}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}