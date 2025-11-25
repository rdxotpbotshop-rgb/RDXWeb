"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Zap, Shield, Clock, HeartHandshake } from "lucide-react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "Почему выбирают нас",
    reasons: [
      {
        icon: Zap,
        title: "Быстрая разработка",
        description: "Используем современные технологии для ускорения процесса разработки",
      },
      {
        icon: Shield,
        title: "Надежность",
        description: "Гарантируем качество и стабильность всех наших решений",
      },
      {
        icon: Clock,
        title: "Соблюдение сроков",
        description: "Всегда сдаем проекты вовремя, ценим ваше время",
      },
      {
        icon: HeartHandshake,
        title: "Поддержка 24/7",
        description: "Всегда на связи для решения любых вопросов",
      },
    ],
  },
  en: {
    title: "Why Choose Us",
    reasons: [
      {
        icon: Zap,
        title: "Fast Development",
        description: "Using modern technologies to accelerate the development process",
      },
      {
        icon: Shield,
        title: "Reliability",
        description: "We guarantee quality and stability of all our solutions",
      },
      {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Always deliver projects on time, we value your time",
      },
      {
        icon: HeartHandshake,
        title: "24/7 Support",
        description: "Always available to solve any issues",
      },
    ],
  },
}

export function WhyUsSection() {
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
    <section className="py-12 md:py-24 px-4 relative bg-card/30">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 glow-text">{t.title}</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {t.reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                <reason.icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-sm md:text-xl font-semibold mb-1 md:mb-2">{reason.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
