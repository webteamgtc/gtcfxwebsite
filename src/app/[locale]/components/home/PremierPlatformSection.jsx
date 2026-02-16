import React from "react";
import MobileSwiperGrid from "./MobileSwiperGrid";
import Image from "next/image";

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

const CARD_GRADIENT =
  "linear-gradient(263deg, #170AAF 0%, #161D5E 90.79%, #05062E 141.58%)";

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
        {/* TOP ROW: Card | Phone in gap | Card — responsive on all breakpoints */}
        <div className="mt-10 sm:mt-14 max-w-7xl mx-auto px-2 sm:px-4">
          <div className="relative overflow-visible">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 items-stretch">
              {/* Left card */}
              <LargeCard
                title="Spread"
                subtitle="Tightest Spread"
                imageSrc="/new/phone-2.png"
                imageClassName="absolute right-[0px] top-[-72px] w-[180px] sm:w-[200px] md:w-[220px]"
                desc="Offering the industry’s tightest Spread, from 0 pips on FX & 5 cents on Gold"
              />
              <LargeCard
                title="Leverage"
                subtitle="Best Leverage"
                desc="Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%"
                imageSrc="/new/laptop-1.svg"
                // Laptop out from top-right like screenshot
                imageClassName="absolute right-[-8px] top-[-40px] w-[180px] sm:w-[200px] md:w-[220px]"
              />
            </div>

          </div>

          {/* BOTTOM ROW (3 small cards) */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-6 md:gap-6">
            <SmallCard
              title="Instrument"
              subtitle="Tightest Spread"
              desc="Access to over 27,000 instruments across seven trading markets"
            />
            <SmallCard
              title="Execution"
              subtitle="Ultra-fast Execution"
              desc="Trade with top-tier liquidity for fast, secure execution in just 10ms."
            />
            <SmallCard
              title="Leverage"
              subtitle="Tightest Spread"
              desc="Offering the industry's tightest Spread, from 0 pips on FX & 5 cents on Gold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LargeCard({ title, subtitle, desc, imageSrc, imageClassName }) {
  return (
    // IMPORTANT: overflow-visible so images can go out from top
    <div className="relative min-h-[200px] overflow-visible rounded-[26px] sm:min-h-[210px] md:h-[220px]">
      {/* Inner layer keeps rounded corners clean */}
      <div className="absolute inset-0 overflow-hidden rounded-[26px]" style={{ background: CARD_GRADIENT }} />

      {/* Device image — hidden on mobile */}
      {imageSrc ? (
        <div className={`pointer-events-none absolute z-20 hidden md:block ${imageClassName ?? ""}`}>
          <Image
            src={imageSrc}
            alt=""
            width={420}
            height={320}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      ) : null}

      {/* Text */}
      <div className="relative z-10 flex h-full flex-col justify-center px-5 sm:px-8">
        <h3 className="text-[20px] sm:text-[23px] font-extrabold leading-tight text-white">{title}</h3>

        <p className="mt-2 sm:mt-4 text-[14px] sm:text-[16px] font-semibold leading-tight text-white">
          {subtitle}
        </p>

        <p className="mt-2 sm:mt-4 max-w-[310px] text-[15px] sm:text-[18px] font-normal leading-[1.25] text-white">
          {desc}
        </p>
      </div>
    </div>
  );
}

function SmallCard({ title, subtitle, desc }) {
  return (
    <div
      className="flex min-h-[120px] flex-col justify-center rounded-[26px] px-5 py-5 sm:px-7 sm:py-6"
      style={{ background: CARD_GRADIENT }}
    >
      <h4 className="text-[20px] sm:text-[23px] font-extrabold leading-tight text-white">{title}</h4>

      <p className="mt-2 sm:mt-4 text-[14px] sm:text-[16px] font-semibold leading-tight text-white">
        {subtitle}
      </p>

      <p className="mt-2 sm:mt-4 text-[15px] sm:text-[18px] font-normal leading-[1.25] text-white">
        {desc}
      </p>
    </div>
  );
}
