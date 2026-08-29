import { Check, Gift, ArrowRight, ShieldCheck, Crown, ShieldAlert, X } from 'lucide-react';
import { Plan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: Plan) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const plans: Plan[] = [
    {
      id: 'premium',
      name: 'Plano Completo',
      badge: 'MELHOR ESCOLHA',
      description: 'Acesso total e ilimitado a todas as atividades + 5 Super Bônus exclusivos.',
      originalPrice: 97,
      price: 27,
      cents: ',00',
      checkoutUrl: 'https://pay.cakto.com.br/9pnaw5p_1071356',
      features: [
        { text: '+3.700 Atividades Prontas para Imprimir' },
        { text: 'Sílabas Simples + Complexas (BRA, NHA, LHA...)' },
        { text: 'Coordenação Motora Completa' },
        { text: 'Vogais e Consciência Fonológica' },
        { text: 'Alfabeto Silábico de A a Z' },
        { text: 'Formando Palavras e Frases' },
        { text: 'Caligrafia Inicial e Cursiva' },
        { text: 'Matemática' },
        { text: 'Ensino Religioso e Artes' },
        { text: '5 Bônus Exclusivos (R$322+)', isBonus: true },
        { text: 'Acesso vitalício + todas as atualizações' },
        { text: 'Suporte exclusivo' },
        { text: 'Garantia incondicional de 7 dias' },
      ],
      popular: true,
    },
    {
      id: 'essencial',
      name: 'Plano Essencial',
      description: 'Pacote básico com conteúdo reduzido e sem bônus.',
      originalPrice: 37,
      price: 9,
      cents: ',90',
      checkoutUrl: 'https://pay.cakto.com.br/34dgk46_1071344',
      features: [
        { text: '900 atividades' },
        { text: 'Arquivos em PDF prontos para imprimir' },
        { text: 'Acesso vitalício ao material' },
        { text: 'Garantia incondicional de 7 dias' },
        { text: 'Sem os 5 Super Bônus' },
        { text: 'Sem atualizações futuras' },
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Eyebrow */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#059669] mb-3 block">
          PLANOS E PREÇOS
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-[#18181b] tracking-tight leading-[1.2]">
          Escolha a melhor opção para <span className="text-[#10b981]">transformar a alfabetização hoje</span>
        </h2>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-[32px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
              plan.popular
                ? 'bg-white border-2 border-[#ff9900] shadow-[0_16px_48px_-10px_rgba(255,153,0,0.22)] transform md:-translate-y-2'
                : 'bg-slate-50/70 border border-slate-200 shadow-sm opacity-90 hover:opacity-100'
            }`}
          >
            {/* Top Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff9900] text-white text-xs font-extrabold px-4 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                <Crown className="w-3.5 h-3.5 fill-white" />
                <span>{plan.badge}</span>
              </div>
            )}

            <div>
              {/* Plan Title & Subtitle */}
              <h3 className="text-2xl sm:text-3xl font-[900] text-[#18181b] mb-2 tracking-tight">
                {plan.name}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* Price Container */}
              <div className="mb-8 pb-6 border-b border-slate-200/80">
                <div className="text-xs text-slate-400 font-semibold line-through mb-1">
                  de R$ {plan.originalPrice},00
                </div>
                <div className={`flex items-baseline gap-1 ${plan.popular ? 'text-[#10b981]' : 'text-slate-700'}`}>
                  <span className="text-base sm:text-lg font-bold text-[#18181b]">por R$</span>
                  <span className={`text-4xl sm:text-5xl lg:text-6xl font-[900] tracking-tight ${plan.popular ? 'text-[#10b981]' : 'text-slate-800'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-2xl sm:text-3xl font-extrabold ${plan.popular ? 'text-[#10b981]' : 'text-slate-800'}`}>
                    {plan.cents}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium block mt-1">
                  pagamento único · sem mensalidades
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-3.5 mb-8 text-sm text-[#334155]">
                {plan.features.map((feat, i) => {
                  const isNegative = feat.text.startsWith('Sem ');
                  return (
                    <li key={i} className="flex items-start gap-3">
                      {feat.isBonus ? (
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Gift className="w-3.5 h-3.5 fill-amber-500" />
                        </div>
                      ) : isNegative ? (
                        <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      ) : (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.popular ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-600'}`}>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )}
                      <span className={feat.isBonus ? 'font-bold text-amber-900' : isNegative ? 'text-slate-400 text-xs italic line-through' : plan.popular ? 'font-medium text-[#1e293b]' : 'text-slate-600'}>
                        {feat.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* CTA Button */}
            {plan.popular ? (
              <a
                href={plan.checkoutUrl || 'https://pay.cakto.com.br/9pnaw5p_1071356'}
                className="w-full py-4 px-6 rounded-full font-extrabold text-base tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 cursor-pointer cta-glow-button bg-[#10b981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/30 text-center"
              >
                <span>QUERO ESSE PLANO</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onSelectPlan(plan)}
                className="w-full py-4 px-6 rounded-full font-extrabold text-base tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 cursor-pointer bg-slate-200 hover:bg-slate-300 text-slate-700 hover:text-slate-900 border border-slate-300 shadow-xs"
              >
                <span>QUERO ESSE PLANO</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Guarantee Inconditional Box */}
      <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-[0_6px_24px_-6px_rgba(16,185,129,0.12)] max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#e6f9f0] text-[#059669] flex items-center justify-center shrink-0 shadow-xs">
          <ShieldCheck className="w-12 h-12 stroke-[2]" />
        </div>
        <div className="text-center md:text-left space-y-2">
          <span className="text-xs font-extrabold tracking-widest uppercase text-[#059669] block">
            GARANTIA INCONDICIONAL DE 7 DIAS
          </span>
          <h3 className="text-xl sm:text-2xl font-[900] text-slate-900 tracking-tight">
            Teste por 7 dias sem nenhum risco
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Se por qualquer motivo você achar que o material não ajudou no desenvolvimento da criança ou não facilitou sua rotina, basta enviar uma mensagem e nós devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas e sem complicação.
          </p>
        </div>
      </div>
    </section>
  );
}
