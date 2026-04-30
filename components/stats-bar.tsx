"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { label: "누적 거래 건수", value: 48320, suffix: "건+", prefix: "" },
  { label: "누적 매입액", value: 9.8, suffix: "억원+", prefix: "" },
  { label: "평균 입금 시간", value: 4.2, suffix: "분", prefix: "" },
  { label: "고객 만족도", value: 99.3, suffix: "%", prefix: "" },
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
      <span className="text-xs text-primary-foreground/70">{label}</span>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="py-10 border-y border-border bg-primary text-white">
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
