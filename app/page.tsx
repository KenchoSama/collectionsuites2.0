import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MapSection } from "@/components/map-section"
import { LocationSection } from "@/components/location-section"
import { SuitesGrid } from "@/components/suites-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

const suites = [
  { name: "SUITE", number: "001", sqft: "2,869 Sq.Ft." },
  { name: "SUITE", number: "002", sqft: "2,869 Sq.Ft." },
  { name: "SUITE", number: "003", sqft: "2,869 Sq.Ft." },
]

export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b.-V12-Suite-Rendering-video%201%20%281%29-zt2UVQC45iQK0WahdUZg7JUCJOk9qj.png"
        imageAlt="Luxury collector suite with orange Lamborghini Aventador, red supercar, teal McLaren, and green Huracan on display"
      />

      <MapSection />

      <LocationSection
        title="MIAMI"
        description="Our Flagship Biscayne Complex Boasts 1 million over 400,000 square feet of prime real estate. featuring 164 luxury suites. www.go-collectionsuitemiami.com"
        imageSrc="/images/miami-beach.jpg"
        imageAlt="Iconic Miami Beach lifeguard station with pink and yellow building and ocean view"
        contentPosition="bottom"
        ctaHref="/suites"
      />

      <LocationSection
        title={"PALM\nBEACH"}
        imageSrc="/images/palm-beach.jpg"
        imageAlt="Palm Beach sunset with palm trees and historic clock tower"
        contentPosition="center"
        ctaHref="/suites"
      />

      <SuitesGrid suites={suites} />

      <ContactForm />

      <Footer />
    </main>
  )
}
