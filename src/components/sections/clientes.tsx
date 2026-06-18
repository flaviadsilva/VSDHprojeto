"use client";

import { Container } from "../container";
import { motion } from "motion/react";

const clientes = ["DCN", "Power Hub", "Primuss", "Eltz", "SMT", "Higra", "DHL", "E2PS"];

export function SectionClientes() {
  return (
    <section className="w-full py-16 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[13px] font-medium tracking-[0.2em] uppercase text-[#02084b]/40">
            Quem confia na VSDH
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mt-3">Nossos Clientes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {clientes.map((cliente) => (
            <div
              key={cliente}
              className="flex items-center justify-center py-5 rounded-[5px] bg-[#f4f5f7] text-base font-semibold text-[#02084b]/25 tracking-wide select-none hover:text-[#02084b]/40 transition-colors"
            >
              {cliente}
            </div>
          ))}
        </motion.div>

        <p className="text-center text-[#02084b]/20 text-[11px] mt-8">
          *Logotipos serão inseridos quando disponíveis
        </p>
      </Container>
    </section>
  );
}
