import { MessageCircle, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xs">₮</span>
              </div>
              <span className="text-foreground font-bold">테더<span className="text-primary">마켓</span></span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              국내 No.1 USDT 현금화 서비스.<br />
              24시간 365일 안전한 테더 매입 전문 업체입니다.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">서비스</h4>
              <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
                <li><a href="#why" className="hover:text-foreground transition-colors">왜 테더마켓?</a></li>
                <li><a href="#process" className="hover:text-foreground transition-colors">거래 절차</a></li>
                <li><a href="#guide" className="hover:text-foreground transition-colors">이용 가이드</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">문의</h4>
              <ul className="flex flex-col gap-2 text-xs text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#C9A800]" />
                    카카오톡 문의
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1.5">
                    <Send className="w-3.5 h-3.5 text-primary" />
                    텔레그램 상담
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2025 테더마켓. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">이용약관</a>
            <a href="#" className="hover:text-foreground transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
