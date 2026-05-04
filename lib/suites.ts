export type Suite = {
  id: string
  name: string
  sqft: string
  shapeSrc: string
  price: string
  location: "miami" | "palmbeach"
  levels: { name: string; sqft: string }[]
  description: string[]
  heroImage: string
  layoutSrc: string
  galleryImages: { src: string; alt: string }[]
}

export const SUITES: Suite[] = [
  // --- MIAMI ---
  {
    id: "500",
    name: "SUITE 500",
    sqft: "3,217 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_500.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "501",
    name: "SUITE 501",
    sqft: "3,193 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_501.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "502",
    name: "SUITE 502",
    sqft: "3,192 Sq.Ft",
    shapeSrc: "/suite-shapes/502.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_502.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "503",
    name: "SUITE 503",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_503.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "504",
    name: "SUITE 504",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_504.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "505",
    name: "SUITE 505",
    sqft: "7,112 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_505.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "506",
    name: "SUITE 506",
    sqft: "2,869 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_506.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "507",
    name: "SUITE 507",
    sqft: "2,847 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_507.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "508",
    name: "SUITE 508",
    sqft: "2,847 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_508.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "509",
    name: "SUITE 509",
    sqft: "2,869 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_509.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "510",
    name: "SUITE 510",
    sqft: "7,112 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_510.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "511",
    name: "SUITE 511",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_511.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "512",
    name: "SUITE 512",
    sqft: "3,099 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_512.jpg",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "513",
    name: "SUITE 513",
    sqft: "4,805 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "miami",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/SuiteLayout/CS_513.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "600",
    name: "SUITE 600",
    sqft: "3,066 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 600.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "601",
    name: "SUITE 601",
    sqft: "3,066 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 601.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "602",
    name: "SUITE 602",
    sqft: "3,532 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 602.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "603",
    name: "SUITE 603",
    sqft: "3,532 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 603.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "604",
    name: "SUITE 604",
    sqft: "3,532 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 604.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "605",
    name: "SUITE 605",
    sqft: "3,532 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 605.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "606",
    name: "SUITE 606",
    sqft: "3,909 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 606.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "607",
    name: "SUITE 607",
    sqft: "3,909 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 607.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "608",
    name: "SUITE 608",
    sqft: "4,211 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 608.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
    {
    id: "609",
    name: "SUITE 609",
    sqft: "5,251 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 609.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "610",
    name: "SUITE 610",
    sqft: "3,526 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 610.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "611",
    name: "SUITE 611",
    sqft: "3,525 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 611.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "612",
    name: "SUITE 612",
    sqft: "3,525 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 612.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "613",
    name: "SUITE 613",
    sqft: "3,698 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 613.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "614",
    name: "SUITE 614",
    sqft: "3,698 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 614.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
  {
    id: "615",
    name: "SUITE 615",
    sqft: "3,698 Sq.Ft",
    shapeSrc: "/suite-shapes/501.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 615.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 501 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 501 mezzanine" },
    ],
  },
  {
    id: "616",
    name: "SUITE 616",
    sqft: "3,698 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 616.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
   {
    id: "617",
    name: "SUITE 617",
    sqft: "3,698 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 617.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
   {
    id: "618",
    name: "SUITE 618",
    sqft: "4,481 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 618.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
   {
    id: "619",
    name: "SUITE 619",
    sqft: "4,447 Sq.Ft",
    shapeSrc: "/suite-shapes/500.svg",
    price: "$ 3,500,000",
    location: "palmbeach",
    levels: [
      { name: "Lower Level", sqft: "2,200 Sq. Ft." },
      { name: "Mezzanine", sqft: "510 Sq. Ft." },
    ],
    description: [
      "Each smart suite features a mezzanine for exclusive viewing and an enhanced kitchenette with top-of-the-line appliances, including a designer wine cellar, integrated into sleek Italian cabinetry, a full bathroom and storage closet.",
      "The suites are finished with Black Granite and Swiss Wood flooring, while advanced smart home technology and LED lighting enhance the comfort and display of your collection.",
    ],
    heroImage: "/images/suite-607-hero.jpg",
    layoutSrc: "/images/PB_SuiteLayout/Suite 619.png",
    galleryImages: [
      { src: "/images/suite-607-gallery.jpg", alt: "Suite 500 luxury garage" },
      { src: "/images/suite-607-hero.jpg", alt: "Suite 500 mezzanine" },
    ],
  },
]

// Helper filters
export const miamiSuites = SUITES.filter((s) => s.location === "miami")
export const palmBeachSuites = SUITES.filter((s) => s.location === "palmbeach")