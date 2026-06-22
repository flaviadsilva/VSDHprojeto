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
    text: "Ser referência em consultoria humana e responsável, marcada pela credibilidade, transparência e respeito.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Ética e Transparência, Humanização, Excelência, Respeito e Compromisso com resultados.",
  },
];

export function SectionQuemSomos() {
  return (
    <section id="quem-somos" className="w-full py-14 md:py-20 lg:py-28 relative">
      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-14"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/50">
            Sobre nós
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">
            Quem Somos
          </h2>
        </motion.div>

        {/* Main content — photo + all info on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[280px] md:max-w-[360px]">
              <Image
                src="/retrato.jpeg"
                alt="Veridiana de Souza"
                width={360}
                height={480}
                sizes="(max-width: 768px) 100vw, 360px"
                className="w-full h-auto object-contain"
              />
              <div className="text-center mt-4">
                <p className="text-[#02084b] font-bold text-base">Veridiana de Souza</p>
                <p className="text-[#02084b]/50 text-[13px]">Fundadora da VSDH</p>
              </div>
            </div>
          </motion.div>

          {/* Right side — text + cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <p className="text-[#02084b]/70 leading-[1.8] text-[15px]">
              A <strong className="text-[#02084b] font-semibold">VSDH Consultoria e Treinamentos</strong> nasceu
              da experiência e da paixão pelo desenvolvimento humano e organizacional. Oferecemos
              soluções estratégicas para empresas que desejam fortalecer sua cultura, desenvolver
              lideranças e construir ambientes de trabalho mais saudáveis e produtivos.
            </p>
            <p className="text-[#02084b]/70 leading-[1.8] text-[15px]">
              Nossa atuação combina conhecimento técnico, visão estratégica e uma abordagem humanizada,
              transformando desafios em oportunidades de crescimento sustentável.
            </p>

            <div className="p-5 rounded-[5px] bg-[#02084b]">
              <h3 className="text-sm font-semibold text-white mb-2">
                Sobre a Fundadora
              </h3>
              <p className="text-[13px] text-white/70 leading-[1.8]">
                Psicóloga Organizacional e Especialista em Liderança e Coaching pela PUCRS, com mais
                de 16 anos de experiência em Gestão de Pessoas e Desenvolvimento Humano. Graduada em
                Recursos Humanos pela Unisinos, Analista DISC e Master Practitioner em PNL. Atua no
                desenvolvimento de lideranças, fortalecimento da cultura organizacional e estruturação
                de práticas estratégicas.
              </p>
            </div>

            {/* Values cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-[5px] bg-[#f4f5f7]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-3.5 h-3.5 text-[#02084b]/40" />
                    <span className="text-[13px] font-semibold text-[#02084b]">{item.title}</span>
                  </div>
                  <p className="text-[12px] text-[#02084b]/50 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
