import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { AvailableSuitesSection } from "@/components/suites/available-suites-section"
import Image from "next/image"

export const metadata = {
  title: "Collection Suites - Miami Available Suites",
  description:
    "Explore available luxury collector suites in Miami. Standard, Premium, and Grande Collector options.",
}

export default function SuitesPage() {
  return (
    <main>
      <Header />

      {/* Miami Hero */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/MIAMI.png"
          alt="Iconic Miami Beach lifeguard station with ocean view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12">
          <h1 className="text-white font-serif text-5xl md:text-6xl font-light tracking-widest drop-shadow-lg">
            MIAMI
          </h1>
        </div>
      </section>

      {/* <AvailableSuitesSection /> */}

      <ContactForm />

      <Footer />
    </main>
  )
}
