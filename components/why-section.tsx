import { ShieldCheck, Zap, TrendingUp, Clock } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "3자 사기 원천 차단",
    description:
      "철저한 본인 인증과 검증된 계좌만을 사용하여 보이스피싱 및 3자 사기 연루를 완벽하게 방지합니다.",
    badge: "안전",
  },
  {
    icon: Zap,
    title: "5분 입금 보장",
    description:
      "복잡한 승인 대기 없이 전송 확인 즉시 입금됩니다. 기다림 없는 쾌적한 현금화를 경험하세요.",
    badge: "빠름",
  },
  {
    icon: TrendingUp,
    title: "최고가 매입 보장",
    description:
      "해외 거래소 시세에 '김치 프리미엄'을 더한 국내 최고 수준의 매입가를 24시간 보장합니다.",
    badge: "최고가",
  },
  {
    icon: Clock,
    title: "24시간 365일 운영",
    description:
      "주말, 공휴일, 새벽 관계없이 365일 24시간 연중무휴 운영. 언제든 즉시 응대합니다.",
    badge: "항시",
  },
]

export default function WhySection() {
  return (
    <section id="why" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">WHY TETHERMARKET</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">
            왜 테더마켓인가요?
          </h2>
          <p className="text-muted-foreground">수많은 업체 중 재방문율 1위인 이유가 있습니다.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-primary/30 text-primary font-medium">
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
