"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import "@/styles/fonts/aviano.css"

export default function Connect() {
  const [interested, setInterested] = useState(false)

  return (
    <section className="w-full bg-[#f2f2f2] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-4">
            <h2 className="aviano text-4xl md:text-5xl font-light leading-none text-black">
              LET&apos;S
              <br />
              CONNECT
            </h2>

            <p className="gill mt-6 text-sm text-black/70 max-w-xs leading-relaxed">
              Register to learn more <br />
              about our private <br />
              collector&apos;s community.
            </p>

            <div className="mt-20 md:mt-28 gill text-sm">
              <div className="text-[#9c8463] font-semibold tracking-widest">
                +1 305.800.LUXE
              </div>
              <div className="mt-3 text-[#9c8463] font-semibold tracking-wide">
                Monday-Friday
              </div>
              <div className="text-[#9c8463] font-semibold tracking-wide">
                9am - 5pm(GMT+1)
              </div>
            </div>
          </div>

          {/* Right column (form) */}
          <div className="lg:col-span-8">
            <form className="w-full">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field placeholder="First Name" />
                <Field placeholder="Last Name" />
              </div>

              {/* Row 2 */}
              <div className="mt-6">
                <Field placeholder="Phone Number" />
              </div>

              {/* Row 3 */}
              <div className="mt-6">
                <Field placeholder="Email" type="email" />
              </div>

              {/* Message */}
              <div className="mt-6 relative">
                <textarea
                  placeholder="Message"
                  className="gill w-full h-40 md:h-44 resize-none bg-[#d9d9d9] px-4 py-4 text-sm text-black placeholder:text-black/55 outline-none border-b border-[#9c8463]"
                />
                <ChevronDown className="absolute right-4 top-4 w-5 h-5 text-black/60" />
              </div>

              {/* Checkbox + note */}
              <div className="mt-6 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={interested}
                  onChange={(e) => setInterested(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#9c8463]"
                />
                <div className="gill text-sm">
                  <div className="text-[#9c8463]">
                    I am interested in more information about purchasing a suite{" "}
                    <span className="text-[#9c8463]">*</span>
                  </div>
                  <p className="mt-2 text-black/60 max-w-2xl leading-relaxed">
                    Our current projects have suites that are available for sale,
                    which pricing starting from over $2 million.
                    <br />
                    * prices vary by unit size and location of the project.
                    Subject to availability
                  </p>
                </div>
              </div>

              {/* Submit */}
              {/* Submit */}
            <div className="mt-10 flex justify-center">
            <button
                type="submit"
                className="bg-[#9c8463] hover:bg-[#b89a74] transition px-20 py-3 text-sm tracking-widest uppercase text-white"
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

function Field({
  placeholder,
  type = "text",
}: {
  placeholder: string
  type?: string
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="gill w-full bg-[#d9d9d9] px-4 py-3 text-sm text-black placeholder:text-black/55 outline-none border-b border-[#9c8463]"
    />
  )
}