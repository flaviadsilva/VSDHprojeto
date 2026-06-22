"use client";

import { motion } from "motion/react";
import Image from "next/image";

const logos = [
  "/lgoos/Captura de tela 2026-06-22 192422.png",
  "/lgoos/Captura de tela 2026-06-22 192434.png",
  "/lgoos/Captura de tela 2026-06-22 192448.png",
  "/lgoos/Captura de tela 2026-06-22 192455.png",
  "/lgoos/Captura de tela 2026-06-22 192504.png",
  "/lgoos/Captura de tela 2026-06-22 192514.png",
  "/lgoos/Captura de tela 2026-06-22 192521.png",
  "/lgoos/WhatsApp Image 2026-06-22 at 18.37.57.jpeg",
];

const duplicated = [...logos, ...logos];

export function SectionLogosCarousel() {
  return (
    <section className="w-full py-8 md:py-12 bg-white overflow-hidden">
      <p className="text-center text-sm font-medium tracking-[0.15em] uppercase text-[#02084b]/50 mb-8">
        Empresas que confiam na VSDH
      </p>
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-8 md:gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {duplicated.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-12 w-24 md:h-16 md:w-32 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Logo parceiro ${(i % logos.length) + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
