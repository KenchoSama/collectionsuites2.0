import { Header } from "@/components/header"
import StoryHero from "@/components/story/StoryHero"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"
import StoryToday from "@/components/story/StoryToday"
import StoryCar from "@/components/story/StoryCar"

export default function StoryPage() {
  return (
    <main className="bg-white text-black">
      <Header />
      <StoryHero />
            <StoryCar />

      <StoryToday />
      <Connect />
      <Footer2 />
    </main>
  )
}