import { Header } from "@/components/header"
import { MapSection } from "@/components/available/map-section"
import AvailableMiami from "@/components/available/AvailableMiami"
import AvailablePalmBeach from "@/components/available/AvailablePalmBeach"
import AvailableHero from "@/components/available/AvailableHero"
import AvailableSales from "@/components/available/AvailableSales"
import AvailableSuiteGrid from "@/components/available/AvailableSuitesGrid"
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
      {/* ✅ HERO IMAGE UPDATED */}

      <AvailableHero />
      <MapSection />

      <AvailableMiami />
      <AvailablePalmBeach />
      <AvailableSales />
      <AvailableSuiteGrid />
      <div id="connect">
        <Connect />
      </div>
      <Footer2 />
    </main>
  )
}