import { Header } from "@/components/header"
import FeaturesHome from "@/components/features/featureshome"
import FeaturesPlan from "@/components/features/featuresplan"
import FeaturesClubhouse from "@/components/features/featuresclubhouse"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f2f2f2]">
      <Header />

      <FeaturesHome />

      <FeaturesPlan />

      <FeaturesClubhouse />

      <Connect />

      <Footer2 />
    </main>
  )
}