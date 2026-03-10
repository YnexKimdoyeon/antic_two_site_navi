"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Brand } from "@/lib/brand"

export default function FaqSection({ brand }: { brand: Brand }) {
  const [open, setOpen] = useState<number | null>(0)
  const accentText = brand.key === "oncash" ? "text-blue-600" : "text-primary"
  const accentBorder = brand.key === "oncash" ? "border-blue-300" : "border-primary/40"

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className={cn("text-sm font-semibold tracking-widest uppercase mb-3", accentText)}>FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">자주 묻는 질문</h2>
          <p className="text-muted-foreground">궁금하신 점을 빠르게 해결하세요.</p>
        </div>

        <div className="flex flex-col gap-3">
          {brand.faqs.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300 bg-card",
                open === i ? accentBorder : "border-border"
              )}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300",
                    open === i && cn("rotate-180", accentText)
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
