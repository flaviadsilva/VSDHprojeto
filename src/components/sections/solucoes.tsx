"use client";

import { Container } from "../container";
import { motion } from "motion/react";
import { Briefcase, Building, GraduationCap, Brain } from "lucide-react";

const solucoes = [
  {
    icon: Briefcase,
    label: "RH Estratégico",
    items: [
      "Gestão por Competências",
      "Avaliação de Desempenho",
      "Plano de Desenvolvimento Individual (PDI)",
      "Estruturação de Processos e Cargos",
    ],
    featured: true,
  },
  {
    icon: Building,
    label: "Cultura Organizacional",
    items: [
      "Definição de Missão, Visão e Valores",
      "Rituais de Gestão",
      "Pesquisa de Clima Organizacional",
      "Aplicação digital e sigilosa garantida",
    ],
    featured: false,
  },
  {
    icon: GraduationCap,
    label: "Lideranças & Mentoria",
    items: [
      "Programas personalizados de desenvolvimento",
      "Team Building",
      "Mentoria de Carreira",
      "Formação de líderes de alta performance",
    ],
    featured: false,
  },
  {
    icon: Brain,
    label: "Saúde Mental & NR-1",
    items: [
      "Diagnóstico de Riscos Psicossociais (DRPS)",
      "Programas Contínuos de Prevenção",
      "Promoção da Saúde Mental Corporativa",
      "Conformidade com a NR-1",
    ],
    featured: true,
  },
];

export function SectionSolucoes() {
  return (
    <section id="solucoes" className="w-full py-16 lg:py-20 relative">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
            O que fazemos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">Nossas Soluções</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solucoes.map((sol, i) => {
            const dark = sol.featured;
            return (
              <motion.div
                key={sol.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`p-6 rounded-[5px] cursor-pointer transition-colors duration-300 ${dark ? "bg-[#02084b] hover:bg-[#0a1264]" : "bg-[#f4f5f7] hover:bg-[#02084b] [&:hover_h3]:text-white [&:hover_.icon-box]:bg-white/10 [&:hover_.icon-el]:text-white/70 [&:hover_span]:text-white/50 [&:hover_.dot]:bg-white/25"}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`icon-box w-8 h-8 rounded-[4px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    dark ? "bg-white/10" : "bg-[#02084b]/5"
                  }`}>
                    <sol.icon className={`icon-el w-4 h-4 transition-colors duration-300 ${dark ? "text-white/70" : "text-[#02084b]/40"}`} />
                  </div>
                  <h3 className={`text-[15px] font-semibold transition-colors duration-300 ${dark ? "text-white" : "text-[#02084b]"}`}>
                    {sol.label}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {sol.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className={`dot w-1 h-1 rounded-full shrink-0 transition-colors duration-300 ${dark ? "bg-white/25" : "bg-[#02084b]/20"}`} />
                      <span className={`text-sm transition-colors duration-300 ${dark ? "text-white/50" : "text-[#02084b]/40"}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
