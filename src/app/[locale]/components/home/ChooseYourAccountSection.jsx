import React from "react";
import MobileSwiperGrid from "./MobileSwiperGrid";

export default function ChooseYourAccount() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto container px-4 md:px-6" data-aos="fade-up" data-aos-duration="1000">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="HeadingH2">
            Account Types
          </h2>
          <p className="mx-auto max-w-3xl text-[14px] md:text-[18px] lg:text-[20px] font-normal leading-[1.6]">
            Maximize your profit potential with a live trading account offering low spreads and optimal market access.
          </p>
        </div>

        {/* Cards */}
        {/* Mobile Swiper */}
        <div className="md:hidden">
          <MobileSwiperGrid
            gridClasses=""
            gapClasses=""
          >
            {/* Left (Active) */}
            <div
              className="group w-full max-w-[340px] mx-auto rounded-[20px] border-2 border-[#293B93] bg-[#F1F2F4] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(41,59,147,0.25)] hover:-translate-y-2"
              style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="px-6 md:px-8 pb-8 pt-8">
                <div className="mb-6">
                  <div className="text-[32px] md:text-[40px] lg:text-[42px] font-extrabold text-secondary leading-tight">
                    Standard
                  </div>
                  <div className="text-[20px] md:text-[24px] lg:text-[28px] font-light mt-1">
                    Account
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E9ECF7] to-transparent mb-6" />

                <p className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.5] text-[#293B93] mb-6">
                  Tight spreads & low
                  <br />
                  <span className="text-[16px] md:text-[20px] lg:text-[22px] font-normal text-[#4D4D70]">
                    commissions
                  </span>
                </p>

                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckBlue />
                    <span className="flex-1">No minimum deposit</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckBlue />
                    <span className="flex-1">Leverage up to 1:2000 ***</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckBlue />
                    <span className="flex-1">Average spreads 1.0 Pips</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckBlue />
                    <span className="flex-1">0 Commission Charges</span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="h-[48px] w-full rounded-full text-[14px] md:text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(17,26,120,0.3)] hover:shadow-[0_15px_35px_rgba(17,26,120,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background:
                      "linear-gradient(180deg, #111A78 0%, #0A0F45 100%)",
                  }}
                >
                  Open Standard Account
                </button>
              </div>
            </div>

            {/* Right */}
            <div
              className="group w-full max-w-[340px] mx-auto rounded-[20px] border-2 border-[#E6E8F6] bg-[#F1F2F4] transition-all duration-300 hover:border-[#D9B79A] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2"
              style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="px-6 md:px-8 pb-8 pt-8">
                <div className="mb-6">
                  <div className="text-[32px] md:text-[38px] lg:text-[40px] font-extrabold text-secondary leading-tight">
                    ECN
                  </div>
                  <div className="text-[20px] md:text-[24px] lg:text-[28px] font-lightmt-1">
                    Account
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E9ECF7] to-transparent mb-6" />

                <p className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.5] text-[#293B93] mb-6">
                  Premium service
                </p>

                <ul className="space-y-3.5 mb-8">
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckTan />
                    <span className="flex-1">Minimum deposits from $3,000</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckTan />
                    <span className="flex-1">Leverage up to 1:500 ***</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckTan />
                    <span className="flex-1">Raw spreads 0.0 Pips</span>
                  </li>
                  <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                    <CheckTan />
                    <span className="flex-1">Commission $5/standard lot</span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="h-[48px] w-full rounded-full border-2 border-[#D9B79A] bg-white text-[14px] md:text-[15px] font-semibold text-[#B7916F] hover:bg-gradient-to-r hover:from-[#956E42] hover:to-[#E9DDCF] hover:border-transparent hover:text-white transition-all duration-300 hover:shadow-[0_10px_25px_rgba(149,110,66,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Open ECN Account
                </button>
              </div>
            </div>
          </MobileSwiperGrid>
        </div>

        {/* Desktop - Original flex layout */}
        <div className="hidden md:flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-12 md:flex-row md:items-stretch">
          {/* Left (Active) */}
          <div
            className="group w-full max-w-[340px] rounded-[20px] border-2 border-[#293B93] bg-[#F1F2F4] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(41,59,147,0.25)] hover:-translate-y-2"
            style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="px-6 md:px-8 pb-8 pt-8">
              <div className="mb-6">
                <div className="text-[32px] md:text-[40px] lg:text-[42px] font-extrabold text-secondary leading-tight">
                  Standard
                </div>
                <div className="text-[20px] md:text-[24px] lg:text-[28px] font-light mt-1">
                  Account
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E9ECF7] to-transparent mb-6" />

              <p className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.5] text-[#293B93] mb-6">
                Tight spreads & low
                <br />
                <span className="text-[16px] md:text-[20px] lg:text-[22px] font-normal text-[#4D4D70]">
                  commissions
                </span>
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckBlue />
                  <span className="flex-1">No minimum deposit</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckBlue />
                  <span className="flex-1">Leverage up to 1:2000 ***</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckBlue />
                  <span className="flex-1">Average spreads 1.0 Pips</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckBlue />
                  <span className="flex-1">0 Commission Charges</span>
                </li>
              </ul>

              <button
                type="button"
                className="h-[48px] w-full rounded-full text-[14px] md:text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(17,26,120,0.3)] hover:shadow-[0_15px_35px_rgba(17,26,120,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(180deg, #111A78 0%, #0A0F45 100%)",
                }}
              >
                Open Standard Account
              </button>
            </div>
          </div>

          {/* Right */}
          <div
            className="group w-full max-w-[340px] rounded-[20px] border-2 border-[#E6E8F6] bg-[#F1F2F4] transition-all duration-300 hover:border-[#D9B79A] hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            style={{ boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)" }}
          >
            <div className="px-6 md:px-8 pb-8 pt-8">
              <div className="mb-6">
                <div className="text-[32px] md:text-[38px] lg:text-[40px] font-extrabold text-secondary leading-tight">
                  ECN
                </div>
                <div className="text-[20px] md:text-[24px] lg:text-[28px] font-lightmt-1">
                  Account
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E9ECF7] to-transparent mb-6" />

              <p className="text-[18px] md:text-[22px] lg:text-[24px] font-semibold leading-[1.5] text-[#293B93] mb-6">
                Premium service
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckTan />
                  <span className="flex-1">Minimum deposits from $3,000</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckTan />
                  <span className="flex-1">Leverage up to 1:500 ***</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckTan />
                  <span className="flex-1">Raw spreads 0.0 Pips</span>
                </li>
                <li className="flex items-start gap-3 text-[14px] md:text-[15px] lg:text-[16px] font-normal text-[#4D4D70]">
                  <CheckTan />
                  <span className="flex-1">Commission $5/standard lot</span>
                </li>
              </ul>

              <button
                type="button"
                className="h-[48px] w-full rounded-full border-2 border-[#D9B79A] bg-white text-[14px] md:text-[15px] font-semibold text-[#B7916F] hover:bg-gradient-to-r hover:from-[#956E42] hover:to-[#E9DDCF] hover:border-transparent hover:text-white transition-all duration-300 hover:shadow-[0_10px_25px_rgba(149,110,66,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Open ECN Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckBlue() {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="12" cy="12" r="10" fill="#293B93" opacity="0.1" />
      <path
        d="M20 6L9 17l-5-5"
        stroke="#293B93"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckTan() {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="12" cy="12" r="10" fill="#D9B79A" opacity="0.15" />
      <path
        d="M20 6L9 17l-5-5"
        stroke="#D9B79A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
