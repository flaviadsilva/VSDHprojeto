"use client";

import { Container } from "../container";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5551997026577?text=Olá! Quero potencializar minha empresa com a VSDH.";

const words = ["Desenvolvendo", "pessoas,", "fortalecendo", "culturas."];

export function SectionHero() {
  return (
    <section id="home" className="w-full h-screen flex items-center relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2,8,75,0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2,8,75,0.09) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Grid fade edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,white_75%)]" />

      {/* Subtle glow center */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#02084b]/[0.02] rounded-full blur-[100px] pointer-events-none"
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40 mb-6"
        >
          Consultoria &amp; Treinamentos
        </motion.span>

        <h1 className="text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-[#02084b]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-base lg:text-lg text-[#02084b]/40 leading-relaxed max-w-xl mt-6"
        >
          Transformamos desafios de gestão em estratégias práticas que fortalecem lideranças e
          desenvolvem equipes. Atuação estratégica e humanizada para o crescimento do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#02084b] text-white px-6 py-3 rounded-[5px] text-sm font-medium hover:bg-[#02084b]/90 transition-colors"
          >
            Quero Potencializar Minha Empresa
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
