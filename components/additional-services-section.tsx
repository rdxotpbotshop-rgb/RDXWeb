"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Globe, Server } from "lucide-react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "Дополнительные услуги",
    services: [
      {
        icon: Globe,
        title: "🆕 Регистрация домена",
        description: "Поможем подобрать и зарегистрировать идеальный домен для вашего проекта",
      },
      {
        icon: Server,
        title: "🌍 Установка проекта на домен",
        description: "Полная настройка хостинга, SSL сертификатов и деплой вашего проекта",
      },
    ],
  },
  en: {
    title: "Additional Services",
    services: [
      {
        icon: Globe,
        title: "🆕 Domain Registration",
        description: "Help you choose and register the perfect domain for your project",
      },
      {
        icon: Server,
        title: "🌍 Project Deployment",
        description: "Full hosting setup, SSL certificates and deployment of your project",
      },
    ],
  },
}

export function AdditionalServicesSection() {
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
    <section className="py-24 px-4 relative">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">{t.title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
