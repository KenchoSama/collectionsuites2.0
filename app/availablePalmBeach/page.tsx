import { Header } from "@/components/header"
import PalmBeachHero from "@/components/availablePalmBeach/PalmBeachHero"
import PalmBeachSuites from "@/components/availablePalmBeach/PalmBeachSuites"
import Connect from "@/components/connect"
import PalmBeachAvailableSuiteGrid from "@/components/availablePalmBeach/PalmBeachAvailableSuiteGrid"
import Footer2 from "@/components/Footer2"

export const metadata = {
  title: "Collection Suites - Miami Available Suites",
  description:
    "Explore available luxury collector suites in Miami. Standard, Premium, and Grande Collector options.",
}

export default function SuitesPage() {
  return (
    <main>
      <Header />
      <PalmBeachHero />
      <PalmBeachSuites />
      <PalmBeachAvailableSuiteGrid />
      <div id="connect">
              <Connect />
            </div>
      <Footer2 /> 


    </main>
  )
}
