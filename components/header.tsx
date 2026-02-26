"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToConnect = useCallback(() => {
    const el = document.getElementById("connect")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" aria-label="Collection Suites Home">
          <Logo size={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-white text-sm tracking-widest">
            <Link
              href="/about"
              className="hover:text-amber-300 transition-colors uppercase"
            >
              About Us
            </Link>

            {/* 🔴 NEW Origins Button */}
            <Link
              href="/origins"
              className="hover:text-amber-300 transition-colors uppercase"
            >
              Origins
            </Link>

            <button
              onClick={scrollToConnect}
              className="hover:text-amber-300 transition-colors uppercase cursor-pointer"
            >
              Connect
            </button>
          </nav>

          <button
            className="text-white hover:text-amber-300 transition-colors"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-amber-300 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-white text-sm tracking-widest">
          <Link
            href="/about"
            className="hover:text-amber-300 transition-colors uppercase"
          >
            About Us
          </Link>

          {/* 🔴 NEW Origins Button */}
          <Link
            href="/origins"
            className="hover:text-amber-300 transition-colors uppercase"
          >
            Origins
          </Link>

          <button
            onClick={scrollToConnect}
            className="hover:text-amber-300 transition-colors uppercase cursor-pointer text-left"
          >
            Connect
          </button>
        </nav>
      )}
    </header>
  )
}