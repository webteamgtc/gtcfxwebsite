"use client";

export default function AboutUsBanner() {
  return (
    <section className="relative w-full overflow-hidden "
      style={{
        background: "linear-gradient(90deg, #0D153A 0%, #243AA0 100%)",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 ">
        <img
          src="/new/global-bg.png"
          alt="About us background"
          className="h-full w-full object-center object-cover"
        />
        {/* Blue overlay (top) */}
        <div className="absolute inset-0 bg-[#0D153A]/30"
         
        />
      </div>

      {/* Content */}
      <div className="">
        <div className="relative mx-auto flex min-h-[450px] md:min-h-[500px] lg:min-h-[600px] max-w-6xl items-center px-6 py-14">
        <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            Global Presence
            </h2>

            <p className="mt-3 text-[20px] md:text-[24px] lg:text-[28px] font-semibold leading-[1.2] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            Licensed across multiple jurisdictions worldwide
            </p>

            <p className="mx-auto mt-5 max-w-4xl text-[13px] font-light md:text-[16px] lg:text-[18px]  leading-[1.6] text-white">
            GTC Group LLC-FZ, registered in the UAE, operates globally under the <strong className="font-bold">GTC Financial Group.</strong> Each entity provides financial services in accordance with its local regulatory licences and is independently managed by experienced teams.
            Services and products on this website are offered by <strong className="font-bold">GTC Global Ltd</strong> and <strong className="font-bold">GTC Global Trade Capital Co. Limited.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
