import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { OriginsSection } from "@/components/about/origins-section"
import { HistorySection } from "@/components/about/history-section"
import { CheckeredFlag } from "@/components/about/checkered-flag"
import { ClassicCarsSection } from "@/components/about/classic-cars-section"
import { TodaySection } from "@/components/about/today-section"
import { TeamSection } from "@/components/about/team-section"
import { PressSection } from "@/components/about/press-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Collection Suites - Our Story",
  description:
    " the vision and craftsmanship behind CollectionSuites. A passion driven legacy spanning over 50 years of automotive heritage.",
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <OriginsSection />
      <HistorySection />
      <CheckeredFlag />
      <ClassicCarsSection />
      <TodaySection />
      <TeamSection />
      <PressSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
