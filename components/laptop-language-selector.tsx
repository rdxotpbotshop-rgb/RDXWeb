"use client"

import { useState } from "react"
import type { Language } from "@/components/language-selector"

interface LaptopLanguageSelectorProps {
  onLanguageSelect: (lang: Language) => void
}

export function LaptopLanguageSelector({ onLanguageSelect }: LaptopLanguageSelectorProps) {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false)

  const handleLanguageSelect = (lang: Language) => {
    setIsAnimatingOut(true)
    localStorage.setItem("language", lang)

    setTimeout(() => {
      onLanguageSelect(lang)
    }, 100)
  }

  return (
    <div
      className={`fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center transition-all duration-200 p-4 ${isAnimatingOut ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className={`relative transition-all duration-200 ${isAnimatingOut ? "scale-50 md:translate-x-[50vw] md:translate-y-[20vh]" : "scale-100"}`}
      >
        <div className="relative perspective-1000">
          {/* Screen - responsive sizing */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-t-2xl p-2 md:p-3 border-2 border-primary/30 shadow-[0_0_80px_rgba(138,120,255,0.6)] backdrop-blur-sm w-[90vw] max-w-[600px]">
            {/* Camera notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full" />

            <div className="bg-black/90 rounded-lg p-4 md:p-8 min-h-[250px] md:h-[300px] flex flex-col items-center justify-center gap-4 md:gap-6">
              <div className="mb-2 md:mb-4 text-center">
                <h1 className="text-2xl md:text-4xl font-black mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  RDX Studio
                </h1>
                <p className="text-muted-foreground text-xs md:text-sm">Welcome / Добро пожаловать</p>
              </div>

              <h2 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4">Choose Your Language</h2>

              <div className="flex gap-3 md:gap-4">
                <button
                  onClick={() => handleLanguageSelect("ru")}
                  className="group px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_40px_rgba(138,120,255,0.8)] flex flex-col items-center gap-2"
                >
                  <span className="text-3xl md:text-4xl">🇷🇺</span>
                  <span className="text-base md:text-lg">Русский</span>
                </button>
                <button
                  onClick={() => handleLanguageSelect("en")}
                  className="group px-6 md:px-8 py-4 md:py-5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-[0_0_40px_rgba(138,120,255,0.8)] flex flex-col items-center gap-2"
                >
                  <span className="text-3xl md:text-4xl">🇬🇧</span>
                  <span className="text-base md:text-lg">English</span>
                </button>
              </div>
            </div>
          </div>

          {/* Laptop keyboard/base */}
          <div className="h-3 md:h-4 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl border-2 border-t-0 border-primary/20 shadow-lg" />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl -z-10 animate-pulse-glow" />
        </div>
      </div>
    </div>
  )
}
