"use client"

import { useState, useEffect } from "react"
import { MessageSquare, Send } from "lucide-react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    description: "Профессиональная разработка сайтов и Telegram-ботов",
    rights: "Все права защищены.",
    services: "Услуги",
    webDev: "Разработка сайтов",
    botDev: "Telegram боты",
    webApps: "Веб-приложения",
    integrations: "Интеграции",
    company: "Компания",
    about: "О нас",
    portfolio: "Портфолио",
    contact: "Контакты",
    support: "Поддержка",
  },
  en: {
    description: "Professional web development and Telegram bots",
    rights: "All rights reserved.",
    services: "Services",
    webDev: "Web Development",
    botDev: "Telegram Bots",
    webApps: "Web Applications",
    integrations: "Integrations",
    company: "Company",
    about: "About Us",
    portfolio: "Portfolio",
    contact: "Contact",
    support: "Support",
  },
}

export function Footer() {
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
    <footer className="border-t border-primary/10 py-12 px-4 relative">
      <div className="container mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold font-mono">RDX</span>
              </div>
              <span className="text-xl font-bold">Studio</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.services}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.webDev}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.botDev}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.webApps}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.integrations}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.company}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  {t.about}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  {t.portfolio}
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-primary transition-colors">
                  {t.contact}
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-primary transition-colors">
                  {t.support}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.contact}</h4>
            <div className="flex gap-3">
              <a
                href="https://t.me/RDXSTUDIO_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Send className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://t.me/RDXSTUDIO_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 RDX Studio. {t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
