import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: '1. Como vou receber o material?',
      answer: 'O acesso é 100% digital. Assim que o pagamento for confirmado, você receberá um e-mail com o link de acesso imediato para baixar todos os arquivos em PDF.',
    },
    {
      id: 2,
      question: '2. O material é físico ou digital?',
      answer: 'O material é 100% digital (PDF). Você pode salvar no seu computador, celular ou tablet e imprimir quantas vezes quiser.',
    },
    {
      id: 3,
      question: '3. Para qual faixa etária o kit é indicado?',
      answer: 'O material foi desenvolvido principalmente para crianças de 3 a 8 anos (Educação Infantil ao 2º/3º ano do Ensino Fundamental), além de atender perfeitamente crianças mais velhas que estejam em processo de reforço ou com dificuldades de aprendizagem.',
    },
    {
      id: 4,
      question: '4. O material está alinhado à BNCC?',
      answer: 'Sim! As atividades foram estruturadas respeitando os principais campos de experiência e habilidades da Base Nacional Comum Curricular (BNCC) para a fase de alfabetização e letramento.',
    },
    {
      id: 5,
      question: '5. As atividades servem para crianças com autismo (TEA)?',
      answer: 'Sim! O material conta com uma organização visual clara, fontes legíveis e ainda inclui um super bônus exclusivo de atividades estruturadas para letramento de crianças no espectro autista.',
    },
    {
      id: 6,
      question: '6. Por quanto tempo terei acesso ao material?',
      answer: 'O seu acesso é vitalício! Uma vez adquirido, o material é seu para sempre, podendo ser baixado e impresso sempre que você precisar.',
    },
    {
      id: 7,
      question: '7. Posso imprimir em casa?',
      answer: 'Com certeza! Todos os arquivos estão formatados no tamanho padrão A4, prontos para impressão em qualquer impressora doméstica ou em gráficas rápidas.',
    },
    {
      id: 8,
      question: '8. Quais são as formas de pagamento?',
      answer: 'Você pode pagar via Cartão de Crédito (com parcelamento em até 12x) ou via PIX (com liberação imediata do acesso).',
    },
    {
      id: 9,
      question: '9. E se eu não gostar do material?',
      answer: 'Você conta com a nossa Garantia Incondicional de 7 Dias. Se por qualquer motivo você não ficar 100% satisfeita, basta solicitar o reembolso que devolvemos todo o seu dinheiro.',
    },
  ];

  const toggleItem = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Eyebrow */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#ff5500] mb-3 block">
          PERGUNTAS FREQUENTES
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-[#18181b] tracking-tight leading-[1.2]">
          Ficou com alguma dúvida? <span className="text-[#ff5500]">Nós te ajudamos!</span>
        </h2>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-orange-300 shadow-[0_4px_20px_-4px_rgba(255,85,0,0.1)]'
                  : 'border-slate-100 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:border-slate-200'
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span
                  className={`font-extrabold text-base sm:text-lg transition-colors ${
                    isOpen ? 'text-[#ff5500]' : 'text-[#18181b]'
                  }`}
                >
                  {item.question}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-orange-50 text-[#ff5500]'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-slate-50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
