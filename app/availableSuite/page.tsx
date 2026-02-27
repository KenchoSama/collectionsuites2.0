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

      {/* ✅ HERO IMAGE UPDATED */}
      <HeroSection
        imageSrc="/OrangeCarRoom.png"
        imageAlt="Luxury collector suite with orange Lamborghini and exotic cars on display"
      />

      <MapSection />

      {/* ✅ MIAMI IMAGE UPDATED */}
      <LocationSection
        title="MIAMI"
        description="Our Flagship Biscayne Complex Boasts over 400,000 square feet of prime real estate, featuring 164 luxury suites. www.go-collectionsuitemiami.com"
        imageSrc="/wideMiami.png"
        imageAlt="Miami luxury development exterior"
        contentPosition="bottom"
        ctaHref="/suites"
      />

      {/* ✅ PALM BEACH IMAGE UPDATED */}
      <LocationSection
        title={"PALM\nBEACH"}
        imageSrc="/widePalmBeach.png"
        imageAlt="Palm Beach luxury development exterior"
        contentPosition="center"
        ctaHref="/suites/PalmBeachSuite"
      />

      <SuitesGrid suites={suites} />

      <ContactForm />

      <Footer />
    </main>
  )
}