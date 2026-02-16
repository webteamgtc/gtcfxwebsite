// "use client";

// const kpis = [
//   {
//     title: "Tight Spreads",
//     sub: "From 0.0",
//     pills: ["Competitive Pricing", "Transparent"],
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
//       <path d="M48.5205 16.1274L38.2221 26.4237H44.0902C44.5242 26.4237 44.9404 26.5961 45.2473 26.9029C45.5541 27.2098 45.7265 27.626 45.7265 28.06C45.7265 28.4939 45.5541 28.9101 45.2473 29.217C44.9404 29.5238 44.5242 29.6962 44.0902 29.6962H34.2726C33.8386 29.6962 33.4224 29.5238 33.1155 29.217C32.8087 28.9101 32.6363 28.4939 32.6363 28.06V18.2423C32.6363 17.8083 32.8087 17.3921 33.1155 17.0852C33.4224 16.7784 33.8386 16.606 34.2726 16.606C34.7065 16.606 35.1227 16.7784 35.4296 17.0852C35.7364 17.3921 35.9088 17.8083 35.9088 18.2423V24.1104L46.2051 13.812C46.5122 13.505 46.9286 13.3325 47.3628 13.3325C47.797 13.3325 48.2134 13.505 48.5205 13.812C48.8275 14.1191 49 14.5355 49 14.9697C49 15.4039 48.8275 15.8203 48.5205 16.1274ZM27.7274 32.9688H17.9098C17.4758 32.9688 17.0596 33.1412 16.7527 33.4481C16.4459 33.7549 16.2735 34.1711 16.2735 34.6051C16.2735 35.039 16.4459 35.4552 16.7527 35.7621C17.0596 36.069 17.4758 36.2414 17.9098 36.2414H23.7779L13.4795 46.5377C13.1725 46.8447 13 47.2611 13 47.6953C13 48.1295 13.1725 48.546 13.4795 48.853C13.7866 49.16 14.203 49.3325 14.6372 49.3325C15.0714 49.3325 15.4878 49.16 15.7949 48.853L26.0912 38.5547V44.4228C26.0912 44.8567 26.2635 45.2729 26.5704 45.5798C26.8773 45.8867 27.2935 46.059 27.7274 46.059C28.1614 46.059 28.5776 45.8867 28.8845 45.5798C29.1913 45.2729 29.3637 44.8567 29.3637 44.4228V34.6051C29.3637 34.1711 29.1913 33.7549 28.8845 33.4481C28.5776 33.1412 28.1614 32.9688 27.7274 32.9688Z" fill="url(#paint0_linear_7230_229)"/>
//       <circle cx="31" cy="31" r="29.5" stroke="url(#paint1_linear_7230_229)" stroke-width="3"/>
//       <defs>
//         <linearGradient id="paint0_linear_7230_229" x1="31" y1="-7.79792" x2="31" y2="49.3325" gradientUnits="userSpaceOnUse">
//           <stop stop-color="#956E42"/>
//           <stop offset="1" stop-color="#E9DDCF"/>
//         </linearGradient>
//         <linearGradient id="paint1_linear_7230_229" x1="31" y1="-36.3913" x2="31" y2="62" gradientUnits="userSpaceOnUse">
//           <stop stop-color="#956E42"/>
//           <stop offset="1" stop-color="#E9DDCF"/>
//         </linearGradient>
//       </defs>
//     </svg>
//     )
//   },
//   {
//     title: "Fast Execution",
//     sub: "Low Latency",
//     pills: ["Minimal Slippage", "Stable"],
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
//         <g clip-path="url(#clip0_7105_355)">
//           <path d="M37.7225 30.9333L43.7531 17H23.344L17 39.8H26.4784L23.3824 55H27.9917L49 30.9333H37.7225ZM26.8606 52.4667H26.4573L29.5532 37.2667H20.3084L25.2426 19.5333H39.9211L33.8904 33.4667H43.4462L26.8606 52.4667Z" fill="url(#paint0_linear_7105_355)" />
//           <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_7105_355)" stroke-width="3" />
//         </g>
//         <defs>
//           <linearGradient id="paint0_linear_7105_355" x1="33" y1="-5.30435" x2="33" y2="55" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//           <linearGradient id="paint1_linear_7105_355" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//           <clipPath id="clip0_7105_355">
//             <rect width="68" height="68" fill="white" />
//           </clipPath>
//         </defs>
//       </svg>
//     )
//   },
//   {
//     title: "Powerful Platforms",
//     sub: "MT6 / MTS",
//     pills: ["Tools", "Reilable"],
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
//         <path d="M20.2 52V48.4444L22 46.6667H16.6C15.61 46.6667 14.7628 46.3188 14.0584 45.6231C13.354 44.9274 13.0012 44.0901 13 43.1111V23.5556C13 22.5778 13.3528 21.741 14.0584 21.0453C14.764 20.3496 15.6112 20.0012 16.6 20H45.4C46.39 20 47.2378 20.3484 47.9434 21.0453C48.649 21.7422 49.0012 22.579 49 23.5556V43.1111C49 44.0889 48.6478 44.9262 47.9434 45.6231C47.239 46.32 46.3912 46.6679 45.4 46.6667H40L41.8 48.4444V52H20.2ZM16.6 43.1111H45.4V23.5556H16.6V43.1111Z" fill="url(#paint0_linear_7105_367)" />
//         <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_7105_367)" stroke-width="3" />
//         <defs>
//           <linearGradient id="paint0_linear_7105_367" x1="31" y1="1.21739" x2="31" y2="52" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//           <linearGradient id="paint1_linear_7105_367" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//         </defs>
//       </svg>
//     )
//   },
//   {
//     title: "Regulated& Trusted",
//     sub: "AML/ KYC",
//     pills: ["Compliant", "Compliant"],
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
//         <g clip-path="url(#clip0_7105_380)">
//           <path d="M37.5862 31.4509C37.714 31.3214 37.8164 31.1651 37.8875 30.9915C37.9585 30.8179 37.9967 30.6304 37.9998 30.4404C38.0029 30.2503 37.9708 30.0616 37.9054 29.8853C37.84 29.7091 37.7427 29.549 37.6192 29.4146C37.4958 29.2802 37.3487 29.1742 37.1869 29.103C37.025 29.0318 36.8516 28.9969 36.6771 29.0002C36.5025 29.0036 36.3304 29.0452 36.1709 29.1225C36.0114 29.1999 35.8679 29.3114 35.7489 29.4505L29.7342 35.9991L27.1862 33.2249C26.9398 32.9749 26.6139 32.8388 26.2771 32.8453C25.9403 32.8517 25.6189 33.0003 25.3808 33.2596C25.1426 33.5189 25.0061 33.8688 25.0002 34.2355C24.9943 34.6022 25.1193 34.957 25.3489 35.2254L29.7342 40L37.5862 31.4509Z" fill="url(#paint0_linear_7105_380)" />
//           <path d="M32.9195 16.3126C31.671 15.8952 30.3182 15.8958 29.0701 16.3145L16.5602 20.5045C15.6405 20.8074 14.8306 21.3698 14.2302 22.1225C13.6298 22.8751 13.2654 23.7851 13.1817 24.7401C12.53 32.7916 13.6248 39.1195 16.575 44.08C19.5345 49.055 24.2534 52.4746 30.4862 54.9046C30.8124 55.0318 31.1753 55.0318 31.5016 54.9046C37.7399 52.4746 42.4607 49.055 45.422 44.08C48.3759 39.1195 49.4689 32.7897 48.819 24.742C48.7352 23.7867 48.3704 22.8766 47.7697 22.1239C47.169 21.3712 46.3587 20.8089 45.4386 20.5063L32.9195 16.3126ZM29.9582 18.9088C30.6299 18.684 31.3578 18.684 32.0296 18.9088L44.5506 23.0988C45.4035 23.3836 45.9906 24.123 46.0589 24.9592C46.6811 32.6747 45.6011 38.3801 43.0349 42.6906C40.5536 46.8623 36.5805 49.8949 30.9939 52.1551C25.4128 49.8949 21.4435 46.8623 18.9622 42.6906C16.3959 38.3819 15.3177 32.6747 15.9399 24.9592C15.9802 24.5371 16.1444 24.1359 16.4125 23.805C16.6805 23.4741 17.0405 23.228 17.4483 23.097L29.9582 18.9088Z" fill="url(#paint1_linear_7105_380)" />
//           <circle cx="31" cy="34" r="29.5" stroke="url(#paint2_linear_7105_380)" stroke-width="3" />
//         </g>
//         <defs>
//           <linearGradient id="paint0_linear_7105_380" x1="31.5" y1="22.5435" x2="31.5" y2="40" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//           <linearGradient id="paint1_linear_7105_380" x1="31" y1="-6.8913" x2="31" y2="55" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//           <linearGradient id="paint2_linear_7105_380" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#956E42" />
//             <stop offset="1" stop-color="#E9DDCF" />
//           </linearGradient>
//           <clipPath id="clip0_7105_380">
//             <rect width="68" height="68" fill="white" />
//           </clipPath>
//         </defs>
//       </svg>
//     )
//   },
// ];

// export default function KpiCardsRow() {
//   return (
//     <section className="w-full bg-white">

//       <div className="mx-auto w-full container">
//         <div className="-mt-[100px] relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-between gap-6">
//           {kpis.map((item, idx) => (
//             <div
//               key={idx}
//               className="w-full flex-1 rounded-[18px] bg-white h-full "
//               style={{
//                 border: "1px solid rgba(0, 0, 0, 0.10)",
//                 background: "#FFF",
//                 boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
//               }}
//             >
//               <div className="flex h-full flex-col items-center p-6">
//                 {item.icon}

//                 {/* title */}
//                 <h3 className="mt-4 text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#4D4D70]">
//                   {item.title}
//                 </h3>

//                 {/* sub line */}
//                 <div className="mt-2 flex items-center gap-3 text-[16px]  font-normal text-[#4D4D70]">
//                   <span className="text-[18px] leading-none text-[#64688E]">•</span>
//                   <span>{item.sub}</span>
//                 </div>

//                 {/* pills */}
//                 <div className="mt-5 flex w-full flex-col gap-3">
//                   {item.pills.map((pill, idx) => (
//                     <Pill key={idx} label={pill} />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }


// function Pill({ label }) {
//   return (
//     <div className="flex items-center gap-2 rounded-full bg-[#EBEDF9] px-4 py-[10px] text-[14px] font-medium leading-none text-[#4D4D70] ">
//       <span className="inline-flex h-[18px] w-[18px] items-center justify-center">
//         <svg
//           viewBox="0 0 24 24"
//           className="h-[18px] w-[18px] text-[#4D4D70]"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2.6"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           aria-hidden="true"
//         >
//           <path d="M20 6L9 17l-5-5" />
//         </svg>
//       </span>
//       <span className="truncate">{label}</span>
//     </div>
//   );
// }


"use client";

import React from "react";

const KPI_BAR = [
  {
    value: "6 Global Offices",
    label: "Across key markets",
    icon: <IconGlobe />,
  },
  {
    value: "4 Regulatory Authorities",
    label: "Regulatory oversight",
    icon: <IconShield />,
  },
  {
    value: "280,000+",
    label: "Clients Worldwide",
    icon: <IconUsers />,
  },
  {
    value: "10 Years in the Market",
    label: "Established since 2012",
    icon: <IconBadge />,
  },
];

export default function KpiBar() {
  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto w-full container">
        {/* The bar in the screenshot sits over a dark bg, so keep it centered and floating */}
        <div className="-mt-[50px] relative bg-white px-6 py-4"
        style={{
          borderRadius: "18px",
          background: "#FFF",
          boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
        }}
        >
          <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
            {KPI_BAR.map((kpi, i) => (
              <div
                key={kpi.value}
                className={[
                  "flex flex-col items-center text-center",
                  // vertical dividers (only on md+ like the image)
                  i !== 0 ? "md:border-l md:border-[#EEF0F6]" : "",
                  "px-2 md:px-6",
                ].join(" ")}
              >
                <div className="mb-2 text-[#B89B78]">{kpi.icon}</div>

                <h3 className=" HeadingH4 my-2 !font-bold !leading-[1.1] !tracking-[-0.02em] !text-[#243AA0]">
                  {kpi.value}
                </h3>
                <div className=" text-[15px] font-normal leading-[1.1] text-[#4D4D70]">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Icons (gold outline like screenshot) */
function IconGlobe() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
    <path d="M21.5 41.5C32.546 41.5 41.5 32.546 41.5 21.5C41.5 10.454 32.546 1.5 21.5 1.5C10.454 1.5 1.5 10.454 1.5 21.5C1.5 32.546 10.454 41.5 21.5 41.5Z" stroke="url(#paint0_linear_7105_511)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.5 22.5L13.5 26.5L11.5 33.5L13.5 39.5M31.5 38.5L30.5 33.5L25.5 31.5V24.5L31.5 22.5L40.5 23.5M35.5 8.5L34.5 11.5L27.5 12.5V18.5L32.5 16.5H36.5L40.5 18.5M2.5 18.5L7.5 14.5L12.5 13.5L16.5 7.5L14.5 3.5" stroke="url(#paint1_linear_7105_511)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_7105_511" x1="21.5" y1="-21.9783" x2="21.5" y2="41.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#956E42"/>
        <stop offset="1" stop-color="#E9DDCF"/>
      </linearGradient>
      <linearGradient id="paint1_linear_7105_511" x1="21.5" y1="-17.6304" x2="21.5" y2="39.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#956E42"/>
        <stop offset="1" stop-color="#E9DDCF"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

function IconShield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40" fill="none">
    <path d="M16 40C11.3667 38.8333 7.54133 36.1747 4.524 32.024C1.50667 27.8733 -0.00133245 23.2653 8.83392e-07 18.2V6L16 0L32 6V18.2C32 23.2667 30.492 27.8753 27.476 32.026C24.46 36.1767 20.6347 38.8347 16 40ZM16 35.8C19.4667 34.7 22.3333 32.5 24.6 29.2C26.8667 25.9 28 22.2333 28 18.2V8.75L16 4.25L4 8.75V18.2C4 22.2333 5.13333 25.9 7.4 29.2C9.66667 32.5 12.5333 34.7 16 35.8Z" fill="url(#paint0_linear_7230_236)"/>
    <defs>
      <linearGradient id="paint0_linear_7230_236" x1="16" y1="-23.4783" x2="16" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#956E42"/>
        <stop offset="1" stop-color="#E9DDCF"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="33" viewBox="0 0 43 33" fill="none">
    <path d="M21.5 21.5C19.6435 21.5 17.863 20.7625 16.5503 19.4497C15.2375 18.137 14.5 16.3565 14.5 14.5C14.5 13.5807 14.6811 12.6705 15.0328 11.8212C15.3846 10.9719 15.9002 10.2003 16.5503 9.55025C17.2003 8.90024 17.9719 8.38463 18.8212 8.03284C19.6705 7.68106 20.5807 7.5 21.5 7.5C22.4193 7.5 23.3295 7.68106 24.1788 8.03284C25.0281 8.38463 25.7997 8.90024 26.4497 9.55025C27.0998 10.2003 27.6154 10.9719 27.9672 11.8212C28.3189 12.6705 28.5 13.5807 28.5 14.5C28.5 16.3565 27.7625 18.137 26.4497 19.4497C25.137 20.7625 23.3565 21.5 21.5 21.5ZM21.5 21.5C27.576 21.5 32.5 25.978 32.5 31.5M21.5 21.5C15.424 21.5 10.5 25.978 10.5 31.5M28.466 15.2C29.1113 15.3987 29.7893 15.4987 30.5 15.5M30.5 15.5C31.8546 15.4998 33.18 15.1066 34.3155 14.368C35.451 13.6294 36.3479 12.5773 36.8973 11.3391C37.4467 10.101 37.6251 8.73 37.4107 7.39249C37.1964 6.05497 36.5986 4.80837 35.6899 3.80385C34.7811 2.79934 33.6004 2.08008 32.291 1.73329C30.9816 1.3865 29.5996 1.42708 28.3128 1.85011C27.026 2.27315 25.8895 3.06046 25.0413 4.11657C24.1931 5.17268 23.6695 6.45221 23.534 7.8M30.5 15.5C36.576 15.5 41.5 19.978 41.5 25.5M19.466 7.8C19.3214 6.36484 18.737 5.00939 17.7927 3.91903C16.8484 2.82867 15.5904 2.05665 14.1906 1.70855C12.7908 1.36045 11.3176 1.45327 9.97262 1.97432C8.6276 2.49537 7.47638 3.41921 6.67642 4.61947C5.87646 5.81974 5.46681 7.23782 5.50352 8.67978C5.54023 10.1217 6.02149 11.5171 6.88148 12.6751C7.74147 13.8332 8.9382 14.6972 10.308 15.1492C11.6778 15.6011 13.1537 15.6189 14.534 15.2M12.5 15.5C6.424 15.5 1.5 19.978 1.5 25.5" stroke="url(#paint0_linear_7230_237)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_7230_237" x1="21.5" y1="-16.1087" x2="21.5" y2="31.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="#956E42"/>
        <stop offset="1" stop-color="#E9DDCF"/>
      </linearGradient>
    </defs>
  </svg>
  );
}

function IconBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="39" height="40" viewBox="0 0 39 40" fill="none">
    <path d="M19.196 26C16.0134 26 12.9612 24.7357 10.7107 22.4853C8.46028 20.2348 7.196 17.1826 7.196 14C7.196 10.8174 8.46028 7.76516 10.7107 5.51472C12.9612 3.26428 16.0134 2 19.196 2C22.3786 2 25.4308 3.26428 27.6813 5.51472C29.9317 7.76516 31.196 10.8174 31.196 14C31.196 17.1826 29.9317 20.2348 27.6813 22.4853C25.4308 24.7357 22.3786 26 19.196 26ZM19.196 26L25.996 37.78L29.192 31.314L36.388 31.778L29.588 20M8.8 20L2 31.78L9.196 31.314L12.392 37.778L19.192 26" stroke="url(#paint0_linear_7230_238)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_7230_238" x1="19.194" y1="-19.0013" x2="19.194" y2="37.78" gradientUnits="userSpaceOnUse">
        <stop stop-color="#956E42"/>
        <stop offset="1" stop-color="#E9DDCF"/>
      </linearGradient>
    </defs>
  </svg>
  );
}
