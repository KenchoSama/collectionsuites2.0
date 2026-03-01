import { Header } from "@/components/header"
import StoryHero from "@/components/story/StoryHero"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"

export default function StoryPage() {
  return (
    <main className="bg-white text-black">
      <Header />
      <StoryHero />
      <Connect />
      <Footer2 />
    </main>
  )
}