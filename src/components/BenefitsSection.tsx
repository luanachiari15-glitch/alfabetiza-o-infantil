import { Sparkles, Eye, Home, BookOpen, Download, Layers } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Aprendizado divertido',
      description: 'Atividades lúdicas que despertam a curiosidade e ajudam a criança a aprender brincando.',
    },
    {
      icon: Eye,
      title: 'Alfabetização visual',
      description: 'Ilustrações, jogos, desafios e exercícios que facilitam a compreensão de letras, sons, sílabas e palavras.',
    },
    {
      icon: Home,
      title: 'Em sala ou em casa',
      description: 'Materiais que podem ser usados por professoras, pedagogas, reforço escolar e famílias.',
    },
    {
      icon: BookOpen,
      title: '100% BNCC',
      description: 'Conteúdos organizados de acordo com as principais habilidades trabalhadas durante a alfabetização.',
    },
    {
      icon: Download,
      title: 'Pronto para imprimir',
      description: 'Arquivos digitais em PDF, organizados e prontos para imprimir e aplicar imediatamente.',
    },
    {
      icon: Layers,
      title: 'Diferentes níveis',
      description: 'Atividades para crianças que estão começando e também para aquelas que já formam palavras e iniciam a leitura.',
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#059669] mb-3 block">
          O QUE VOCÊ RECEBE
        </span>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-[900] text-[#18181b] tracking-tight leading-[1.2]">
          Tudo o que precisa para tornar a alfabetização <span className="text-[#ff5500]">mais simples</span>
        </h2>
      </div>

      {/* 6 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {benefits.map((benefit, idx) => {
          const Icon = benefit.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col items-start"
            >
              {/* Icon Container with Amber/Golden Tone */}
              <div className="w-14 h-14 rounded-2xl bg-[#fef3c7] text-[#d97706] flex items-center justify-center mb-6 shadow-xs">
                <Icon className="w-7 h-7 stroke-[2.2]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-[#18181b] mb-3 tracking-tight">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[#475569] text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
