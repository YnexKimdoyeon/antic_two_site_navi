"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Send, MessageCircle } from "lucide-react"
import type { Brand } from "@/lib/brand"
import { SITE_CONFIG } from "@/site.config"
import { cn } from "@/lib/utils"

type ContactConfig = { channelTalk: string; openKakao: string; telegram: string; phone: string }

export default function Header({ brand }: { brand: Brand }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const config = SITE_CONFIG[brand.key as keyof typeof SITE_CONFIG] as ContactConfig

  const navLinks = [
    { href: "#why", label: `왜 ${brand.name}${brand.nameHighlight}?` },
    { href: "#process", label: "거래 절차" },
    { href: "#guide", label: "가이드" },
    { href: "#faq", label: "FAQ" },
  ]

  const accentCls = brand.key === "oncash"
    ? "bg-blue-600 hover:bg-blue-700 text-white"
    : "bg-primary hover:opacity-90 text-primary-foreground"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center", accentCls)}>
            <span className="font-black text-sm">{brand.symbol}</span>
          </div>
          <span className="text-foreground font-bold text-lg tracking-tight">
            {brand.name}<span className={brand.primaryText}>{brand.nameHighlight}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={config.channelTalk}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1b1c1e] text-white text-sm font-semibold hover:opacity-85 transition-opacity"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.28 2 11.5c0 2.857 1.347 5.42 3.474 7.155L4.5 22l3.68-1.84A10.86 10.86 0 0 0 12 21c5.523 0 10-4.28 10-9.5S17.523 2 12 2Z"/>
            </svg>
            채널톡
          </a>
          <a
            href={config.openKakao}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FEE500] text-[#3A1D1D] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            오픈카톡
          </a>
          <a
            href={config.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all", accentCls)}
          >
            <Send className="w-4 h-4 shrink-0" />
            텔레그램
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4 text-sm shadow-md">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground" onClick={() => setMenuOpen(false)}>{l.label}</a>
          ))}
          <div className="flex gap-2 pt-2">
            <a
              href={config.channelTalk}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#1b1c1e] text-white text-xs font-semibold"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.28 2 11.5c0 2.857 1.347 5.42 3.474 7.155L4.5 22l3.68-1.84A10.86 10.86 0 0 0 12 21c5.523 0 10-4.28 10-9.5S17.523 2 12 2Z"/>
              </svg>
              채널톡
            </a>
            <a
              href={config.openKakao}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#FEE500] text-[#3A1D1D] text-xs font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              오픈카톡
            </a>
            <a
              href={config.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn("flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold", accentCls)}
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              텔레그램
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
