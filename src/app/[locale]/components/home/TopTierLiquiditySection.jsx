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
      className="w-full bg-white space"
    >
      {/* top gradient area */}
      <div className="relative overflow-hidden">
        {/* gradient backdrop (matches image vibe) */}

        <div className="relative mx-auto container" data-aos="fade-up" data-aos-duration="1000">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-12 ">
            <h2 className="HeadingH2 text-[#333] max-w-xl mx-auto">
              {t("heading")}
            </h2>
            <p className="text-sm md:text-base font-normal text-[#666] max-w-4xl mx-auto leading-relaxed">
            GTCFX is a trusted liquidity provider that gives you access to easy-to-use FX liquidity platforms. With our liquidity solutions, you can trade efficiently at low costs and with fast execution. You can count on our transparent and reliable service, ensuring your trades remain private. With our state-of-the-art technology and dedicated team, we support your business in liquidity trading.
              {/* {t("desc")} */}
            </p>
          </div>

          {/* Segmented tabs */}
          <div className="mt-8 md:mt-12 flex justify-center overflow-visible">
            <div
              className="relative flex md:h-[56px] h-[44px] w-[300px] md:w-[600px] items-center rounded-full bg-[#F1F2F4] backdrop-blur-md border border-white/20 overflow-visible"
            >
              {tabs.map((t) => {
                const active = t.key === activeTab;
                return (
                  <button
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={[
                      "relative z-10 cursor-pointer  flex-1 rounded-full px-3 h-full md:px-4 py-2 md:py-2.5 text-[14px] md:text-[15px] font-semibold transition-all duration-300 ease-out",
                      active
                        ? "text-[#293B93] bg-white"
                        : "text-[#293B9333] hover:bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] hover:text-white",
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
                    {/* Speech-bubble arrow under active tab */}
                    {active && (
                      <span
                        className="absolute left-1/2 bottom-[-12px] -translate-x-1/2 pointer-events-none"
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "10px solid transparent",
                          borderRight: "10px solid transparent",
                          borderTop: "12px solid white",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.08))",
                        }}
                        aria-hidden
                      />
                    )}
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
                .swiper{
                  padding: 0 10px !important;
                }
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
                height: 8px !important;
                width: 12px !important;
                border-radius: 9999px !important;
                background: #293B9333 !important;
                opacity: 1 !important;
                margin: 0 4px !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
                border: none !important;
              }
              .liquidity-pagination .swiper-pagination-bullet:hover {
                background: #293B9333 !important;
              }
              .liquidity-pagination .swiper-pagination-bullet-active {
                background: #293B93 !important;
                width: 28px !important;
                opacity: 1 !important;
                box-shadow: 0 0 10px #293B9333 !important;
                border: none !important;
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
          <div className="mt-14 text-center">
            <div className="text-[18px] md:text-[24px] font-extrabold tracking-[0.5px] text-[#333] mb-2">
              {t("lpLabel")}
            </div>
            <div className="text-[14px] md:text-[16px] font-normal tracking-[0.3px] text-[#666]">
              {t("lpLabel1")}
            </div>

            <div className="mt-4 md:mt-10 flex justify-center">
              <button className="rounded-full cursor-pointer py-3 md:py-4 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] px-8 md:px-10 min-w-[280px] md:min-w-[300px] text-[15px] md:text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(149,110,66,0.4)] hover:shadow-[0_15px_40px_rgba(149,110,66,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 hover:from-[#A67A52] hover:to-[#B68756]">
                {t("butttonLp")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardItem({ pill, title, subtitle, bullets, icon }) {
  return (
    <div
      className="group rounded-[22px] bg-[#ECEEF5] p-6 m-1 md:p-8 w-full h-full text-left transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 cursor-pointer"
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* top mini pill */}
      <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-semibold text-white mb-4 transition-transform duration-300 group-hover:scale-105"
        style={{
          borderRadius: "32px",
          border: "1px solid rgba(255, 255, 255, 0.00)",
          background: "#293B93",
          backdropFilter: "blur(22.5px)",
        }}
      >
        <span className="inline-flex h-[20px] w-[20px] items-center justify-center flex-shrink-0">
          <DotIcon icon={icon} />
        </span>
        <span>{pill}</span>
      </div>

      <p className="text-sm md:text-base font-normal text-[#2B3D93]/70 mt-3 mb-1 uppercase tracking-wide">
        {subtitle}
      </p>

      <div className="mt-2">
        <div className="text-[20px] md:text-[22px] font-bold leading-[1.2] text-[#293B93] mb-2">{title}</div>
      </div>

      <ul className="mt-4 space-y-2 text-sm md:text-base leading-[1.5] text-[#4D4D70]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5 items-start">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#956E42] to-[#E9DDCF] flex-shrink-0" />
            <span className="flex-1">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 md:mt-8 flex items-center group-hover:translate-x-1 transition-transform duration-300">
        <div className="text-[#293B93] flex items-center justify-center"
          style={{
            borderRadius: "14px",
            background: "#FFF",
          }}
        >
          <img src="/new/arrow-right.svg" alt="arrow" className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}

function DotIcon({ icon }) {
  return (
    <img src={icon} alt="dot" className=" object-contain" />
  );
}
