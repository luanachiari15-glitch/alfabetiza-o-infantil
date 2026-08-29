import { Clock, Frown, Compass } from 'lucide-react';

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: Clock,
      title: 'Sem tempo para preparar',
      description: 'Você passa horas procurando, adaptando ou criando atividades do zero e, mesmo assim, sente que nunca tem material suficiente.',
    },
    {
      icon: Frown,
      title: 'A criança perde o interesse',
      description: 'Atividades repetitivas e difíceis demais fazem a criança se distrair, ficar frustrada ou dizer que não consegue aprender.',
    },
    {
      icon: Compass,
      title: 'Dificuldade para saber por onde começar',
      description: 'Letras, sílabas, palavras, leitura e escrita: são tantas etapas que fica difícil organizar uma sequência clara de aprendizagem.',
    },
  ];

  return (
    <section id="pain-points" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#ff5500] mb-3 block">
          VOCÊ JÁ PASSOU POR ISSO?
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-[900] text-[#18181b] tracking-tight leading-[1.2]">
          Alfabetizar uma criança pode parecer uma <span className="text-[#ef4444]">corrida sem fim</span>
        </h2>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {painPoints.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#ffedd5] text-[#ea580c] flex items-center justify-center mb-6 shadow-xs">
                <Icon className="w-7 h-7 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#18181b] mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#475569] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
