"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "О нас",
    description:
      "RDX Studio — это команда профессионалов, специализирующаяся на создании современных веб-решений и автоматизации бизнес-процессов через Telegram-ботов. Мы превращаем идеи в реальность, используя передовые технологии и лучшие практики разработки.",
    mission: "Наша миссия",
    missionText:
      "Создавать инновационные цифровые решения, которые помогают бизнесу расти и развиваться в современном цифровом мире.",
    experience: "Более 50 успешных проектов",
    clients: "100+ довольных клиентов",
    years: "5 лет опыта",
  },
  en: {
    title: "About Us",
    description:
      "RDX Studio is a team of professionals specializing in creating modern web solutions and automating business processes through Telegram bots. We turn ideas into reality using cutting-edge technologies and best development practices.",
    mission: "Our Mission",
    missionText:
      "Create innovative digital solutions that help businesses grow and develop in the modern digital world.",
    experience: "Over 50 successful projects",
    clients: "100+ satisfied clients",
    years: "5 years of experience",
  },
}

export function AboutSection() {
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
    <section id="about" className="py-12 md:py-24 px-4 relative">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 glow-text">{t.title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-5 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20 mb-4 md:mb-8">
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-8">{t.description}</p>
            <div className="border-t border-primary/20 pt-4 md:pt-8">
              <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 text-primary">{t.mission}</h3>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">{t.missionText}</p>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <Card className="p-4 md:p-6 bg-primary/10 backdrop-blur-sm border-primary/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">50+</div>
              <p className="text-xs md:text-sm text-muted-foreground">{t.experience}</p>
            </Card>
            <Card className="p-4 md:p-6 bg-accent/10 backdrop-blur-sm border-accent/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-2xl md:text-4xl font-bold text-accent mb-1 md:mb-2">100+</div>
              <p className="text-xs md:text-sm text-muted-foreground">{t.clients}</p>
            </Card>
            <Card className="p-4 md:p-6 bg-primary/10 backdrop-blur-sm border-primary/20 text-center hover:scale-105 transition-all duration-300">
              <div className="text-2xl md:text-4xl font-bold text-primary mb-1 md:mb-2">5</div>
              <p className="text-xs md:text-sm text-muted-foreground">{t.years}</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
