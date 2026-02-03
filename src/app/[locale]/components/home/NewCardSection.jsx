"use client"
/* eslint-disable @next/next/no-img-element */
const WhyChooseCapital = () => {
    const cards = [
      {
        title: "Award-winningly easy to use",
        desc: "Trade the world's markets on the best Overall Trading Platform (Online Money Awards 2024), and Best Trading App (App 2023) (Good Money Guide).",
        cta: "Find out what's great about our platforms",
        img: "/new/card-img1.png",
      },
      {
        title: "Your markets, your leverage",
        desc: "Trade CFDs and spread bets on Germany 40, crude oil, natural gas, shares and thousands more, choosing the leverage that suits you.",
        cta: "Discover what you can trade",
        img: "/new/card-img2.png",
      },
      {
        title: "A trusted global broker",
        desc: "Join 798,000+ traders around the world with us as their broker. Our customers love us so much, they've traded over $1tn in volume with us.",
        cta: "Find out more about us",
        img: "/new/card-img3.png",
      },
      {
        title: "Everything you need to trade",
        desc: "Compare multiple markets on fast charts. More indicators than you can shake a (candle)stick at. In-platform tradable news. TradingView and MT4. We'd go on, but we're running out of room!",
        cta: "More ways we help you trade",
        img: "/new/card-img4.png",
      },
      {
        title: "Clear, competitive fees",
        desc: "Trade spreads from 20pts on US30 and 1pt on Germany 40. 0% commission, always — check the offer fees that apply with our clear fee structure.",
        cta: "Check our fees",
        img: "/new/card-img5.png",
      },
      {
        title: "Friendly UK support team",
        desc: "The markets don't sleep, so we've made sure you can get help whenever you need it. Our expert team is on hand in English 24/7.",
        cta: "Get in touch",
        img: "/new/card-img6.png",
      },
    ];
  
    return (
      <section className="bg-white md:pt-16 pt-10">
        <div className="mx-auto container px-6" data-aos="fade-up" data-aos-duration="1000">
          {/* Title */}
          <h2 className="text-center capitalize md:text-[40px] text-[28px] font-extrabold leading-[1.15] text-[#293B93]">
            Why choose GTCFX?
          </h2>
  
          {/* Grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
            {cards.map((c, idx) => (
              <div key={idx} className="group">
                {/* Media */}
                <div 
                  className="overflow-hidden rounded-[18px] bg-[#F1F2F4]"
                  style={{ boxShadow: "1px 6px 16px 0px #0000001A" }}
                >
                  <div className="relative aspect-[16/9]">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                </div>
  
                {/* Text */}
                <div className="mt-5">
                  <h3 className="md:text-[18px] text-[16px] font-semibold leading-[1.3] text-[#293B93]">
                    {c.title}
                  </h3>
  
                  <p className="mt-3 md:text-[14px] text-[13px] leading-[1.6] text-[#4D4D70]">
                    {c.desc}
                  </p>
  
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2 md:text-[14px] text-[13px] font-semibold text-[#293B93] hover:text-[#0D122D] transition-colors duration-200"
                  >
                    {c.cta}
                    <span className="text-[16px] leading-none">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* Bottom button */}
          <div className="mt-12 md:mt-16 flex justify-center">
            <button
              type="button"
              className="rounded-full py-3 bg-gradient-to-b from-[#956E42] to-[#E9DDCF] px-8 min-w-72 text-[15px] font-normal text-[#fff]"
            >
              Sign up
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseCapital;
  