// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// const page = () => {

//   return (
//     <>
//       <div
//         className="w-full relative min-h-screen overflow-hidden"
//         style={{
//           backgroundImage: "url('/bg.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed"
//         }}
//       >
//         {/* Full background image - always visible */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url('/bg.png')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat"
//           }}
//         />

// reqwrwerwrrew
 
//         </div>
 
//     </>
//   );
// };

// export default page;



"use client";

import React, { useEffect } from "react";
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

