"use client";

import { Container } from "../container";
import { motion } from "motion/react";
import { Search, Layers, Rocket, BarChart3 } from "lucide-react";

const pilares = [
  {
    icon: Search,
    title: "Diagnosticar",
    description: "Compreender a realidade para direcionar ações assertivas.",
  },
  {
    icon: Layers,
    title: "Estruturar",
    description: "Criar processos, políticas e ferramentas sólidas.",
  },
  {
    icon: Rocket,
    title: "Desenvolver",
    description: "Capacitar líderes e equipes para potencializar resultados.",
  },
  {
    icon: BarChart3,
    title: "Sustentar",
    description: "Monitorar indicadores e garantir a melhoria contínua.",
  },
];

export function SectionMetodologia() {
  return (
    <section id="metodologia" className="w-full py-16 lg:py-20 relative">
      <Container className="relative z-10">
        <div className="flex flex-col gap-12">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div>
              <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
                Como atuamos
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">
                Nossa Metodologia
              </h2>
              <p className="text-[#02084b]/50 mt-3 max-w-lg text-[15px] leading-[1.8]">
                Uma abordagem estruturada em 4 pilares para gerar transformação real e duradoura.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {pilares.map((pilar, i) => (
                <motion.div
                  key={pilar.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-[5px] bg-[#f4f5f7] cursor-pointer transition-colors duration-300 hover:bg-[#02084b] [&:hover_h3]:text-white [&:hover_span]:text-white/30 [&:hover_p]:text-white/55 [&:hover_div]:bg-white/15 [&:hover_svg]:text-white/70"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-8 h-8 rounded-[5px] bg-[#02084b]/10 flex items-center justify-center transition-colors duration-300">
                      <pilar.icon className="w-3.5 h-3.5 text-[#02084b]/50 transition-colors duration-300" />
                    </div>
                    <span className="text-[11px] font-mono text-[#02084b]/20 font-medium">
                      0{i + 1}
                    </span>
                    <h3 className="text-[15px] font-semibold text-[#02084b] transition-colors duration-300">
                      {pilar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#02084b]/40 leading-relaxed transition-colors duration-300">
                    {pilar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
