"use client"

import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-6">
            <Image
            src="/LogoCollectionSuites.png"
            alt="Collection Suites"
            width={220}
            height={80}
            priority
            />
        </div>

        {/* Social Icons (centered) */}
        <div className="flex justify-center gap-5 mb-6 text-[#9c8463]">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-[#b89a74]" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-[#b89a74]" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#b89a74]" />
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#9c8463]">
            ©2026 CollectionSuites. All Rights Reserved.
        </p>

        </div>

          {/* RIGHT SIDE */}
          <div className="text-sm text-[#9c8463] leading-relaxed">

            <p className="mb-3">
              3105 NW 107th Avenue. Suite 606. Doral, FL 33172
            </p>

            <p className="mb-3">
              contact@collection-suites.com
            </p>

            <p className="mb-6">
              +1 305.800.LUXE (5893)
            </p>

            <p className="text-xs text-white/60 leading-relaxed">
              All images are only renderings and the Developer reserves the right
              to change or discontinue any construction features or materials shown
              at any time without notice. As depicted in the developer’s website
              and brochures, sketches, renderings, graphics, plans, specifications,
              services, amenities, terms, conditions, and statements in this
              presentation are proposed only. The square footage provided on this
              site is approximate.
            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}