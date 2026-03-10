import { MessageCircle, Send, Wallet, CheckCircle2, ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "상담 문의",
    description: "카톡이나 텔레그램으로 판매 수량을 알려주세요. 전담 상담원이 즉시 응대합니다.",
    color: "from-[#FEE500]/20 to-[#FEE500]/5",
    border: "border-[#FEE500]/30",
    iconBg: "bg-[#FEE500]/20",
    iconColor: "text-[#A07800]",
  },
  {
    step: "02",
    icon: Wallet,
    title: "테더 전송",
    description: "안내받은 지갑 주소로 USDT를 전송합니다. 바이낸스, 트론링크 모두 가능합니다.",
    color: "from-primary/10 to-primary/5",
    border: "border-primary/30",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "입금 완료",
    description: "전송 확인 후 5분 내로 계좌에 현금이 입금됩니다. 정말 빠릅니다.",
    color: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-600",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">SIMPLE PROCESS</p>
          <h2 className="text-3xl sm:text-4xl font-black text-balance mb-3">간편한 거래 절차</h2>
          <p className="text-muted-foreground">처음이셔도 걱정 마세요. 3단계면 충분합니다.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.step} className="flex-1 flex flex-col md:flex-row items-center gap-4">
                <div
                  className={`flex-1 w-full bg-gradient-to-br ${s.color} border ${s.border} rounded-2xl p-6 flex flex-col gap-4`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <span className="text-3xl font-black text-muted-foreground/30">{s.step}</span>
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

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FEE500] text-[#3A1D1D] font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            카카오톡으로 시작하기
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
          >
            <Send className="w-4 h-4" />
            텔레그램으로 시작하기
          </a>
        </div>
      </div>
    </section>
  )
}
