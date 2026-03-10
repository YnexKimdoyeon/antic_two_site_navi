"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import type { Brand } from "@/lib/brand"

const TETHER_REVIEWS = [
  {
    name: "김민준",
    region: "서울 강남",
    rating: 5,
    date: "2025.05.12",
    title: "정말 빠르고 믿을 수 있어요",
    content: "처음에는 반신반의하면서 소액으로 시작했는데, 4분 만에 입금이 되더라고요. 이후로 계속 이용 중입니다. 카카오톡 상담도 친절하고 빠릅니다.",
    amount: "2,500 테더",
    tags: ["입금 빠름", "상담 친절"],
  },
  {
    name: "이서연",
    region: "부산 해운대",
    rating: 5,
    date: "2025.05.09",
    title: "3자 사기 걱정 없이 안전하게",
    content: "다른 업체에서 한 번 사기 피해를 봤었는데, 여기는 절차가 투명하고 직거래로만 진행해서 안심이 됩니다. 재방문율 1위인 이유를 알겠어요.",
    amount: "5,000 테더",
    tags: ["안전 거래", "투명 절차"],
  },
  {
    name: "박도윤",
    region: "인천 연수",
    rating: 5,
    date: "2025.05.07",
    title: "환율이 타 업체보다 훨씬 높아요",
    content: "여러 군데 견적을 받아봤는데 여기가 확실히 최고가였습니다. 큰 금액도 거래하는 데 전혀 문제없었고 담당자분이 끝까지 챙겨주셨어요.",
    amount: "12,000 테더",
    tags: ["최고 환율", "대량 거래 가능"],
  },
  {
    name: "최지아",
    region: "대전 유성",
    rating: 5,
    date: "2025.05.04",
    title: "자정에 거래했는데 5분 완료",
    content: "새벽 12시가 넘었는데도 바로 상담이 연결됐고, 지갑 전송 후 5분도 안 돼서 입금됐어요. 24시간 운영이 사실이었습니다.",
    amount: "800 테더",
    tags: ["24시간 운영", "야간 거래 가능"],
  },
  {
    name: "정하은",
    region: "광주 서구",
    rating: 5,
    date: "2025.04.28",
    title: "처음이라 걱정했는데 너무 쉬웠어요",
    content: "코인 매도가 처음이라 잘 모르는 상태로 연락했는데, 처음부터 끝까지 하나하나 안내해주셔서 어렵지 않게 완료할 수 있었습니다.",
    amount: "300 테더",
    tags: ["초보 친화적", "자세한 안내"],
  },
  {
    name: "강준혁",
    region: "수원 영통",
    rating: 4,
    date: "2025.04.22",
    title: "대량 거래도 문제없이 처리",
    content: "업무상 테더를 자주 현금화하는 편인데, 매번 빠르고 정확하게 처리해줍니다. 단골이 된 지 6개월이 넘었습니다.",
    amount: "20,000 테더",
    tags: ["반복 거래", "신뢰 업체"],
  },
]

const ONCASH_REVIEWS = [
  {
    name: "윤서준",
    region: "서울 마포",
    rating: 5,
    date: "2025.05.13",
    title: "3분 안에 입금 완료, 진짜입니다",
    content: "온캐시아울렛 처음 써봤는데 정말 3분 만에 입금됐어요. 다른 업체들은 15분씩 기다리게 해서 답답했는데, 여기는 속도가 완전 다르네요.",
    amount: "200만원 현금화",
    tags: ["초고속 입금", "첫 거래 만족"],
  },
  {
    name: "오하린",
    region: "서울 송파",
    rating: 5,
    date: "2025.05.10",
    title: "매입가 최고, 상담 최고",
    content: "다른 업체랑 비교해봤을 때 온캐시아울렛이 확실히 더 높게 쳐줬어요. 상담도 무조건 즉시 응답해주셔서 답답함이 없었습니다.",
    amount: "500만원 현금화",
    tags: ["최고 매입가", "즉시 응답"],
  },
  {
    name: "임태양",
    region: "경기 성남",
    rating: 5,
    date: "2025.05.08",
    title: "믿고 맡길 수 있는 업체",
    content: "지인 추천으로 이용하게 됐는데 이제는 제가 주변에 추천하고 다닙니다. 절차가 간단하고 입금도 빠르니 안 쓸 이유가 없죠.",
    amount: "350만원 현금화",
    tags: ["지인 추천", "재방문"],
  },
  {
    name: "한채원",
    region: "대구 수성",
    rating: 5,
    date: "2025.05.05",
    title: "늦은 밤에도 즉시 연결",
    content: "밤 11시에 급하게 현금이 필요했는데 바로 연결되고 10분 안에 전부 완료됐습니다. 비상시에도 믿을 수 있는 업체 찾았어요.",
    amount: "120만원 현금화",
    tags: ["야간 거래", "긴급 처리"],
  },
  {
    name: "신민서",
    region: "울산 남구",
    rating: 5,
    date: "2025.04.30",
    title: "고지한 금액 그대로 입금",
    content: "처음에 안내받은 금액 그대로 정확히 들어왔습니다. 중간에 수수료 추가로 빼가는 업체들과는 확실히 다릅니다. 신뢰 가는 업체예요.",
    amount: "280만원 현금화",
    tags: ["투명 수수료", "정직한 거래"],
  },
  {
    name: "류지호",
    region: "전주 덕진",
    rating: 4,
    date: "2025.04.25",
    title: "매달 이용하는 단골입니다",
    content: "매달 정기적으로 이용 중인데 항상 일관된 서비스를 받습니다. 시세 변동이 있을 때도 미리 연락주셔서 최적 타이밍에 처리할 수 있었어요.",
    amount: "1,000만원 현금화",
    tags: ["단골 고객", "타이밍 알림"],
  },
]

function StarRating({ rating, colorClass }: { rating: number; colorClass: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? colorClass : "text-gray-200"}
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  )
}

export default function ReviewsSection({ brand }: { brand: Brand }) {
  const reviews = brand.key === "tether" ? TETHER_REVIEWS : ONCASH_REVIEWS
  const [current, setCurrent] = useState(0)
  const [isAuto, setIsAuto] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const colorClass = brand.key === "tether" ? "text-emerald-500" : "text-blue-500"
  const badgeBg = brand.key === "tether" ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"
  const accentBorder = brand.key === "tether" ? "border-emerald-500" : "border-blue-500"
  const accentBg = brand.key === "tether" ? "bg-emerald-600" : "bg-blue-600"

  const VISIBLE = 3

  useEffect(() => {
    if (!isAuto) return
    timerRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % reviews.length)
    }, 3500)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [isAuto, reviews.length])

  const go = (dir: number) => {
    setIsAuto(false)
    setCurrent((p) => (p + dir + reviews.length) % reviews.length)
    setTimeout(() => setIsAuto(true), 8000)
  }

  const visible = Array.from({ length: VISIBLE }, (_, i) => reviews[(current + i) % reviews.length])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className={`text-xs font-bold tracking-widest uppercase ${colorClass} mb-3 block`}>
            REAL REVIEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-balance">
            실제 고객 후기
          </h2>
          <p className="text-gray-500 mt-3 text-balance">
            {brand.name}아울렛을 이용한 실제 고객분들의 솔직한 후기입니다.
          </p>
          {/* Summary */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-gray-50 rounded-full border border-gray-100">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className={colorClass} fill="currentColor" />
              ))}
            </div>
            <span className="font-black text-gray-900 text-lg">4.9</span>
            <span className="text-gray-400 text-sm">/ 5.0 · 후기 {reviews.length}+건</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {visible.map((r, idx) => (
            <div
              key={`${r.name}-${idx}`}
              className={`relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 transition-all duration-300 ${idx === 0 ? `border-l-4 ${accentBorder}` : ""}`}
            >
              <Quote size={28} className={`${colorClass} opacity-20 absolute top-5 right-5`} />
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <StarRating rating={r.rating} colorClass={colorClass} />
                  <p className="font-bold text-gray-900 mt-2 text-sm">{r.title}</p>
                </div>
              </div>
              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{r.content}</p>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {r.tags.map((tag) => (
                  <span key={tag} className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${badgeBg}`}>
                    {tag}
                  </span>
                ))}
              </div>
              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
                <span className="font-semibold text-gray-700">{r.name} · {r.region}</span>
                <span>{r.date}</span>
              </div>
              <div className={`text-xs font-bold ${colorClass}`}>거래 금액 {r.amount}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
            aria-label="이전"
          >
            <ChevronLeft size={18} className="text-gray-600" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAuto(false); setCurrent(i); setTimeout(() => setIsAuto(true), 8000) }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? `${accentBg} w-6` : "bg-gray-200"}`}
                aria-label={`후기 ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
            aria-label="다음"
          >
            <ChevronRight size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
