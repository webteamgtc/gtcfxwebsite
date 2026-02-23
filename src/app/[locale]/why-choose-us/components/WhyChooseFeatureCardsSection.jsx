"use client";

import React from "react";

const FEATURES = [
  "Tightest Spread in The Market Spreads Starting From 0.0* Pips",
  "Most Stable Trading Platform",
  "Competitive Rebates & Commissions in The Industry For Our IB’s",
  "Secure, Instant And Fast Execution",
  "MT4/MT5 Trading Platform",
  "Dedicated Relationship Manager",
  "Various Funding Methods Including Credit Card, Wire Transfer, Digital Currency Assets currency",
];

const FEATURES2 = [
  "Access To 7 Markets With Over 27,000 Trading Instruments",
  "Leverage Up To 1:2000",
  "Negative Balance Protection",
  "No Trading Restrictions On EA.",
  "No Price Slippage.",
  "No Commissions.",
  "No Requotes.",
  "No Rejections.",
]

const FEATURES3 = [
  "ECN Accounts With Direct Access To Top Tier Banks.",
  "Direct Access To Top Tier Banks.",
  "No Dealing Desk Intervention.",
  "Tier 1 Liquidity Pricing.",
  "Instant And Fast Execution."
]

const FEATURES4 = [
  "PAMM & MAM Accounts",
  "Signal Centre Tool.",
  "VPS.",
  "Expert Analysis.",
  "Autochartist",
  "Acuity Trading Tool.",
]

const BLOCKS = [
  { title: "Trade With The Best Broker", items: FEATURES },
  { title: "Customize your Trading Strategies", items: FEATURES2 },
  { title: "Empowering Success with Cutting-Edge Technology", items: FEATURES3 },
  { title: "Utilizing Top Tools for Success", items: FEATURES4 },
];

export default function WhyChooseGTCSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl md:px-6 px-4 py-main">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">

          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#EEF0F6]" />
            <h2 className="relative bg-white !text-[#4D4D70] px-6 HeadingH2 font-extrabold leading-none tracking-[-0.02em]">
              Why Choose GTC?
            </h2>
          </div>

          <p className="mt-6 HeadingH4  font-bold leading-[16px] !text-[#4D4D70]">
            Unlocking Profitable Opportunities: Your Best Investment Journey Begins with Us
          </p>

          <p className="mt-3 text-[14px] lg:text-[18px] md-text-[16px]  font-normal text-[#4D4D70]">
            Trading with us offers the optimal avenue for investing your money wisely and profitably.
            Our trading platform provides secure and efficient environment, ensuring that your
            investment endeavors are backed by cutting-edge technology and expert support.
          </p>

          <p className="mt-3 text-[14px] lg:text-[18px] md-text-[16px]  font-normal text-[#4D4D70]">
            With a commitment to delivering the best trading experience, we empower you to navigate
            financial markets seamlessly, making informed decisions that lead to lucrative returns on
            your investments. Join us and unlock the potential for financial growth and success in
            your trading journey.
          </p>
        </div>

        <hr className="my-10 h-[1px] border-[#ECEFF6]" />

        {/* Blocks (2 columns on desktop like screenshot layout) */}
        <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-1">
          {BLOCKS.map((b, idx) => (
            <div key={idx} className="">
              <h3 className="HeadingH4 font-bold !text-[#243AA0]">
                {b.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {b.items.map((txt, i) => (
                  <li key={i} className="flex items-start gap-[8px]">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clip-path="url(#clip0_4_524)">
                          <path d="M12.5336 25.0002C11.6425 25.0002 10.7465 24.905 9.85784 24.7121C6.59612 24.0041 3.80559 22.0681 1.99895 19.2604C-0.776928 14.9465 -0.649975 9.45331 2.31633 5.27118C2.67522 4.76581 3.37346 4.64862 3.87883 5.00507C4.3842 5.36396 4.50383 6.0622 4.14495 6.56757C1.70842 10.0026 1.60588 14.507 3.88372 18.0495C5.36565 20.3542 7.65569 21.9411 10.3315 22.5222C13.0097 23.1032 15.7514 22.6076 18.0536 21.1257C22.8095 18.0666 24.1889 11.7092 21.1298 6.95331C19.6479 4.64862 17.3578 3.06171 14.6821 2.48066C12.0063 1.8996 9.26213 2.39521 6.95989 3.87714C6.43987 4.21161 5.74651 4.06025 5.41204 3.54023C5.07756 3.02021 5.22893 2.32685 5.74895 1.99237C8.55657 0.188175 11.8989 -0.417294 15.1606 0.290714C18.4223 0.998722 21.2128 2.93476 23.0195 5.74237C26.7475 11.5383 25.0654 19.2849 19.2695 23.0129C17.226 24.3215 14.9018 25.0002 12.5336 25.0002Z" fill="url(#paint0_linear_4_524)" />
                          <path d="M11.4275 17.2217C10.9514 17.2217 10.4753 17.041 10.1116 16.6772L6.87671 13.4424C6.4397 13.0054 6.4397 12.2949 6.87671 11.8579C7.31372 11.4209 8.02417 11.4209 8.46118 11.8579L11.4299 14.8242L16.3689 9.8877C16.8059 9.45068 17.5164 9.45068 17.9534 9.8877C18.3904 10.3247 18.3904 11.0352 17.9534 11.4722L12.7459 16.6797C12.3947 17.0266 11.9211 17.2213 11.4275 17.2217Z" fill="url(#paint1_linear_4_524)" />
                        </g>
                        <defs>
                          <linearGradient id="paint0_linear_4_524" x1="12.5019" y1="0.00219727" x2="12.5019" y2="25.0002" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#956E42" />
                            <stop offset="1" stop-color="#E9DDCF" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_4_524" x1="12.415" y1="9.55994" x2="12.415" y2="17.2217" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#956E42" />
                            <stop offset="1" stop-color="#E9DDCF" />
                          </linearGradient>
                          <clipPath id="clip0_4_524">
                            <rect width="25" height="25" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <span className="text-[14px]  md:text-[16px]  font-normal text-[#4D4D70]">
                      {txt}
                    </span>
                  </li>
                ))}
              </ul>
              <hr className="mt-10 h-[1px] border-[#ECEFF6]" />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
