"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "소액도 매입 가능한가요?",
    a: "네, 가능합니다. 최소 거래 금액은 100 USDT부터이며, 소액이라도 차별 없이 신속하게 처리해 드립니다.",
  },
  {
    q: "주말이나 새벽에도 거래 되나요?",
    a: "물론입니다. 저희는 365일 24시간 연중무휴로 운영됩니다. 언제든지 문의 주시면 담당자가 즉시 응대합니다.",
  },
  {
    q: "개인정보는 안전한가요?",
    a: "거래에 필요한 최소한의 정보만 요청하며, 거래 완료 즉시 관련 데이터는 암호화되어 안전하게 폐기되거나 보안 서버에 격리됩니다.",
  },
  {
    q: "입금까지 정말 5분 안에 되나요?",
    a: "네, 블록체인 전송 확인 후 평균 4~5분 내로 입금됩니다. 트론(TRC-20) 네트워크를 사용하시면 더욱 빠릅니다.",
  },
  {
    q: "어떤 네트워크를 지원하나요?",
    a: "TRC-20(트론), ERC-20(이더리움), BEP-20(바이낸스) 네트워크를 모두 지원합니다. 단, 수수료가 낮은 TRC-20을 권장합니다.",
  },
  {
    q: "법인이나 대량 거래도 가능한가요?",
    a: "가능합니다. 5만 USDT 이상의 대량 거래나 법인 거래의 경우 별도 OTC 서비스를 통해 우대 환율을 적용해 드립니다.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">자주 묻는 질문</h2>
          <p className="text-muted-foreground">궁금하신 점을 빠르게 해결하세요.</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "border rounded-2xl overflow-hidden transition-all duration-300",
                open === i ? "border-primary/40 bg-card" : "border-border bg-card hover:border-border/80"
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
                    open === i && "rotate-180 text-primary"
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
