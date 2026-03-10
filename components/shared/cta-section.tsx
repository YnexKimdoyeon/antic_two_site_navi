import { Send, Phone, MessageCircle } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { SITE_CONFIG } from "@/site.config"
import { cn } from "@/lib/utils"

type ContactConfig = { channelTalk: string; openKakao: string; telegram: string; phone: string }

export default function CtaSection({ brand }: { brand: Brand }) {
  const config = SITE_CONFIG[brand.key as keyof typeof SITE_CONFIG] as ContactConfig

  const isOncash = brand.key === "oncash"
  const btnCls = isOncash
    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
    : "bg-primary hover:opacity-90 text-primary-foreground shadow-primary/20"
  const borderCls = isOncash ? "border-blue-200" : "border-primary/30"
  const glowColor = isOncash ? "#2563eb" : "oklch(0.55 0.18 155)"
  const accentText = isOncash ? "text-blue-600" : "text-primary"

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={cn("relative rounded-3xl border bg-card overflow-hidden p-10 sm:p-14 text-center", borderCls)}>
          <div
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{ background: `radial-gradient(ellipse at 50% 100%, ${glowColor}, transparent 70%)` }}
          />
          <div className="relative">
            <span className={cn("inline-block mb-4 text-xs font-semibold tracking-widest uppercase", accentText)}>
              지금 바로 문의
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-balance mb-4">
              {brand.ctaTitle[0]}<br />
              <span className={accentText}>{brand.name}{brand.nameHighlight}</span>이 기다리고 있습니다
            </h2>
            <p className="text-muted-foreground mb-3 max-w-xl mx-auto leading-relaxed">
              복잡한 절차 없이, 지금 바로 문의하세요.<br />
              단가는 시세에 따라 변동되므로 실시간 상담으로 확인해 드립니다.
            </p>
            <p className={cn("text-sm font-semibold mb-10", accentText)}>
              상담 후 5분 안에 현금이 통장에 입금됩니다.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {/* 채널톡 */}
              <a
                href={config.channelTalk}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-xl bg-[#1b1c1e] text-white font-bold hover:opacity-85 transition-all hover:scale-105 shadow-lg shadow-black/10"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.28 2 11.5c0 2.857 1.347 5.42 3.474 7.155L4.5 22l3.68-1.84A10.86 10.86 0 0 0 12 21c5.523 0 10-4.28 10-9.5S17.523 2 12 2Z"/>
                </svg>
                채널톡 상담
              </a>
              {/* 오픈카톡 */}
              <a
                href={config.openKakao}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-xl bg-[#FEE500] text-[#3A1D1D] font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-yellow-200"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                오픈카톡 상담
              </a>
              {/* 텔레그램 */}
              <a
                href={config.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("flex items-center gap-2 px-7 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg", btnCls)}
              >
                <Send className="w-5 h-5 shrink-0" />
                텔레그램 상담
              </a>
              {/* 전화 */}
              <a
                href={`tel:${config.phone}`}
                className="flex items-center gap-2 px-7 py-4 rounded-xl border border-border bg-white text-foreground font-bold hover:border-gray-300 hover:bg-secondary transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5 shrink-0" />
                {config.phone}
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              운영시간: 24시간 365일 연중무휴 · 평균 응답 시간 1분 이내
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
