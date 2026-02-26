import type { Metadata } from "next"
import { Header } from "@/components/header"
import { OriginsHero } from "@/components/origins/origins-hero"
import { OriginsCarImage } from "@/components/origins/origins-car-image"
import { OriginsTodaySection } from "@/components/origins/origins-today-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Collection Suites - Origins",
  description:
    "Discover the origins and vision behind Collection Suites. A passion-driven vision rooted in motorsport heritage and the art of collecting.",
}

export default function OriginsPage() {
  return (
    <>
      <Header />
      <main>
        <OriginsHero />
        <OriginsCarImage />
        <OriginsTodaySection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
