import { ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section id="hero" className="pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
      {/* BNCC Badge */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#e6f9f0] border border-[#a7f3d0] text-[#059669] font-bold text-xs sm:text-[13px] tracking-wide mb-6 uppercase shadow-xs">
        <ShieldCheck className="w-4 h-4 text-[#059669]" />
        <span>100% ALINHADO À BNCC</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-[900] text-[#18181b] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
        Mais de <span className="text-[#ff5500]">3.700 atividades</span> para levar a criança do zero à leitura
      </h1>

      {/* Subheadline */}
      <p className="text-base sm:text-xl text-[#4b5563] font-medium max-w-3xl mx-auto leading-relaxed mb-8">
        Ajude crianças da <strong className="text-[#18181b] font-bold">Educação Infantil ao Ensino Fundamental</strong> a reconhecer letras, formar palavras, desenvolver a escrita e avançar na leitura com atividades prontas, didáticas e divertidas.
      </p>

      {/* CTA Button */}
      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        <button
          onClick={onCtaClick}
          id="hero-cta-button"
          className="cta-glow-button cursor-pointer inline-flex items-center justify-center gap-3 bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-lg sm:text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 uppercase tracking-wider"
        >
          <span>EU QUERO</span>
          <ArrowRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#4b5563]">
          <Check className="w-4 h-4 text-[#10b981] stroke-[2.5]" />
          <span>Acesso imediato após a compra</span>
        </div>
      </div>

      {/* Hero Mockup Image Presentation - Pure Transparent Image */}
      <div className="relative max-w-3xl mx-auto my-2 sm:my-4 flex items-center justify-center">
        <img
          src="/hero-kit.png"
          alt="Kit Alfabetização Infantil - Mais de 3.700 Atividades"
          className="w-full max-w-[620px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('ibb.co')) {
              target.src = 'https://i.ibb.co/ksgdLkmC/Chat-GPT-Image-28-de-ago-de-2026-23-10-45.png';
            }
          }}
        />
      </div>
    </section>
  );
}
