"use client";

export default function AboutUsBanner() {
  return (
    <section className="relative w-full overflow-hidden "
    style={{
      background: "linear-gradient(0deg, #0D153A 32.44%, #243AA0 92.69%)",
    }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/new/about-us-bg-2.svg"
          alt="About us background"
          className="h-full w-full object-center object-cover"
        />
        {/* Blue overlay (top) */}
        <div className="absolute inset-0" 
        // style={{
        //   background: "linear-gradient(0deg, #0D153A 32.44%, #243AA0 92.69%)",
        // }}
        />
        {/* Bottom dark fade */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#07122C]/65 via-[#07122C]/45 to-transparent" />
      </div>

      {/* Content */}
      <div className="">
        <div className="relative mx-auto flex min-h-[490px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[835px] max-w-6xl items-center px-6 py-14">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              About Us
            </h2>

            <p className="mt-3 text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[1.2] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              Globally Trusted &amp; Multi-Regulated Broker
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-[13px] font-light md:text-[16px] lg:text-[18px]  leading-[1.6] text-white">
              GTCFX is a global leader in financial derivatives trading,established
              in 2012, serving over 985,000 clients acrossmore than 100 countries.
              Committed to reliability andexcellence, GTCFX offers a diverse range
              of trading instruments and cutting-edge technology. Recognized as a
              trusted and multi-regulated broker, GTCFX adheres to stringent
              regulatory standards, delivering top-tier financial services
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
