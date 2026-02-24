import React from "react";

const FeatureCards = () => {
  const items = [
    {
      title: "Professional",
      desc: "GTCFX is a global leader in financial derivatives, established in 2012. The GTCFX brand encompasses multiple companies that provide a diverse range of online trading products, serving over 985,000 clients across more than 100 countries. GTCFX is recognized for its commitment to delivering top-tier financial services, with a strong emphasis on excellence and innovation.\nGTCFX has become a significant player in the fintech industry, with its growth driven by a dedication to offering cutting-edge technology and strict adherence to regulatory standards. Over the years, GTCFX has earned a reputation for reliability and excellence within the financial services sector.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="40" viewBox="0 0 44 40" fill="none">
        <path d="M34 38C34 33.7565 32.3143 29.6869 29.3137 26.6863C26.3131 23.6857 22.2435 22 18 22M18 22C13.7565 22 9.68687 23.6857 6.68629 26.6863C3.68571 29.6869 2 33.7565 2 38M18 22C23.5228 22 28 17.5228 28 12C28 6.47715 23.5228 2 18 2C12.4772 2 8 6.47715 8 12C8 17.5228 12.4772 22 18 22ZM42 36C42 29.26 38 23 34 20C35.3148 19.0135 36.3662 17.7182 37.0611 16.2285C37.756 14.7389 38.073 13.1009 37.984 11.4596C37.895 9.81826 37.4028 8.22417 36.5509 6.8184C35.6991 5.41263 34.5138 4.23852 33.1 3.4" stroke="url(#paint0_linear_4_782)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_4_782" x1="22" y1="-19.1304" x2="22" y2="38" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42"/>
            <stop offset="1" stop-color="#E9DDCF"/>
          </linearGradient>
        </defs>
      </svg>
      ),
    },
    {
      title: "Regulated",
      desc: "GTC Global Ltd and GTC Global Trade Capital Co. Limited., who provide the services on this Website, operate under stringent regulatory oversight and adhere to high standards of anti-money laundering (AML) and know-your-customer (KYC) practices, maintaining integrity and reliability in the fintech industry. GTC Global Ltd and GTC Global Trade Capital Co. Limited. comply with the laws and regulations in Mauritius and Vanuatu respectively\nOther entities within the GTC Financial Group have their own AML/CTF procedures that are designed in compliance with the local laws and regulations.",
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
      desc: "Since our establishment, we've firmly established our expertise in the trading arena. Throughout our journey, we've been trailblazers in shaping the financial services industry, consistently innovating exceptional products, services, and trading platforms that set new standards.",
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
      desc: "Our continuous growth and unwavering focus on customer satisfaction make us a trusted partner forthose in search of top-notch financial derivatives solutions. Explore our comprehensive offerings and experience the excellence that has solidified our position as a global industry leader.",
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
    <section className="w-full bg-white sm:pt-14 pt-10 lg:pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10">
          {items.map((it) => (
            <div
              key={it.title}
              className=""
              style={{
                background: "#FFF",
              }}
            >
              <div className="flex items-start h-full gap-4">
                <div className="pt-1 w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 [&_svg]:w-full [&_svg]:h-full [&_svg]:max-w-full [&_svg]:max-h-full">
                  {it.icon}
                </div>

                <div className="flex-1 flex flex-col justify-between h-full">
                  <div className="mt-4">
                    <h3 className="HeadingH4 !font-bold !leading-[1.05] !tracking-[-0.02em] !text-[#243AA0]">
                      {it.title}
                    </h3>

                    <p className="mt-4 whitespace-pre-line text-[15px] font-medium leading-[1.65] text-[#4D4D70]">
                      {it.desc}
                    </p>
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
