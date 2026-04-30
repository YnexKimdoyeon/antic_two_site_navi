import { Building2, AlertTriangle, MapPin, Wallet, BookOpen, ArrowRight } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { cn } from "@/lib/utils"

const GUIDE_ICONS = [Building2, AlertTriangle, MapPin, Wallet, BookOpen]

export default function GuideSection({ brand }: { brand: Brand }) {
  const accentText = brand.key === "oncash" ? "text-blue-600" : "text-primary"
  const accentBorder = brand.key === "oncash" ? "border-blue-200 hover:border-blue-300" : "hover:border-primary/40"
  const accentBg = brand.key === "oncash" ? "bg-blue-50" : "bg-primary/10"
  const accentBgHover = brand.key === "oncash" ? "group-hover:bg-blue-100" : "group-hover:bg-primary/20"
  const accentTagBorder = brand.key === "oncash" ? "border-blue-200" : "border-primary/20"
  const accentTagBg = brand.key === "oncash" ? "bg-blue-50" : "bg-primary/10"

  return (
    <section id="guide" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className={cn("text-sm font-semibold tracking-widest uppercase mb-3", accentText)}>GUIDES</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">안전한 거래를 위한 가이드</h2>
          <p className="text-muted-foreground">처음 거래하시는 분도 안전하게 거래하실 수 있도록 안내합니다.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {brand.guides.map((g, idx) => {
            const Icon = GUIDE_ICONS[idx % GUIDE_ICONS.length]
            return (
              <button
                key={g.title}
                className={cn(
                  "group text-left bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300",
                  accentBorder
                )}
              >
                <div className="flex items-start gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors", accentBg, accentBgHover)}>
                    <Icon className={cn("w-5 h-5", accentText)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground text-sm">{g.title}</h3>
                      <span className={cn("text-xs px-2 py-0.5 rounded-full border font-medium flex-shrink-0", accentTagBorder, accentText, accentTagBg)}>
                        {g.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{g.description}</p>
                  </div>
                  <ArrowRight className={cn("w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5", `group-hover:${accentText}`)} />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
