import React from "react";

export default function TradeWithConfidenceHero() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .hero-bg-desktop {
            background-image: url('/new/banner-bg.png');
            background-size: 35% 100%;
            background-position: right;
            background-repeat: no-repeat;
            min-height: 1000px;
          }
        }
      `}</style>
      <section className="w-full bg-[#0A0D2E] relative hero-bg-desktop">
        <div className="mx-auto container px-6 py-10">
          {/* HERO WRAP (background image placeholder) */}
          <div className="relative overflow-hidden rounded-tr-[44px] bg-[#070A2A]/0">
            {/* Dark overlay (keeps left text readable) */}

            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 items-center gap-10 pb-8 pt-10 md:grid-cols-[1.08fr_0.92fr]">
              {/* Left */}
              <div className="pb-6 md:pb-16 pt-10">
                <h1 className="text-[56px] lg:text-[80px] 3xl:text-8xl font-extrabold leading-[1.03] tracking-[-0.6px] bg-gradient-to-b from-[#956E42] to-[#E9DDCF] text-transparent bg-clip-text">
                  Trade with          
                  Confidence.
         
                  Anywhere.
                </h1>

                <p className="mt-5 text-[14px] md:text-[18px] lg:text-[20px] 3xl:text-[22px] leading-[1.65] text-white">
                  Join 180,000+ traders worldwide. Access 2100+ instruments with
                  tight spreads and award-winning platforms.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button className="rounded-[8px] py-3 md:py-4 bg-gradient-to-r from-[#956E42] to-[#E9DDCF] px-4 md:px-6 text-[14px] md:text-[17px] font-semibold text-[#FFF] shadow-[0_10px_22px_rgba(200,176,140,0.25)]">
                    Start Trading Now
                  </button>

                  <button className="rounded-[8px] border py-3 md:py-4 border-white/35 bg-white/5 px-4 md:px-6 text-[14px] md:text-[17px] font-semibold text-white/85 hover:bg-white/10">
                    Try Demo Account
                  </button>
                </div>

                {/* Meta row */}
                <div className="mt-8 flex flex-wrap items-center gap-6 text-[12px] md:text-[14px] text-white">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-white" />
                    <span>Regulated Globally</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-white" />
                    <span>$1bn+ Monthly Volume</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-white" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ratings bar */}
            <div className="relative z-10 pb-10">
              <div className="grid grid-cols-2 md:flex md:justify-between w-full items-center gap-4 md:gap-0 rounded-xl bg-white/10 px-6 py-4 backdrop-blur-[6px]">
                <RatingItem
                  title="TradingView"
                  score="4.7"
                  stars={5}
                  accent="blue"
                  leftIcon
                />
                <Divider />
                <RatingItem title="Rating and Reviews" score="4.7" stars={5} />
                <Divider />
                <RatingItem title="Rating and Reviews" score="4.6" stars={5} />
                <Divider />
                <RatingItem
                  title="Trustpilot"
                  score="4.6"
                  stars={5}
                  accent="green"
                />
              </div>
            </div>
          </div>

          {/* Bottom SVG */}
          <div className="container mx-auto left-0 right-0  absolute bottom-[-10px] md:bottom-[-50px] w-full">
            <img src="/new/Subtract.svg" alt="" className="w-full h-auto" />
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
