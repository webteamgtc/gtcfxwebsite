import React from "react";

export default function MarketsToTradeStrip() {
  const items = [
    {
      label: "Forex",
      img: "/new/gold-full.svg",
      icon: <CoinIcon />,
      text: "Major, minor & exotic FX pairs",
    },
    {
      label: "Energies",
      img: "/new/energies.svg",
      icon: <DropIcon />,
      text: "Oil & energy markets with tight spreads",
    },
    {
      label: "Equity Indices",
      img: "/new/equity.svg",
      icon: <ChartIcon />,
      text: "Popular indices from major exchanges",
    },
    {
      label: "Metals",
      img: "/new/metal.svg",
      icon: <BarsIcon />,
      text: "Gold & silver with deep liquidity",
    },
    {
      label: "Commodities",
      img: "/new/comodities.svg",
      icon: <BoxIcon />,
      text: "Key commodities across global markets",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="mx-auto container px-4 md:px-6" data-aos="fade-up" data-aos-duration="1000">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[42px] lg:text-[50px] font-extrabold tracking-[-0.3px] text-[#293B93] mb-4">
            Markets to Trade – World Class Broker
          </h2>
          <p className="mx-auto max-w-3xl text-[14px] md:text-[18px] lg:text-[20px] font-normal leading-[1.6] text-[#4D4D70]">
            Competitive pricing on 60 instruments in South Africa,
            <br className="hidden md:block" />
            {" "}and 300+ instruments globally.
          </p>
        </div>

        {/* Image strip */}
        <div className="mt-8 md:mt-12 overflow-hidden rounded-2xl md:rounded-3xl border border-[#E6E8F6] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
          {/* Top row (5 images) */}
          <div className="grid md:grid-cols-5 grid-cols-2">
            {items.map((it, idx) => (
              <div 
                key={idx} 
                className="group relative md:h-[480px] h-[280px] md:border-r border-[#E6E8F6] last:border-r-0 overflow-hidden cursor-pointer"
              >
                {/* Label overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#293B93]/95 via-[#293B93]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-end pb-6 px-4">
                  <div className="text-white mb-2">
                    {it.icon}
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-white mb-2">
                    {it.label}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-white/90 text-center leading-relaxed">
                    {it.text}
                  </p>
                </div>

                {/* Image */}
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${it.img})` }}
                />

                {/* Bottom gradient overlay (always visible, subtle) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* --- icons (simple, consistent, white) --- */
function CoinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3c4.2 0 7.6 1.6 7.6 3.6S16.2 10.2 12 10.2 4.4 8.6 4.4 6.6 7.8 3 12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.6 6.6V12c0 2-3.4 3.6-7.6 3.6S4.4 14 4.4 12V6.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.6 12v5.4c0 2-3.4 3.6-7.6 3.6S4.4 19.4 4.4 17.4V12"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2s6 6.5 6 11.2A6 6 0 1 1 6 13.2C6 8.5 12 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 19H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M7 15l4-4 3 3 5-7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 7h10v10H7V7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M7 11h10" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 15h10" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 8.5 12 3 3 8.5 12 14l9-5.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V16.5L12 22 3 16.5V8.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M12 14v8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
