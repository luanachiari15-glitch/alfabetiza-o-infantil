import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface CtaBannerProps {
  onCtaClick: () => void;
}

export default function CtaBanner({ onCtaClick }: CtaBannerProps) {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-gradient-to-r from-[#10b981] via-[#059669] to-[#047857] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-6">
        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[900] tracking-tight leading-[1.15] drop-shadow-xs">
          Pronta para tornar a alfabetização <br className="hidden sm:inline" />
          mais leve e divertida?
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed font-medium">
          Garanta agora acesso a mais de <strong className="font-extrabold text-white">3.700 atividades completas</strong> + 5 super bônus exclusivos e comece a aplicar hoje mesmo!
        </p>

        {/* Button */}
        <div className="pt-4 flex flex-col items-center justify-center gap-3">
          <button
            onClick={onCtaClick}
            id="final-cta-button"
            className="cta-glow-button cursor-pointer inline-flex items-center justify-center gap-3 bg-[#ff5500] hover:bg-[#e04b00] text-white font-extrabold text-lg sm:text-xl py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-black/20 uppercase tracking-wider"
          >
            <span>QUERO ACESSAR AS ATIVIDADES AGORA</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Guarantee */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white/90">
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>Acesso imediato • Pagamento 100% seguro • Garantia de 7 dias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
