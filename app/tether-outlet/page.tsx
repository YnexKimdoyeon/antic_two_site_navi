import { BRANDS } from "@/lib/brand"
import Header from "@/components/shared/header"
import HeroSection from "@/components/shared/hero-section"
import StatsBar from "@/components/shared/stats-bar"
import WhySection from "@/components/shared/why-section"
import ProcessSection from "@/components/shared/process-section"
import ReviewsSection from "@/components/shared/reviews-section"
import GuideSection from "@/components/shared/guide-section"
import FaqSection from "@/components/shared/faq-section"
import CtaSection from "@/components/shared/cta-section"
import Footer from "@/components/shared/footer"

const brand = BRANDS.tether

export const metadata = {
  title: "테더아울렛 | No.1 테더 매입·판매",
  description: "국내 최고가 24시간 안전한 테더 현금화 & 판매. 5분 내 현금화 완료. 3자 사기 원천 차단.",
}

export default function TetherOutletPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header brand={brand} />
      <HeroSection brand={brand} />
      <StatsBar brand={brand} />
      <WhySection brand={brand} />
      <ProcessSection brand={brand} />
      <ReviewsSection brand={brand} />
      <GuideSection brand={brand} />
      <FaqSection brand={brand} />
      <CtaSection brand={brand} />
      <Footer brand={brand} />
    </main>
  )
}
