"use client";

import Image from "next/image";
import { Container } from "../container";
import { motion } from "motion/react";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    text: "Transformar a gestão de pessoas em vantagem competitiva, com soluções estratégicas e humanizadas.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência em consultoria de desenvolvimento humano e organizacional no Brasil.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Ética, humanização, excelência, inovação e compromisso com resultados sustentáveis.",
  },
];

export function SectionQuemSomos() {
  return (
    <section id="quem-somos" className="w-full py-16 lg:py-20 relative">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-[360px]">
              <div className="absolute inset-6 bg-[#02084b]/5 blur-[30px] rounded-[5px]" />
              <div className="relative w-full h-full rounded-[5px] overflow-hidden">
                <Image
                  src="/retrato.jpeg"
                  alt="Veridiana de Souza"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-7"
          >
            <div>
              <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
                Sobre nós
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">Quem Somos</h2>
            </div>

            <p className="text-[#02084b]/45 leading-relaxed">
              A <strong className="text-[#02084b] font-semibold">VSDH Consultoria e Treinamentos</strong> atua
              há mais de 16 anos no mercado de Gestão de Pessoas e Desenvolvimento Humano e
              Organizacional, ajudando empresas a transformar desafios em estratégias de crescimento.
            </p>

            <div className="p-5 rounded-[5px] bg-[#02084b]">
              <h3 className="text-sm font-semibold text-white mb-2">
                Veridiana de Souza — Fundadora
              </h3>
              <p className="text-[13px] text-white/55 leading-relaxed">
                Técnica em Segurança do Trabalho, Graduada em Gestão de Recursos Humanos (Unisinos),
                Pós-Graduada em Psicologia Organizacional (PUCRS), Especialista em Liderança e
                Coaching, Analista DISC e Master PNL. Mais de 16 anos de experiência em
                desenvolvimento de lideranças e equipes de alta performance.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {values.map((item) => (
                <div key={item.title} className="p-4 rounded-[5px] bg-[#f4f5f7]">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-3.5 h-3.5 text-[#02084b]/35" />
                    <span className="text-[13px] font-semibold text-[#02084b]">{item.title}</span>
                  </div>
                  <p className="text-[12px] text-[#02084b]/35 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
