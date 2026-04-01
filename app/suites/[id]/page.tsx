import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"
import { SuiteDetailsSplit } from "@/components/suites/SuiteDetailsSplit"
import { SUITES } from "@/lib/suites"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Collection Suites - Suite ${id}`,
    description: `Explore Suite ${id} at CollectionSuites. Luxury collector suites in Miami.`,
  }
}

export default async function SuiteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const suite = SUITES.find((s) => s.id === id)

  if (!suite) return notFound()

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[85vh]">
        <Image
          src="/images/BANNER.png"
          alt={`Suite ${id} interior`}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Suite Details */}
      <SuiteDetailsSplit
        suiteNumber={id}
        sqft={suite.sqft}
        price={suite.price}
        levels={suite.levels}
        // maxCarCapacity={suite.maxCarCapacity}
        description={suite.description}
        galleryImages={suite.galleryImages}
      />

      <div id="connect">
        <Connect />
      </div>
      <Footer2 />
    </main>
  )
}