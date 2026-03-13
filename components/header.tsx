"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToContact = useCallback(() => {
    const el = document.getElementById("connect")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      {/* Desktop Header */}
      <div className="hidden md:grid container mx-auto px-6 py-4 grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Left: Logo + Brand */}
        <Link
          href="/"
          aria-label="Collection Suites Home"
          className="z-10 flex items-center gap-3 min-w-0"
        >
          <Image
            src="/CollectionSuiteLogo.png"
            alt="Collection Suites Logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain shrink-0"
            priority
          />

          <span className="aviano text-white text-lg tracking-[0.18em] whitespace-nowrap">
            Collection<span className="text-[#DEBE8F]">Suites</span>
          </span>
        </Link>

        {/* Middle spacer */}
        <div />

        {/* Right: Navigation */}
        <nav className="flex items-center justify-end gap-8 lg:gap-10 text-[#DEBE8F] font-gill text-base tracking-widest whitespace-nowrap">
          <Link href="/availableSuite" className="hover:text-white transition-colors">
            Suites
          </Link>

          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>

          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>

          <button
            onClick={scrollToContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>

          <a
            href="https://my.collection-suites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            Members
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="container mx-auto px-6 py-4 flex items-center justify-between md:hidden">
        <Link
          href="/"
          aria-label="Collection Suites Home"
          className="z-10 flex items-center gap-3 min-w-0"
        >
          <Image
            src="/CollectionSuiteLogo.png"
            alt="Collection Suites Logo"
            width={140}
            height={40}
            className="h-10 w-auto object-contain shrink-0"
            priority
          />

          <span className="aviano text-white text-sm tracking-[0.12em] whitespace-nowrap">
            Collection<span className="text-[#DEBE8F]">Suites</span>
          </span>
        </Link>

        <button
          className="text-[#DEBE8F] hover:text-white transition-colors md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-[#DEBE8F] font-gill text-base tracking-widest">
          <Link href="/availableSuite" className="hover:text-white transition-colors">
            Suites
          </Link>

          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>

          <button
            onClick={scrollToContact}
            className="hover:text-white transition-colors text-left"
          >
            Contact
          </button>

          <a
            href="https://my.collection-suites.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            Members
            <ArrowRight className="w-5 h-5" />
          </a>
        </nav>
      )}
    </header>
  )
}