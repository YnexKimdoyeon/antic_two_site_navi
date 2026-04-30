"use client"

import { useState } from "react"
import { MessageCircle, Send, Wallet, CheckCircle2, ClipboardList, ArrowRight, ArrowDownLeft, ArrowUpRight } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { SITE_CONFIG } from "@/site.config"
import { cn } from "@/lib/utils"

const STEP_ICONS = [MessageCircle, Wallet, CheckCircle2, ClipboardList]

type Mode = "buy" | "sell"
type ContactConfig = { channelTalk: string; openKakao: string; telegram: string; phone: string }

export default function ProcessSection({ brand }: { brand: Brand }) {
  const [mode, setMode] = useState<Mode>("buy")
  const isOncash = brand.key === "oncash"
  const config = SITE_CONFIG[brand.key as keyof typeof SITE_CONFIG] as ContactConfig
  const accentText = isOncash ? "text-blue-600" : "text-primary"
  const accentTabActive = isOncash ? "bg-blue-600 text-white" : "bg-primary text-primary-foreground"
  const accentTabInactive = "bg-background text-muted-foreground hover:text-foreground border border-border"
  const btnCls = isOncash ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-primary hover:opacity-90 text-primary-foreground"

  const steps = mode === "buy" ? brand.buySteps : brand.sellSteps

  return (
    <section id="process" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className={cn("text-sm font-semibold tracking-widest uppercase mb-3", accentText)}>SIMPLE PROCESS</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">간편한 거래 절차</h2>
          <p className="text-muted-foreground">처음이셔도 걱정 마세요. 3단계면 충분합니다.</p>
        </div>

        {/* 매입/판매 탭 */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setMode("buy")}
            className={cn("flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all", mode === "buy" ? accentTabActive : accentTabInactive)}
          >
            <ArrowDownLeft className="w-4 h-4" />
            매입 절차 (팔기)
          </button>
          <button
            onClick={() => setMode("sell")}
            className={cn("flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all", mode === "sell" ? accentTabActive : accentTabInactive)}
          >
            <ArrowUpRight className="w-4 h-4" />
            판매 절차 (사기)
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {steps.map((s, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length]
            return (
              <div key={s.step} className="flex-1 flex flex-col md:flex-row items-center gap-4">
                <div className={cn(
                  "flex-1 w-full bg-gradient-to-br border rounded-2xl p-6 flex flex-col gap-4",
                  s.colorFrom, s.colorTo, s.border
                )}>
                  <div className="flex items-center justify-between">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", s.iconBg)}>
                      <Icon className={cn("w-5 h-5", s.iconColor)} />
                    </div>
                    <span className="text-3xl font-black text-muted-foreground/25">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1.5">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 rotate-90 md:rotate-0" />
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href={config.channelTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1b1c1e] text-white font-bold text-sm hover:opacity-85 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.28 2 11.5c0 2.857 1.347 5.42 3.474 7.155L4.5 22l3.68-1.84A10.86 10.86 0 0 0 12 21c5.523 0 10-4.28 10-9.5S17.523 2 12 2Z"/>
            </svg>
            채널톡으로 단가 확인
          </a>
          <a
            href={config.openKakao}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FEE500] text-[#3A1D1D] font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            오픈카톡으로 단가 확인
          </a>
          <a
            href={config.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105", btnCls)}
          >
            <Send className="w-4 h-4 shrink-0" />
            텔레그램으로 단가 확인
          </a>
        </div>
      </div>
    </section>
  )
}
