import { Header } from "@/components/header"
import MiamiHero from "@/components/availableMiami/MiamiHero"
import MiamiSuites from "@/components/availableMiami/MiamiSuites"
import MiamiAvailableSuiteGrid from "@/components/availableMiami/MiamiAvailableSuiteGrid"
import Connect from "@/components/connect"
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
      <MiamiHero />
    <MiamiSuites />
    <MiamiAvailableSuiteGrid />
          <div id="connect">
            <Connect />
          </div>

      <Footer2 />
    </main>
  )
}
