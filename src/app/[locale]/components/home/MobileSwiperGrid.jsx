"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/**
 * MobileSwiperGrid - A responsive component that shows a swiper on mobile (one card at a time) and grid on desktop
 * @param {React.ReactNode} children - The cards/items to display
 * @param {string} gridClasses - Tailwind classes for desktop grid (e.g., "grid-cols-1 md:grid-cols-3")
 * @param {string} gapClasses - Tailwind classes for gap (e.g., "gap-6 md:gap-8")
 * @param {object} swiperConfig - Optional swiper configuration
 */
export default function MobileSwiperGrid({
  children,
  gridClasses = "grid-cols-1 md:grid-cols-3",
  gapClasses = "gap-6 md:gap-8",
  swiperConfig = {},
}) {
  const swiperRef = useRef(null);

  const defaultSwiperConfig = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
   
    navigation: false,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 0,
        pagination: false,
        navigation: false,
      },
    },
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
    ...swiperConfig,
  };

  // Convert children to array if needed
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .mobile-one-slide .swiper-slide {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box;
        }
        .swiper-pagination-bullet {
          background: #293B93 !important;
          opacity: 0.3 !important;
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}} />
      
      {/* Mobile Swiper - visible only on mobile */}
      <div className="md:hidden">
        {/* Custom Navigation Arrows - Top */}
        <div className="flex justify-end items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="swiper-button-prev-custom group inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.1)] ring-1 ring-black/5 transition-all duration-300 hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] hover:bg-white"
            aria-label="Previous slide"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-gray-800 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="swiper-button-next-custom group inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#293B93] to-[#1a2a6b] shadow-[0_4px_12px_rgba(41,59,147,0.25)] ring-1 ring-white/20 transition-all duration-300 hover:shadow-[0_6px_16px_rgba(41,59,147,0.35)] hover:from-[#1a2a6b] hover:to-[#293B93]"
            aria-label="Next slide"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <Swiper {...defaultSwiperConfig} className="mobile-one-slide !overflow-hidden">
          {childrenArray.map((child, index) => (
            <SwiperSlide key={index} className="!w-full">
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid - visible only on desktop */}
      <div className={`hidden md:grid ${gridClasses} ${gapClasses}`}>
        {childrenArray}
      </div>
    </>
  );
}

