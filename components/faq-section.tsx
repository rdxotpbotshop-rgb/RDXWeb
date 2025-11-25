"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Language } from "@/components/language-selector"

const translations = {
  ru: {
    title: "Часто задаваемые вопросы",
    faqs: [
      {
        question: "Какие гарантии вы предоставляете?",
        answer: "Гарантия на 6 месяцев.",
      },
      {
        question: "Можно ли внести изменения после завершения проекта?",
        answer: "Да, конечно!",
      },
      {
        question: "Какие технологии вы используете?",
        answer:
          "Мы работаем с современным стеком: Next.js, React, TypeScript для фронтенда; Node.js, Python для бэкенда; PostgreSQL, MongoDB для баз данных. Выбор технологий зависит от требований проекта.",
      },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "What guarantees do you provide?",
        answer: "6 months warranty.",
      },
      {
        question: "Can I make changes after project completion?",
        answer: "Yes, of course!",
      },
      {
        question: "What technologies do you use?",
        answer:
          "We work with modern stack: Next.js, React, TypeScript for frontend; Node.js, Python for backend; PostgreSQL, MongoDB for databases. Technology choice depends on project requirements.",
      },
    ],
  },
}

export function FAQSection() {
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
    <section id="faq" className="py-12 md:py-24 px-4 relative bg-card/30">
      <div className="container mx-auto z-10 relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 glow-text">{t.title}</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
            {t.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-3 md:px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 md:py-6 text-sm md:text-base">
                  <span className="font-semibold pr-2 md:pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground pb-3 md:pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
