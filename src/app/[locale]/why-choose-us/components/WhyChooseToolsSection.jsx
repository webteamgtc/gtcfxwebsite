import React from "react";

const cards = [
  {
    title: "No Compromises, Only Excellence:",
    desc: "We never compromise on factors that impact client performance. That is why we offer tight spreads and ensure the best execution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path d="M37.7225 30.9333L43.7531 17H23.344L17 39.8H26.4784L23.3824 55H27.9917L49 30.9333H37.7225ZM26.8606 52.4667H26.4573L29.5532 37.2667H20.3084L25.2426 19.5333H39.9211L33.8904 33.4667H43.4462L26.8606 52.4667Z" fill="url(#paint0_linear_4_268)" />
        <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_4_268)" stroke-width="3" />
        <defs>
          <linearGradient id="paint0_linear_4_268" x1="33" y1="-5.30435" x2="33" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_4_268" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "ADVANCED TRADING PLATFORMS:",
    desc: "GTC offers cutting-edge forex trading platforms tailored to meet the requirements of a diverse global clientele.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path d="M37.7225 30.9333L43.7531 17H23.344L17 39.8H26.4784L23.3824 55H27.9917L49 30.9333H37.7225ZM26.8606 52.4667H26.4573L29.5532 37.2667H20.3084L25.2426 19.5333H39.9211L33.8904 33.4667H43.4462L26.8606 52.4667Z" fill="url(#paint0_linear_4_268)" />
        <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_4_268)" stroke-width="3" />
        <defs>
          <linearGradient id="paint0_linear_4_268" x1="33" y1="-5.30435" x2="33" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_4_268" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "EXPERTISE BACKED BY EXPERIENCE:",
    desc: "Our extensive experience and in-depth knowledge of global financial markets are the cornerstones of our expertise.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path d="M37.7225 30.9333L43.7531 17H23.344L17 39.8H26.4784L23.3824 55H27.9917L49 30.9333H37.7225ZM26.8606 52.4667H26.4573L29.5532 37.2667H20.3084L25.2426 19.5333H39.9211L33.8904 33.4667H43.4462L26.8606 52.4667Z" fill="url(#paint0_linear_4_268)" />
        <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_4_268)" stroke-width="3" />
        <defs>
          <linearGradient id="paint0_linear_4_268" x1="33" y1="-5.30435" x2="33" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_4_268" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    title: "SUPERIOR SERVICES:",
    desc: "We are committed to delivering top-tier services in currency trading, as well as CFDs, equity indices, precious metals, and energies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path d="M37.7225 30.9333L43.7531 17H23.344L17 39.8H26.4784L23.3824 55H27.9917L49 30.9333H37.7225ZM26.8606 52.4667H26.4573L29.5532 37.2667H20.3084L25.2426 19.5333H39.9211L33.8904 33.4667H43.4462L26.8606 52.4667Z" fill="url(#paint0_linear_4_268)" />
        <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_4_268)" stroke-width="3" />
        <defs>
          <linearGradient id="paint0_linear_4_268" x1="33" y1="-5.30435" x2="33" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_4_268" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function FeatureCardsGrid() {
  return (
    <section className="w-full bg-white pb-0 md:pb-12">
      <div className="max-w-7xl mx-auto md:px-6 px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-white px-8 py-8"
              style={{
                borderRadius: "18px",
                border: "1.55px solid rgba(0, 0, 0, 0.10)",
                background: "#FFF",
                boxShadow: "1.55px 1.55px 24.807px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              {/* Icon */}
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full">
                  {c.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-center HeadingH4 font-bold !text-[#4D4D70]">
                {c.title}
              </h3>

              {/* Desc */}
              <p className="mx-auto mt-4  text-center text-[16px] lg:text-[18px] md:text-[16px]  font-normal leading-[1.3] text-[#4D4D70]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
