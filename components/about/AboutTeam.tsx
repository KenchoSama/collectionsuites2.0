"use client"

import Image from "next/image"
import Link from "next/link"
import "@/styles/fonts/aviano.css"

type TeamMember = {
  name: string
  title: string
  bio: string[]
}

const TEAM: TeamMember[] = [
  {
    name: "Juan Manuel Fayen",
    title: "Founder",
    bio: [
      "Profiles: Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    ],
  },
  {
    name: "Name/AAAA",
    title: "Title/ sales",
    bio: [
      "Profiles: Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    ],
  },
  {
    name: "Name/AAAA",
    title: "Title/ sales",
    bio: [
      "Profiles: Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    ],
  },
  {
    name: "Name/AAAA",
    title: "Title/ manager",
    bio: [
      "Profiles: Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    ],
  },
  {
    name: "Name/AAAA",
    title: "Title/ sales",
    bio: [
      "Profiles: Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.",
    ],
  },
]

export default function AboutTeam() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-10">
        <h2 className="aviano text-black text-3xl md:text-5xl tracking-[0.25em] leading-tight" style={{ letterSpacing: '-0.02em' }}>
          EXECUTIVE
          <br />
          TEAM
        </h2>

        <div className="md:text-right max-w-md">
          <p className="gill text-black/70 text-sm md:text-base leading-relaxed">
            With locations in Miami and Palm Beach, we’ve just started to bring our vision to the world.
          </p>

          <Link
            href="/about"
            className="inline-block mt-6 bg-[#9C835D] hover:bg-[#b89a74] transition px-12 py-3 text-xs md:text-sm tracking-widest uppercase text-white"
          >
            Meet the Team
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {TEAM.map((member, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-black/5">
                <Image
                  src="/AboutTeam.png"
                  alt={`${member.name} portrait`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
              </div>

              {/* Name / Title */}
              <div className="mt-4">
                <p className="gill text-black text-sm font-medium">{member.name}</p>
                <p className="gill text-black/60 text-xs mt-1">{member.title}</p>
              </div>

              {/* Bio */}
              <div className="mt-3 gill text-black/60 text-xs leading-relaxed space-y-2">
                {member.bio.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}