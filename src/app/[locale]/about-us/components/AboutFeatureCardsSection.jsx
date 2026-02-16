// "use client";

// import React from "react";

// const FEATURE_CARDS = [
//   {
//     title: "Professional",
//     description:
//       "As industry leaders, we provide diverse trading solutions and innovative platforms for traders of all levels.",
//     icon: (
//       <svg className="h-10 w-10 text-[#293B93]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Regulated",
//     description:
//       "We operate under strict regulatory oversight and hold licenses from multiple global authorities.",
//     icon: (
//       <svg className="h-10 w-10 text-[#293B93]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Experienced",
//     description:
//       "Founded in 2012, we have built a reputation for expertise, innovation, and stability in the financial markets.",
//     icon: (
//       <svg className="h-10 w-10 text-[#293B93]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Trusted",
//     description:
//       "Our commitment to integrity and client satisfaction has earned us the trust of traders worldwide.",
//     icon: (
//       <svg className="h-10 w-10 text-[#293B93]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
//       </svg>
//     ),
//   },
// ];

// export default function AboutFeatureCardsSection() {
//   return (
//     <section className="w-full bg-gray-100 py-14 md:py-20">
//       <div className="container mx-auto max-w-6xl px-4">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {FEATURE_CARDS.map((card, index) => (
//             <div
//               key={index}
//               className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
//               style={{
//                 boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
//               }}
//             >
//               <div className="flex items-start gap-4">
//                 <div className="shrink-0">{card.icon}</div>
//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-lg font-bold text-[#293B93]">{card.title}</h3>
//                   <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
//                     {card.description}
//                   </p>
//                   <button
//                     type="button"
//                     className="mt-4 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#293B93] transition-colors hover:border-gray-300 hover:bg-gray-50"
//                   >
//                     Learn more
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";

const FeatureCards = () => {
  const items = [
    {
      title: "Professional",
      desc: "As industry leaders, we provide traders trading\nsolutions and innovative platforms for traders of all\nlevels.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40" fill="none">
          <path d="M34 38C34 33.7565 32.3143 29.6869 29.3137 26.6863C26.3131 23.6857 22.2435 22 18 22M18 22C13.7565 22 9.68687 23.6857 6.68629 26.6863C3.68571 29.6869 2 33.7565 2 38M18 22C23.5228 22 28 17.5228 28 12C28 6.47715 23.5228 2 18 2C12.4772 2 8 6.47715 8 12C8 17.5228 12.4772 22 18 22ZM42 36C42 29.26 38 23 34 20C35.3148 19.0135 36.3662 17.7182 37.0611 16.2285C37.756 14.7389 38.073 13.1009 37.984 11.4596C37.895 9.81826 37.4028 8.22417 36.5509 6.8184C35.6991 5.41263 34.5138 4.23852 33.1 3.4" stroke="url(#paint0_linear_7105_146)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_7105_146" x1="22" y1="-19.1304" x2="22" y2="38" gradientUnits="userSpaceOnUse">
              <stop stop-color="#956E42" />
              <stop offset="1" stop-color="#E9DDCF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Regulated",
      desc: "We operate under strict regulatory oversight\nand hold licenses from multiple global authorities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M52.75 31.25L56.25 34.775L39.925 51.25L31.25 42.5L34.75 38.975L39.925 44.175L52.75 31.25ZM27.5 10C30.1522 10 32.6957 11.0536 34.5711 12.9289C36.4464 14.8043 37.5 17.3478 37.5 20C37.5 22.6522 36.4464 25.1957 34.5711 27.0711C32.6957 28.9464 30.1522 30 27.5 30C24.8478 30 22.3043 28.9464 20.4289 27.0711C18.5536 25.1957 17.5 22.6522 17.5 20C17.5 17.3478 18.5536 14.8043 20.4289 12.9289C22.3043 11.0536 24.8478 10 27.5 10ZM27.5 15C26.1739 15 24.9021 15.5268 23.9645 16.4645C23.0268 17.4021 22.5 18.6739 22.5 20C22.5 21.3261 23.0268 22.5979 23.9645 23.5355C24.9021 24.4732 26.1739 25 27.5 25C28.8261 25 30.0979 24.4732 31.0355 23.5355C31.9732 22.5979 32.5 21.3261 32.5 20C32.5 18.6739 31.9732 17.4021 31.0355 16.4645C30.0979 15.5268 28.8261 15 27.5 15ZM27.5 32.5C29.2 32.5 31.25 32.725 33.525 33.15L29.35 37.325L27.5 37.25C20.075 37.25 12.25 40.9 12.25 42.5V45.25H27.75L32.5 50H7.5V42.5C7.5 35.85 20.825 32.5 27.5 32.5Z" fill="url(#paint0_linear_7105_154)" />
          <defs>
            <linearGradient id="paint0_linear_7105_154" x1="31.875" y1="-14.212" x2="31.875" y2="51.25" gradientUnits="userSpaceOnUse">
              <stop stop-color="#956E42" />
              <stop offset="1" stop-color="#E9DDCF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Experienced",
      desc: "Founded in 2012, we have built a reputation for\nexpertise, innovation, and stability in the financial\nmarkets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M26 6C26.5098 6.00057 27.0001 6.19576 27.3707 6.5457C27.7414 6.89564 27.9645 7.37391 27.9943 7.88279C28.0242 8.39167 27.8587 8.89276 27.5315 9.28366C27.2043 9.67457 26.7402 9.92579 26.234 9.986L26 10H10V38H38V22C38.0006 21.4902 38.1958 20.9999 38.5457 20.6293C38.8956 20.2586 39.3739 20.0355 39.8828 20.0057C40.3917 19.9758 40.8928 20.1413 41.2837 20.4685C41.6746 20.7957 41.9258 21.2598 41.986 21.766L42 22V38C42.0003 39.0092 41.6192 39.9811 40.933 40.7211C40.2468 41.4611 39.3063 41.9143 38.3 41.99L38 42H10C8.99085 42.0003 8.01887 41.6192 7.2789 40.933C6.53894 40.2468 6.08569 39.3063 6.01 38.3L6 38V10C5.99968 8.99085 6.38081 8.01887 7.06699 7.2789C7.75318 6.53894 8.69369 6.08569 9.7 6.01L10 6H26ZM38.486 6.686C38.8459 6.3273 39.3289 6.11905 39.8368 6.10354C40.3447 6.08803 40.8394 6.26643 41.2206 6.6025C41.6017 6.93856 41.8406 7.4071 41.8888 7.91295C41.937 8.41879 41.7908 8.92402 41.48 9.326L41.314 9.516L21.514 29.314C21.1541 29.6727 20.6711 29.8809 20.1632 29.8965C19.6553 29.912 19.1606 29.7336 18.7794 29.3975C18.3983 29.0614 18.1594 28.5929 18.1112 28.0871C18.063 27.5812 18.2092 27.076 18.52 26.674L18.686 26.486L38.486 6.686Z" fill="url(#paint0_linear_7105_162)" />
          <defs>
            <linearGradient id="paint0_linear_7105_162" x1="24" y1="-15.1304" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop stop-color="#956E42" />
              <stop offset="1" stop-color="#E9DDCF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Trusted",
      desc: "Our commitment to integrity and client satisfaction\nhas earned us the trust of traders worldwide.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
          <path d="M40.25 21.0834C40.25 31.7209 32.89 41.6684 23 44.0834C13.11 41.6684 5.75 31.7209 5.75 21.0834V9.58342L23 1.91675L40.25 9.58342V21.0834ZM23 40.2501C30.1875 38.3334 36.4167 29.7851 36.4167 21.5051V12.0751L23 6.09508L9.58333 12.0751V21.5051C9.58333 29.7851 15.8125 38.3334 23 40.2501ZM19.1667 32.5834L11.5 24.9167L14.2025 22.2142L19.1667 27.1592L31.7975 14.5284L34.5 17.2501" fill="url(#paint0_linear_7105_172)" />
          <defs>
            <linearGradient id="paint0_linear_7105_172" x1="23" y1="-22.8333" x2="23" y2="44.0834" gradientUnits="userSpaceOnUse">
              <stop stop-color="#956E42" />
              <stop offset="1" stop-color="#E9DDCF" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-14 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-3xl border border-[#EEF1F6] bg-white"
              style={{
                background: "#FFF",
                boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex items-start h-full gap-4 px-7 py-6">
                <div className="pt-1">{it.icon}</div>

                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="HeadingH4 !font-bold !leading-[1.05] !tracking-[-0.02em] !text-[#243AA0]">
                      {it.title}
                    </h3>

                    <p className="mt-2 whitespace-pre-line text-[15px] font-medium leading-[1.65] text-[#4D4D70]">
                      {it.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      className="rounded-full bg-[#EBEDF9] px-6 py-2 text-[16px] font-medium text-[#243AA0] hover:bg-[#DEE3FF]"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
