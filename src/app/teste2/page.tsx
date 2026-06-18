"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import {
  Building2, Users, UserCheck, ShieldCheck, Target, Eye, Heart,
  Search, Layers, Rocket, BarChart3, Briefcase, Building,
  GraduationCap, Brain, Mic, BookOpen, FileCheck,
  Phone, Mail, AtSign, ExternalLink, ArrowRight, MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5551997026577";

/* ===================== HEADER (old) ===================== */
function OldHeader() {
  const links = ["Home","Quem Somos","Nossa Metodologia","Soluções","Palestras e Treinamentos","Contato"];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <Container className="flex items-center justify-between h-20">
        <a href="#" className="text-2xl font-bold tracking-tight text-[#02084b]">VSDH</a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <span key={l} className="text-sm font-medium text-gray-500 hover:text-[#02084b] transition-colors">{l}</span>
          ))}
        </nav>
        <a href={WHATSAPP_LINK} className="hidden lg:inline-flex items-center gap-2 bg-[#02084b] text-white px-6 py-2.5 rounded-full text-sm font-semibold">
          <MessageCircle className="w-4 h-4" /> Fale com um Especialista
        </a>
      </Container>
    </header>
  );
}

/* ===================== HERO (old) ===================== */
function OldHero() {
  return (
    <section className="w-full bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold tracking-widest uppercase text-[#02084b]/60">Consultoria &amp; Treinamentos</span>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#02084b]">
            Desenvolvendo pessoas, fortalecendo culturas e impulsionando resultados sustentáveis.
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
            Transformamos desafios de gestão em estratégias práticas que fortalecem lideranças e desenvolvem equipes.
          </p>
          <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-[#02084b] text-white px-8 py-4 rounded-full text-base font-semibold w-fit">
            Quero Potencializar Minha Empresa <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[420px] lg:w-[400px] lg:h-[520px]">
            <div className="absolute inset-0 bg-[#02084b]/10 rounded-[2rem] translate-x-4 translate-y-4" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image src="/retrato.jpeg" alt="Veridiana" fill className="object-cover object-top" priority />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ===================== PARA QUEM (old) ===================== */
function OldParaQuem() {
  const items = [
    { icon: Building2, title: "Crescimento e Transformação", desc: "Empresas em crescimento, reestruturação ou transformação cultural." },
    { icon: Users, title: "Lideranças Sobrecarregadas", desc: "Lideranças sobrecarregadas, equipes desmotivadas e comunicação ineficaz." },
    { icon: UserCheck, title: "Retenção de Talentos", desc: "Dificuldade em engajar, reter e desenvolver talentos." },
    { icon: ShieldCheck, title: "Ambientes Saudáveis (NR-01)", desc: "Fortalecer a cultura e promover ambientes saudáveis." },
  ];
  return (
    <section className="w-full bg-[#f0f2f8] py-20 lg:py-28">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mb-4">Para quem é o nosso trabalho?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Atuamos com empresas que reconhecem que pessoas são o maior ativo do negócio.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#02084b]/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#02084b]" />
              </div>
              <h3 className="text-xl font-semibold text-[#02084b] mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== QUEM SOMOS (old) ===================== */
function OldQuemSomos() {
  const vals = [
    { icon: Target, title: "Missão", text: "Transformar a gestão de pessoas em vantagem competitiva." },
    { icon: Eye, title: "Visão", text: "Ser referência em consultoria de desenvolvimento humano." },
    { icon: Heart, title: "Valores", text: "Ética, humanização, excelência, inovação." },
  ];
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative w-[300px] h-[380px] lg:w-[380px] lg:h-[480px]">
              <div className="absolute inset-0 bg-[#02084b] rounded-[2rem] -translate-x-4 translate-y-4" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <Image src="/retrato.jpeg" alt="Veridiana" fill className="object-cover object-top" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b]">Quem Somos</h2>
            <p className="text-gray-500 leading-relaxed">
              A <strong className="text-[#02084b]">VSDH Consultoria e Treinamentos</strong> atua há mais de 16 anos no mercado de Gestão de Pessoas.
            </p>
            <div className="bg-[#f0f2f8] rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-[#02084b] mb-3">Veridiana de Souza — Fundadora</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Graduada em RH (Unisinos), Pós em Psicologia Organizacional (PUCRS), Especialista em Liderança/Coaching, Analista DISC e Master PNL.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {vals.map((v) => (
            <div key={v.title} className="text-center p-8 rounded-2xl border border-gray-200">
              <div className="w-14 h-14 rounded-full bg-[#02084b] flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#02084b] mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== METODOLOGIA (old) ===================== */
function OldMetodologia() {
  const p = [
    { icon: Search, step: "01", title: "Diagnosticar", desc: "Compreender a realidade para direcionar ações assertivas." },
    { icon: Layers, step: "02", title: "Estruturar", desc: "Criar processos, políticas e ferramentas sólidas." },
    { icon: Rocket, step: "03", title: "Desenvolver", desc: "Capacitar líderes e equipes para potencializar resultados." },
    { icon: BarChart3, step: "04", title: "Sustentar", desc: "Monitorar indicadores e garantir a melhoria contínua." },
  ];
  return (
    <section className="w-full bg-[#02084b] py-20 lg:py-28">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Nossa Metodologia</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Uma abordagem estruturada em 4 pilares.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {p.map((item) => (
            <div key={item.title} className="relative bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <span className="text-5xl font-bold text-white/10 absolute top-4 right-6">{item.step}</span>
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== SOLUÇÕES (old) ===================== */
function OldSolucoes() {
  const s = [
    { icon: Briefcase, label: "RH Estratégico", items: ["Gestão por Competências","Avaliação de Desempenho","PDI","Estruturação de Processos"] },
    { icon: Building, label: "Cultura Organizacional", items: ["Missão/Visão/Valores","Rituais de Gestão","Pesquisa de Clima"] },
    { icon: GraduationCap, label: "Lideranças & Mentoria", items: ["Programas personalizados","Team Building","Mentoria de Carreira"] },
    { icon: Brain, label: "Saúde Mental & NR-1", items: ["DRPS","Programas de Prevenção","Saúde Mental Corporativa"] },
  ];
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mb-4">Nossas Soluções</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {s.map((sol) => (
            <div key={sol.label} className="bg-[#f0f2f8] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <sol.icon className="w-6 h-6 text-[#02084b]" />
                <h3 className="text-xl font-bold text-[#02084b]">{sol.label}</h3>
              </div>
              <ul className="space-y-2">
                {sol.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#02084b]" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== PALESTRAS (old) ===================== */
function OldPalestras() {
  const cats = [
    { icon: Mic, title: "Palestras", items: ["Autoliderança","Liderança Inspiradora","Liderança Feminina","Inteligência Emocional"] },
    { icon: BookOpen, title: "Treinamentos", items: ["Feedback que Transforma","Comunicação Assertiva","Gestão do Tempo"] },
    { icon: FileCheck, title: "Cursos Compulsórios", items: ["Assédio Moral","CIPAA (NR-5)"] },
  ];
  return (
    <section className="w-full bg-[#f0f2f8] py-20 lg:py-28">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mb-4">Palestras e Treinamentos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#02084b] flex items-center justify-center mb-5">
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#02084b] mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02084b]" />
                    <span className="text-gray-500 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== CLIENTES (old) ===================== */
function OldClientes() {
  const c = ["DCN","Power Hub","Primuss","Eltz","SMT","Higra","DHL","E2PS"];
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#02084b] mb-4">Empresas que Confiam na VSDH</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14">
          {c.map((name) => (
            <div key={name} className="text-2xl font-bold text-[#02084b]/20">{name}</div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ===================== FOOTER (old) ===================== */
function OldFooter() {
  return (
    <footer className="w-full bg-[#02084b] text-white">
      <div className="py-16 lg:py-20 border-b border-white/10">
        <Container className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Compartilhe a necessidade do seu negócio que nós personalizamos a solução.</h2>
          <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-white text-[#02084b] px-8 py-4 rounded-full text-base font-semibold mt-6">
            Fale Conosco <ArrowRight className="w-5 h-5" />
          </a>
        </Container>
      </div>
      <div className="py-12">
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">VSDH</h3>
            <p className="text-white/60 text-sm">Consultoria e Treinamentos em Gestão de Pessoas.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Contato</h3>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3 text-white/70 text-sm"><Phone className="w-4 h-4" />(51) 99702-6577</span>
              <span className="flex items-center gap-3 text-white/70 text-sm"><Mail className="w-4 h-4" />veridiana@vsdh.com.br</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Redes</h3>
            <div className="flex flex-col gap-3">
              <span className="flex items-center gap-3 text-white/70 text-sm"><AtSign className="w-4 h-4" />@veridianadesouza.dh</span>
              <span className="flex items-center gap-3 text-white/70 text-sm"><ExternalLink className="w-4 h-4" />veridianadesouza</span>
            </div>
          </div>
        </Container>
      </div>
      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>&copy; 2026 VSDH Consultoria e Treinamentos.</span>
          <span>Feito por <span className="font-mono">&lt;Flávia.dev /&gt;</span></span>
        </Container>
      </div>
    </footer>
  );
}

/* ===================== PAGE ===================== */
export default function Teste2() {
  return (
    <>
      <OldHeader />
      <main>
        <OldHero />
        <OldParaQuem />
        <OldQuemSomos />
        <OldMetodologia />
        <OldSolucoes />
        <OldPalestras />
        <OldClientes />
      </main>
      <OldFooter />
    </>
  );
}
