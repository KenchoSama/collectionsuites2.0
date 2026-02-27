"use client"

import { useState, type FormEvent } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    interested: false,
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="connect" className="bg-secondary py-20 scroll-mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:pt-2">
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide leading-tight">
              {"LET'S"}
              <br />
              CONNECT
            </h2>

            <p className="text-muted-foreground text-sm mb-10 leading-relaxed">
              Register to learn more
              <br />
              about our private
              <br />
              {"collector's community."}
            </p>

            <div className="text-[#9E8056] text-base mb-2 font-gill tracking-wide">
              +1 305.800.LUXE
            </div>

            <div className="text-[#9E8056] text-sm font-gill tracking-wide">
              <p className="font-semibold">Monday-Friday</p>
              <p>9am - 5pm (GMT+1)</p>
            </div>
          </div>

          {/* RIGHT COLUMN - FORM */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-transparent w-full max-w-[640px] lg:ml-auto"
            >
              {/* Top row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#9E8056]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#9E8056]"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#9E8056] mb-4"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#9E8056] mb-4"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#9E8056] resize-none mb-1"
              />

              <div className="flex items-start gap-3 mb-1">
                <input
                  type="checkbox"
                  id="interested"
                  checked={formData.interested}
                  onChange={(e) =>
                    setFormData({ ...formData, interested: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 accent-[#9E8056]"
                />
                <label
                  htmlFor="interested"
                  className="text-xs text-muted-foreground leading-snug"
                >
                  I am interested in more information about purchasing a suite *
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[420px]">
                  Our current projects have suites that are available for sale,
                  with pricing starting from over $2 million.
                  <br />
                  * prices vary by unit size and location of the project.
                  Subject to availability
                </p>

                <button
                  type="submit"
                  className="bg-[#9E8056] hover:bg-[#8a6f49] text-white text-xs tracking-widest uppercase px-10 py-3 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}