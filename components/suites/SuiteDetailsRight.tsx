"use client"

import Image from "next/image"

export function SuiteDetailsRight() {
  return (
    <div className="w-full lg:w-1/2 bg-black flex items-center justify-center px-6 md:px-10 py-10">
      <div className="relative w-full max-w-[720px] aspect-[4/3]">
        <Image
          src="/DetailsLayout.png"
          alt="Suite layout"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  )
}