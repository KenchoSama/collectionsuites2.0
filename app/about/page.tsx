import { Header } from "@/components/header"
import type { Metadata } from "next"
import AboutHero from "@/components/about/AboutHero"
import AboutHistory from "@/components/about/AboutHistory"
import AboutToday from "@/components/about/AboutToday"
import AboutTeam from "@/components/about/AboutTeam"
import Footer2 from "@/components/Footer2"
import Connect from "@/components/connect"
import { PressSection } from "@/components/about/AboutPress"




export const metadata: Metadata = {
  title: "Collection Suites - Our Story",
  description:
    " the vision and craftsmanship behind CollectionSuites. A passion driven legacy spanning over 50 years of automotive heritage.",
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero /> 
      <AboutHistory />
      <AboutToday /> 
      <AboutTeam />
      <PressSection /> 
      <div id="connect">
        <Connect />
      </div>
      <Footer2 />
    </main>
  )
}
