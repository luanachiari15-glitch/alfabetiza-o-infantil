export default function AuthorSection() {
  return (
    <section id="author" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Photo Container */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Background Accent Card */}
            <div className="absolute inset-0 bg-[#fef3c7] rounded-[36px] -rotate-2 transform scale-102"></div>
            
            {/* Main Photo Card */}
            <div className="relative bg-white rounded-[36px] overflow-hidden shadow-xl border-4 border-white aspect-[4/5] flex items-end justify-center bg-gradient-to-t from-amber-100/60 to-orange-50">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Profª Mara - Especialista em Alfabetização Infantil"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 text-center shadow-lg border border-white/40">
                <span className="font-extrabold text-[#18181b] text-sm block">Profª Mara</span>
                <span className="text-[11px] font-semibold text-[#ff5500]">Pedagoga & Especialista em Alfabetização</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Details */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-[#ff5500] block">
            QUEM CRIOU O MATERIAL?
          </span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[900] text-[#18181b] tracking-tight leading-[1.2]">
            Oie! Eu sou a <span className="text-[#ff5500]">Prof. Mara</span>
          </h2>

          {/* Paragraphs */}
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Sou pedagoga apaixonada pela alfabetização infantil e desenvolvimento da leitura nos primeiros anos escolares. Ao longo da minha trajetória na educação, percebi que a maior barreira para as crianças aprenderem a ler não é a falta de capacidade delas, mas a falta de materiais atraentes, organizados e com uma sequência pedagógica clara.
          </p>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Por isso, reuni anos de experiência prática de sala de aula e criei este material completo com mais de <strong>3.700 atividades</strong>, pensado para ajudar mães, pais e educadores a transformarem o momento da alfabetização em uma jornada leve, divertida e cheia de conquistas.
          </p>

          {/* 3 Metric Counters */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
            <div>
              <span className="text-3xl sm:text-4xl font-[900] text-[#6366f1] block">
                3.700+
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500">
                ATIVIDADES
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-[900] text-[#ff5500] block">
                520+
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500">
                FAMÍLIAS & EDUCADORES
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-[900] text-[#0d9488] block">
                4.9/5
              </span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-500">
                AVALIAÇÃO MÉDIA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
