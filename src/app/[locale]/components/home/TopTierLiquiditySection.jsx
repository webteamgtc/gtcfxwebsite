"use client";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

export default function TopTierLiquidityAccess() {
  const t = useTranslations("home.liquidity_provider");
  const tLiquidity = useTranslations("home.liquidity_provider.tab.liquidity");
  const tTechnology = useTranslations("home.liquidity_provider.tab.technology");
  const tBridge = useTranslations("home.liquidity_provider.tab.bridge");
  const [activeTab, setActiveTab] = useState("liquidity");

  const tabs = [
    { key: "liquidity", label: t("tab.liquidity.title") },
    { key: "technology", label: t("tab.technology.title") },
    { key: "bridge", label: t("tab.bridge.title") },
  ];

  const allCards = useMemo(
    () => ({
      liquidity: [
        {
          pill: t("tab.liquidity.title"),
          title: tLiquidity("title"),
          subtitle: "Fast execution",
          icon: "/new/section3-icon1.png",
          bullets: tLiquidity("d1").split(". ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tLiquidity("p2"),
          title: tLiquidity("p2"),
          subtitle: "Trade anytime",
          icon: "/new/section3-icon2.png",
          bullets: tLiquidity("d2").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tLiquidity("p6"),
          title: tLiquidity("p6"),
          subtitle: "Trade with confidence",
          icon: "/new/section3-icon3.png",
          bullets: tLiquidity("d6").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tLiquidity("p4"),
          title: tLiquidity("p4"),
          subtitle: "Across key markets",
          icon: "/new/section3-icon4.png",
          bullets: tLiquidity("d4").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tLiquidity("p5"),
          title: tLiquidity("p5"),
          subtitle: "At your fingertips",
          icon: "/new/section3-icon5.png",
          bullets: tLiquidity("d5").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tLiquidity("p3"),
          title: tLiquidity("p3"),
          subtitle: "At your fingertips",
          icon: "/new/section3-icon1.png",
          bullets: tLiquidity("d3").split(", ").filter(Boolean).slice(0, 4),
        },
      ],
      technology: [
        {
          pill: t("tab.technology.title"),
          title: tTechnology("title"),
          subtitle: "Better fills",
          icon: "/new/section3-icon1.png",
          bullets: tTechnology("d1").split(". ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tTechnology("p2"),
          title: tTechnology("p2"),
          subtitle: "Built for speed",
          icon: "/new/section3-icon2.png",
          bullets: tTechnology("d2").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tTechnology("p3"),
          title: tTechnology("p3"),
          subtitle: "Clear conditions",
          icon: "/new/section3-icon3.png",
          bullets: tTechnology("d3").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tTechnology("p4"),
          title: tTechnology("p4"),
          subtitle: "Always on",
          icon: "/new/section3-icon4.png",
          bullets: tTechnology("d4").split(", ").filter(Boolean).slice(0, 4),
        },
      ],
      bridge: [
        {
          pill: tBridge("p1"),
          title: tBridge("p1"),
          subtitle: "Stable links",
          icon: "/new/section3-icon1.png",
          bullets: tBridge("d1").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tBridge("p2"),
          title: tBridge("p2"),
          subtitle: "Better depth",
          icon: "/new/section3-icon2.png",
          bullets: tBridge("d2").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tBridge("p3"),
          title: tBridge("p3"),
          subtitle: "Always ready",
          icon: "/new/section3-icon3.png",
          bullets: tBridge("d3").split(", ").filter(Boolean).slice(0, 4),
        },
        {
          pill: tBridge("p4"),
          title: tBridge("p4"),
          subtitle: "Optimized",
          icon: "/new/section3-icon4.png",
          bullets: tBridge("d4").split(", ").filter(Boolean).slice(0, 4),
        },
      ],
    }),
    [t, tLiquidity, tTechnology, tBridge]
  );

  const cards = allCards[activeTab];
  const cardCount = cards.length;

  // Adjust slidesPerView based on number of cards - if 4 or fewer, show all cards on large screens
  const getBreakpoints = () => {
    if (cardCount <= 4) {
      return {
        520: { slidesPerView: 2.1, spaceBetween: 14 },
        768: { slidesPerView: cardCount === 4 ? 4 : 3.1, spaceBetween: 16 },
        1024: { slidesPerView: cardCount, spaceBetween: 20 },
      };
    }
    return {
      520: { slidesPerView: 2.1, spaceBetween: 14 },
      768: { slidesPerView: 3.1, spaceBetween: 16 },
      1024: { slidesPerView: 4, spaceBetween: 14 },
    };
  };

  const breakpoints = getBreakpoints();

  return (
    <section
      className="w-full "
      style={{
        background:
          "linear-gradient(45deg, rgba(0, 0, 0, 0.00) 52.67%, rgba(0, 33, 255, 0.20) 73.42%), linear-gradient(0deg, #293794 0%, #000021 103.34%)",
      }}
    >
      {/* top gradient area */}
      <div className="relative overflow-hidden">
        {/* gradient backdrop (matches image vibe) */}

        <div className="relative mx-auto container px-4 md:px-6 md:py-16 py-16" data-aos="fade-up" data-aos-duration="1000">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="HeadingH2 text-secondary">
              {t("heading")}
            </h2>
            <p className="text font-normal text-white/90 max-w-5xl mx-auto leading-relaxed">
              {t("desc")}
            </p>
          </div>

          {/* Segmented tabs */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <div
              className="relative flex md:h-[56px] h-[44px] w-[300px] md:w-[600px] items-center rounded-full bg-white/10 backdrop-blur-md p-[4px] border border-white/20"
              style={{
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              {tabs.map((t) => {
                const active = t.key === activeTab;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={[
                      "relative z-10 flex-1 rounded-full px-3 md:px-4 py-2 md:py-2.5 text-[14px] md:text-[15px] font-semibold transition-all duration-300 ease-out",
                      active 
                        ? "text-white  bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] shadow-lg" 
                        : "text-white/70 hover:text-white/90",
                    ].join(" ")}
                    style={
                      active
                        ? {
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                          }
                        : {}
                    }
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slider */}
          <div className="mt-12 md:mt-16">
            <style
              dangerouslySetInnerHTML={{
                __html: `
              .liquidity-pagination .swiper-pagination {
                position: relative !important;
                bottom: auto !important;
                margin-top: 32px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 8px !important;
              }
              .liquidity-pagination .swiper-pagination-bullet {
                height: 6px !important;
                width: 10px !important;
                border-radius: 9999px !important;
                background: rgba(255, 255, 255, 0.3) !important;
                opacity: 1 !important;
                margin: 0 4px !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
              }
              .liquidity-pagination .swiper-pagination-bullet:hover {
                background: rgba(255, 255, 255, 0.5) !important;
              }
              .liquidity-pagination .swiper-pagination-bullet-active {
                background: linear-gradient(to right, #956E42, #E9DDCF) !important;
                width: 28px !important;
                opacity: 1 !important;
                box-shadow: 0 0 10px rgba(149, 110, 66, 0.4) !important;
              }
            `,
              }}
            />
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              spaceBetween={14}
              slidesPerView={1.2}
              breakpoints={breakpoints}
              className="liquidity-pagination pb-10"
            >
              {cards.map((c, idx) => (
                <SwiperSlide key={idx} className="!h-auto">
                  <CardItem {...c} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* bottom callout */}
          <div className="mt-5 text-center">
            <div className="text-[22px] md:text-[24px] font-extrabold tracking-[0.5px] text-white mb-2">
              {t("lpLabel")}
            </div>
            <div className="text-[15px] md:text-[16px] font-normal tracking-[0.3px] text-white/90">
              {t("lpLabel1")}
            </div>

            <div className="mt-8 md:mt-10 flex justify-center">
              <button className="rounded-full py-3 md:py-4 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] px-8 md:px-10 min-w-[280px] md:min-w-[300px] text-[15px] md:text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(149,110,66,0.4)] hover:shadow-[0_15px_40px_rgba(149,110,66,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 hover:from-[#A67A52] hover:to-[#F0E4D6]">
                {t("butttonLp")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardItem({ pill, title, subtitle, bullets,icon }) {
  return (
    <div
      className="group rounded-[22px] bg-white p-6 md:p-8 w-full h-full text-left transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 cursor-pointer"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* top mini pill */}
      <div className="inline-flex items-center gap-2 rounded-full  bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] px-3 py-1.5 text-[12px] font-semibold text-white mb-4 transition-transform duration-300 group-hover:scale-105">
        <span className="inline-flex h-[20px] w-[20px] items-center justify-center flex-shrink-0">
          <DotIcon icon={icon} />
        </span>
        <span>{pill}</span>
      </div>

      <p className="text-[11px] md:text-[12px] font-normal text-[#2B3D93]/70 mt-3 mb-1 uppercase tracking-wide">
        {subtitle}
      </p>

      <div className="mt-2">
        <div className="text-[20px] md:text-[22px] font-bold leading-[1.2] text-[#293B93] mb-2">{title}</div>
      </div>

      <ul className="mt-4 space-y-2 text-[11px] md:text-[12px] leading-[1.5] text-[#4D4D70]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#956E42] to-[#E9DDCF] flex-shrink-0" />
            <span className="flex-1">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 md:mt-8 flex items-center justify-end group-hover:translate-x-1 transition-transform duration-300">
        <div className="text-[#293B93] flex items-center justify-center">
         <img src="/new/arrow-right.svg" alt="arrow" className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}

function DotIcon({icon}) {
    return (
    <img src={icon} alt="dot" className=" object-contain" />
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
