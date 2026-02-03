import React from "react";
import MobileSwiperGrid from "./MobileSwiperGrid";

export default function IBProgramBenefits() {
  const cards = [
    {
      title: "70% Rebate",
      desc: "Competitive volume-based rebate structure",
      icon: "/new/icon1.png",
    },
    {
      title: "Fast & Secure Execution",
      desc: "Lightning-fast order execution with secure processing",
      icon: "/new/icon2.png",
    },
    {
      title: "24/7 Multilingual Support",
      desc: "Dedicated support team available around the clock",
      icon: "/new/icon3.png",
    },
    {
      title: "Quick Withdrawal",
      desc: "Fast and reliable withdrawal processing",
      icon: "/new/icon4.png",
    },
    {
      title: "Copy Trading",
      desc: "Copy successful traders and replicate strategies",
      icon: "/new/icon5.png",
    },
    {
      title: "Stable Trading Platforms",
      desc: "Robust and reliable platforms for seamless trading",
      icon: "/new/icon6.png",
    },

  ];

  return (
        <section
      className="w-full py-10 md:py-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(45deg, rgba(0, 0, 0, 0.00) 52.67%, rgba(0, 33, 255, 0.20) 73.42%), linear-gradient(0deg, #293794 0%, #000021 103.34%)",
      }}
    >
      <div className="mx-auto container px-4 md:px-6" data-aos="fade-up" data-aos-duration="1000">
        {/* Mobile Swiper */}
        <div className="md:hidden">
          {/* Text Section - Mobile */}
          <div className="mb-6">
            <h2 className="HeadingH2 text-secondary">   
              Introducing Broker (IB)
              <br />
              program benefits
            </h2>

            <p className="mt-5 md:mt-6 md:text-[16px] text-[14px] leading-[1.7] text-white text-left max-w-xl">
              Partnering with GTCFX offers unlimited earning
              potential, competitive rebates, and custom structures to suit your
              needs. You'll also benefit from advanced tracking tools, marketing
              resources, and support from a personal Account Manager.
            </p>
          </div>

          <MobileSwiperGrid
            gridClasses=""
            gapClasses=""
          >
            {cards.map((c) => (
              <BenefitCard key={c.title} {...c} />
            ))}
          </MobileSwiperGrid>
        </div>

        {/* Desktop Grid - Original layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Left copy */}
          <div className="md:col-span-2">
            <h2 className="HeadingH2 text-secondary">   
              Introducing Broker (IB)
              <br />
              program benefits
            </h2>

            <p className="mt-5 md:mt-6 md:text-[16px] text-[14px] leading-[1.7] text-white text-left max-w-xl">
              Partnering with GTCFX offers unlimited earning
              potential, competitive rebates, and custom structures to suit your
              needs. You'll also benefit from advanced tracking tools, marketing
              resources, and support from a personal Account Manager.
            </p>
          </div>

          {/* Cards */}
          {cards.map((c) => (
            <BenefitCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, desc }) {
  return (
    <div
      className="group md:rounded-[20px] rounded-[16px] bg-white p-6 md:p-8 w-full h-full flex flex-col transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] hover:-translate-y-2"
      style={{ boxShadow: "1.49px 8.95px 23.87px 0px #0000001A" }}
    >
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="relative flex h-[56px] w-[56px] md:h-[64px] md:w-[64px] items-center justify-center flex-shrink-0 mb-5 md:mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
          <div className="relative flex h-full w-full items-center justify-center">
            <img 
              src={icon} 
              alt={title} 
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
        </div>

        <div className="mt-0 md:text-[19px] text-[17px] font-extrabold text-[#293B93] leading-tight mb-3 md:mb-4">
          {title}
        </div>

        <div className="mt-0 md:text-[14px] text-[13px] leading-[1.6] text-[#4D4D70] flex-grow">
          {desc}
        </div>
      </div>
    </div>
  );
}
