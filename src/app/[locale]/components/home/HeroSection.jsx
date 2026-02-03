// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import Link from "next/link";

// // const HeroSection = () => {
// //   return (
// //     <section className="bg-white py-12 md:py-16 lg:py-20">
// //       <div className="container">
// //         <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
// //           {/* Left Content */}
// //           <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
// //             {/* Main Heading */}
// //             <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#293794] leading-tight">
// //               Trade with Confidence.
// //             </h1>
// //             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#293794] leading-tight">
// //               Anywhere.
// //             </h2>

// //             {/* Description */}
// //             <p className="text-gray-600 text-base md:text-lg max-w-lg">
// //               Experience professional trading with access to global markets, advanced tools, and seamless execution on any device.
// //             </p>

// //             {/* CTA Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
// //               <Link
// //                 href="https://mygtcfx.com/getview?view=register&token=exhowww.z8owwwww"
// //                 target="_blank"
// //                 className="bg-white border-2 border-[#293794] text-[#293794] px-8 py-4 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-50 text-center"
// //               >
// //                 Open Live Account
// //               </Link>
// //               <Link
// //                 href="/free-demo-account"
// //                 className="bg-[#293794] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 hover:bg-[#1a2566] text-center"
// //               >
// //                 Try Demo Account
// //               </Link>
// //             </div>
// //           </div>

// //           {/* Right Side - Phone Mockup */}
// //           <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
// //             <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
// //               <Image
// //                 src="/app/new-2.png"
// //                 alt="GTC GO App Trading Interface"
// //                 fill
// //                 className="object-contain"
// //                 priority
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React from "react";

// export default function HeroTradeConfidence() {
//   return (
//     <section className="w-full bg-[#070A2A]">
//       {/* top rounded cut like screenshot */}
//       <div className="relative overflow-hidden rounded-b-[28px]">
//         {/* subtle right-side light gradient panel */}
//         <div className="pointer-events-none absolute right-0 top-0 h-full w-[56%] bg-gradient-to-br from-[#C7CAD6]/40 via-[#7B84B5]/20 to-transparent" />

//         <div className="relative mx-auto max-w-[1100px] px-6 pb-10 pt-6">
//           {/* Top bar */}
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center gap-3">
//               <div className="text-white/90">
//                 <span className="text-[18px] font-extrabold tracking-[0.4px]">
//                   FGTC
//                 </span>
//                 <div className="-mt-[2px] text-[9px] font-medium text-white/50">
//                   FOREX
//                 </div>
//               </div>
//             </div>

//             {/* Nav */}
//             <div className="hidden items-center gap-8 text-[11px] font-medium text-white/70 md:flex">
//               <a className="hover:text-white" href="#">
//                 Markets
//               </a>
//               <a className="hover:text-white" href="#">
//                 Platforms
//               </a>

//               {/* Active pill */}
//               <span className="rounded-[8px] bg-white/10 px-3 py-[6px] text-white">
//                 Account Types
//               </span>

//               <a className="hover:text-white" href="#">
//                 IB Program
//               </a>
//               <a className="hover:text-white" href="#">
//                 About Us
//               </a>
//             </div>
//           </div>

//           {/* Main grid */}
//           <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_520px]">
//             {/* Left content */}
//             <div>
//               <h1 className="text-[46px] font-extrabold leading-[1.03] tracking-[-0.8px] text-[#CBB59A]">
//                 Trade with
//                 <br />
//                 Confidence.
//                 <br />
//                 Anywhere.
//               </h1>

//               <p className="mt-6 max-w-[420px] text-[12px] leading-[1.7] text-white/65">
//                 Join 180,000+ traders worldwide. Access 2100+ instruments with
//                 tight spreads and award-winning platforms.
//               </p>

//               {/* Buttons */}
//               <div className="mt-6 flex items-center gap-3">
//                 <button className="h-[36px] rounded-[8px] bg-[#BFA788] px-5 text-[11px] font-semibold text-[#0B0F2E] shadow-[0_10px_22px_rgba(0,0,0,0.25)]">
//                   Start Trading Now
//                 </button>

//                 <button className="h-[36px] rounded-[8px] border border-white/35 bg-transparent px-5 text-[11px] font-semibold text-white/85 hover:bg-white/10">
//                   Try Demo Account
//                 </button>
//               </div>

//               {/* Small meta row */}
//               <div className="mt-7 flex flex-wrap items-center gap-6 text-[10px] text-white/55">
//                 <div className="flex items-center gap-2">
//                   <DotIcon />
//                   <span>Regulated Globally</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <DotIcon />
//                   <span>$1bn+ Monthly Volume</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <DotIcon />
//                   <span>24/7 support</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right phone image */}
//             <div className="relative flex justify-center md:justify-end">
//               <div className="relative">
//                 <img
//                   src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=60"
//                   alt="Phone"
//                   className="h-[470px] w-[420px] select-none object-contain"
//                   draggable={false}
//                 />
//                 {/* soft highlight */}
//                 <div className="pointer-events-none absolute -right-10 top-10 h-[280px] w-[280px] rounded-full bg-white/10 blur-[55px]" />
//               </div>
//             </div>
//           </div>

//           {/* Bottom ratings bar */}
//           <div className="mt-10">
//             <div className="mx-auto flex max-w-[980px] items-center justify-between rounded-[10px] bg-white/10 px-6 py-4 backdrop-blur-[2px]">
//               <RatingItem
//                 brand="TradingView"
//                 score="4.7"
//                 stars={4}
//                 accent="blue"
//               />
//               <Divider />
//               <RatingItem
//                 brand="Rating and Reviews"
//                 score="4.7"
//                 stars={4}
//                 accent="gold"
//               />
//               <Divider />
//               <RatingItem
//                 brand="Rating and Reviews"
//                 score="4.6"
//                 stars={4}
//                 accent="gold"
//               />
//               <Divider />
//               <RatingItem
//                 brand="Trustpilot"
//                 score="4.6"
//                 stars={4}
//                 accent="green"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* bottom white curve hint (like screenshot peeking next section) */}
//       <div className="h-[34px] w-full rounded-t-[28px] bg-white" />
//     </section>
//   );
// }

// /* ----------------- Small pieces ----------------- */

// function Divider() {
//   return <div className="h-[28px] w-px bg-white/15" />;
// }

// function RatingItem({ brand, score, stars = 4, accent = "gold" }) {
//   const starColor =
//     accent === "blue"
//       ? "text-[#3B82F6]"
//       : accent === "green"
//       ? "text-[#22C55E]"
//       : "text-[#F4B53F]";

//   return (
//     <div className="flex min-w-[190px] items-center gap-4">
//       {/* icon placeholder */}
//       <div className="flex h-[24px] w-[24px] items-center justify-center rounded-[6px] bg-white/10 text-[10px] font-bold text-white/80">
//         {brand.slice(0, 1)}
//       </div>

//       <div>
//         <div className="text-[10px] font-semibold text-white/85">{brand}</div>

//         <div className="mt-[3px] flex items-center gap-2">
//           <div className="text-[10px] font-semibold text-white/80">{score}</div>
//           <div className={`flex items-center gap-[2px] ${starColor}`}>
//             {Array.from({ length: 5 }).map((_, i) => (
//               <Star key={i} filled={i < stars} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Star({ filled }) {
//   return (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 24 24"
//       className={filled ? "opacity-100" : "opacity-30"}
//       fill="currentColor"
//     >
//       <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//     </svg>
//   );
// }

// function DotIcon() {
//   return (
//     <span className="inline-flex h-[16px] w-[16px] items-center justify-center rounded-full bg-white/10">
//       <span className="h-[6px] w-[6px] rounded-full bg-white/45" />
//     </span>
//   );
// }

import React from "react";

export default function TradeWithConfidenceHero() {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .hero-bg-desktop {
            background-image: url('/new/home-new.webp');
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
