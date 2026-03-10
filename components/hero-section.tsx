"use client"

import { useState, useEffect } from "react"
import { ArrowRight, MessageCircle, Send, TrendingUp } from "lucide-react"

const USDT_RATE = 1462

function formatKRW(n: number) {
  return n.toLocaleString("ko-KR")
}

export default function HeroSection() {
  const [amount, setAmount] = useState("")
  const [recentTx, setRecentTx] = useState({ phone: "010-****-82xx", usdt: 3500 })

  // Live ticker simulation
  useEffect(() => {
    const phones = ["010-****-12xx", "010-****-45xx", "010-****-78xx", "010-****-93xx"]
    const amounts = [500, 1000, 2000, 3500, 5000, 10000]
    const interval = setInterval(() => {
      setRecentTx({
        phone: phones[Math.floor(Math.random() * phones.length)],
        usdt: amounts[Math.floor(Math.random() * amounts.length)],
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const krwAmount = amount ? Math.floor(Number(amount) * USDT_RATE) : 0

  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, oklch(0.55 0.18 155), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-wide">
            <TrendingUp className="w-3.5 h-3.5" />
            No.1 USDT Exchange · 재방문율 1위
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-balance mb-4">
              가장 안전한<br />
              <span className="text-primary">테더 매입</span><br />
              <span className="text-3xl sm:text-4xl font-bold text-muted-foreground">5분 내 현금화 완료</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              복잡한 가입 없이, 3자 사기 걱정 없이.<br />
              24시간 365일 실시간 시세로 즉시 매도하세요.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FEE500] text-[#3A1D1D] font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                카카오톡 문의
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
              >
                <Send className="w-4 h-4" />
                텔레그램 상담
              </a>
            </div>

            {/* Live transaction ticker */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <span>방금 <strong className="text-foreground">{recentTx.phone}</strong>님{" "}
                <strong className="text-primary">{formatKRW(recentTx.usdt)} USDT</strong> 매입 완료
              </span>
            </div>
          </div>

          {/* Right: Calculator Card */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xl shadow-gray-200">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-bold text-foreground">내 테더 팔면 얼마?</h2>
              <span className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary font-medium">
                실시간 업비트가격 반영
              </span>
            </div>

            {/* Input */}
            <label className="block text-xs text-muted-foreground mb-1.5">판매할 수량 (USDT)</label>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex-1">
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground text-lg font-bold outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <span className="text-muted-foreground font-semibold text-sm w-12 text-right">USDT</span>
            </div>

            {/* Rate */}
            <div className="flex items-center justify-between py-3 border-y border-border mb-4">
              <span className="text-xs text-muted-foreground">적용 환율 (1 USDT)</span>
              <span className="text-sm font-bold text-foreground">{formatKRW(USDT_RATE)} <span className="text-muted-foreground font-normal">원</span></span>
            </div>

            {/* Result */}
            <label className="block text-xs text-muted-foreground mb-1.5">예상 입금액 (KRW)</label>
            <div className="bg-primary/5 rounded-xl px-4 py-3 mb-5 border border-primary/20">
              <span className="text-2xl font-black text-primary">
                {krwAmount > 0 ? formatKRW(krwAmount) : "0"}
              </span>
              <span className="text-muted-foreground font-normal ml-1">원</span>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 hover:scale-[1.02]">
              이 가격으로 즉시 판매하기
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
