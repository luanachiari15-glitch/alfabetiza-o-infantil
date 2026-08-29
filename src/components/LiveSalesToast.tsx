import { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';

export default function LiveSalesToast() {
  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState<{
    name: string;
    location: string;
    plan: string;
    time: string;
  } | null>(null);

  const notifications = [
    { name: 'Profª Camila S.', location: 'São Paulo — SP', plan: 'Plano Premium', time: 'há 2 minutos' },
    { name: 'Prof. Marcelo T.', location: 'Belo Horizonte — MG', plan: 'Plano Premium', time: 'há 4 minutos' },
    { name: 'Profª Mariana R.', location: 'Curitiba — PR', plan: 'Plano Premium', time: 'há 6 minutos' },
    { name: 'Prof. Lucas F.', location: 'Fortaleza — CE', plan: 'Plano Essencial', time: 'há 8 minutos' },
    { name: 'Profª Débora M.', location: 'Porto Alegre — RS', plan: 'Plano Premium', time: 'há 11 minutos' },
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentNotification(notifications[index % notifications.length]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);

      index++;
    }, 14000);

    // Initial trigger after 4s
    const timeout = setTimeout(() => {
      setCurrentNotification(notifications[0]);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!visible || !currentNotification) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-slate-200/80 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <span className="font-extrabold text-xs text-[#18181b] truncate">
            {currentNotification.name}
          </span>
          <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
            {currentNotification.time}
          </span>
        </div>
        <p className="text-[11px] text-slate-500 truncate">
          {currentNotification.location}
        </p>
        <span className="inline-block text-[10px] font-bold text-[#ff5500]">
          Adquiriu o {currentNotification.plan} 🔥
        </span>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
