import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { PopupModal } from '@/components/popup-modal'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '테더마켓 | No.1 USDT 현금화 & 테더 매입',
  description: '국내 최고가 24시간 안전한 USDT 현금화 & 판매. 5분 내 현금화 완료. 3자 사기 원천 차단.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} light`} style={{ colorScheme: "light" }}>
      <body className="font-sans antialiased">
        {children}
        <PopupModal />
        <Analytics />
      </body>
    </html>
  )
}
