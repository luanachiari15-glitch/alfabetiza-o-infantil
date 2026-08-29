/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TopBanner from './components/TopBanner';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import PainPointsSection from './components/PainPointsSection';
import BenefitsSection from './components/BenefitsSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import AuthorSection from './components/AuthorSection';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import UpgradeDiscountModal from './components/UpgradeDiscountModal';
import LiveSalesToast from './components/LiveSalesToast';
import LegalModal from './components/LegalModal';
import { Plan } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [pendingEssentialPlan, setPendingEssentialPlan] = useState<Plan | null>(null);
  const [legalModalTitle, setLegalModalTitle] = useState<string | null>(null);

  const defaultPremiumPlan: Plan = {
    id: 'premium',
    name: 'Plano Completo (Melhor Escolha)',
    badge: 'MELHOR ESCOLHA',
    description: 'Acesso total e ilimitado a todas as atividades + 5 Super Bônus exclusivos.',
    originalPrice: 97,
    price: 27,
    cents: ',00',
    features: [
      { text: '+3.700 Atividades Prontas para Imprimir' },
      { text: 'Sílabas Simples + Complexas (BRA, NHA, LHA...)' },
      { text: 'Coordenação Motora Completa' },
      { text: 'Vogais e Consciência Fonológica' },
      { text: 'Alfabeto Silábico de A a Z' },
      { text: 'Formando Palavras e Frases' },
      { text: 'Caligrafia Inicial e Cursiva' },
      { text: 'Matemática' },
      { text: 'Ensino Religioso e Artes' },
      { text: '5 Bônus Exclusivos (R$322+)', isBonus: true },
      { text: 'Acesso vitalício + todas as atualizações' },
      { text: 'Suporte exclusivo' },
      { text: 'Garantia incondicional de 7 dias' },
    ],
    popular: true,
  };

  const discountedPremiumPlan: Plan = {
    id: 'premium-discount',
    name: 'Plano Completo (Oferta Especial)',
    badge: 'SUPER OFERTA',
    description: 'Acesso total e ilimitado a todas as mais de 3.700 atividades + 5 Super Bônus exclusivos por condição especial.',
    originalPrice: 97,
    price: 17,
    cents: ',00',
    features: [
      { text: '+3.700 Atividades Prontas para Imprimir' },
      { text: 'Sílabas Simples + Complexas (BRA, NHA, LHA...)' },
      { text: 'Coordenação Motora Completa' },
      { text: 'Vogais e Consciência Fonológica' },
      { text: 'Alfabeto Silábico de A a Z' },
      { text: 'Formando Palavras e Frases' },
      { text: 'Caligrafia Inicial e Cursiva' },
      { text: 'Matemática' },
      { text: 'Ensino Religioso e Artes' },
      { text: '5 Bônus Exclusivos (R$322+)', isBonus: true },
      { text: 'Acesso vitalício + todas as atualizações' },
      { text: 'Suporte exclusivo' },
      { text: 'Garantia incondicional de 7 dias' },
    ],
    popular: true,
  };

  const handlePlanSelect = (plan: Plan) => {
    if (plan.id === 'essencial') {
      setPendingEssentialPlan(plan);
      setShowUpgradeModal(true);
    } else {
      // Plano Completo 27,00
      window.location.href = 'https://pay.cakto.com.br/9pnaw5p_1071356';
    }
  };

  const handleAcceptUpgrade = () => {
    setShowUpgradeModal(false);
    // Oferta Especial de Upgrade 17,00
    window.location.href = 'https://pay.cakto.com.br/wyd8m7r';
  };

  const handleContinueEssential = () => {
    setShowUpgradeModal(false);
    // Oferta Essencial 9,90
    window.location.href = 'https://pay.cakto.com.br/34dgk46_1071344';
  };

  const handleScrollToPricing = () => {
    const pricingElem = document.getElementById('pricing');
    if (pricingElem) {
      pricingElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = 'https://pay.cakto.com.br/9pnaw5p_1071356';
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1e293b] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Banner with Countdown */}
      <TopBanner />

      {/* Main Landing Sections in Exact Sequence */}
      <main className="flex-1">
        <HeroSection onCtaClick={handleScrollToPricing} />
        <StatsBar />
        <PainPointsSection />
        <BenefitsSection />
        <BonusSection />
        <PricingSection onSelectPlan={handlePlanSelect} />
        <TestimonialsSection />
        <AuthorSection />
        <FaqSection />
        <CtaBanner onCtaClick={handleScrollToPricing} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(title) => setLegalModalTitle(title)} />

      {/* Upgrade Discount Pop-up Modal when choosing Essential */}
      <UpgradeDiscountModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onContinueEssential={handleContinueEssential}
      />

      {/* Interactive Checkout Modal */}
      {selectedPlan && (
        <CheckoutModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {/* Legal and Information Modal */}
      <LegalModal
        title={legalModalTitle}
        onClose={() => setLegalModalTitle(null)}
      />

      {/* Live Verified Sales Social Proof Toast */}
      <LiveSalesToast />
    </div>
  );
}
