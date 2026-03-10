import { Building2, AlertTriangle, MapPin, Wallet, ArrowRight } from "lucide-react"

const guides = [
  {
    icon: Building2,
    title: "대량/법인/OTC 거래",
    description: "고액 거래를 위한 프라이빗 서비스 및 우대 환율 안내",
    tag: "법인 우대",
  },
  {
    icon: AlertTriangle,
    title: "사기 예방 가이드",
    description: "3자 사기, 먹튀 업체 구별법 및 필수 체크리스트",
    tag: "필독",
  },
  {
    icon: MapPin,
    title: "지역별 매입 안내",
    description: "서울, 부산, 강남 등 지역별 오프라인/비대면 거래 정보",
    tag: "지역별",
  },
  {
    icon: Wallet,
    title: "지갑 전송 방법",
    description: "바이낸스, 트론링크에서 수수료 없이 전송하는 법",
    tag: "가이드",
  },
]

export default function GuideSection() {
  return (
    <section id="guide" className="py-20 px-4 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">GUIDES</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">안전한 테더 거래를 위한 가이드</h2>
          <p className="text-muted-foreground">처음 거래하시는 분도 안전하게 거래하실 수 있도록 안내합니다.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((g) => {
            const Icon = g.icon
            return (
              <button
                key={g.title}
                className="group text-left bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground text-sm">{g.title}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium flex-shrink-0">
                        {g.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{g.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
