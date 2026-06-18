"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "./container";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Palestras", href: "#palestras" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_LINK =
  "https://wa.me/5551997026577?text=Olá! Gostaria de falar com um especialista da VSDH.";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#02084b] backdrop-blur-xl border-b border-white/5">
      <Container className="flex items-center justify-between h-14">
        <a href="#home" className="flex items-center">
          <Image src="/logo.jpeg" alt="VSDH" width={120} height={48} className="h-10 w-auto" loading="eager" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#02084b] px-4 py-1.5 rounded-[5px] text-[13px] font-medium hover:bg-white/90 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Fale Conosco
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#02084b] backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <Container className="flex flex-col gap-4 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[13px] font-medium text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#02084b] px-4 py-2 rounded-[5px] text-[13px] font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Fale Conosco
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
