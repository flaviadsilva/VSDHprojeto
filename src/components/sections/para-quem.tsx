"use client";

import { Container } from "../container";
import { motion } from "motion/react";
import { Building2, Users, UserCheck, ShieldCheck } from "lucide-react";

const challenges = [
  {
    icon: Building2,
    title: "Crescimento e Transformação",
    description:
      "Empresas em crescimento, reestruturação ou transformação cultural que precisam de direcionamento estratégico.",
    featured: true,
  },
  {
    icon: Users,
    title: "Lideranças Sobrecarregadas",
    description:
      "Lideranças sobrecarregadas, equipes desmotivadas e comunicação ineficaz que travam resultados.",
    featured: false,
  },
  {
    icon: UserCheck,
    title: "Retenção de Talentos",
    description:
      "Dificuldade em engajar, reter e desenvolver talentos que impulsionem o negócio.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Ambientes Saudáveis",
    description:
      "Necessidade de fortalecer a cultura e promover ambientes saudáveis em conformidade com a NR-01.",
    featured: true,
  },
];

export function SectionParaQuem() {
  return (
    <section className="w-full py-16 lg:py-20 relative">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
            Nosso público
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">
            Para quem é o nosso trabalho?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`p-6 rounded-[5px] cursor-pointer transition-colors duration-300 ${
                item.featured
                  ? "bg-[#02084b] hover:bg-[#0a1264]"
                  : "bg-[#f4f5f7] hover:bg-[#02084b] hover:text-white [&:hover_h3]:text-white [&:hover_p]:text-white/55 [&:hover_.icon-box]:bg-white/10 [&:hover_.icon-el]:text-white/70"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`icon-box w-9 h-9 rounded-[4px] flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  item.featured ? "bg-white/10" : "bg-[#02084b]/5"
                }`}>
                  <item.icon className={`icon-el w-[18px] h-[18px] transition-colors duration-300 ${
                    item.featured ? "text-white/70" : "text-[#02084b]/40"
                  }`} />
                </div>
                <div>
                  <h3 className={`text-[15px] font-semibold mb-1 transition-colors duration-300 ${
                    item.featured ? "text-white" : "text-[#02084b]"
                  }`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    item.featured ? "text-white/55" : "text-[#02084b]/40"
                  }`}>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
