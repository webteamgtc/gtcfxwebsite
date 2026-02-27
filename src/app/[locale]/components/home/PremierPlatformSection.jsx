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
    <section className="w-full bg-white relative z-10 space">
      <div
        className="mx-auto container mt-[-105px] bg-[#fff] rounded-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Heading */}
        <div className="text-center mb-10 pt-8 md:px-4 sm:px-0">
          <h2 className="HeadingH2 md:max-w-2xl mx-auto">
            Invest with the World's Premier Online Trading Platform
          </h2>
          <p className="max-w-3xl text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] mx-auto text-[#666666] mt-4">
            Trade 27,000 financial products with the most stable platform, our
            MetaTrader Platform offers favorable spreads.
          </p>
        </div>
        <div className="mt-10 sm:mt-20 max-w-7xl mx-auto px-0 sm:px-4">
          {/* Mobile: one card at a time with arrows */}
          <div className="md:hidden">
            <MobileSwiperGrid
              gridClasses=""
              gapClasses=""
              swiperConfig={{ slidesPerView: 1, spaceBetween: 16 }}
            >
              <LargeCard
                title="Spread"
                subtitle="Tightest Spread"
                desc="Offering the industry's tightest Spread, from 0 pips on FX & 5 cents on Gold"
              />
              <LargeCard
                title="Leverage"
                subtitle="Best Leverage"
                desc="Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%"
              />
              <LargeCard
                title="Instrument"
                subtitle="Tightest Spread"
                desc="Access to over 27,000 instruments across seven trading markets"
              />
              <LargeCard
                title="Execution"
                subtitle="Ultra-fast Execution"
                desc="Trade with top-tier liquidity for fast, secure execution in just 10ms."
              />
            </MobileSwiperGrid>
          </div>
          {/* Desktop */}
          <div className="hidden md:block">
            <div className="relative overflow-visible">
              <div className="grid grid-cols-2 gap-6 items-stretch">
                <LargeCard
                  title="Spread"
                  subtitle="Tightest Spread"
                  imageSrc="/new/icon1.svg"
                  imageClassName="absolute right-[0px] top-[-72px] w-[180px] sm:w-[200px] md:w-[220px]"
                  desc="Offering the industry’s tightest Spread, from 0 pips on FX & 5 cents on Gold"
                />
                <LargeCard
                  title="Leverage"
                  subtitle="Best Leverage"
                  desc="Providing the highest leverage, up to 1:2000, with minimal margin requirements starting from 0.1%"
                  imageSrc="/new/icon2.svg"
                  imageClassName="absolute right-[-8px] top-[-40px] w-[180px] sm:w-[200px] md:w-[220px]"
                />
                <LargeCard
                  title="Instrument"
                  subtitle="Tightest Spread"
                  desc="Access to over 27,000 instruments across seven trading markets"
                  imageSrc="/new/icon3.svg"
                  imageClassName="absolute right-[-8px] top-[-25px] w-[180px] sm:w-[200px] md:w-[220px]"
                />
                <LargeCard
                  title="Execution"
                  subtitle="Ultra-fast Execution"
                  desc="Trade with top-tier liquidity for fast, secure execution in just 10ms."
                  imageSrc="/new/icon4.svg"
                  imageClassName="absolute right-[-8px] top-[-30px] w-[180px] sm:w-[200px] md:w-[220px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LargeCard({ title, subtitle, desc, imageSrc, imageClassName }) {
  return (
    // IMPORTANT: overflow-visible so images can go out from top
    <div className="relative min-h-[150px] overflow-visible rounded-[26px] sm:min-h-[210px] md:h-[220px]">
      {/* Inner layer keeps rounded corners clean */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[26px]"
        style={{
          borderRadius: "23.303px",
          background:
            "linear-gradient(263deg, #170AAF 0%, #161D5E 90.79%, #05062E 141.58%)",
        }}
      />

      {/* Device image — hidden on mobile and sm, show from lg */}
      {imageSrc ? (
        <div
          className={`pointer-events-none absolute z-20 hidden lg:block ${imageClassName ?? ""}`}
        >
          <div className="relative w-full h-48">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* Text */}
      <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-8">
        <h4 className="bg-secondary text-[10px] md:text-sm rounded-full text-white px-3 w-24 text-center ">
          {title}
        </h4>

        <h3 className="my-3 bg-gradient-to-r from-white via-secondary from-30% to-secondary to-70% text-transparent font-semibold bg-clip-text md:text-lg xl:text-xl 3xl:text-[24px] text-base  m-0 p-0 ">
          {subtitle}
        </h3>

        <p className="md:max-w-[390px] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-normal text-white">
          {desc}
        </p>
      </div>
    </div>
  );
}
