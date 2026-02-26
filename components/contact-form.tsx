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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-foreground font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
              {"LET'S"}
              <br />
              CONNECT
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Register to learn more
              <br />
              about our private
              <br />
              {"collector's community."}
            </p>

            <div className="text-amber-700 text-lg mb-4">
              +1 305.800.LUXE
            </div>
            <div className="text-foreground text-sm">
              <p className="font-semibold">Monday-Friday</p>
              <p>9am - 5pm(GMT+1)</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="bg-card border-0 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="bg-card border-0 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-amber-700"
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-card border-0 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />

              <input
                type="email"
                placeholder="Email"
                aria-label="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-card border-0 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-amber-700"
              />

              <textarea
                placeholder="Message"
                aria-label="Message"
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-card border-0 px-4 py-3 text-sm text-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-amber-700 resize-none"
              />

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="interested"
                  checked={formData.interested}
                  onChange={(e) =>
                    setFormData({ ...formData, interested: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 accent-amber-700"
                />
                <label
                  htmlFor="interested"
                  className="text-xs text-muted-foreground"
                >
                  I am interested in more information about purchasing a suite *
                </label>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Our current projects have suites that are available for sale,
                which pricing starting from over $2 million.
                <br />* prices vary by unit size and location of the project.
                Subject to availability
              </p>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white text-xs tracking-widest uppercase py-3 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
