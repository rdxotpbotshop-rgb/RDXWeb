"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap } from "lucide-react"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    subtitle: "Создаем цифровое будущее вашего бизнеса",
    cta: "Начать проект",
    learn: "Узнать больше",
  },
  en: {
    subtitle: "Building the digital future of your business",
    cta: "Start Project",
    learn: "Learn More",
  },
}

interface HeroSectionProps {
  showLaptopInitially?: boolean
}

export function HeroSection({ showLaptopInitially = false }: HeroSectionProps) {
  const [language, setLanguage] = useState<Language>("ru")
  const [showLaptop, setShowLaptop] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved) {
      setLanguage(saved)
    }

    if (showLaptopInitially) {
      setTimeout(() => setShowLaptop(true), 300)
    }

    const handleStorage = () => {
      const saved = localStorage.getItem("language") as Language | null
      if (saved) {
        setLanguage(saved)
      }
    }

    window.addEventListener("storage", handleStorage)
    const interval = setInterval(handleStorage, 100)

    return () => {
      window.removeEventListener("storage", handleStorage)
      clearInterval(interval)
    }
  }, [showLaptopInitially])

  const t = translations[language]

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-16 md:pt-20 px-4 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="container mx-auto z-10 relative max-w-7xl grid lg:grid-cols-2 gap-8 md:gap-12 items-center px-4 md:px-8">
        <div>
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-110 hover:border-primary/50 transition-all backdrop-blur-xl shadow-[0_0_30px_rgba(138,120,255,0.2)]">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-primary tracking-wide">PREMIUM DEVELOPMENT</span>
            <Code2 className="w-3 h-3 md:w-4 md:h-4 text-accent animate-pulse" />
          </div>

          <div className="mb-4 md:mb-5 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 relative inline-block group">
              <span className="relative z-10 bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                RDX Studio
              </span>
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 animate-pulse-glow -z-10" />
            </h1>
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mt-2">
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] tracking-widest">
                  DEVELOPMENT
                </span>
                <div className="absolute inset-0 blur-xl bg-gradient-to-r from-primary/30 to-accent/30 animate-glow -z-10" />
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-muted-foreground/80 max-w-md mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-300">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-xs sm:text-sm px-5 py-4 md:px-7 md:py-5 sm:hover:scale-110 transition-all duration-500 hover:shadow-[0_0_40px_rgba(138,120,255,0.6)] group relative overflow-hidden w-full sm:w-auto"
              asChild
            >
              <a href="https://t.me/RDXSTUDIO_bot" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10">{t.cta}</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-xs sm:text-sm px-5 py-4 md:px-7 md:py-5 border-primary/40 hover:border-primary sm:hover:scale-110 transition-all duration-500 bg-black/20 hover:bg-primary/10 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(138,120,255,0.3)] w-full sm:w-auto"
              asChild
            >
              <a href="#services">{t.learn}</a>
            </Button>
          </div>
        </div>

        <div
          className={`hidden lg:block relative transition-all duration-400 ${showLaptop ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
        >
          <div className="relative animate-float">
            {/* Laptop base */}
            <div className="relative perspective-1000">
              {/* Screen */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-t-2xl p-3 border-2 border-primary/30 shadow-[0_0_60px_rgba(138,120,255,0.4)] backdrop-blur-sm">
                {/* Camera notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />

                <div className="bg-black/90 rounded-lg p-4 h-[300px] overflow-hidden">
                  {/* Editor header */}
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-100" />
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-200" />
                  </div>

                  {/* Animated code lines */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex gap-2 animate-in slide-in-from-left duration-700">
                      <span className="text-purple-400">import</span>
                      <span className="text-blue-400">React</span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400">'react'</span>
                    </div>
                    <div className="flex gap-2 animate-in slide-in-from-left duration-700 delay-100">
                      <span className="text-purple-400">const</span>
                      <span className="text-yellow-400">App</span>
                      <span className="text-white">=</span>
                      <span className="text-blue-400">()</span>
                      <span className="text-purple-400">=&gt;</span>
                      <span className="text-blue-400">{"{"}</span>
                    </div>
                    <div className="flex gap-2 ml-4 animate-in slide-in-from-left duration-700 delay-200">
                      <span className="text-purple-400">return</span>
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-green-400">div</span>
                      <span className="text-blue-400">{">"}</span>
                    </div>
                    <div className="flex gap-2 ml-8 animate-in slide-in-from-left duration-700 delay-300">
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-400">h1</span>
                      <span className="text-blue-400">{">"}</span>
                      <span className="text-white animate-pulse">RDX Studio</span>
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-yellow-400">/h1</span>
                      <span className="text-blue-400">{">"}</span>
                    </div>
                    <div className="flex gap-2 ml-8 animate-in slide-in-from-left duration-700 delay-400">
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-green-400">p</span>
                      <span className="text-blue-400">{">"}</span>
                      <span className="text-gray-400">Premium Development</span>
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-green-400">/p</span>
                      <span className="text-blue-400">{">"}</span>
                    </div>
                    <div className="flex gap-2 ml-4 animate-in slide-in-from-left duration-700 delay-500">
                      <span className="text-blue-400">{"<"}</span>
                      <span className="text-green-400">/div</span>
                      <span className="text-blue-400">{">"}</span>
                    </div>
                    <div className="animate-in slide-in-from-left duration-700 delay-600">
                      <span className="text-blue-400">{"}"}</span>
                    </div>

                    {/* Blinking cursor */}
                    <div className="inline-block w-2 h-4 bg-primary animate-pulse" />
                  </div>

                  {/* Loading bar animation at bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-1 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent animate-progress" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop keyboard/base */}
              <div className="h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl border-2 border-t-0 border-primary/20 shadow-lg" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
