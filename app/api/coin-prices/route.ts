import { NextResponse } from "next/server"

const MARKETS = "KRW-BTC,KRW-ETH,KRW-USDT,KRW-XRP,KRW-TRX"

export async function GET() {
  try {
    const response = await fetch(
      `https://api.upbit.com/v1/ticker?markets=${MARKETS}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: { revalidate: 3600 },
      }
    )

    if (!response.ok) {
      throw new Error("Failed to fetch from Upbit API")
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Upbit API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch coin prices" },
      { status: 500 }
    )
  }
}
