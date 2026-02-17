// "use client";

// import React from "react";

// const KPI_CARDS = [
//   {
//     value: "985,000",
//     unit: "Total",
//     description: "Served clients worldwide",
//   },
//   {
//     value: "27,000",
//     unit: "Instruments",
//     description: "Trading instruments available",
//   },
//   {
//     value: "20",
//     unit: "Countries",
//     description: "Countries worldwide",
//   },
//   {
//     value: "$450B",
//     unit: "Monthly",
//     description: "Monthly trades",
//   },
// ];

// export default function AboutKPISection() {
//   return (
//     <section className="w-full bg-gray-100 py-14 md:py-20">
//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {KPI_CARDS.map((card, index) => (
//             <div
//               key={index}
//               className="relative rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
//               style={{
//                 boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
//               }}
//             >
//               <span className="text-xs font-medium text-gray-400">KPI</span>
//               <div className="mt-2 flex flex-wrap items-baseline gap-2">
//                 <span className="text-2xl font-bold text-[#293B93] md:text-3xl">{card.value}</span>
//                 <span className="text-base font-medium text-[#293B93]">{card.unit}</span>
//               </div>
//               <p className="mt-1 text-sm text-gray-500">{card.description}</p>
//               <button
//                 type="button"
//                 className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
//                 aria-label="Expand"
//               >
//                 <span className="text-lg leading-none">+</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

const kpis = [
  {
    label: "KPI",
    value: "985,000",
    suffix: "Total",
    title: "Served clients",
    sub: "worldwide",
  },
  {
    label: "KPI",
    value: "27,000",
    suffix: "Instruments",
    title: "Trading instruments",
    sub: "available",
  },
  {
    label: "KPI",
    value: "20",
    suffix: "Countries",
    title: "Destinations",
    sub: "worldwide",
  },
  {
    label: "KPI",
    value: "$450B",
    suffix: "Monthly",
    title: "Monthly",
    sub: "trades",
  },
];

export default function KpiCardsRow() {
  return (
    <section className="w-full bg-white">

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="-mt-[50px] relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-between lg:gap-6 gap-4">
          {kpis.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex-1 rounded-[18px] h-full bg-white px-[18px] py-[14px]"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.10)",
                background: "#FFF",
                boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex items-start justify-between">
                <div className="text-[18px] font-semibold tracking-[0.02em] text-[#4D4D70]">
                  {item.label}
                </div>

                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#4A4E63] text-white shadow-sm">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-[10px] flex lg:items-end items-start flex-col md:flex-row md:flex-wrap sm:gap-2 gap-1">
                <div className="md:text-[28px]  text-[24px] font-extrabold leading-none"
                  style={{
                    background: "linear-gradient(180deg, #956E42 -58.7%, #E9DDCF 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.value}
                </div>
                <div className="pb-[2px] text-[16px] font-semibold text-[#4D4D70]">
                  {item.suffix}
                </div>
              </div>

              <div className="mt-[8px] text-[12px] leading-[1.25] text-[#4D4D70]">
                {item.title}
                <br />
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
