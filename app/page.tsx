"use client"

import { useState } from "react"
import { ParticleBackground } from "@/components/particle-background"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { WhyUsSection } from "@/components/why-us-section"
import { AdditionalServicesSection } from "@/components/additional-services-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { SupportSection } from "@/components/support-section"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LaptopLanguageSelector } from "@/components/laptop-language-selector"
import type { Language } from "@/components/language-selector"

export default function Home() {
  const [showLanguageSelector, setShowLanguageSelector] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLanguageSelect = (lang: Language) => {
    setShowLanguageSelector(false)
    setTimeout(() => {
      setShowContent(true)
      window.dispatchEvent(new Event("storage"))
    }, 100)
  }

  return (
    <main className="min-h-screen relative">
      {showLanguageSelector && <LaptopLanguageSelector onLanguageSelect={handleLanguageSelect} />}

      <ParticleBackground />
      <HeroSection showLaptopInitially={!showLanguageSelector} />

      <div
        className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Header />
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <PortfolioSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <TechStackSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <WhyUsSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <AdditionalServicesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <FAQSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <SupportSection />
        </ScrollReveal>
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </main>
  )
}
