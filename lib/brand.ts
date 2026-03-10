export type BrandKey = "tether" | "oncash"

export interface BrandFeature {
  badge: string
  title: string
  description: string
}

export interface BrandStep {
  step: string
  title: string
  description: string
  colorFrom: string
  colorTo: string
  border: string
  iconBg: string
  iconColor: string
}

export interface BrandGuide {
  title: string
  description: string
  tag: string
}

export interface BrandFaq {
  q: string
  a: string
}

export interface Brand {
  key: BrandKey
  name: string
  nameHighlight: string
  tagline: string
  symbol: string
  heroTitle: string[]
  heroSubtitle: string
  heroDesc: string
  heroCurrencyLabel: string | null
  whyLabel: string
  whyTitle: string
  whySubtitle: string
  features: BrandFeature[]
  /** 매입 절차 */
  buySteps: BrandStep[]
  /** 판매 절차 */
  sellSteps: BrandStep[]
  guides: BrandGuide[]
  faqs: BrandFaq[]
  ctaTitle: string[]
  footerDesc: string
  copyright: string
  primaryBg: string
  primaryText: string
  primaryBorder: string
  primaryBgLight: string
}

const TETHER_STEP_COLORS = {
  kakao: {
    colorFrom: "from-[#FEE500]/15",
    colorTo: "to-[#FEE500]/5",
    border: "border-[#FEE500]/40",
    iconBg: "bg-[#FEE500]/20",
    iconColor: "text-[#A07800]",
  },
  green: {
    colorFrom: "from-emerald-50",
    colorTo: "to-emerald-50/50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  gray: {
    colorFrom: "from-gray-50",
    colorTo: "to-gray-50/50",
    border: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
}

const ONCASH_STEP_COLORS = {
  kakao: {
    colorFrom: "from-[#FEE500]/15",
    colorTo: "to-[#FEE500]/5",
    border: "border-[#FEE500]/40",
    iconBg: "bg-[#FEE500]/20",
    iconColor: "text-[#A07800]",
  },
  blue: {
    colorFrom: "from-blue-50",
    colorTo: "to-blue-50/50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  gray: {
    colorFrom: "from-gray-50",
    colorTo: "to-gray-50/50",
    border: "border-gray-200",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
}

export const BRANDS: Record<BrandKey, Brand> = {
  tether: {
    key: "tether",
    name: "테더",
    nameHighlight: "아울렛",
    tagline: "No.1 테더 매입·판매 · 재방문율 1위",
    symbol: "₮",
    heroTitle: ["국내 최고가", "테더 매입·판매"],
    heroSubtitle: "5분 내 완료 · 즉시 입금",
    heroDesc: "복잡한 가입 없이, 3자 사기 걱정 없이.\n24시간 365일 상담 즉시 연결됩니다.",
    heroCurrencyLabel: "USDT",
    whyLabel: "WHY TETHEROUTLET",
    whyTitle: "왜 테더아울렛인가요?",
    whySubtitle: "매입부터 판매까지, 수많은 업체 중 재방문율 1위인 이유가 있습니다.",
    features: [
      {
        badge: "안전",
        title: "3자 사기 원천 차단",
        description: "철저한 검증으로 보이스피싱·3자 사기 연루를 완벽하게 방지합니다. 매입·판매 모두 안심 거래.",
      },
      {
        badge: "빠름",
        title: "5분 입금 보장",
        description: "매입 시 전송 확인 즉시, 판매 시 상담 확인 즉시 입금됩니다. 업계 최단 처리 속도를 자랑합니다.",
      },
      {
        badge: "최고가",
        title: "매입·판매 최고가 보장",
        description: "테더 매입 시 국내 최고가를 보장하며, 판매(구매) 시에도 시세 대비 최저 프리미엄을 제공합니다.",
      },
      {
        badge: "항시",
        title: "24시간 365일 운영",
        description: "주말·공휴일·새벽 관계없이 365일 24시간 연중무휴 운영. 언제든 즉시 응대합니다.",
      },
    ],
    buySteps: [
      {
        step: "01",
        title: "상담 문의",
        description: "채널톡, 오픈카톡, 텔레그램 중 편한 방법으로 판매 수량을 알려주세요. 단가는 실시간으로 변동되므로 상담 시 확인해 드립니다.",
        ...TETHER_STEP_COLORS.kakao,
      },
      {
        step: "02",
        title: "테더 전송",
        description: "안내받은 지갑 주소로 테더를 전송합니다. 바이낸스, 트론링크 모두 가능합니다.",
        ...TETHER_STEP_COLORS.green,
      },
      {
        step: "03",
        title: "현금 입금",
        description: "전송 확인 후 5분 내로 계좌에 현금이 입금됩니다.",
        ...TETHER_STEP_COLORS.gray,
      },
    ],
    sellSteps: [
      {
        step: "01",
        title: "상담 문의",
        description: "구매 수량과 원하시는 네트워크를 알려주세요. 현재 판매 단가를 즉시 안내해 드립니다.",
        ...TETHER_STEP_COLORS.kakao,
      },
      {
        step: "02",
        title: "현금 송금",
        description: "안내받은 계좌로 원화를 송금합니다. 송금 확인 후 테더가 즉시 전송됩니다.",
        ...TETHER_STEP_COLORS.green,
      },
      {
        step: "03",
        title: "테더 수령",
        description: "5분 내로 지정하신 지갑 주소로 테더가 전송 완료됩니다.",
        ...TETHER_STEP_COLORS.gray,
      },
    ],
    guides: [
      {
        title: "대량/법인/OTC 거래",
        description: "고액 거래를 위한 프라이빗 서비스 및 우대 단가 상담",
        tag: "법인 우대",
      },
      {
        title: "사기 예방 가이드",
        description: "3자 사기, 먹튀 업체 구별법 및 필수 체크리스트",
        tag: "필독",
      },
      {
        title: "지역별 매입·판매 안내",
        description: "서울, 부산, 강남 등 지역별 오프라인/비대면 거래 정보",
        tag: "지역별",
      },
      {
        title: "지갑 전송 방법",
        description: "바이낸스, 트론링크에서 수수료 없이 전송하는 법",
        tag: "가이드",
      },
    ],
    faqs: [
      {
        q: "단가는 어떻게 확인하나요?",
        a: "단가는 시장 상황에 따라 실시간으로 변동됩니다. 채널톡, 오픈카톡, 텔레그램 중 편한 방법으로 문의 주시면 현재 단가를 즉시 안내해 드립니다.",
      },
      {
        q: "매입과 판매 모두 가능한가요?",
        a: "네, 둘 다 가능합니다. 테더를 원화로 바꾸는 매입과, 원화로 테더를 구매하는 판매 모두 서비스합니다.",
      },
      {
        q: "소액도 가능한가요?",
        a: "네, 최소 거래 금액은 테더 100개(또는 동일 원화)부터이며, 소액이라도 차별 없이 신속하게 처리합니다.",
      },
      {
        q: "주말이나 새벽에도 거래 되나요?",
        a: "물론입니다. 365일 24시간 연중무휴로 운영됩니다. 언제든 문의 주시면 담당자가 즉시 응대합니다.",
      },
      {
        q: "입금까지 정말 5분 안에 되나요?",
        a: "네, 블록체인 전송 확인 후 평균 4~5분 내로 입금됩니다. TRC-20(트론) 네트워크를 사용하시면 더욱 빠릅니다.",
      },
      {
        q: "법인이나 대량 거래도 가능한가요?",
        a: "가능합니다. 테더 5만 개 이상 대량 거래나 법인 거래의 경우 별도 OTC 서비스를 통해 우대 단가를 적용해 드립니다.",
      },
    ],
    ctaTitle: ["가장 안전하고 빠른", "테더아울렛이 기다리고 있습니다"],
    footerDesc: "국내 No.1 테더 매입·판매 서비스.\n24시간 365일 안전한 테더 거래 전문 업체입니다.",
    copyright: "© 2025 테더아울렛. All rights reserved.",
    primaryBg: "bg-emerald-600",
    primaryText: "text-emerald-600",
    primaryBorder: "border-emerald-600",
    primaryBgLight: "bg-emerald-50",
  },

  oncash: {
    key: "oncash",
    name: "온캐시",
    nameHighlight: "아울렛",
    tagline: "No.1 현금화 서비스 · 매입·판매 모두 가능",
    symbol: "₩",
    heroTitle: ["빠르고 믿을 수 있는", "온캐시 매입·판매"],
    heroSubtitle: "3분 내 즉시 입금",
    heroDesc: "복잡한 절차 없이 상담 한 번으로 끝.\n매입·판매 모두 24시간 365일 최고가 보장.",
    heroCurrencyLabel: null,
    whyLabel: "WHY ONCASHOUTLET",
    whyTitle: "왜 온캐시아울렛인가요?",
    whySubtitle: "매입·판매 모두 업계 최고 단가와 최단 입금 시간을 보장합니다.",
    features: [
      {
        badge: "안전",
        title: "100% 비대면 안전 거래",
        description: "직접 만남 없이 100% 비대면으로 진행됩니다. 매입·판매 모두 검증된 절차로 안전하게 보호합니다.",
      },
      {
        badge: "빠름",
        title: "3분 입금 보장",
        description: "확인 즉시 3분 내로 입금됩니다. 매입·판매 모두 업계 최단 처리 속도를 자랑합니다.",
      },
      {
        badge: "최고가",
        title: "매입·판매 최고 단가 보장",
        description: "단가는 실시간으로 변동되므로 상담 시 현재 최고 단가를 즉시 확인해 드립니다.",
      },
      {
        badge: "전문",
        title: "전담 상담사 1:1 응대",
        description: "전담 상담사가 처음부터 끝까지 1:1로 안내합니다. 처음 이용하시는 분도 쉽게 완료할 수 있습니다.",
      },
    ],
    buySteps: [
      {
        step: "01",
        title: "상담 문의",
        description: "채널톡, 오픈카톡, 텔레그램 중 편한 방법으로 판매 수량을 알려주세요. 현재 단가를 즉시 안내해 드립니다.",
        ...ONCASH_STEP_COLORS.kakao,
      },
      {
        step: "02",
        title: "정보 확인",
        description: "입금받을 계좌번호와 간단한 확인 정보를 안내에 따라 전달해 주세요.",
        ...ONCASH_STEP_COLORS.blue,
      },
      {
        step: "03",
        title: "즉시 입금",
        description: "확인 완료 후 3분 내로 지정하신 계좌에 현금이 바로 입금됩니다.",
        ...ONCASH_STEP_COLORS.gray,
      },
    ],
    sellSteps: [
      {
        step: "01",
        title: "상담 문의",
        description: "구매 희망 금액과 원하시는 방식을 알려주세요. 현재 판매 단가를 즉시 안내해 드립니다.",
        ...ONCASH_STEP_COLORS.kakao,
      },
      {
        step: "02",
        title: "현금 송금",
        description: "안내받은 계좌로 원화를 송금합니다. 입금 확인 즉시 처리가 시작됩니다.",
        ...ONCASH_STEP_COLORS.blue,
      },
      {
        step: "03",
        title: "온캐시 수령",
        description: "확인 완료 후 3분 내로 지정하신 방식으로 온캐시가 전달됩니다.",
        ...ONCASH_STEP_COLORS.gray,
      },
    ],
    guides: [
      {
        title: "대량/법인 거래 안내",
        description: "고액 거래를 위한 프라이빗 우대 서비스 및 별도 단가 협의",
        tag: "법인 우대",
      },
      {
        title: "사기 예방 가이드",
        description: "불법 업체 구별법, 안전 거래 체크리스트 필독 안내",
        tag: "필독",
      },
      {
        title: "지역별 서비스 안내",
        description: "서울, 부산, 대구 등 전국 지역별 비대면 서비스 안내",
        tag: "지역별",
      },
      {
        title: "처음 이용 가이드",
        description: "온캐시아울렛 처음 이용하시는 분을 위한 매입·판매 단계별 안내서",
        tag: "초보 안내",
      },
    ],
    faqs: [
      {
        q: "단가는 어떻게 확인하나요?",
        a: "단가는 시장 상황에 따라 실시간으로 변동됩니다. 채널톡, 오픈카톡, 텔레그램 중 편한 방법으로 문의 주시면 현재 단가를 즉시 안내해 드립니다.",
      },
      {
        q: "매입과 판매 모두 가능한가요?",
        a: "네, 둘 다 가능합니다. 온캐시를 원화로 바꾸는 매입과, 원화로 온캐시를 구매하는 판매 서비스를 모두 제공합니다.",
      },
      {
        q: "소액도 가능한가요?",
        a: "네, 소액부터 대량 거래까지 모두 가능합니다. 금액에 관계없이 동일한 최고 단가를 적용합니다.",
      },
      {
        q: "입금까지 정말 3분 안에 되나요?",
        a: "네, 정보 확인 완료 후 평균 2~3분 내로 입금됩니다. 새벽·주말 등 시간대와 관계없이 동일하게 처리됩니다.",
      },
      {
        q: "주말이나 새벽에도 이용할 수 있나요?",
        a: "물론입니다. 365일 24시간 연중무휴 운영합니다. 공휴일, 새벽, 주말 관계없이 즉시 상담 연결됩니다.",
      },
      {
        q: "타 업체보다 단가가 높다고 확신할 수 있나요?",
        a: "타 업체 견적을 보내주시면 즉시 확인 후 더 유리한 단가로 협의해 드립니다. 최고가 매입·최저가 판매를 약속합니다.",
      },
    ],
    ctaTitle: ["국내 최고가, 가장 빠른", "온캐시아울렛이 기다리고 있습니다"],
    footerDesc: "국내 No.1 현금화 서비스.\n24시간 365일 안전한 매입·판매 전문 업체입니다.",
    copyright: "© 2025 온캐시아울렛. All rights reserved.",
    primaryBg: "bg-blue-600",
    primaryText: "text-blue-600",
    primaryBorder: "border-blue-600",
    primaryBgLight: "bg-blue-50",
  },
}
