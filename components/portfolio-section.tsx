"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "Портфолио",
    subtitle: "Наши лучшие работы",
    viewChannel: "Смотреть канал",
    channelUrl: "https://t.me/RdxStudioPortfolio",
    projects: [
      {
        title: "LeadSoft",
        description: "Платформа для скачивания программ",
      },
      {
        title: "RDX-OTP.COM",
        description: "Сервис OTP с криптовалютными платежами",
      },
      {
        title: "Software Catalog",
        description: "Каталог программного обеспечения",
      },
      {
        title: "Castle Gaming",
        description: "Игровая платформа с бонусами",
      },
    ],
  },
  en: {
    title: "Portfolio",
    subtitle: "Our best works",
    viewChannel: "View Channel",
    channelUrl: "https://t.me/RDXStudio_Portfolio",
    projects: [
      {
        title: "LeadSoft",
        description: "Software download platform",
      },
      {
        title: "RDX-OTP.COM",
        description: "OTP service with crypto payments",
      },
      {
        title: "Software Catalog",
        description: "Software catalog platform",
      },
      {
        title: "Castle Gaming",
        description: "Gaming platform with bonuses",
      },
    ],
  },
}

const portfolioImages = [
  "/images/leadsoft.png",
  "/images/rdx-otp.png",
  "/images/software-catalog.png",
  "/images/castle-gaming.png",
]

export function PortfolioSection() {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved) setLanguage(saved)

    const handleStorage = () => {
      const saved = localStorage.getItem("language") as Language | null
      if (saved) setLanguage(saved)
    }

    window.addEventListener("storage", handleStorage)
    const interval = setInterval(handleStorage, 100)

    return () => {
      window.removeEventListener("storage", handleStorage)
      clearInterval(interval)
    }
  }, [])

  const t = translations[language]

  return (
    <section id="portfolio" className="py-12 md:py-16 lg:py-24 px-4 relative">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 glow-text">{t.title}</h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-12">
          {portfolioImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-[1.02] lg:hover:scale-105"
            >
              <div className="aspect-video relative overflow-hidden bg-black">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={t.projects[index].title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4 lg:p-6">
                  <div>
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-1">{t.projects[index].title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{t.projects[index].description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300 bg-transparent w-full sm:w-auto"
            asChild
          >
            <a href={t.channelUrl} target="_blank" rel="noopener noreferrer">
              {t.viewChannel}
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
