"use client"

import Image from "next/image"
import { useState } from "react"

const tabs = ["Articles", "Events", "Interviews"] as const

const articles = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Name/AAAA",
  image: "/images/article-1.jpg",
  publishedTime: "Published Time",
  views: "000,000",
  likes: "00,000",
}))

export function PressSection() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Articles")

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-wide">
          PRESS
        </h2>
        <p className="text-gray-400 text-sm mb-12">
          Stay up to date with the latest news,
          <br />
          events, and features from CollectionSuites.
        </p>

        {/* Tabs */}
        <div className="flex gap-8 mb-12 border-b border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm tracking-wider pb-3 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "border-b-2 border-amber-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-gray-800 overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white text-sm font-semibold mb-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{article.publishedTime}</span>
                  <div className="flex gap-4">
                    <span>{article.views}</span>
                    <span>{article.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
