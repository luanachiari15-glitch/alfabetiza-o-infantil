import { X, Sparkles, Check, Gift, ArrowRight, ShieldCheck } from 'lucide-react';

interface UpgradeDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onContinueEssential: () => void;
}

export default function UpgradeDiscountModal({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onContinueEssential,
}: UpgradeDiscountModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-[28px] max-w-md w-full overflow-hidden shadow-2xl border border-amber-200 flex flex-col animate-in zoom-in-95 duration-150 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 text-center space-y-4">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
            OFERTA ÚNICA DE UPGRADE
          </div>

          {/* Headline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-[900] text-slate-900 leading-tight">
              Leve o <span className="text-[#ff5500]">Plano Completo</span> por apenas
            </h3>
            
            {/* Price Tag */}
            <div className="flex items-baseline justify-center gap-1 text-[#10b981] my-2">
              <span className="text-sm font-bold text-slate-400 line-through mr-1">de R$ 97</span>
              <span className="text-base font-bold text-slate-900">por R$</span>
              <span className="text-4xl sm:text-5xl font-[900] tracking-tight text-[#10b981]">17</span>
              <span className="text-2xl font-extrabold text-[#10b981]">,00</span>
            </div>
            
            <p className="text-xs text-slate-500">
              Pagamento único • Acesso vitalício
            </p>
          </div>

          {/* Quick Direct Checklist */}
          <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/70 text-left space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>+3.700 Atividades (em vez de apenas 900)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900">
              <div className="w-4 h-4 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0">
                <Gift className="w-3 h-3 fill-amber-700 text-amber-800" />
              </div>
              <span>Todos os 5 Super Bônus Inclusos (R$ 322+)</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Do zero à alfabetização + Matemática e Caligrafia</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={onAcceptUpgrade}
              className="cta-glow-button w-full py-4 px-6 rounded-full font-black text-base sm:text-lg tracking-wider uppercase flex items-center justify-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <span>QUERO ESSE PLANO</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={onContinueEssential}
              className="w-full py-2 text-xs font-semibold text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              Não, quero ficar com o plano de R$ 9,90
            </button>
          </div>

          {/* Reassurance */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Garantia incondicional de 7 dias</span>
          </div>

        </div>
      </div>
    </div>
  );
}
