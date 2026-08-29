export default function StatsBar() {
  const stats = [
    {
      value: '3.700+',
      label: 'ATIVIDADES PRONTAS',
      color: 'text-[#6366f1]', // Indigo/Purple
    },
    {
      value: 'Diversos',
      label: 'NÍVEIS DE APRENDIZAGEM',
      color: 'text-[#ff5500]', // Vibrant Orange
    },
    {
      value: 'PDF',
      label: 'PRONTO PARA IMPRIMIR',
      color: 'text-[#0d9488]', // Teal/Green
    },
    {
      value: '100%',
      label: 'ALINHADO À BNCC',
      color: 'text-[#eab308]', // Amber/Golden
    },
  ];

  return (
    <section id="stats" className="py-12 px-4 max-w-6xl mx-auto border-b border-slate-200/60">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-2">
            <span className={`text-3xl sm:text-4xl lg:text-5xl font-[900] tracking-tight ${stat.color} mb-1 sm:mb-2`}>
              {stat.value}
            </span>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#64748b]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
