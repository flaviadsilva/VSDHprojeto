"use client";

import Image from "next/image";
import { Container } from "./container";
import { Phone, Mail, ArrowRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const WHATSAPP_LINK =
  "https://wa.me/5551997026577?text=Olá! Gostaria de compartilhar a necessidade do meu negócio.";

export function Footer() {
  return (
    <footer id="contato" className="w-full bg-[#02084b] text-white">
      {/* CTA */}
      <div className="py-14 lg:py-16">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
            Compartilhe a necessidade do seu negócio que nós personalizamos a solução.
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#02084b] px-6 py-3 rounded-[5px] text-sm font-medium hover:bg-white/90 transition-colors mt-8"
          >
            Fale Conosco
            <ArrowRight className="w-4 h-4" />
          </a>
        </Container>
      </div>

      {/* Info */}
      <div className="border-t border-white/10 py-12">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image src="/logo.jpeg" alt="VSDH" width={140} height={56} className="h-12 w-auto" />
            <p className="text-[13px] text-white/50 leading-relaxed mt-3">
              Consultoria e Treinamentos em Gestão de Pessoas e Desenvolvimento Humano e
              Organizacional.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 mb-4 block">
              Contato
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+5551997026577"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                (51) 99702-6577
              </a>
              <a
                href="mailto:veridiana@vsdh.com.br"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                veridiana@vsdh.com.br
              </a>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 mb-4 block">
              Redes Sociais
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://instagram.com/veridianadesouza.dh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                @veridianadesouza.dh
              </a>
              <a
                href="https://linkedin.com/in/veridianadesouza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                veridianadesouza
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-white/30">
          <span>&copy; 2026 VSDH Consultoria e Treinamentos. Todos os direitos reservados.</span>
          <span>
            Feito por{" "}
            <a
              href="https://portfolioflavia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors font-mono"
            >
              &lt;Flávia.dev /&gt;
            </a>
          </span>
        </Container>
      </div>
    </footer>
  );
}
