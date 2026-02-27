import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MapSection } from "@/components/map-section"
import { LocationSection } from "@/components/location-section"
import { SuitesGrid } from "@/components/suites-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/HomeHero"
import { HomeAvailable } from "@/components/HomeAvailable"
import { HomeFeatures } from "@/components/HomeFeatures"
import HomeAbout from "@/components/HomeAbout"
import HomeMembers from "@/components/HomeMembers"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"

const suites = [
  { name: "SUITE", number: "001", sqft: "2,869 Sq.Ft." },
  { name: "SUITE", number: "002", sqft: "2,869 Sq.Ft." },
  { name: "SUITE", number: "003", sqft: "2,869 Sq.Ft." },
]

export default function Home() {
  return (
    <main>
      <Header />

      <HomeHero />
      <HomeAvailable />
      <HomeFeatures />
      <HomeAbout />
      <HomeMembers />
      <Connect />
      <Footer2 />

    </main>
  )
}
