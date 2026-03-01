import type { Metadata } from "next"
import { Header } from "@/components/header"
import { OriginsCarImage } from "@/components/origins/origins-car-image"
import { OriginsTodaySection } from "@/components/origins/origins-today-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import OriginsHero from "@/components/origins/OriginsHero"



export default function OriginsPage() {
  return (
    <>
      <Header />
      <main>
        <OriginsHero /> {/* This is the new hero component */}
        <OriginsCarImage />
        <OriginsTodaySection />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
