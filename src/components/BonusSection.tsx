import { Gift, Sparkles, HeartHandshake, CalendarCheck, BookOpen, Puzzle, Palette } from 'lucide-react';

export default function BonusSection() {
  const bonuses = [
    {
      id: 1,
      coverTitle: 'LETRAMENTO PARA AUTISTAS',
      icon: HeartHandshake,
      coverBg: 'from-amber-400 via-orange-500 to-rose-500',
      title: 'BÔNUS 1: Atividades de Letramento para Autistas',
      description: 'Atividades estruturadas com apoio visual, pensadas para facilitar a comunicação, a concentração e o processo de alfabetização de crianças no espectro autista.',
      originalPrice: '47,00',
    },
    {
      id: 2,
      coverTitle: 'ALFABETIZAÇÃO EM 21 DIAS',
      icon: CalendarCheck,
      coverBg: 'from-sky-400 via-blue-500 to-indigo-600',
      title: 'BÔNUS 2: Alfabetização em 21 Dias',
      description: 'Um guia prático com uma rotina estruturada passo a passo para organizar os estímulos diários e acelerar o desenvolvimento da leitura e da escrita.',
      originalPrice: '39,00',
    },
    {
      id: 3,
      coverTitle: 'HISTÓRIAS INFANTIS ILUSTRADAS',
      icon: BookOpen,
      coverBg: 'from-emerald-400 via-teal-500 to-cyan-600',
      title: 'BÔNUS 3: Histórias Infantis Ilustradas',
      description: 'Pequenas narrativas envolventes e ilustradas para incentivar o hábito da leitura, a imaginação e a interpretação de texto desde os primeiros anos.',
      originalPrice: '37,00',
    },
    {
      id: 4,
      coverTitle: 'JOGOS PEDAGÓGICOS',
      icon: Puzzle,
      coverBg: 'from-purple-400 via-fuchsia-500 to-pink-500',
      title: 'BÔNUS 4: Jogos Pedagógicos para Alfabetização',
      description: 'Jogos de cartas, dominó de palavras, quebra-cabeças silábicos e dinâmicas interativas para transformar o aprendizado em momentos de pura diversão.',
      originalPrice: '49,00',
    },
    {
      id: 5,
      coverTitle: 'LIVROS PARA COLORIR EDUCATIVOS',
      icon: Palette,
      coverBg: 'from-rose-400 via-amber-500 to-orange-500',
      title: 'BÔNUS 5: Livros para Colorir Educativos',
      description: 'Desenhos temáticos com letras, palavras e elementos do cotidiano para reforçar o vocabulário enquanto a criança desenvolve a coordenação motora fina.',
      originalPrice: '29,00',
    },
  ];

  return (
    <section id="bonus" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Eyebrow badge */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef3c7] text-[#d97706] font-extrabold text-xs sm:text-[13px] tracking-wide mb-4 uppercase">
          <Gift className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span>BÔNUS EXCLUSIVOS</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-[#18181b] tracking-tight leading-[1.2] mb-4">
          Garanta sua vaga hoje e leve <span className="text-[#ff5500]">5 bônus especiais</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#4b5563] font-medium max-w-2xl mx-auto leading-relaxed">
          Mais de <strong className="text-[#18181b] font-bold">R$ 200,00</strong> em materiais complementares incluídos no <strong className="text-[#ff5500]">Kit Completo</strong> sem nenhum custo extra.
        </p>
      </div>

      {/* Bonus Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bonuses.slice(0, 3).map((bonus) => {
          const Icon = bonus.icon;
          return (
            <div
              key={bonus.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
            >
              {/* Illustrated Cover Header */}
              <div className={`relative h-48 bg-gradient-to-br ${bonus.coverBg} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xs pointer-events-none"></div>
                <div className="absolute top-2 left-2 text-white/15">
                  <Sparkles className="w-16 h-16" />
                </div>

                {/* Top Badge */}
                <div className="flex justify-between items-start z-10">
                  <div className="bg-[#fbbf24] text-slate-900 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    GRÁTIS
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Cover Title */}
                <div className="z-10 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-200 block mb-0.5">BÔNUS EXCLUSIVO</span>
                  <h3 className="font-[900] text-lg sm:text-xl tracking-tight leading-snug drop-shadow-sm">
                    {bonus.coverTitle}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-[#18181b] mb-3 leading-snug">
                    {bonus.title}
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {bonus.description}
                  </p>
                </div>

                {/* Price Box */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 font-medium line-through">
                    Valor original: R$ {bonus.originalPrice}
                  </span>
                  <span className="text-sm font-extrabold text-[#10b981]">
                    Hoje com o Kit: R$ 0,00
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Second Row with 2 centered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
        {bonuses.slice(3).map((bonus) => {
          const Icon = bonus.icon;
          return (
            <div
              key={bonus.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
            >
              {/* Illustrated Cover Header */}
              <div className={`relative h-48 bg-gradient-to-br ${bonus.coverBg} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xs pointer-events-none"></div>
                <div className="flex justify-between items-start z-10">
                  <div className="bg-[#fbbf24] text-slate-900 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    GRÁTIS
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="z-10 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-200 block mb-0.5">BÔNUS EXCLUSIVO</span>
                  <h3 className="font-[900] text-lg sm:text-xl tracking-tight leading-snug drop-shadow-sm">
                    {bonus.coverTitle}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-[#18181b] mb-3 leading-snug">
                    {bonus.title}
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-1">
                  <span className="text-xs text-slate-400 font-medium line-through">
                    Valor original: R$ {bonus.originalPrice}
                  </span>
                  <span className="text-sm font-extrabold text-[#10b981]">
                    Hoje com o Kit: R$ 0,00
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
