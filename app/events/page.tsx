import EventsHero from "@/components/events/EventsHero"
import { Header } from "@/components/header"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"
import EventsThankYou from "@/components/events/EventsThankyou"

export default function EventsPage() {
  return (
    <main className="bg-black text-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <EventsHero />
      <EventsThankYou /> 

      {/* Optional sections below */}
      <div id="connect">
              <Connect />
            </div>
      <Footer2 />
    </main>
  )
}