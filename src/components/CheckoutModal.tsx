import { useState, FormEvent } from 'react';
import { X, Check, ShieldCheck, QrCode, CreditCard, FileText, Lock, Sparkles } from 'lucide-react';
import { Plan } from '../types';

interface CheckoutModalProps {
  plan: Plan | null;
  onClose: () => void;
}

export default function CheckoutModal({ plan, onClose }: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!plan) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSuccess(true);
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136geoatividades-checkout-2026@pagamento.com520400005303986540522.905802BR5925GEOATIVIDADES EDUCACAO6009SAO PAULO62070503***6304E1F2');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#ff5500] to-[#ea580c] p-6 text-white flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-amber-200 block">
              FINALIZAR PEDIDO SEGURO
            </span>
            <h3 className="text-xl font-[900] tracking-tight">
              Plano {plan.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Order Summary */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 text-sm block">Kit Alfabetização ({plan.name})</span>
                  <span className="text-xs text-slate-500">Acesso 100% digital liberado na hora</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through block">R$ {plan.originalPrice},00</span>
                  <span className="text-lg font-extrabold text-[#10b981]">R$ {plan.price}{plan.cents}</span>
                </div>
              </div>

              {/* User Data */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Seu Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Prof. João Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5500] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Seu Melhor E-mail (Onde você receberá o material)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seu.email@escola.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff5500] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'border-[#10b981] bg-emerald-50/50 text-[#059669]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>PIX (Instantâneo)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[#10b981] bg-emerald-50/50 text-[#059669]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Cartão de Crédito</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border flex flex-col items-center gap-1.5 transition cursor-pointer ${
                      paymentMethod === 'boleto'
                        ? 'border-[#10b981] bg-emerald-50/50 text-[#059669]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>Boleto Bancário</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'pix' && (
                <div className="bg-emerald-50/60 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
                  <span className="text-xs font-bold text-emerald-800 flex items-center justify-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Liberação Imediata via PIX
                  </span>
                  <p className="text-xs text-emerald-700">
                    Pague e receba seus links de download e bônus no seu e-mail instantaneamente.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="cta-glow-button w-full py-4 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-base tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                <Lock className="w-4 h-4" />
                <span>CONFIRMAR E LIBERAR ACESSO</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Ambiente Criptografado · Garantia de 7 dias</span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-bounce">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-[900] text-slate-900">
                  Parabéns, {name}! 🎉
                </h3>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Seu pedido do <strong>Plano {plan.name}</strong> foi gerado com sucesso para o e-mail: <br />
                  <strong className="text-[#ff5500] font-bold">{email}</strong>
                </p>
              </div>

              {paymentMethod === 'pix' && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 text-left">
                  <span className="text-xs font-bold text-slate-700 uppercase block">
                    Chave PIX Copia e Cola:
                  </span>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-600 break-all select-all">
                    00020126580014br.gov.bcb.pix0136kitalfabetizacao-checkout-2026@pagamento.com520400005303986540527.005802BR5925KITALFABETIZACAO
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    {copiedPix ? '✓ Código PIX Copiado!' : 'Copiar Código PIX'}
                  </button>
                </div>
              )}

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-800 font-medium">
                {plan.id.includes('premium')
                  ? '✓ Suas +3.700 atividades em PDF e os 5 Bônus Exclusivos já estão sendo enviados para sua caixa de entrada.'
                  : '✓ Suas 900 atividades em PDF já estão sendo enviadas para sua caixa de entrada.'}
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-extrabold text-sm rounded-full cursor-pointer transition"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
