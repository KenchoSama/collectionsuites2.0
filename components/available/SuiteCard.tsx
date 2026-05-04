"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

type Suite = {
  id: string
  name: string
  sqft: string
  shapeSrc: string
}

export function SuiteCard({ suite }: { suite: Suite }) {
  return (
    <div className="w-full max-w-[320px] bg-[#876E4E]/80 backdrop-blur-[2px] border border-[#DEBE8F]/60 p-5 flex flex-col min-h-[340px]">

      {/* Top Row */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="montserrat-medium text-white text-xl tracking-[0.2em]">
            {suite.name}
          </h3>

          <p className="gill text-[#DEBE8F] text-sm mt-2">
            {suite.sqft}
          </p>
        </div>

        {/* Logo */}
        <Image
          src="/images/available/Logo.png"
          alt="Collection Suites"
          width={40}
          height={40}
          className="object-contain opacity-90"
        />
      </div>

      {/* Suite Shape (right side) */}
      <div className="mt-6 flex justify-end items-start min-h-[110px]">
        <Image
          src={suite.shapeSrc}
          alt={`${suite.name} layout`}
          width={120}
          height={120}
          className="object-contain opacity-90"
        />
      </div>

      {/* Discover Button pinned to bottom */}
      <div className="mt-auto pt-6">
        <Link
          href={`/suites/${suite.id}`}
          className="block w-full text-center border border-[#DEBE8F]/60 text-white hover:bg-black/20 transition py-2 text-xs tracking-widest uppercase"
        >
          Discover
        </Link>
      </div>

    </div>
  )
}