"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Bot, Code2, Zap, ArrowRight } from "lucide-react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "Услуги",
    subtitle: "Решения для вашего бизнеса",
    services: [
      {
        icon: Globe,
        title: "Сайты",
        description: "Современные адаптивные веб-сайты",
      },
      {
        icon: Bot,
        title: "Боты",
        description: "Telegram боты для автоматизации",
      },
      {
        icon: Code2,
        title: "Приложения",
        description: "Веб-приложения и SaaS",
      },
      {
        icon: Zap,
        title: "Интеграции",
        description: "API и платежные системы",
      },
    ],
    cta: "Заказать",
  },
  en: {
    title: "Services",
    subtitle: "Solutions for your business",
    services: [
      {
        icon: Globe,
        title: "Websites",
        description: "Modern responsive websites",
      },
      {
        icon: Bot,
        title: "Bots",
        description: "Telegram bots for automation",
      },
      {
        icon: Code2,
        title: "Apps",
        description: "Web applications and SaaS",
      },
      {
        icon: Zap,
        title: "Integrations",
        description: "APIs and payment systems",
      },
    ],
    cta: "Order",
  },
}

export function ServicesSection() {
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
    <section id="services" className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-12 md:mb-16 animate-in fade-in duration-1000">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 glow-text">{t.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="p-5 md:p-6 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:scale-105 lg:hover:scale-110 hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500 group cursor-pointer hover:shadow-[0_0_30px_rgba(138,120,255,0.3)] animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 animate-in fade-in duration-1000 delay-500">
          <Button
            size="lg"
            className="gap-2 hover:scale-105 lg:hover:scale-110 transition-all duration-500 hover:shadow-[0_0_30px_rgba(138,120,255,0.5)] w-full sm:w-auto"
            asChild
          >
            <a href="https://t.me/RDXSTUDIO_bot" target="_blank" rel="noopener noreferrer">
              {t.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
