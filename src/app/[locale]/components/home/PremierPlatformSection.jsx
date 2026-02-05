import React from "react";
import MobileSwiperGrid from "./MobileSwiperGrid";

const CARDS = [
  {
    title: "Spread",
    subtitle: "Tightest Spread",
    desc: "Offering the industry's tightest spread, from 0 pips on FX & 5 cents on Gold",
    deviceType: "phone",
    deviceSrc: "/new/img1.png",
    icon1: "0+0",
    icon2: "/new/section2-icon1.png",
  },
  {
    title: "Leverage",
    subtitle: "Best Leverage",
    desc: "Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%",
    deviceType: "phone",
    deviceSrc: "/new/img2.png",
    icon1: "/new/section2-icon2.png",
    icon2: "/new/section2-icon3.png",
  },
  {
    title: "Leverage",
    subtitle: "Best Leverage",
    desc: "Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%",
    deviceType: "laptop",
    deviceSrc: "/new/img3.png",
    icon1: "/new/section2-icon3.png",
    icon2: "160+",
  },
  {
    title: "Instrument",
    subtitle: "Trading Instrument",
    desc: "Access to over 27,000 instruments across seven trading markets",
    deviceType: "laptop",
    deviceSrc: "/new/img4.png",
    icon1: "/new/section2-icon2.png",
    icon2: "/new/section2-icon1.png",
  },
  {
    title: "Execution",
    subtitle: "Ultra-fast Execution",
    desc: "Trade with top-tier liquidity for fast, secure execution in just 10ms.",
    deviceType: "phone",
    deviceSrc: "/new/img5.png",
    icon1: "/new/section2-icon4.png",
    icon2: "/new/section2-icon3.png",
  },
  {
    title: "Leverage",
    subtitle: "Best Leverage",
    desc: "Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%",
    deviceType: "laptop",
    deviceSrc: "/new/img6.png",
    icon1: "/new/section2-icon2.png",
    icon2: "/new/section2-icon4.png",
  },
];

export default function PremierGlobalPlatformSection() {
  return (
    <section className="w-full bg-white relative z-10 py-10">
      <div className="mx-auto container mt-[-105px] bg-[#fff] rounded-xl" data-aos="fade-up" data-aos-duration="1000">
        {/* Heading */}
        <div className="text-center mb-3 pt-8 md:px-4 px-2">
          <h2 className="HeadingH2 max-w-2xl mx-auto text-[#293B93]">
            Invest with the World's Premier Online Trading Platform
          </h2>
          <p className="max-w-3xl text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] mx-auto text-[#666666] mt-4">
            Trade 27,000 financial products with the most stable platform. Our MetaTrader Platform offers favorable spreads and exceptional trading conditions.
          </p>
        </div>

        {/* Content - 6 cards in 3x2 grid (desktop) / swiper (mobile) */}
        <div className="mt-8 md:mt-12 md:px-4 px-2 md:pb-8 pb-0">
          <MobileSwiperGrid gridClasses="grid-cols-3" gapClasses="gap-6 lg:gap-8">
            {CARDS.map((card, i) => (
              <FeatureCard key={i} {...card} />
            ))}
          </MobileSwiperGrid>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, subtitle, desc, deviceType, deviceSrc, icon1, icon2 }) {
  const isIconText = (v) => typeof v === "string" && !v.startsWith("/");
  return (
    <div
      className="group relative rounded-[24px] bg-[#F1F2F4]  transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 grid grid-cols-2"
      style={{ boxShadow: "1px 6px 16px 0px rgba(0,0,0,0.1)" }}
    >
      {/* Text block */}
      <div className="relative z-10  py-4 pl-4">
        <h4 className="text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-tight text-[#333333] mb-2">
          {title}
        </h4>
        <div className="inline-block text-[14px] md:text-[16] rounded-full text-[#333333] font-semibold mb-3">
          {subtitle}
        </div>

        <p className="text-[13px] md:text-[14px] lg:text-[15px] leading-[1.6] text-[#666666]">
          {desc}
        </p>
      </div>

      {/* Device image (dummy - replace with your asset) */}
      <div className="relative flex-1">
        <img
          src={deviceSrc}
          alt=""
          className={`object-contain h-full w-full select-none transition-transform duration-300 group-hover:scale-105`}
          draggable={false}
        />
      </div>
    </div>
  );
}
