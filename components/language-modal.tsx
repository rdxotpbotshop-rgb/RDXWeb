"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export type Language = "ru" | "en"

interface LanguageModalProps {
  onLanguageSelect: (lang: Language) => void
}

export function LanguageModal({ onLanguageSelect }: LanguageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if language has been selected before
    const hasSelectedLanguage = localStorage.getItem("language")
    if (!hasSelectedLanguage) {
      setIsOpen(true)
    }
  }, [])

  const handleLanguageSelect = (lang: Language) => {
    localStorage.setItem("language", lang)
    setIsOpen(false)
    onLanguageSelect(lang)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-md px-4"
          >
            <div className="bg-gradient-to-br from-card via-card/95 to-card/90 rounded-2xl p-8 border border-primary/20 shadow-2xl">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">RDX</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Выберите язык
              </h2>
              <p className="text-center text-muted-foreground mb-8">Choose your language</p>

              {/* Language Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => handleLanguageSelect("ru")}
                  className="w-full h-14 text-lg font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                  size="lg"
                >
                  🇷🇺 Русский
                </Button>
                <Button
                  onClick={() => handleLanguageSelect("en")}
                  className="w-full h-14 text-lg font-medium bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                  size="lg"
                >
                  🇬🇧 English
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
