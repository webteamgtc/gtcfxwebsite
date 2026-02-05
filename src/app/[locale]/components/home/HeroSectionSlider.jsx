"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

export default function HeroSectionSlider() {
  const t = useTranslations("home.hero");

  const slides = useMemo(
    () => [
      {
        type: "slider1",
        heading: t("slider1.heading"),
        subheading: t("slider1.subheading"),
        cta: t("liveAccount"),
        ctaSecondary: t("partnerAccount"),
        img: "/new/card-img1.png",
      },
      {
        type: "slider2",
        heading: t("slider2.heading"),
        subheading: t("slider2.heading1"),
        heading2: t("slider2.heading2"),
        subheading2: t("slider2.subheading2"),
        cta: t("liveAccount"),
        ctaSecondary: t("partnerAccount"),
        img: "/new/card-img2.png",
      },
      {
        type: "slider3",
        heading: t("slider3.heading"),
        subheading: t("slider3.subheading"),
        description: t("slider3.description"),
        cta: t("liveAccount"),
        ctaSecondary: t("partnerAccount"),
        img: "/new/card-img3.png",
      },
      {
        type: "slider4",
        heading: t("slider4.heading"),
        subheading: t("slider4.subheading"),
        cta: t("liveAccount"),
        ctaSecondary: t("partnerAccount"),
        img: "/new/card-img4.png",
      },
      {
        type: "slider5",
        heading: t("slider5.heading"),
        subheading: t("slider5.subheading"),
        cta: t("liveAccount"),
        ctaSecondary: t("partnerAccount"),
        img: "/new/card-img1.png",
      },
    ],
    [t]
  );

  return (
    <>
      <style>{`
        /* Mobile styles - image on top, gradient behind for side blend */
        @media (max-width: 767px) {
          .hero-bg-desktop {
            background-image: url('/new/banner-bg.png');
             linear-gradient(135deg, #0a0c14 0%, #0d122d 50%, #0a0e27 100%);
            background-size: cover;
            background-position: center center, center;
            background-repeat: no-repeat, no-repeat;
            position: relative;
          }
        }
        
        /* Desktop styles - image on top, gradient behind for side blend */
        @media (min-width: 768px) {
          .hero-slider-bg-desktop {
            background-image: url('/new/banner-bg.png');
             linear-gradient(135deg, #0a0c14 0%, #0d122d 50%, #0a0e27 100%);
            background-size: cover;
            background-position: center center, center;
            background-repeat: no-repeat, no-repeat;
            min-height: 900px;
          }
          .hero-bg-desktop {
            background-image: url('/new/banner-bg.png');
             linear-gradient(135deg, #0a0c14 0%, #0d122d 50%, #0a0e27 100%);
            background-size: cover;
            background-position: center center, center;
            background-repeat: no-repeat, no-repeat;
            min-height: 900px;
            position: relative;
          }
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #956E42, #E9DDCF);
          width: 40px;
          border-radius: 6px;
          box-shadow: 0 0 20px rgba(149, 110, 66, 0.8), 0 0 40px rgba(149, 110, 66, 0.4);
          border-color: rgba(233, 221, 207, 0.5);
        }
        
        .swiper-pagination {
          bottom: 40px !important;
          display: flex !important;
          justify-content: center !important;
          gap: 12px !important;
          z-index: 20 !important;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 20px rgba(149, 110, 66, 0.5), 0 0 40px rgba(233, 221, 207, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(149, 110, 66, 0.8), 0 0 60px rgba(233, 221, 207, 0.5);
          }
        }

        .animate-fade-in {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-fade-in-delay {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: slide-in-left 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) 0.7s both;
        }
        
        .hero-gradient-text {
          background: linear-gradient(135deg, #995F22 0%, #E9DDCF 50%, #995F22 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <section className="w-full relative hero-bg-desktop overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#956E42]/5 via-transparent to-[#E9DDCF]/5 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(149,110,66,0.1),transparent_50%)] pointer-events-none z-0" />
        {/* Gray overlay for mobile - improves text readability */}
               <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/65 to-black/70 md:from-transparent md:via-transparent md:to-transparent pointer-events-none z-0" />
        <div
          className="absolute right-0 top-[18%] bottom-0 md:w-[46%] w-10/12 bg-[url('/new/only-mobile.png')] bg-cover bg-no-repeat z-0"
          style={{ backgroundPosition: "left" }}
        />
        {/* Mobile-only overlay over image for text readability */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black/70 via-black/50 to-transparent pointer-events-none z-[1]" />
        <div className="container mx-auto py-8 md:py-12 lg:py-16 relative z-10">
          <div className="relative overflow-hidden rounded-tr-[44px] bg-[#070A2A]/0">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Autoplay, Pagination]}
              className="hero-slider-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative z-10 flex flex-col justify-center w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] py-8 md:py-12 lg:py-16">
                    {/* Content */}
                    <div className="max-w-2xl px-4 md:px-6">
                      {/* {slide.type === "slider2" ? (
                        <h1 className="text-[30px] sm:text-[52px] md:text-[60px] font-extrabold leading-[1.05] tracking-[-0.8px] mb-8 text-left animate-fade-in">
                          <span className="hero-gradient-text drop-shadow-[0_4px_12px_rgba(149,110,66,0.4)]">
                            {slide.heading}
                          </span>{" "}
                          <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            {slide.heading1}
                          </span>{" "}
                          <span className="hero-gradient-text drop-shadow-[0_4px_12px_rgba(149,110,66,0.4)]">
                            {slide.heading2}
                          </span>
                           <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                            {slide.subheading}
                          </span>{" "}
                          <span className="bg-gradient-to-r from-white via-[#E9DDCF] to-[#956E42] text-transparent bg-clip-text drop-shadow-[0_4px_12px_rgba(233,221,207,0.3)]">
                            {slide.subheading2}
                          </span>
                        </h1>
                      ) : ( */}
                      <h1 className="text-[30px] sm:text-[52px] md:text-[55px]  font-extrabold leading-[1.05] tracking-[-0.8px] mb-8 text-left animate-fade-in">
                        <span className="hero-gradient-text drop-shadow-[0_4px_12px_rgba(149,110,66,0.4)]">
                          {slide.heading}
                        </span>
                        <br />
                        <span className="hero-gradient-text drop-shadow-[0_4px_12px_rgba(149,110,66,0.4)]">
                          {slide.subheading}
                        </span>
                        {slide.description && (
                          <>
                            <br />
                            <span className="text-white/95 font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px]">
                              {slide.description}
                            </span>
                          </>
                        )}
                      </h1>
                      {/* )} */}

                      {/* Buttons */}
                      <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start gap-5 animate-fade-in-delay-2">
                        <button className="group relative rounded-full uppercase py-2 md:py-3 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] px-8 md:px-10 text-[15px] md:text-[16px] font-bold text-white shadow-[0_10px_40px_rgba(149,110,66,0.5)] hover:shadow-[0_20px_60px_rgba(149,110,66,0.7)] transition-all duration-300 hover:scale-110 active:scale-100 hover:from-[#A67A52] hover:to-[#F0E4D6] overflow-hidden">
                          <span className="relative z-10 flex items-center gap-2">
                            {slide.cta}
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#E9DDCF] to-[#956E42] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </button>

                        <button className="group rounded-full border-2 py-2 md:py-3 border-white/50 bg-white/10 backdrop-blur-md px-8 md:px-10 text-[15px] md:text-[16px] font-bold text-white hover:bg-white/20 hover:border-white/80 hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all duration-300 hover:scale-110 active:scale-100">
                          {slide.ctaSecondary}
                        </button>
                      </div>

                      {/* Meta row */}
                      <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:flex-wrap items-center md:items-center gap-4 md:gap-8 text-[13px] sm:text-[14px] md:text-[15px] text-white/90 font-medium animate-fade-in-delay-3">
                        {/* Regulated Globally - Top on mobile, first on desktop */}
                        <div className="flex items-center gap-3 group cursor-default w-full md:w-auto justify-center sm:justify-start">
                          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Regulated Globally</span>
                        </div>
                        {/* Bottom row on mobile - left and right */}
                        <div className="flex flex-row items-center md:justify-start w-full md:w-auto gap-4 md:gap-8">
                          <div className="flex items-center gap-3 group cursor-default">
                            <div className="relative w-6 h-6">
                              <img src="/new/dollar.svg" alt="Volume Icon" className="w-full h-full object-contain" />
                            </div>
                            <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">$1bn+ Monthly Volume</span>
                          </div>
                          <div className="flex items-center gap-3 group cursor-default">
                            <div className="relative w-6 h-6">
                              <img src="/new/customer.svg" alt="Volume Icon" className="w-full h-full object-contain" />
                            </div>
                            <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">24/7 Support</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Ratings bar - fixed at bottom */}
            {/* <div className="relative z-10 pb-6 md:pb-20 mt-5 md:mt-0">
              <RatingsBar />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

function Divider() {
  return <div className="hidden h-10 w-px bg-white/15 md:block" />;
}

function RatingItem({ title, score, stars = 5, accent, leftIcon }) {
  return (
    <div className="flex min-w-[0px] flex-1 items-center justify-center gap-2 md:gap-3">
      {/* tiny logo placeholder */}
      <div className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-md bg-white/10">
        <span className="text-[10px] md:text-[13px] font-bold text-white/80">
          {leftIcon ? "T7" : "★"}
        </span>
      </div>

      <div className="min-w-0">
        <div className="truncate text-[10px] md:text-[12px] font-semibold text-white">
          {title}
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-[16px] md:text-[20px] font-semibold text-white">
            {score}
          </span>
          <div className="flex items-center gap-[3px]">
            {Array.from({ length: stars }).map((_, i) => (
              <Star
                key={i}
                variant={
                  accent === "green"
                    ? "green"
                    : accent === "blue"
                      ? "blue"
                      : "gold"
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Star({ variant = "gold" }) {
  const fill =
    variant === "green"
      ? "#22C55E"
      : variant === "blue"
        ? "#3B82F6"
        : "#F59E0B";

  return (
    <svg
      className="w-3 h-3 md:w-[14px] md:h-[14px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.8l2.7 5.75 6.3.9-4.55 4.43 1.08 6.25L12 17.9 6.47 20.13l1.08-6.25L3 9.45l6.3-.9L12 2.8z"
        fill={fill}
        opacity="0.95"
      />
    </svg>
  );
}
