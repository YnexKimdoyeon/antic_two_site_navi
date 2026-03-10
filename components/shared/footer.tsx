import { Send, Phone, MessageCircle } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { SITE_CONFIG } from "@/site.config"
import { cn } from "@/lib/utils"

type ContactConfig = { channelTalk: string; openKakao: string; telegram: string; phone: string }

export default function Footer({ brand }: { brand: Brand }) {
  const config = SITE_CONFIG[brand.key as keyof typeof SITE_CONFIG] as ContactConfig
  const biz = SITE_CONFIG.business

  const accentText = brand.key === "oncash" ? "text-blue-600" : "text-primary"
  const accentBg = brand.key === "oncash" ? "bg-blue-600" : "bg-primary"

  return (
    <footer className="border-t border-border bg-secondary/60 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top: Brand + Nav + Contact */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className={cn("w-7 h-7 rounded-full flex items-center justify-center text-white", accentBg)}>
                <span className="font-black text-xs">{brand.symbol}</span>
              </div>
              <span className="text-foreground font-bold">
                {brand.name}<span className={accentText}>{brand.nameHighlight}</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed whitespace-pre-line">
              {brand.footerDesc}
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">서비스</h4>
              <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
                <li><a href="#why" className="hover:text-foreground transition-colors">왜 {brand.name}{brand.nameHighlight}?</a></li>
                <li><a href="#process" className="hover:text-foreground transition-colors">거래 절차</a></li>
                <li><a href="#guide" className="hover:text-foreground transition-colors">이용 가이드</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">문의</h4>
              <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
                <li>
                  <a href={config.channelTalk} target="_blank" rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.28 2 11.5c0 2.857 1.347 5.42 3.474 7.155L4.5 22l3.68-1.84A10.86 10.86 0 0 0 12 21c5.523 0 10-4.28 10-9.5S17.523 2 12 2Z"/>
                    </svg>
                    채널톡 상담
                  </a>
                </li>
                <li>
                  <a href={config.openKakao} target="_blank" rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 shrink-0 text-yellow-500" />
                    오픈카톡 상담
                  </a>
                </li>
                <li>
                  <a href={config.telegram} target="_blank" rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors flex items-center gap-1.5">
                    <Send className={cn("w-3.5 h-3.5 shrink-0", accentText)} />
                    텔레그램 상담
                  </a>
                </li>
                <li>
                  <a href={`tel:${config.phone}`}
                    className="hover:text-foreground transition-colors flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />
                    {config.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Info */}
        <div className="border-t border-border pt-6 mb-4">
          <p className="text-xs text-muted-foreground leading-6">
            <span className="font-semibold text-foreground">{biz.companyName}</span>
            {" · "}대표: {biz.ceo}
            {" · "}사업자등록번호: {biz.bizNumber}
            {" · "}주소: {biz.address}
            <br />
            이메일: <a href={`mailto:${biz.email}`} className="hover:text-foreground transition-colors">{biz.email}</a>
          </p>
        </div>

        {/* Copyright + Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>{brand.copyright}</p>
          <div className="flex gap-4">
            <a href={biz.terms} className="hover:text-foreground transition-colors">이용약관</a>
            <a href={biz.privacy} className="hover:text-foreground transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
