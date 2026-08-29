import { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';

export default function TopBanner() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 4, seconds: 42 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 5, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div id="top-banner" className="bg-[#ff5500] text-white py-2.5 px-4 font-bold text-xs sm:text-sm tracking-wide shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
        <div className="flex items-center gap-2 uppercase tracking-wider font-extrabold text-[11px] sm:text-xs">
          <Flame className="w-4 h-4 fill-white text-white animate-pulse" />
          <span>OFERTA — 70% OFF</span>
        </div>
        <div className="flex items-center gap-1.5 bg-black/15 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-xs font-mono font-bold">
          <Clock className="w-3.5 h-3.5 text-white/90" />
          <span>{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}</span>
        </div>
      </div>
    </div>
  );
}
