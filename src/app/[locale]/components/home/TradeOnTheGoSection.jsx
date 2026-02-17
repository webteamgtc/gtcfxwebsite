import React from "react";
import Image from "next/image";
import AttractiveSingleImageSwiper from "./MobileSlider";

export default function TradeOnTheGoHero() {
  return (
    <>
      <section className="w-full py-12 md:py-16"
        style={{ background: "linear-gradient(288deg, #27348D 36.32%, #161D5E 69.76%, #05062E 103.2%)" }}
      >
        <div
          className="mx-auto container px-4 md:px-6"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-2 lg:gap-3">
            {/* LEFT */}
            <div className="col-span-1 md:col-span-6 lg:col-span-6 order-2 md:order-1">
              <h1 className="text-[25px] sm:text-[32px] text-center md:text-left md:text-[28px] lg:text-[40px] font-extrabold uppercase leading-[1.05] tracking-[0.3px] text-white mb-4">
                TRADE ON THE GO GTC GO APP
              </h1>

              <h2 className="mt-4 text-center md:text-left md:mt-6 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px] font-semibold leading-[1.2] text-white mb-4">
                Trade. Invest. Earn
                <br />
                All in one app.
              </h2>

              <p className="mt-4 text-center md:text-left md:mt-6 max-w-xl text-[15px] md:text-[18px] lg:text-[20px] font-normal leading-[1.6] text-white">
                Trade the CFD market on the go with our mobile application and
                benefit from ultra-low latency trading infrastructure,
                award-winning order execution and deep liquidity.
              </p>

              {/* QR Code Section */}
              <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                {/* QR Code */}
                <div className="relative w-[120px] h-[120px] md:w-[180px] md:h-[180px] flex-shrink-0">
                  <Image
                    src="/app/qrcode.webp"
                    alt="GTCFX Mobile App QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* QR Code Text */}
                <div className="flex flex-col justify-start items-center md:items-start pt-0 md:pt-2 w-full md:w-auto">
                  <p className="text-[15px] md:text-[18px] lg:text-[20px] font-normal leading-[1.6] text-white mb-2 text-center md:text-left">
                    Scan to Download the App
                  </p>
                  <p className="text-[13px] md:text-[14px] font-medium text-white text-center md:text-left mb-4 md:mb-0">
                    iOS and Android
                  </p>
                  <div className="mt-0 md:mt-8 flex flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start w-full">
                    {/* App Store Button */}
                    <div className="flex flex-col">
                      <a
                        href="https://apps.apple.com/ae/app/gtc-go/id6753007277"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] inline-flex items-center justify-center border border-white/30 rounded-xl px-4 md:px-5 py-2.5 md:py-3 hover:shadow-[0_10px_25px_rgba(149,110,66,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
                        aria-label="Download on the App Store"
                     
                      >
                        <svg
                          className="w-7 h-7 md:w-8 md:h-8 mr-2 md:mr-2.5 text-white flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        <div className="text-left text-white">
                          <div className="text-[9px] md:text-[10px] leading-tight font-medium">
                            Download on the
                          </div>
                          <div className="text-[12px] md:text-[14px] font-bold leading-tight">
                            App Store
                          </div>
                        </div>
                      </a>
                      {/* Rating below App Store button */}
                      <div className="flex items-center gap-1 mt-2 justify-center">
                        <div className="flex items-center gap-[2px]">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star half />
                        </div>
                        <span className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-white">
                          4.7/5
                        </span>
                      </div>
                    </div>

                    {/* Google Play Button */}
                    <div className="flex flex-col">
                      <a
                        href="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] inline-flex items-center justify-center border border-white/30 rounded-xl px-4 md:px-5 py-2.5 md:py-3 hover:shadow-[0_10px_25px_rgba(149,110,66,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
                        aria-label="Get it on Google Play"
                     
                      >
                        <svg
                          className="w-7 h-7 md:w-8 md:h-8 mr-2 md:mr-2.5 text-white flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left text-white">
                          <div className="text-[9px] md:text-[10px] leading-tight font-medium">
                            GET IT ON
                          </div>
                          <div className="text-[12px] md:text-[14px] font-bold leading-tight">
                            Google Play
                          </div>
                        </div>
                      </a>
                      {/* Rating below Google Play button */}
                      <div className="flex items-center gap-1 mt-2 justify-center">
                        <div className="flex items-center gap-[2px]">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star half />
                        </div>
                        <span className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-white">
                          4.5/5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store buttons with ratings */}

              {/* Start Trading Button */}
              <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                <button
                  type="button"
                  className="px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(0deg, #293B93 -30.16%, #4D4D70 156.35%)",
                  }}
                >
                  Start Trading
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-1 md:col-span-6 lg:col-span-6 flex justify-center md:justify-end order-1 md:order-2">
              <AttractiveSingleImageSwiper />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------ Small UI Parts ------------------ */

function StoreBtn({ variant }) {
  const isApple = variant === "apple";

  return (
    <button
      type="button"
      className="flex h-[46px] min-w-[160px] items-center gap-3 rounded-[8px] bg-[#B38A63] px-4 text-white shadow-[0_8px_18px_rgba(179,138,99,0.25)]"
    >
      <span className="flex h-[22px] w-[22px] items-center justify-center">
        {isApple ? <AppleIcon /> : <PlayIcon />}
      </span>

      <span className="text-left leading-[1]">
        <span className="block text-[10px] font-medium opacity-90">
          {isApple ? "Download on the" : "Get it on"}
        </span>
        <span className="mt-[2px] block text-[13px] font-semibold">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </span>
    </button>
  );
}

function Star({ half }) {
  if (half) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="flex-shrink-0"
      >
        <path
          d="M12 2l2.9 6.4 7 1-5.1 4.8 1.3 7-6.1-3.5-6.1 3.5 1.3-7L2.1 9.4l7-1L12 2Z"
          fill="#D5D6DB"
        />
        <path d="M12 2l2.9 6.4 7 1-5.1 4.8 1.3 7-6.1-3.5V2Z" fill="#F5B301" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M12 2l2.9 6.4 7 1-5.1 4.8 1.3 7-6.1-3.5-6.1 3.5 1.3-7L2.1 9.4l7-1L12 2Z"
        fill="#F5B301"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.2 13.3c0 2.4 2.1 3.2 2.2 3.2-.1.1-.4 1.5-1.4 3-.8 1.3-1.7 2.6-3 2.6-1.2 0-1.6-.7-3-.7-1.4 0-1.9.7-3.1.7-1.2 0-2.1-1.1-3-2.4C1.4 18.6.5 15.2 1.9 12.7c.7-1.2 2-2 3.4-2 .9 0 1.8.7 3 .7 1.2 0 1.9-.7 3.2-.7 1.1 0 2.3.6 3.1 1.6-2.7 1.5-2.4 5-.4 6.4Z" />
      <path d="M14.9 2.1c.7.8.6 2.2.2 3.1-.9.1-2-.6-2.6-1.3-.6-.7-.7-2.1-.2-3 .9-.1 2 .6 2.6 1.2Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.5 3.8c-.5.3-.8.8-.8 1.4v13.6c0 .6.3 1.1.8 1.4.5.3 1.1.3 1.6 0l12-6.8c.5-.3.8-.8.8-1.4 0-.6-.3-1.1-.8-1.4l-12-6.8c-.5-.3-1.1-.3-1.6 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
