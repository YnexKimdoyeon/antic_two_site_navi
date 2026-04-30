"use client"

import { ShieldCheck, Zap, TrendingUp, Clock, Users } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { cn } from "@/lib/utils"

const ICONS = [ShieldCheck, Zap, TrendingUp, Clock, Users]

export default function WhySection({ brand }: { brand: Brand }) {
  const accentText = brand.key === "oncash" ? "text-blue-600" : "text-primary"
  const accentBorder = brand.key === "oncash" ? "border-blue-200" : "border-primary/30"
  const accentBg = brand.key === "oncash" ? "bg-blue-50" : "bg-primary/10"
  const accentBgHover = brand.key === "oncash" ? "group-hover:bg-blue-100" : "group-hover:bg-primary/20"
  const accentHoverBorder = brand.key === "oncash" ? "hover:border-blue-300" : "hover:border-primary/50"
  const accentHoverShadow = brand.key === "oncash" ? "hover:shadow-blue-100" : "hover:shadow-primary/5"

  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className={cn("text-sm font-semibold tracking-widest uppercase mb-3", accentText)}>{brand.whyLabel}</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">{brand.whyTitle}</h2>
          <p className="text-muted-foreground">{brand.whySubtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brand.features.map((f, idx) => {
            const Icon = ICONS[idx % ICONS.length]
            return (
              <div
                key={f.title}
                className={cn(
                  "group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300",
                  accentHoverBorder, accentHoverShadow
                )}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center transition-colors", accentBg, accentBgHover)}>
                    <Icon className={cn("w-5 h-5", accentText)} />
                  </div>
                  <span className={cn("text-xs px-2 py-0.5 rounded-full border font-medium", accentBorder, accentText, accentBg)}>
                    {f.badge}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
