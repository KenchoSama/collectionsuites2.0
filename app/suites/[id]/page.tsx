import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import Connect from "@/components/connect"
import Footer2 from "@/components/Footer2"
import { SuiteDetailsSplit } from "@/components/suites/SuiteDetailsSplit"

// Suite data keyed by suite number
const suitesData: Record<
  string,
  {
    sqft: string
    price: string
    levels: { name: string; sqft: string }[]
    maxCarCapacity?: string
    description: string[]
    heroImage: string
    galleryImages: { src: string; alt: string }[]
  }
> = {
  "607": {
    sqft: "4,178 Sq.Ft.",
    price: "$ 5,000,000",
    levels: [
      { name: "Lower Level", sqft: "3,099 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 607 luxury garage with exotic cars" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 607 mezzanine level with pool table" },
    ],
  },
}

// Default data for suites without specific entries
const defaultSuiteData = {
  sqft: "2,869 Sq.Ft.",
  price: "$ 3,500,000",
  levels: [
    { name: "Lower Level", sqft: "2,200 Sq. Ft." },
    { name: "Mezzanine", sqft: "510 Sq. Ft." },
  ],
  description: [
    "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
    "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
  ],
  heroImage: "/images/suite-607-hero.jpg",
  galleryImages: [
    { src: "/images/suite-607-gallery.jpg", alt: "Luxury garage with exotic cars" },
    { src: "/images/suite-607-hero.jpg", alt: "Mezzanine level interior" },
  ],
}

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
  const suite = suitesData[id] || defaultSuiteData

  return (
    <main>
      <Header />

      {/* Hero Section (unchanged) */}
      <section className="relative h-[70vh] md:h-[85vh]">
        <Image
          src="/images/BANNER.png"
          alt={`Suite ${id} interior`}
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* NEW middle split section */}
      <SuiteDetailsSplit
        suiteNumber={id}
        sqft={suite.sqft}
        price={suite.price}
        levels={suite.levels}
        maxCarCapacity={suite.maxCarCapacity}
        description={suite.description}
        galleryImages={suite.galleryImages}
      />

      <Connect />
      <Footer2 />
    </main>
  )
}
