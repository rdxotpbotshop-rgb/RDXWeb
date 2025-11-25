"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSelector, type Language } from "@/components/language-selector"
import { Menu, X, MessageSquare } from "lucide-react"
import Link from "next/link"

const translations = {
  ru: {
    services: "Услуги",
    portfolio: "Портфолио",
    about: "О нас",
    faq: "FAQ",
    contact: "Связаться",
    support: "Поддержка",
  },
  en: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About Us",
    faq: "FAQ",
    contact: "Contact",
    support: "Support",
  },
}

export function Header() {
  const [language, setLanguage] = useState<Language>("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations[language]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-primary/20 shadow-[0_8px_32px_rgba(138,120,255,0.1)]"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(138,120,255,0.3)] group-hover:shadow-[0_0_30px_rgba(138,120,255,0.6)] animate-glow">
              <span className="text-base md:text-xl font-bold font-mono bg-gradient-to-br from-white to-primary-foreground bg-clip-text text-transparent">
                RDX
              </span>
            </div>
            <span className="text-base md:text-xl font-bold glow-text">Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {[
              { href: "#services", label: t.services },
              { href: "#portfolio", label: t.portfolio },
              { href: "#about", label: t.about },
              { href: "#faq", label: t.faq },
              { href: "#support", label: t.support },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-xs lg:text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <LanguageSelector onLanguageChange={setLanguage} />
            <Button
              size="sm"
              className="hidden md:flex gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(138,120,255,0.5)] text-xs"
              asChild
            >
              <a href="https://t.me/RDXSTUDIO_bot" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
                {t.contact}
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-3 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
            <a
              href="#services"
              className="text-sm hover:text-primary transition-colors py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.services}
            </a>
            <a
              href="#portfolio"
              className="text-sm hover:text-primary transition-colors py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.portfolio}
            </a>
            <a
              href="#about"
              className="text-sm hover:text-primary transition-colors py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.about}
            </a>
            <a
              href="#faq"
              className="text-sm hover:text-primary transition-colors py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.faq}
            </a>
            <a
              href="#support"
              className="text-sm hover:text-primary transition-colors py-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.support}
            </a>
            <Button size="sm" className="gap-2 mt-1 text-xs" asChild>
              <a href="https://t.me/RDXSTUDIO_bot" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-3 h-3" />
                {t.contact}
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
