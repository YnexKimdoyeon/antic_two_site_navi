import { MessageCircle, Send, Phone } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl border border-primary/30 bg-card overflow-hidden p-10 sm:p-14 text-center">
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{ background: "radial-gradient(ellipse at 50% 100%, oklch(0.55 0.18 155), transparent 70%)" }}
          />

          <div className="relative">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest text-primary uppercase">
              지금 바로 현금화
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-balance mb-4">
              가장 안전하고 빠른<br />
              <span className="text-primary">테더마켓</span>이 기다리고 있습니다
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              복잡한 절차 없이, 지금 바로 문의하세요.<br />
              5분 안에 현금이 통장에 입금됩니다.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FEE500] text-[#3A1D1D] font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#FEE500]/20"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 문의
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
              >
                <Send className="w-5 h-5" />
                텔레그램 상담
              </a>
              <a
                href="tel:02-0000-0000"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white text-foreground font-bold hover:border-primary/40 hover:bg-secondary transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                전화 상담
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
