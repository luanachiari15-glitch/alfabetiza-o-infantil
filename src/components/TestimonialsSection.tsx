import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Juliana Mendes',
      role: 'Mãe do Pedro (6 anos) — Curitiba/PR',
      text: 'Eu estava quase desistindo porque meu filho chorava toda vez que sentava para estudar. Com essas atividades coloridas e em formato de joguinhos, ele mesmo pede para fazer as tarefas. Já começou a juntar as primeiras sílabas sozinho!',
    },
    {
      id: 2,
      name: 'Carla Silveira',
      role: 'Pedagoga e Professora — Campinas/SP',
      text: 'Como professora do 1º ano, meu maior desafio sempre foi encontrar atividades com boa progressão pedagógica. Esse kit me economizou horas de planejamento e os alunos adoram. O módulo de consciência fonológica é impecável.',
    },
    {
      id: 3,
      name: 'Renata Albuquerque',
      role: 'Psicopedagoga — Belo Horizonte/MG',
      text: 'Uso no meu consultório de psicopedagogia e no reforço escolar. O material para crianças com TEA e as historinhas ilustradas são fantásticos. Excelente custo-benefício, recomendo de olhos fechados!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Eyebrow */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#ff5500] mb-3 block">
          DEPOIMENTOS
        </span>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-[#18181b] tracking-tight leading-[1.2]">
          O que dizem sobre o nosso <span className="text-[#ff5500]">material de alfabetização</span>
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#fbbf24] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                "{item.text}"
              </p>
            </div>

            {/* Author */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="font-extrabold text-[#18181b] text-sm sm:text-base">
                {item.name}
              </h4>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
