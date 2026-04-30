"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Timer, ArrowUpRight, ArrowDownRight } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CoinData {
  market: string
  trade_price: number
  signed_change_rate: number
  acc_trade_price_24h: number
}

interface CoinInfo {
  symbol: string
  name: string
  logo: string
}

const COINS: Record<string, CoinInfo> = {
  "KRW-BTC": {
    symbol: "BTC",
    name: "비트코인",
    logo: "https://static.upbit.com/logos/BTC.png",
  },
  "KRW-ETH": {
    symbol: "ETH",
    name: "이더리움",
    logo: "https://static.upbit.com/logos/ETH.png",
  },
  "KRW-USDT": {
    symbol: "USDT",
    name: "테더",
    logo: "https://static.upbit.com/logos/USDT.png",
  },
  "KRW-XRP": {
    symbol: "XRP",
    name: "리플",
    logo: "https://static.upbit.com/logos/XRP.png",
  },
  "KRW-TRX": {
    symbol: "TRX",
    name: "트론",
    logo: "https://static.upbit.com/logos/TRX.png",
  },
}

const MARKET_KEYS = Object.keys(COINS)

function formatPrice(price: number): string {
  if (price >= 1000) {
    return price.toLocaleString("ko-KR") + "원"
  }
  return price.toLocaleString("ko-KR", { maximumFractionDigits: 2 }) + "원"
}

function formatVolume(volume: number): string {
  const billion = 100000000
  if (volume >= billion) {
    return (volume / billion).toFixed(2) + "억원"
  }
  const million = 10000
  if (volume >= million) {
    return (volume / million).toFixed(2) + "만원"
  }
  return volume.toLocaleString("ko-KR") + "원"
}

function formatChangeRate(rate: number): string {
  const percent = (rate * 100).toFixed(2)
  return rate >= 0 ? `+${percent}%` : `${percent}%`
}

export default function CoinPriceSection() {
  const [coinData, setCoinData] = useState<CoinData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCoinData = async () => {
    try {
      const response = await fetch("/api/coin-prices")
      if (!response.ok) {
        throw new Error("Failed to fetch coin data")
      }
      const data: CoinData[] = await response.json()
      setCoinData(data)
      setError(null)
    } catch (err) {
      setError("시세를 불러오는 중 오류가 발생했습니다.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCoinData()
    const interval = setInterval(fetchCoinData, 3600000) // 1시간
    return () => clearInterval(interval)
  }, [])

  const sortedData = MARKET_KEYS.map((market) =>
    coinData.find((c) => c.market === market)
  ).filter(Boolean) as CoinData[]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-muted/60 bg-gradient-to-br from-background/90 via-muted/40 to-emerald-500/5 p-6 shadow-xl">
          {/* Header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-600">
                <TrendingUp className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold text-emerald-600">
                  실시간 시세
                </p>
                <h3 className="text-lg font-bold leading-tight">
                  Top 코인 모니터
                </h3>
                <p className="text-xs text-foreground/60">
                  1시간마다 자동 업데이트됩니다.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-muted/70 bg-background/70 px-3 py-1 text-xs text-foreground/70">
              <Timer className="size-4" aria-hidden="true" />
              실시간 반영 중
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-muted/60 bg-background/60">
            <Table>
              <TableHeader className="bg-foreground/5 backdrop-blur-sm">
                <TableRow className="text-[11px] uppercase tracking-wide text-foreground/70">
                  <TableHead className="min-w-[160px]">코인명</TableHead>
                  <TableHead className="min-w-[110px]">현재가</TableHead>
                  <TableHead className="min-w-[110px]">전일대비</TableHead>
                  <TableHead className="min-w-[140px] text-right">
                    거래대금(24h)
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={4} className="py-8 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
                        <span className="text-foreground/60">로딩 중...</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="py-8 text-center text-rose-500"
                    >
                      {error}
                    </TableCell>
                  </TableRow>
                ) : (
                  sortedData.map((coin) => {
                    const info = COINS[coin.market]
                    const isPositive = coin.signed_change_rate >= 0
                    return (
                      <TableRow
                        key={coin.market}
                        className="hover:bg-foreground/5"
                      >
                        <TableCell className="py-4">
                          <div className="flex items-center gap-3">
                            <img
                              alt={`${info.symbol} 로고`}
                              className="size-8 rounded-full bg-white shadow-sm"
                              loading="lazy"
                              src={info.logo}
                            />
                            <div>
                              <p className="text-base font-bold">{info.name}</p>
                              <p className="text-xs text-foreground/60">
                                {info.symbol}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="py-4 text-sm font-semibold">
                          {formatPrice(coin.trade_price)}
                        </TableCell>
                        <TableCell className="py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                              isPositive
                                ? "bg-rose-500/10 text-rose-500"
                                : "bg-sky-500/10 text-sky-500"
                            }`}
                          >
                            {isPositive ? (
                              <ArrowUpRight
                                className="size-3.5"
                                aria-hidden="true"
                              />
                            ) : (
                              <ArrowDownRight
                                className="size-3.5"
                                aria-hidden="true"
                              />
                            )}
                            {formatChangeRate(coin.signed_change_rate)}
                          </span>
                        </TableCell>
                        <TableCell className="text-right text-sm font-semibold">
                          {formatVolume(coin.acc_trade_price_24h)}
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
