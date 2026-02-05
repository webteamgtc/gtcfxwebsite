import React from "react";
import HeroSectionSlider from "./components/home/HeroSectionSlider";

// Import directly - no lazy loading to fix mobile issue
import PremierPlatformSection from "./components/home/PremierPlatformSection";
import WhyWorkWithGTCSection from "./components/home/WhyWorkWithGTCSection";
import TopTierLiquiditySection from "./components/home/TopTierLiquiditySection";
import ChooseYourAccountSection from "./components/home/ChooseYourAccountSection";
import TradeOnTheGoSection from "./components/home/TradeOnTheGoSection";
import IBProgramSection from "./components/home/IBProgramSection";
import OurMarketsSection from "./components/home/OurMarketsSection";
import ReviewsSection from "./components/home/ReviewSection";
import StatsBar from "./components/home/CounterComponent";
import MiniTickersRow from "./components/home/CurrencyBanner";


export const metadata = {
  title: 'GTCFX - Trade CFDs with Low Spreads & Lightning Execution',
  description: 'Trade with confidence using GTCFX’s deep liquidity pools, lightning-fast execution, and competitive spreads. Open your account and enjoy seamless access to global CFD markets backed by trusted support.',
};

const NewPageOne = () => {
  return (
    <>
      <HeroSectionSlider />
      <PremierPlatformSection />
      <StatsBar/>
      <TopTierLiquiditySection />
      <TradeOnTheGoSection />
      <MiniTickersRow/>
      <OurMarketsSection />
      <ReviewsSection/>
    </>
  );
};

export default NewPageOne;

