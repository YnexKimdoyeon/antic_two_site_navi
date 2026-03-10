"use client"

import { useState } from "react"
import { Menu, X, MessageCircle, Send } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-black text-sm">₮</span>
          </div>
          <span className="text-foreground font-bold text-lg tracking-tight">
            테더<span className="text-primary">마켓</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition-colors">왜 테더마켓?</a>
          <a href="#process" className="hover:text-foreground transition-colors">거래 절차</a>
          <a href="#guide" className="hover:text-foreground transition-colors">가이드</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FEE500] text-[#3A1D1D] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            카카오톡
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            텔레그램
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4 text-sm shadow-md">
          <a href="#why" className="text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>왜 테더마켓?</a>
          <a href="#process" className="text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>거래 절차</a>
          <a href="#guide" className="text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>가이드</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>FAQ</a>
          <div className="flex gap-2 pt-2">
            <a href="#" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#FEE500] text-[#3A1D1D] font-semibold">
              <MessageCircle className="w-4 h-4" /> 카카오톡
            </a>
            <a href="#" className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-primary-foreground font-semibold">
              <Send className="w-4 h-4" /> 텔레그램
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
