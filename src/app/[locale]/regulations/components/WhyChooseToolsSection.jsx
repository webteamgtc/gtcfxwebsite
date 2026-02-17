// import React from "react";

// export default function TopToolsForSuccess() {
//   const items = [
//     { label: "VPS", icon: <IconVPS /> },
//     { label: "PAMM & MAM", icon: <IconUsers /> },
//     { label: "Signal Centre", icon: <IconBars /> },
//     { label: "Expert Analysis", icon: <IconTrend /> },
//   ];

//   return (
//     <section className="w-full bg-white py-16">
//       <div className="mx-auto container">
//         {/* title with line */}
//         <div className="relative flex items-center justify-center">
//           <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[#EEF0F6]" />
//           <h2 className="relative bg-white px-6 text-[44px] font-extrabold leading-none tracking-[-0.02em] text-[#4C4F73]">
//             Top Tools for Success
//           </h2>
//         </div>

//         {/* outer box */}
//         <div className="mt-9 rounded-[14px] bg-white px-6 py-5 "
//         style={{
//           borderRadius: "14px",
//           background: "#FFF",
//           boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
//         }}
//         >
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {items.map((it) => (
//               <div
//                 key={it.label}
//                 className="flex  items-center gap-4 rounded-[8px] bg-[#EBEDF9] px-6 py-4"
//               >
//                 <div className="text-[#1C2E86]">{it.icon}</div>
//                 <div className="text-[16px] font-medium text-[#4D4D70]">
//                   {it.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* Icons (inline SVG) */
// function IconVPS() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" viewBox="0 0 40 36" fill="none">
//     <path d="M2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2H32C33.5913 2 35.1174 2.63214 36.2426 3.75736C37.3679 4.88258 38 6.4087 38 8V12C38 13.5913 37.3679 15.1174 36.2426 16.2426C35.1174 17.3679 33.5913 18 32 18M32 18H8M32 18C33.5913 18 35.1174 18.6321 36.2426 19.7574C37.3679 20.8826 38 22.4087 38 24V28C38 29.5913 37.3679 31.1174 36.2426 32.2426C35.1174 33.3679 33.5913 34 32 34H8C6.4087 34 4.88258 33.3679 3.75736 32.2426C2.63214 31.1174 2 29.5913 2 28V24C2 22.4087 2.63214 20.8826 3.75736 19.7574C4.88258 18.6321 6.4087 18 8 18M8 18C6.4087 18 4.88258 17.3679 3.75736 16.2426C2.63214 15.1174 2 13.5913 2 12M10 10V10.02M10 26V26.02" stroke="#243AA0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>
//   );
// }

// function IconUsers() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40" fill="none">
//     <path d="M34 38C34 33.7565 32.3143 29.6869 29.3137 26.6863C26.3131 23.6857 22.2435 22 18 22C13.7565 22 9.68687 23.6857 6.68629 26.6863C3.68571 29.6869 2 33.7565 2 38" stroke="#243AA0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M18 22C23.5228 22 28 17.5228 28 12C28 6.47715 23.5228 2 18 2C12.4772 2 8 6.47715 8 12C8 17.5228 12.4772 22 18 22Z" stroke="#243AA0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
//     <path d="M42.0001 35.9999C42.0001 29.2599 38.0001 22.9999 34.0001 19.9999C35.3149 19.0134 36.3663 17.7181 37.0612 16.2284C37.7561 14.7388 38.0731 13.1008 37.9841 11.4595C37.8951 9.81817 37.4029 8.22407 36.551 6.8183C35.6992 5.41253 34.5139 4.23843 33.1001 3.3999" stroke="#243AA0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>
//   );
// }

// function IconBars() {
//   return (
// <svg xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M34 0C34.5304 0 35.0391 0.210714 35.4142 0.585787C35.7893 0.96086 36 1.46957 36 2V30C36 30.5304 35.7893 31.0391 35.4142 31.4142C35.0391 31.7893 34.5304 32 34 32C33.4696 32 32.9609 31.7893 32.5858 31.4142C32.2107 31.0391 32 30.5304 32 30V2C32 1.46957 32.2107 0.96086 32.5858 0.585787C32.9609 0.210714 33.4696 0 34 0ZM26 6C26.5304 6 27.0391 6.21071 27.4142 6.58579C27.7893 6.96086 28 7.46957 28 8V30C28 30.5304 27.7893 31.0391 27.4142 31.4142C27.0391 31.7893 26.5304 32 26 32C25.4696 32 24.9609 31.7893 24.5858 31.4142C24.2107 31.0391 24 30.5304 24 30V8C24 7.46957 24.2107 6.96086 24.5858 6.58579C24.9609 6.21071 25.4696 6 26 6ZM18 12C18.5304 12 19.0391 12.2107 19.4142 12.5858C19.7893 12.9609 20 13.4696 20 14V30C20 30.5304 19.7893 31.0391 19.4142 31.4142C19.0391 31.7893 18.5304 32 18 32C17.4696 32 16.9609 31.7893 16.5858 31.4142C16.2107 31.0391 16 30.5304 16 30V14C16 13.4696 16.2107 12.9609 16.5858 12.5858C16.9609 12.2107 17.4696 12 18 12ZM10 18C10.5304 18 11.0391 18.2107 11.4142 18.5858C11.7893 18.9609 12 19.4696 12 20V30C12 30.5304 11.7893 31.0391 11.4142 31.4142C11.0391 31.7893 10.5304 32 10 32C9.46957 32 8.96086 31.7893 8.58579 31.4142C8.21071 31.0391 8 30.5304 8 30V20C8 19.4696 8.21071 18.9609 8.58579 18.5858C8.96086 18.2107 9.46957 18 10 18ZM2 24C2.53043 24 3.03914 24.2107 3.41421 24.5858C3.78929 24.9609 4 25.4696 4 26V30C4 30.5304 3.78929 31.0391 3.41421 31.4142C3.03914 31.7893 2.53043 32 2 32C1.46957 32 0.960859 31.7893 0.585786 31.4142C0.210714 31.0391 0 30.5304 0 30V26C0 25.4696 0.210714 24.9609 0.585786 24.5858C0.960859 24.2107 1.46957 24 2 24Z" fill="#243AA0"/>
// </svg>
//   );
// }

// function IconTrend() {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="none">
//     <path d="M2.00024 28H34.0002M2.00024 20L10.0002 8L18.0002 12L26.0002 2L34.0002 10" stroke="#243AA0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>
//   );
// }


"use client";

import React from "react";

// ISO 3166-1 alpha-2 country codes for flag CDN
const ITEMS = [
  {
    countryCode: "ae",
    country: "United Arab Emirates",
    text: `GTC MULTI TRADING DMCC is regulated by the Securities and
Commodities Authority of the UAE, under license Number
2020000007. The company is licensed to do Broker Direct
Clearing Member services under DGCX Derivative Futures.
Website: www.gtcmtad.com`,
    colSpan: 1,
  },
  {
    countryCode: "ae",
    country: "United Arab Emirates",
    text: `GTC FINANCIAL CONSULTANCY is regulated by the Securities
and Commodities Authority of the UAE.
Website: www.gtcfx.com`,
    colSpan: 1,
  },
  {
    countryCode: "gb",
    country: "United Kingdom",
    text: `Global Markets Group Limited, a company registered in England & Wales
under company number 09493910, is authorised and regulated by the
Financial Conduct Authority with reference number 744501. GTC GROUP
LLC-FZ is a minority shareholder in Global Markets Group Limited.
Registered Office: Green Park House, 15 Stratton Street, London W1J 8LQ, UK
Website: www.gmgmarkets.co.uk`,
    colSpan: 1,
  },
  {
    countryCode: "au",
    country: "Australia",
    text: `GTC Global (Australia) Pty Ltd holds an Australian Financial
Services Licence number 496371. GTC Global (Australia)
focuses on providing education services to Australian
clients.`,
    colSpan: 1,
  },
  {
    countryCode: "mu",
    country: "Mauritius",
    text: `GTC Global (Australia) Pty Ltd holds an Australian Financial
Services Licence number 496371. GTC Global (Australia)
focuses on providing education services to Australian
clients.`,
    colSpan: 1,
  },
  {
    countryCode: "za",
    country: "South Africa",
    text: `GTC Global (Australia) Pty Ltd holds an Australian Financial
Services Licence number 496371. GTC Global (Australia)
focuses on providing education services to Australian
clients.`,
    colSpan: 1,
  },
  {
    countryCode: "vu",
    country: "Vanuatu",
    text: `GTC Global Trade Capital Co. Limited, is a global finance brokerage company registered, supervised, and authorized by the Vanuatu Financial
Services Commission of the Republic of Vanuatu Company license number: 40354. Registered address: 1/Floor, B&P House, Kumul Highway, Port
Vila, Vanuatu.`,
    colSpan: 2, // last row spans both columns like the screenshot
  },
];

function renderTextWithWebsite(text) {
  // Turns "Website: xxx" into an underlined "link-looking" span (no href needed)
  const parts = text.split(/Website:\s*/g);
  if (parts.length === 1) return text;

  const before = parts[0].trimEnd();
  const website = parts[1].trim();

  return (
    <>
      {before}
      {"\n"}
      <span className="text-[#6A7190]">
        Website:{" "}
        <span className="underline underline-offset-2 text-[#6A7190]">
          {website}
        </span>
      </span>
    </>
  );
}

export default function RegulationGrid() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl md:px-6 px-4 mx-auto md:py-16 py-10">
        {/* wrapper with the same subtle grid lines */}
        <div className="rounded-[6px] bg-white">
          <div className="grid grid-cols-1 md:gap-8 gap-3 md:grid-cols-2">
            {ITEMS.map((it, idx) => (
              <div
                key={idx}
                className={[
                  "md:px-5 px:0 py-4 md:py-0",
                  "border-[#ECEFF6]",
                  // horizontal dividers
                  // vertical divider on right column (md+)
                  "md:border-l-2 border-b-2 md:border-b-0 ",
                  // span both columns for last item
                  it.colSpan === 2 ? "md:col-span-2 " : "",
                ].join(" ")}
              >
                <div className="">
                  {/* flag from online CDN (flagcdn.com) */}
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/w80/${it.countryCode}.png`}
                      srcSet={`https://flagcdn.com/w160/${it.countryCode}.png 2x`}
                      alt=""
                      width={20}
                      height={18}
                      className="mt-[2px] h-[24px] w-10 shrink-0 object-cover"
                    />
                    <h3 className="text-[20px] font-semibold  leading-[1.1] text-[#4D4D70]">
                      {it.country}
                    </h3>
                  </div>

                  <div className="min-w-0">
                    <p className="mt-3 whitespace-pre-line text-[15px] leading-[1.45] text-[#6A7190]">
                      {renderTextWithWebsite(it.text)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p  className="text-[12px] text-[#4D4D70] mt-6 text-center" >GTC Financial Group provides a wide range of financial services to clients. Different entities within the group have different licences and offerings as they are managed separately. If you are interested to know more about which entity you are dealing with, we encourage you to contact us.Trade, Invest & Partner</p>
        </div>
      </div>
    </section>
  );
}
