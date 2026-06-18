"use client";

import { Container } from "../container";
import { motion } from "motion/react";
import { Mic, BookOpen, FileCheck } from "lucide-react";

const categories = [
  {
    icon: Mic,
    title: "Palestras",
    items: [
      "Autoliderança",
      "Liderança Inspiradora",
      "Liderança Feminina",
      "Inteligência Emocional",
      "Segurança Psicológica",
    ],
    featured: true,
  },
  {
    icon: BookOpen,
    title: "Treinamentos",
    items: [
      "Feedback que Transforma",
      "Comunicação Assertiva",
      "Gestão do Tempo",
      "Formação de Analistas DISC",
    ],
    featured: false,
  },
  {
    icon: FileCheck,
    title: "Cursos Compulsórios",
    items: ["Assédio Moral", "CIPAA (NR-5)"],
    featured: false,
  },
];

export function SectionPalestras() {
  return (
    <section id="palestras" className="w-full py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
            Capacitação
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">
            Palestras e Treinamentos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const dark = cat.featured;
            return (
              <motion.div
                key={cat.title}
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
                    <cat.icon className={`icon-el w-4 h-4 transition-colors duration-300 ${dark ? "text-white/70" : "text-[#02084b]/40"}`} />
                  </div>
                  <h3 className={`text-[15px] font-semibold transition-colors duration-300 ${dark ? "text-white" : "text-[#02084b]"}`}>
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
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
