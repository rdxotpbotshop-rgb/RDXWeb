"use client"

import { useState, useEffect } from "react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    label: "Stack технологий",
    title: "Арсенал",
    highlight: "цифровых",
    titleEnd: "решений",
    subtitle: "Мощный набор инструментов для создания классных продуктов",
  },
  en: {
    label: "Tech Stack",
    title: "Arsenal of",
    highlight: "digital",
    titleEnd: "solutions",
    subtitle: "Powerful set of tools for creating amazing products",
  },
}

const technologies = [
  { name: "JavaScript", icon: "JS" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "TypeScript", icon: "TS" },
  { name: "HTML", icon: "HTML" },
  { name: "Express", icon: "express" },
  { name: "Nest", icon: "nest" },
  { name: "Next.js", icon: "NEXT.JS" },
  { name: "Vite", icon: "V" },
  { name: "Node.js", icon: "node" },
  { name: "PHP", icon: "php" },
  { name: "MongoDB", icon: "MongoDB" },
  { name: "FastAPI", icon: "FastAPI" },
  { name: "Go", icon: "Go" },
  { name: "Django", icon: "django" },
  { name: "Laravel", icon: "Laravel" },
  { name: "React", icon: "React" },
  { name: "GraphQL", icon: "◇" },
  { name: "CSS", icon: "CSS" },
  { name: "jQuery", icon: "jQuery" },
  { name: "Redux", icon: "Redux" },
]

export function TechStackSection() {
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
    <section className="py-12 md:py-24 px-4 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />

      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-3 md:px-4 py-1 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-4 md:mb-6">
            <span className="text-xs md:text-sm text-muted-foreground">{t.label}</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            {t.title}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{t.highlight}</span>
              <span className="absolute inset-0 border-2 border-primary/50 rounded-lg scale-110" />
            </span>{" "}
            {t.titleEnd}
          </h2>

          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-px bg-border/30 border border-border/30 rounded-lg overflow-hidden">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="aspect-square bg-background/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 flex items-center justify-center group cursor-pointer"
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-muted-foreground/60 group-hover:text-foreground/80 transition-colors mb-1 md:mb-2">
                  {tech.icon}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground/40 group-hover:text-muted-foreground transition-colors px-1">
                  {tech.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
