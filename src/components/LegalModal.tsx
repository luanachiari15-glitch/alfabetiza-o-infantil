import { X, Mail, Shield, FileCheck } from 'lucide-react';

interface LegalModalProps {
  title: string | null;
  onClose: () => void;
}

export default function LegalModal({ title, onClose }: LegalModalProps) {
  if (!title) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 flex flex-col max-h-[85vh]">
        <div className="bg-slate-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            {title === 'Termos de Uso' && <FileCheck className="w-5 h-5 text-amber-400" />}
            {title === 'Política de Privacidade' && <Shield className="w-5 h-5 text-emerald-400" />}
            {title === 'Fale Conosco' && <Mail className="w-5 h-5 text-sky-400" />}
            <h3 className="text-lg font-extrabold tracking-tight">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          {title === 'Termos de Uso' && (
            <>
              <p>
                Bem-vindo ao <strong>Kit Alfabetização</strong>. Ao adquirir nossos materiais pedagógicos, você adquire uma licença pessoal de uso para suas atividades educativas, em casa ou em sala de aula.
              </p>
              <p>
                <strong>Direitos Autorais:</strong> Todo o conteúdo, atividades, histórias ilustradas e recursos lúdicos são de autoria pedagógica protegida. É permitida a impressão ilimitada para suas crianças e alunos.
              </p>
              <p>
                <strong>Garantia incondicional de 7 dias:</strong> Caso deseje reembolso, basta solicitar via e-mail no prazo de 7 dias corridos após a compra.
              </p>
            </>
          )}

          {title === 'Política de Privacidade' && (
            <>
              <p>
                No <strong>Kit Alfabetização</strong>, prezamos pela segurança e privacidade total dos seus dados.
              </p>
              <p>
                Seus dados cadastrais (nome, e-mail) são utilizados exclusivamente para envio dos materiais digitais, atualizações da plataforma e suporte ao cliente.
              </p>
              <p>
                Não compartilhamos nem comercializamos dados de usuários com terceiros sob nenhuma circunstância.
              </p>
            </>
          )}

          {title === 'Fale Conosco' && (
            <>
              <p>
                Tem alguma dúvida pedagógica ou precisa de suporte com seus downloads?
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <p className="font-bold text-slate-800 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#ff5500]" /> contato@kitalfabetizacao.shop
                </p>
                <p className="text-xs text-slate-500">
                  Atendimento de Segunda a Sexta, das 08h às 18h.
                </p>
              </div>
            </>
          )}

          <button
            onClick={onClose}
            className="w-full mt-4 py-3 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs rounded-full transition cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
