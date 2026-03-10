import Link from "next/link"
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from "lucide-react"

const services = [
  {
    href: "/tether-outlet",
    symbol: "₮",
    name: "테더",
    highlight: "아울렛",
    tagline: "테더 현금화 전문",
    desc: "국내 최고가 테더 현금화 서비스.\n5분 내 입금, 3자 사기 원천 차단.",
    features: ["실시간 업비트 환율 반영", "TRC-20 / ERC-20 지원", "24시간 즉시 응대"],
    accentBg: "bg-emerald-600",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-200",
    accentBgLight: "bg-emerald-50",
    accentBgHover: "hover:border-emerald-300 hover:shadow-emerald-100",
    badge: "No.1 테더",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    href: "/oncash-outlet",
    symbol: "₩",
    name: "온캐시",
    highlight: "아울렛",
    tagline: "현금화 서비스 전문",
    desc: "업계 최고 환율 현금화 서비스.\n3분 내 입금, 안전하고 빠른 매입.",
    features: ["업계 최고 환율 보장", "전국 24시간 운영", "법인·대량 OTC 가능"],
    accentBg: "bg-blue-600",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200",
    accentBgLight: "bg-blue-50",
    accentBgHover: "hover:border-blue-300 hover:shadow-blue-100",
    badge: "즉시 입금",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
]

const trustBadges = [
  { icon: ShieldCheck, label: "3자 사기 원천 차단" },
  { icon: Zap, label: "평균 입금 4분" },
  { icon: TrendingUp, label: "누적 거래 10만건+" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <div className="w-full bg-gray-50 border-b border-gray-100 py-2 px-4 text-center">
        <p className="text-xs text-gray-500">
          24시간 365일 운영 · 평균 응답 1분 이내 · 재방문율 1위
        </p>
      </div>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-3xl w-full mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-500 text-xs font-semibold tracking-wide mb-6">
            국내 No.1 현금화 그룹
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 text-balance mb-4 leading-tight">
            원하시는 서비스를<br />
            <span className="text-gray-400">선택해 주세요</span>
          </h1>
          <p className="text-gray-500 mb-12 text-base leading-relaxed">
            두 브랜드 모두 동일한 신뢰와 안전을 제공합니다.<br />
            필요에 맞는 서비스를 선택하세요.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`group relative flex flex-col bg-white border-2 rounded-3xl p-8 text-left transition-all duration-300 hover:shadow-xl ${s.accentBorder} ${s.accentBgHover}`}
              >
                {/* Badge */}
                <span className={`absolute top-5 right-5 text-xs px-2.5 py-1 rounded-full border font-semibold ${s.badgeBg}`}>
                  {s.badge}
                </span>

                {/* Logo */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-xl font-black ${s.accentBg}`}>
                    {s.symbol}
                  </div>
                  <div>
                    <div className="text-xl font-black text-gray-900">
                      {s.name}<span className={s.accentText}>{s.highlight}</span>
                    </div>
                    <div className={`text-xs font-medium ${s.accentText}`}>{s.tagline}</div>
                  </div>
                </div>

                {/* Desc */}
                <p className="text-sm text-gray-500 leading-relaxed mb-5 whitespace-pre-line">{s.desc}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.accentBg}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className={`flex items-center gap-2 text-sm font-bold mt-auto ${s.accentText}`}>
                  바로 이용하기
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon className="w-4 h-4 text-gray-400" />
                  {b.label}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 px-4 text-center">
        <p className="text-xs text-gray-400">© 2025 테더아울렛 · 온캐시아울렛. All rights reserved.</p>
      </footer>
    </main>
  )
}
