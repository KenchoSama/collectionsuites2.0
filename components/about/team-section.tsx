import Image from "next/image"

const teamMembers = [
  {
    name: "Juan Manuel Fayen",
    title: "Founder",
    photo: "/images/team-1.jpg",
    bio: "A visionary entrepreneur with over 25 years of experience in luxury real estate and automotive collectibles. Juan Manuel founded CollectionSuites to redefine how collectors preserve and enjoy their most prized possessions.",
  },
  {
    name: "Name/AAAA",
    title: "Title / Sales",
    photo: "/images/team-2.jpg",
    bio: "Bringing extensive expertise in luxury sales and client relations, ensuring each collector receives personalized service and the perfect suite for their collection.",
  },
  {
    name: "Name/AAAA",
    title: "Title / Sales",
    photo: "/images/team-3.jpg",
    bio: "Specializing in high-end property development and client acquisition, connecting discerning collectors with exclusive suite opportunities across our locations.",
  },
  {
    name: "Name/AAAA",
    title: "Title / Manager",
    photo: "/images/team-4.jpg",
    bio: "Overseeing daily operations and facility management, ensuring every CollectionSuites location meets the highest standards of security and luxury.",
  },
  {
    name: "Name/AAAA",
    title: "Title / Sales",
    photo: "/images/team-5.jpg",
    bio: "Dedicated to building lasting relationships with collectors and guiding them through the suite selection process with expertise and care.",
  },
]

export function TeamSection() {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-foreground font-serif text-3xl md:text-4xl font-light mb-2 tracking-wide">
            EXECUTIVE
          </h2>
          <h3 className="text-foreground font-serif text-4xl md:text-5xl font-semibold mb-8 tracking-wide">
            TEAM
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            With locations in Miami and Palm Beach, we{"'"}ve just started to
            <br className="hidden md:block" />
            bring our vision to the world.
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white text-xs tracking-widest uppercase px-8 py-3 transition-colors mb-12 cursor-pointer">
            Meet the Team
          </button>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {teamMembers.map((member, i) => (
            <div key={i}>
              <div className="aspect-square relative mb-4 overflow-hidden bg-muted">
                <Image
                  src={member.photo}
                  alt={`${member.name} - ${member.title}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-foreground font-semibold text-sm mb-1">
                {member.name}
              </h4>
              <p className="text-muted-foreground text-xs mb-2">
                {member.title}
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="border-t border-border pt-8">
          <h3 className="text-foreground text-sm font-semibold mb-6">
            Meet the team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-muted-foreground">
            <div>
              <p className="font-semibold mb-2 text-foreground">history</p>
              <p className="leading-relaxed">
                CollectionSuites was never built to store cars. It was built to
                safeguard heritage, because what we preserve today becomes the
                legacy we pass on to future generations.
              </p>
            </div>
            <div>
              <p className="leading-relaxed">
                Our team brings together decades of experience in luxury real
                estate, automotive culture, and world-class hospitality to
                deliver an unmatched collector experience.
              </p>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <p className="text-foreground">Articles</p>
                <p className="text-foreground">Events</p>
                <p className="text-foreground">Interviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
