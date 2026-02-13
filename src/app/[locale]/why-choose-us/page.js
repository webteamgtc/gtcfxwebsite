import React from "react";
import WhyChooseHeroSection from "./components/WhyChooseHeroSection";
import WhyChooseFeatureCardsSection from "./components/WhyChooseFeatureCardsSection";
import WhyChooseToolsSection from "./components/WhyChooseToolsSection";

export const metadata = {
  title: "Why Choose GTC - GTCFX | 4 Reasons Traders Choose GTCFX",
  description:
    "Trade with confidence on a secure, efficient platform backed by cutting-edge technology and expert support. Tight spreads, fast execution, powerful platforms, regulated and trusted.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      <WhyChooseHeroSection />
      <WhyChooseFeatureCardsSection />
      <WhyChooseToolsSection />
    </main>
  );
}
