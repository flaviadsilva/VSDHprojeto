import { Header } from "@/components/header";
import { SectionHero } from "@/components/sections/hero";
import { SectionParaQuem } from "@/components/sections/para-quem";
import { SectionQuemSomos } from "@/components/sections/quem-somos";
import { SectionMetodologia } from "@/components/sections/metodologia";
import { SectionSolucoes } from "@/components/sections/solucoes";
import { SectionPalestras } from "@/components/sections/palestras";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <Header />
      <WhatsAppFloat />
      <main>
        <SectionHero />
        <SectionParaQuem />
        <SectionQuemSomos />
        <SectionMetodologia />
        <SectionSolucoes />
        <SectionPalestras />
      </main>
      <Footer />
    </>
  );
}
