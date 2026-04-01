"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Connect() {
  const [interested, setInterested] = useState(false)
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interestedInSuite: interested }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      setForm({ firstName: "", lastName: "", phone: "", email: "", message: "" })
      setInterested(false)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="w-full bg-[#f2f2f2] py-10 md:py-24">
      <div className="mx-auto max-w-6xl px-3 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">

          {/* Left column */}
          <div className="lg:col-span-4 px-1 sm:px-0">

            {/* Title */}
            <h2 className="aviano text-[1.9rem] md:text-5xl leading-none tracking-[0.2em] text-black">
              LET&apos;S CONNECT
            </h2>

            {/* Description */}
            <p className="gill mt-6 text-sm text-black/70 max-w-none md:max-w-xs leading-relaxed">
              Register to learn more about our private collector&apos;s
              community.
            </p>

            {/* Mobile contact row / Desktop stacked */}
            <div className="mt-6 md:mt-20 gill text-[11px] md:text-sm text-[#9c8463]">
              <div className="grid grid-cols-2 gap-4 md:block">
                <div>
                  <div className="font-semibold tracking-wide">
                    +1 305.800.LUXE
                  </div>
                </div>

                <div className="text-left md:text-left">
                  <div className="font-semibold tracking-wide">
                    Monday-Friday
                  </div>
                  <div className="font-semibold tracking-wide">
                    9am - 5pm(GMT+1)
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right column (form) */}
          <div className="lg:col-span-8">
            <form className="w-full" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                <Field
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                />
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="mt-3 md:mt-6">
                <Field
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Row 3 */}
              <div className="mt-3 md:mt-6">
                <Field
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message */}
              <div className="mt-3 md:mt-6 relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="gill w-full h-40 md:h-44 resize-none bg-[#d9d9d9] px-4 py-4 text-sm text-black placeholder:text-black/55 outline-none border-b border-[#9c8463]"
                />
                <ChevronDown className="absolute right-4 top-4 w-4 h-4 md:w-5 md:h-5 text-black/60" />
              </div>

              {/* Checkbox + note */}
              <div className="mt-5 md:mt-6 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={interested}
                  onChange={(e) => setInterested(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#9c8463]"
                />
                <div className="gill text-[11px] md:text-sm leading-[1.4]">
                  <div className="text-[#9c8463]">
                    I am interested in more information about purchasing a suite{" "}
                    <span className="text-[#9c8463]">*</span>
                  </div>

                  <p className="mt-2 text-black/60 max-w-2xl leading-[1.45]">
                    Our current projects have suites that are available for sale,
                    with pricing starting from over $2 million.
                    <br />
                    * prices vary by unit size and location of the project.
                    Subject to availability.
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="mt-8 md:mt-10 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#9c8463] hover:bg-[#b89a74] disabled:opacity-60 transition px-14 md:px-20 py-3 text-[11px] md:text-sm tracking-[0.18em] uppercase text-white"
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>

                {status === "success" && (
                  <p className="gill text-xs text-black/60 tracking-wide">
                    Thank you — we&apos;ll be in touch shortly.
                  </p>
                )}
                {status === "error" && (
                  <p className="gill text-xs text-red-500 tracking-wide">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}: {
  placeholder: string
  type?: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="gill w-full bg-[#d9d9d9] px-4 py-3 text-sm text-black placeholder:text-black/55 outline-none border-b border-[#9c8463]"
    />
  )
}