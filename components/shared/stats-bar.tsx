"use client"

import { useEffect, useRef, useState } from "react"
import type { Brand } from "@/lib/brand"
import { cn } from "@/lib/utils"

const tetherStats = [
  { label: "누적 거래 건수", value: 48320, suffix: "건+" },
  { label: "누적 매입액", value: 9.8, suffix: "억원+" },
  { label: "평균 입금 시간", value: 4.2, suffix: "분" },
  { label: "고객 만족도", value: 99.3, suffix: "%" },
]

const oncashStats = [
  { label: "누적 거래 건수", value: 61540, suffix: "건+" },
  { label: "누적 매입액", value: 14.2, suffix: "억원+" },
  { label: "평균 입금 시간", value: 2.8, suffix: "분" },
  { label: "고객 만족도", value: 99.7, suffix: "%" },
]

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(parseFloat((progress * target).toFixed(1)))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(value, 1500, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="text-3xl font-black text-white">
        {Number.isInteger(value) ? Math.floor(count).toLocaleString("ko-KR") : count.toFixed(1)}{suffix}
      </span>
      <span className="text-xs text-white/70">{label}</span>
    </div>
  )
}

export default function StatsBar({ brand }: { brand: Brand }) {
  const stats = brand.key === "oncash" ? oncashStats : tetherStats
  const bgCls = brand.key === "oncash" ? "bg-blue-600" : "bg-primary"

  return (
    <section className={cn("py-10 border-y border-border text-white", bgCls)}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}
