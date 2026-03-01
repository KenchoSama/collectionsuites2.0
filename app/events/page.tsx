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
      <Connect />
      <Footer2 />
    </main>
  )
}