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


export default function Home() {
  return (
    <main>
      <Header />
      <HomeHero />
      <HomeAvailable />
      <HomeFeatures />
      <HomeAbout />
      <HomeMembers />
      <div id="connect">
        <Connect />
      </div>
      <Footer2 />

    </main>
  )
}
