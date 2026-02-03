// "use client";

// import React, { useMemo, useState } from "react";

// export default function MarketsColumnTabs() {
//   const markets = useMemo(
//     () => [
//       {
//         key: "forex",
//         label: "Forex",
//         title: "Forex",
//         desc: "Trade 70 major, minor & exotic currency pairs\nwith competitive trading conditions.",
//         cta: "Trade Forex",
//         // replace with your real image
//         image:
//           "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80",
//         // rotation similar to screenshot
//         imgClass:
//           "rotate-[-20deg] scale-[1.05] translate-x-[6%] translate-y-[2%]",
//       },
//       {
//         key: "metals",
//         label: "Metals",
//         title: "Metals",
//         desc: "Trade gold & silver with tight spreads\nand deep liquidity.",
//         cta: "Trade Metals",
//         image:
//           "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1600&q=80",
//         imgClass: "rotate-[-10deg] scale-[1.05] translate-x-[4%] translate-y-[2%]",
//       },
//       {
//         key: "crypto",
//         label: "Crypto",
//         title: "Crypto",
//         desc: "Access top crypto CFDs with\ncompetitive conditions.",
//         cta: "Trade Crypto",
//         image:
//           "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=1600&q=80",
//         imgClass: "rotate-[-12deg] scale-[1.05] translate-x-[6%] translate-y-[2%]",
//       },
//       {
//         key: "indices",
//         label: "Indices",
//         title: "Indices",
//         desc: "Trade global indices with\nfast execution.",
//         cta: "Trade Indices",
//         image:
//           "https://images.unsplash.com/photo-1640826519320-1a3f4b7aa90b?auto=format&fit=crop&w=1600&q=80",
//         imgClass: "rotate-[-10deg] scale-[1.06] translate-x-[6%] translate-y-[2%]",
//       },
//       {
//         key: "shares",
//         label: "Shares",
//         title: "Shares",
//         desc: "Go long or short on popular stocks\nwith low costs.",
//         cta: "Trade Shares",
//         image:
//           "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80",
//         imgClass: "rotate-[-8deg] scale-[1.07] translate-x-[7%] translate-y-[2%]",
//       },
//       {
//         key: "energy",
//         label: "Energy",
//         title: "Energy",
//         desc: "Trade oil & gas CFDs with\nrobust liquidity.",
//         cta: "Trade Energy",
//         image:
//           "https://images.unsplash.com/photo-1617953141905-b27fb1fd1d98?auto=format&fit=crop&w=1600&q=80",
//         imgClass: "rotate-[-10deg] scale-[1.06] translate-x-[6%] translate-y-[2%]",
//       },
//       {
//         key: "etfs",
//         label: "ETFs",
//         title: "ETFs",
//         desc: "Diversify with ETF CFDs\nacross sectors.",
//         cta: "Trade ETFs",
//         image:
//           "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80",
//         imgClass: "rotate-[-8deg] scale-[1.07] translate-x-[7%] translate-y-[2%]",
//       },
//     ],
//     []
//   );

//   const [active, setActive] = useState(0);
//   const current = markets[active];

//   return (
//     <section className="w-full bg-white">
//       {/* outer frame */}
//       <div className="relative w-full overflow-hidden">
//         {/* 7-column header row (like screenshot) */}
//         <div className="grid grid-cols-7 border-b border-[#D6D6D6]">
//           {markets.map((m, i) => (
//             <button
//               key={m.key}
//               onClick={() => setActive(i)}
//               className={[
//                 "h-[54px] border-r border-[#D6D6D6] text-center text-[15px] font-medium",
//                 "transition-colors",
//                 i === active ? "text-[#111111]" : "text-[#0B55FF]",
//               ].join(" ")}
//             >
//               {/* active top indicator */}
//               <span
//                 className={[
//                   "flex h-full items-center justify-center",
//                   i === active ? "border-t-[4px] border-t-[#0B55FF]" : "border-t-[4px] border-t-transparent",
//                 ].join(" ")}
//               >
//                 {m.label}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Body (left content + right image), with vertical dividers across entire body */}
//         <div className="relative grid grid-cols-7">
//           {/* Vertical dividers overlay (keeps lines visible over image) */}
//           <div className="pointer-events-none absolute inset-0 z-[5]">
//             {Array.from({ length: 6 }).map((_, idx) => (
//               <div
//                 key={idx}
//                 className="absolute top-0 h-full w-px bg-[#D6D6D6]"
//                 style={{ left: `${((idx + 1) * 100) / 7}%` }}
//               />
//             ))}
//           </div>

//           {/* Left panel (2 columns) */}
//           <div className="col-span-2 bg-[#F2F6FF]">
//             <div className="px-[54px] pt-[86px] pb-[90px]">
//               <h2 className="text-[52px] font-extrabold tracking-[-0.02em] text-black">
//                 {current.title}
//               </h2>

//               <p className="mt-[18px] whitespace-pre-line text-[20px] font-semibold leading-[1.35] text-[#111111]">
//                 {current.desc}
//               </p>

//               <button
//                 type="button"
//                 className="mt-[42px] inline-flex h-[58px] w-[220px] items-center justify-center rounded-full bg-[#0B55FF] text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(11,85,255,0.25)]"
//               >
//                 {current.cta}
//               </button>
//             </div>
//           </div>

//           {/* Right panel (5 columns) */}
//           <div className="col-span-5 bg-white">
//             <div className="relative h-[520px] w-full overflow-hidden">
//               {/* You can replace this with <Image /> (next/image) */}
//               <img
//                 src={current.image}
//                 alt={current.label}
//                 className={[
//                   "absolute right-[-40px] top-[18px] w-[980px] max-w-none select-none",
//                   "object-contain",
//                   current.imgClass,
//                 ].join(" ")}
//                 draggable={false}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React, { useMemo, useState, useEffect } from "react";

export default function MarketsFullHeightColumns() {
  const markets = useMemo(
    () => [
      {
        key: "forex",
        label: "Forex",
        title: "Forex",
        desc: "Trade 70 major, minor & exotic currency pairs\nwith competitive trading conditions.",
        cta: "Trade Forex",
        image:
          "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1800&q=80",
        imgClass: "rotate-[-20deg] scale-[1.05] translate-x-[6%] translate-y-[2%]",
      },
      {
        key: "metals",
        label: "Metals",
        title: "Metals",
        desc: "Trade gold & silver with tight spreads\nand deep liquidity.",
        cta: "Trade Metals",
        image:
          "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1800&q=80",
        imgClass: "rotate-[-10deg] scale-[1.05] translate-x-[4%] translate-y-[2%]",
      },
      {
        key: "indices",
        label: "Indices",
        title: "Indices",
        desc: "Trade global indices with\nfast execution.",
        cta: "Trade Indices",
        image:
          "https://images.unsplash.com/photo-1640826519320-1a3f4b7aa90b?auto=format&fit=crop&w=1800&q=80",
        imgClass: "rotate-[-10deg] scale-[1.08] translate-x-[8%] translate-y-[4%]",
      },
      {
        key: "shares",
        label: "Shares",
        title: "Shares",
        desc: "Go long or short on popular stocks\nwith low costs.",
        cta: "Trade Shares",
        image:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1800&q=80",
        imgClass: "rotate-[-8deg] scale-[1.1] translate-x-[9%] translate-y-[4%]",
      },
      {
        key: "energy",
        label: "Energy",
        title: "Energy",
        desc: "Trade oil & gas CFDs with\nrobust liquidity.",
        cta: "Trade Energy",
        image:
          "https://images.unsplash.com/photo-1617953141905-b27fb1fd1d98?auto=format&fit=crop&w=1800&q=80",
        imgClass: "rotate-[-10deg] scale-[1.08] translate-x-[8%] translate-y-[4%]",
      },
    ],
    []
  );

  const [active, setActive] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const current = markets[active];

  // Handle smooth transitions when changing tabs
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="w-full bg-white">
      <div className="relative w-full overflow-hidden container mx-auto">
        <div className="relative grid grid-cols-5">
          {/* divider lines */}
          <div className="pointer-events-none absolute inset-0 z-[30]">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="absolute top-0 h-full w-px bg-[#D6D6D6]"
                style={{ left: `${((idx + 1) * 100) / 5}%` }}
              />
            ))}
          </div>

          {/* FULL HEIGHT COLUMNS */}
          {markets.map((m, i) => {
            const isActive = i === active;

            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setActive(i)}
                className={[
                  "relative z-[20] h-[560px] w-full border-b border-r border-[#D6D6D6]",
                  "text-[15px] font-medium transition-all duration-300 ease-in-out focus:outline-none",
                  "transform hover:scale-[1.02] active:scale-[0.98]",
                  isActive
                    ? "bg-[#F1F2F4] text-[#293B93] shadow-inner"
                    : "bg-transparent text-[#293B93] hover:bg-[#F1F2F4]/50 hover:text-[#293B93]",
                ].join(" ")}
              >
                {/* active top bar with animation */}
                <span
                  className={[
                    "absolute left-0 top-0 h-[4px] w-full transition-all duration-300 ease-in-out",
                    isActive ? "bg-gradient-to-r from-[#956E42] to-[#E9DDCF] shadow-[0_2px_8px_rgba(149,110,66,0.4)]" : "bg-transparent",
                  ].join(" ")}
                />
                <span className={[
                  "absolute left-0 top-[18px] w-full text-center transition-all duration-300",
                  isActive ? "font-semibold scale-105" : "font-medium",
                ].join(" ")}>
                  {m.label}
                </span>
                {/* Subtle hover indicator */}
                {!isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-[#956E42] to-[#E9DDCF] transition-all duration-300 group-hover:w-1/2" />
                )}
              </button>
            );
          })}

          {/* CONTENT + IMAGE overlay */}
          {/* IMPORTANT: keep pointer-events-none so Forex/Metals columns can be clicked */}
          <div className="pointer-events-none absolute inset-0 z-[25] grid grid-cols-5">
            {/* left content (spans first 2 columns) */}
            <div className="col-span-2">
              <div className="px-[54px] pt-[132px]">
                <h2 
                  key={`title-${active}`}
                  className={[
                    "text-[52px] font-extrabold tracking-[-0.02em] text-[#293B93] transition-all duration-500 ease-out",
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
                  ].join(" ")}
                >
                  {current.title}
                </h2>

                <p 
                  key={`desc-${active}`}
                  className={[
                    "mt-[18px] whitespace-pre-line text-[20px] font-semibold leading-[1.35] text-[#4D4D70] transition-all duration-500 ease-out delay-75",
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
                  ].join(" ")}
                >
                  {current.desc}
                </p>

                {/* CTA only clickable */}
                <button
                  type="button"
                  key={`cta-${active}`}
                  className={[
                    "pointer-events-auto mt-[42px] inline-flex h-[58px] w-[320px] items-center justify-center rounded-full bg-gradient-to-r from-[#956E42] to-[#E9DDCF] text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(149,110,66,0.25)]",
                    "transition-all duration-300 ease-out delay-150 transform",
                    "hover:shadow-[0_12px_24px_rgba(149,110,66,0.35)] hover:scale-105",
                    "active:scale-95",
                    isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
                  ].join(" ")}
                >
                  {current.cta}
                </button>
              </div>
            </div>

            {/* right image (spans last 3 columns) */}
            <div className="col-span-3 relative">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  key={`img-${active}`}
                  src={current.image}
                  alt={current.label}
                  className={[
                    "absolute right-[-60px] top-[70px] w-[1100px] max-w-none select-none object-contain transition-all duration-700 ease-in-out",
                    current.imgClass,
                    isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0",
                  ].join(" ")}
                  draggable={false}
                />
              </div>
            </div>
          </div>

          <style jsx>{`
            button:last-child {
              border-right: 0;
            }
            
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(30px) scale(0.95);
              }
              to {
                opacity: 1;
                transform: translateX(0) scale(1);
              }
            }
            
            @media (max-width: 768px) {
              .grid-cols-5 {
                grid-template-columns: repeat(5, minmax(0, 1fr));
                overflow-x: auto;
                display: flex;
              }
              
              button {
                min-width: 100px;
                flex-shrink: 0;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
