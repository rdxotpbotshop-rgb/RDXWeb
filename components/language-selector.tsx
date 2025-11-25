"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export type Language = "ru" | "en"

export function LanguageSelector({ onLanguageChange }: { onLanguageChange?: (lang: Language) => void }) {
  const [language, setLanguage] = useState<Language>("ru")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as Language | null
    if (saved) {
      setLanguage(saved)
      onLanguageChange?.(saved)
    }
  }, [onLanguageChange])

  const toggleLanguage = () => {
    const newLang = language === "ru" ? "en" : "ru"
    setLanguage(newLang)
    localStorage.setItem("language", newLang)
    onLanguageChange?.(newLang)
  }

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      <Globe className="w-4 h-4" />
      <span className="font-mono uppercase">{language}</span>
    </Button>
  )
}
