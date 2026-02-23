import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import AboutKPISection from "./components/AboutKPISection";
import AboutFeatureCardsSection from "./components/AboutFeatureCardsSection";

export const metadata = {
  title: "About Us - GTCFX | Globally Trusted & Multi-Regulated Broker",
  description:
    "GTCFX is a global leader in financial derivatives trading since 2012, serving over 985,000 clients in 100+ countries with diverse instruments and cutting-edge technology.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <AboutHeroSection />
      {/* <AboutKPISection /> */}
      <AboutFeatureCardsSection />
    </main>
  );
}
