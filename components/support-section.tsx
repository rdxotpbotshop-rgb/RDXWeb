"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send } from "lucide-react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "Техническая поддержка",
    subtitle: "Мы всегда готовы помочь вам",
    telegram: "Telegram поддержка",
    telegramDesc: "Свяжитесь с нами в Telegram для быстрой помощи",
    contact: "Связаться",
    bot: "Telegram бот",
    botDesc: "Создать техническое задание через нашего бота",
    openBot: "Открыть бота",
  },
  en: {
    title: "Technical Support",
    subtitle: "We are always ready to help you",
    telegram: "Telegram Support",
    telegramDesc: "Contact us on Telegram for quick assistance",
    contact: "Contact",
    bot: "Telegram Bot",
    botDesc: "Create technical specification through our bot",
    openBot: "Open Bot",
  },
}

export function SupportSection() {
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
    <section id="support" className="py-12 md:py-24 px-4 relative">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 glow-text">{t.title}</h2>
          <p className="text-sm md:text-lg text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <Card className="p-5 md:p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 md:mb-4">
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">{t.telegram}</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">{t.telegramDesc}</p>
            <Button className="w-full gap-2" asChild>
              <a href="https://t.me/RdxStudioCeo" target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4" />
                {t.contact}
              </a>
            </Button>
          </Card>

          <Card className="p-5 md:p-8 bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent/10 flex items-center justify-center mb-3 md:mb-4">
              <Send className="w-6 h-6 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">{t.bot}</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">{t.botDesc}</p>
            <Button
              variant="outline"
              className="w-full gap-2 border-accent/30 hover:border-accent bg-transparent"
              asChild
            >
              <a href="https://t.me/RDXSTUDIO_bot" target="_blank" rel="noopener noreferrer">
                <Send className="w-4 h-4" />
                {t.openBot}
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
