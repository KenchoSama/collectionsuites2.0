import type { Metadata } from "next"
import { Header } from "@/components/header"
import { OriginsHero } from "@/components/origins/origins-hero"
import { OriginsCarImage } from "@/components/origins/origins-car-image"
import { OriginsTodaySection } from "@/components/origins/origins-today-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"



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
