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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
            Como atuamos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">
            Nossa Metodologia
          </h2>
          <p className="text-[#02084b]/40 mt-3 max-w-lg text-sm">
            Uma abordagem estruturada em 4 pilares para gerar transformação real e duradoura.
          </p>
        </motion.div>

        {/* Branch timeline */}
        <div className="relative">
          <div className="absolute left-5 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-[#02084b]/8" />

          <div className="flex flex-col gap-12">
            {pilares.map((pilar, i) => {
              const isRight = i % 2 !== 0;

              return (
                <motion.div
                  key={pilar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Node */}
                  <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-[5px] bg-[#02084b] flex items-center justify-center z-10">
                    <pilar.icon className="w-4 h-4 text-white/80" />
                  </div>

                  {/* Branch line */}
                  <div
                    className={`hidden lg:block absolute top-1/2 -translate-y-px h-px bg-[#02084b]/8 w-[calc(50%-80px)] ${
                      isRight ? "left-[calc(50%+20px)]" : "right-[calc(50%+20px)]"
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`pl-16 lg:pl-0 ${
                      isRight
                        ? "lg:col-start-2 lg:pl-20"
                        : "lg:col-start-1 lg:pr-20 lg:text-right"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="p-5 rounded-[5px] bg-[#f4f5f7] cursor-pointer transition-colors duration-300 hover:bg-[#02084b] [&:hover_h3]:text-white [&:hover_span]:text-white/30 [&:hover_p]:text-white/55"
                    >
                      <div className={`flex items-center gap-3 mb-1.5 ${isRight ? "" : "lg:justify-end"}`}>
                        <span className="text-[11px] font-mono text-[#02084b]/20 font-medium">
                          0{i + 1}
                        </span>
                        <h3 className="text-[15px] font-semibold text-[#02084b] transition-colors duration-300">{pilar.title}</h3>
                      </div>
                      <p className="text-sm text-[#02084b]/40 leading-relaxed transition-colors duration-300">
                        {pilar.description}
                      </p>
                    </motion.div>
                  </div>

                  {isRight ? (
                    <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                  ) : (
                    <div className="hidden lg:block lg:col-start-2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
