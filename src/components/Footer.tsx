import { BookOpen } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (title: string) => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer id="footer" className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-100 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-xs">
            <BookOpen className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="text-2xl font-[900] tracking-tight">
            <span className="text-[#ff5500]">Kit </span>
            <span className="text-[#1e293b]">Alfabetização</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
          Material didático lúdico e estruturado para alfabetização infantil. Todos os direitos reservados © 2026.
        </p>

        {/* Links */}
        <div className="flex items-center justify-center gap-6 pt-2 text-xs font-semibold text-slate-500">
          <button
            onClick={() => onOpenLegal('Termos de Uso')}
            className="hover:text-[#ff5500] transition cursor-pointer"
          >
            Termos
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenLegal('Política de Privacidade')}
            className="hover:text-[#ff5500] transition cursor-pointer"
          >
            Privacidade
          </button>
          <span>•</span>
          <button
            onClick={() => onOpenLegal('Fale Conosco')}
            className="hover:text-[#ff5500] transition cursor-pointer"
          >
            Contato
          </button>
        </div>
      </div>
    </footer>
  );
}
