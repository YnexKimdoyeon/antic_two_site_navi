"use client"

import { useState } from "react"
import { MessageCircle, Send, TrendingUp, ArrowDownLeft, ArrowUpRight } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { SITE_CONFIG } from "@/site.config"
import { cn } from "@/lib/utils"

type Mode = "buy" | "sell"
type ContactConfig = { channelTalk: string; openKakao: string; telegram: string; phone: string }

function ServiceCard({ brand, mode, config }: { brand: Brand; mode: Mode; config: ContactConfig }) {
  const isTether = brand.key === "tether"
  const isOncash = brand.key === "oncash"
  const accentText = isOncash ? "text-blue-600" : "text-primary"
  const accentBg = isOncash ? "bg-blue-600 hover:bg-blue-700" : "bg-primary hover:opacity-90"
  const accentBgLight = isOncash ? "bg-blue-50" : "bg-primary/10"
  const accentBorder = isOncash ? "border-blue-100" : "border-primary/20"
  const accentTextLight = isOncash ? "text-blue-700" : "text-primary"

  const steps = mode === "buy" ? brand.buySteps : brand.sellSteps

  const buyTitle = isTether ? "테더 → 원화" : "온캐시 → 원화"
  const sellTitle = isTether ? "원화 → 테더" : "원화 → 온캐시"
  const buyDesc = isTether
    ? "보유한 테더를 원화로 즉시 현금화"
    : "보유한 온캐시를 원화로 즉시 현금화"
  const sellDesc = isTether
    ? "원화로 테더를 최저가에 구매"
    : "원화로 온캐시를 최저가에 구매"

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-gray-100">
      {/* 매입/판매 미니 설명 */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className={cn("rounded-xl p-3 border", mode === "buy" ? accentBgLight + " " + accentBorder : "bg-secondary border-border")}>
          <div className="flex items-center gap-1.5 mb-1">
            <ArrowDownLeft className={cn("w-3.5 h-3.5", mode === "buy" ? accentText : "text-muted-foreground")} />
            <span className={cn("text-xs font-semibold", mode === "buy" ? accentText : "text-muted-foreground")}>매입</span>
          </div>
          <p className={cn("text-[11px] leading-relaxed", mode === "buy" ? accentTextLight : "text-muted-foreground")}>
            {buyTitle}<br />{buyDesc}
          </p>
        </div>
        <div className={cn("rounded-xl p-3 border", mode === "sell" ? accentBgLight + " " + accentBorder : "bg-secondary border-border")}>
          <div className="flex items-center gap-1.5 mb-1">
            <ArrowUpRight className={cn("w-3.5 h-3.5", mode === "sell" ? accentText : "text-muted-foreground")} />
            <span className={cn("text-xs font-semibold", mode === "sell" ? accentText : "text-muted-foreground")}>판매</span>
          </div>
          <p className={cn("text-[11px] leading-relaxed", mode === "sell" ? accentTextLight : "text-muted-foreground")}>
            {sellTitle}<br />{sellDesc}
          </p>
        </div>
      </div>

      {/* 단가 안내 */}
      <div className={cn("rounded-xl border p-4 mb-5", accentBgLight, accentBorder)}>
        <div className="flex items-start gap-2.5">
          <TrendingUp className={cn("w-4 h-4 mt-0.5 flex-shrink-0", accentText)} />
          <div>
            <p className={cn("text-xs font-bold mb-0.5", accentTextLight)}>단가는 실시간으로 변동됩니다</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              시장 상황에 따라 단가가 수시로 변동되므로<br />
              상담 문의 시 현재 최적 단가를 즉시 안내해 드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* 절차 요약 */}
      <div className="flex flex-col gap-2 mb-5">
        {steps.map((s, i) => (
          <div key={s.step} className="flex items-center gap-3">
            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0", accentBgLight, accentText)}>
              {i + 1}
            </div>
            <div>
              <span className="text-xs font-semibold text-foreground">{s.title}</span>
              <span className="text-xs text-muted-foreground ml-1.5">{s.description.split(".")[0]}.</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA 버튼 */}
      <div className="flex flex-col gap-2">
        <a
          href={config.channelTalk}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02] bg-[#1b1c1e] text-white hover:opacity-85"
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
          className="w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02] bg-[#FEE500] text-[#3A1D1D] hover:opacity-90"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          오픈카톡으로 단가 확인
        </a>
        <a
          href={config.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 hover:scale-[1.02] text-white", accentBg)}
        >
          <Send className="w-4 h-4 shrink-0" />
          텔레그램으로 단가 확인
        </a>
      </div>
    </div>
  )
}

export default function HeroSection({ brand }: { brand: Brand }) {
  const [mode, setMode] = useState<Mode>("buy")
  const isOncash = brand.key === "oncash"
  const config = SITE_CONFIG[brand.key as keyof typeof SITE_CONFIG] as ContactConfig
  const accentText = isOncash ? "text-blue-600" : "text-primary"
  const accentBg = isOncash ? "bg-blue-600 hover:bg-blue-700" : "bg-primary hover:opacity-90"
  const accentTabActive = isOncash ? "bg-blue-600 text-white" : "bg-primary text-primary-foreground"
  const accentTabInactive = "bg-secondary text-muted-foreground hover:text-foreground"
  const glowColor = isOncash ? "#2563eb" : "oklch(0.55 0.18 155)"

  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${glowColor}, transparent 70%)` }}
      />

      <div className="max-w-6xl mx-auto">
        {/* 태그 */}
        <div className="flex justify-center mb-6">
          <span className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wide", isOncash ? "border-blue-200 bg-blue-50 text-blue-600" : "border-primary/40 bg-primary/10 text-primary")}>
            <TrendingUp className="w-3.5 h-3.5" />
            {brand.tagline}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 텍스트 + 탭 */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-balance mb-4">
              {brand.heroTitle[0]}<br />
              <span className={accentText}>{brand.heroTitle[1]}</span><br />
              <span className="text-3xl sm:text-4xl font-bold text-muted-foreground">{brand.heroSubtitle}</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base whitespace-pre-line">
              {brand.heroDesc}
            </p>

            {/* 매입/판매 탭 */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setMode("buy")}
                className={cn("flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all", mode === "buy" ? accentTabActive : accentTabInactive)}
              >
                <ArrowDownLeft className="w-4 h-4" />
                매입 (팔기)
              </button>
              <button
                onClick={() => setMode("sell")}
                className={cn("flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all", mode === "sell" ? accentTabActive : accentTabInactive)}
              >
                <ArrowUpRight className="w-4 h-4" />
                판매 (사기)
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={config.channelTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b1c1e] text-white font-bold text-sm hover:opacity-85 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.28 2 11.5c0 2.857 1.347 5.42 3.474 7.155L4.5 22l3.68-1.84A10.86 10.86 0 0 0 12 21c5.523 0 10-4.28 10-9.5S17.523 2 12 2Z"/>
                </svg>
                채널톡
              </a>
              <a
                href={config.openKakao}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FEE500] text-[#3A1D1D] font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                오픈카톡
              </a>
              <a
                href={config.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105", accentBg)}
              >
                <Send className="w-4 h-4 shrink-0" />
                텔레그램
              </a>
            </div>
          </div>

          {/* 오른쪽: 서비스 카드 */}
          <div>
            <ServiceCard brand={brand} mode={mode} config={config} />
          </div>
        </div>
      </div>
    </section>
  )
}
