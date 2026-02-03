import React from "react";
import MobileSwiperGrid from "./MobileSwiperGrid";

export default function WhyWorkWithGTC() {
  const items = [
    {
      label: "Served Clients",
      value: "985,000 + ",
      desc: "Reliable leverage to suit any trading style—from short-term to higher-reward strategies.",
    },
    {
      label: "Trading Instruments",
      value: "27,000 + ",
      desc: "Keep your trades open longer, giving you more control and flexibility to manage positions.",
    },
    {
      label: "Destinations Worldwide",
      value: "20 +",
      desc: "Join a mission-driven team helping empower global, confident trading.",
    },
    {
      label: "Monthly Trades",
      value: "$450 Billion",
      desc: "Trade on the go with our award-winning app for seamless deposits, payouts and live features.",
    },
  ];

  return (
    <div className="bg-[#F1F2F4]">
      <section
        className="relative w-full overflow-hidden md:py-16 bg-opacity-10 py-10 px-4 md:px-6"
        style={{
          backgroundImage: "url('/new/bg-section3.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto container" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="HeadingH2 text-center">
            Why Work with GTC
          </h2>
          <p className="text-center text-[14px] md:text-[16px] text-[#4D4D70] max-w-2xl mx-auto mb-12">
            Experience exceptional trading conditions designed to help you succeed
          </p>

          <MobileSwiperGrid
            gridClasses="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            gapClasses="gap-6"
          >
            {items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  background:
                    "linear-gradient(176.09deg, #F1F2F4 -76.04%, #293B93 22.71%, #0D122D 107.41%)",
                  backdropFilter: "blur(28.49382972717285px)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                }}
                className="group relative rounded-[24px] px-6 py-8 md:px-8 md:py-12 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* star decoration */}
                <div className="text-white flex items-center gap-2 justify-between mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <StarIcon />
                  </div>
                </div>

                <div className="md:text-[13px] text-[11px] font-light tracking-[1px] text-white/90 uppercase mb-3">
                  {it.label}
                </div>

                <div className="mt-2 md:text-[28px] text-[22px] font-extrabold tracking-[-0.3px] text-white mb-4">
                  {it.value}
                </div>

                <p className="mt-4 md:text-[14px] text-[13px] leading-[1.6] text-white/90">
                  {it.desc}
                </p>
              </div>
            ))}
          </MobileSwiperGrid>
        </div>
      </section>
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="23"
      viewBox="0 0 26 23"
      fill="none"
    >
      <path
        d="M12.5509 0L15.5138 8.75403H25.1018L17.3449 14.1643L20.3078 22.9183L12.5509 17.5081L4.79402 22.9183L7.75689 14.1643L-6.67572e-06 8.75403H9.58804L12.5509 0Z"
        fill="white"
      />
    </svg>
  );
}
