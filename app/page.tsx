import { Header } from "@/components/header"
import { HomeHero } from "@/components/home/HomeHero"
import { HomeAvailable } from "@/components/home/HomeAvailable"
import { HomeFeatures } from "@/components/home/HomeFeatures"
import HomeAbout from "@/components/home/HomeAbout"
import HomeMembers from "@/components/home/HomeMembers"
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
