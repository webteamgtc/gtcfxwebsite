"use client";

import { useState, useEffect, useRef } from "react";

function parseValue(str) {
  const trimmed = String(str).trim();
  let prefix = "";
  let suffix = "";
  let s = trimmed;
  if (s.startsWith("$")) {
    prefix = "$";
    s = s.slice(1).trim();
  }
  const numMatch = s.match(/^[\d,]+/);
  if (!numMatch) return { prefix, number: 0, suffix: trimmed };
  const numStr = numMatch[0].replace(/,/g, "");
  const number = parseInt(numStr, 10) || 0;
  suffix = s.slice(numMatch[0].length).trim();
  if (suffix) suffix = " " + suffix;
  return { prefix, number, suffix };
}

function formatNumber(n) {
  return n.toLocaleString();
}

const DURATION_MS = 2000;

export default function AboutUsBanner() {
  const KPI = [
    { value: "985,000", label: "Served clients" },
    { value: "27,000", label: "Trading instruments" },
    { value: "20", label: "Destinations worldwide" },
    { value: "$450", label: "Billion\nMonthly trades", split: true },
  ];

  const [displayValues, setDisplayValues] = useState(KPI.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setHasStarted(true);
      },
      { threshold: 0.2, rootMargin: "0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    const parsed = KPI.map((item) => parseValue(item.value));
    const startTime = performance.now();
    let rafId;
    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplayValues(parsed.map(({ number }) => Math.round(eased * number)));
      if (t < 1) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden "
      style={{
        background: "linear-gradient(0deg, #0D153A 32.44%, #243AA0 92.69%)",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/new/new-about-banner.png"
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
      <div className=" container mx-auto ">
        <div className="relative mx-auto flex flex-col justify-end  min-h-[490px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[700px] items-center py-14">
          <div className="mx-auto max-w-[820px] text-center">
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
              About Us
            </h2>

            <p className="mt-3 text-[20px] md:text-[24px] lg:text-[28p font-extrabold leading-[1.2] text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-6xl">
            {KPI.map((item, idx) => {
              const { prefix, suffix } = parseValue(item.value);
              const displayNum = hasStarted ? displayValues[idx] : 0;
              const formattedNumber = prefix + formatNumber(displayNum) + (item.split ? "" : suffix);
              return (
                <div
                  key={item.value}
                  className="relative p-6 min-h-[140px] flex flex-col items-center justify-center text-center"
                  style={{
                    borderRadius: "18px",
                    background: "rgba(255, 255, 255, 0.10)",
                    boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div
                      className="text-[28px] md:text-[40px] font-bold leading-none tracking-wide"
                      style={{
                        background: "linear-gradient(180deg, #956E42 -58.7%, #E9DDCF 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {formattedNumber}
                      {item.split ? (
                        <span className="ml-1 align-bottom text-[14px] md:text-[16px] font-medium" style={{ background: "linear-gradient(180deg, #956E42 -58.7%, #E9DDCF 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                          Billion
                        </span>
                      ) : null}
                    </div>
                    {item.split ? (
                      <div className="mt-3 text-[14px] md:text-[16px] font-light leading-tight text-white">
                        Monthly trades
                      </div>
                    ) : (
                      <div className="mt-3 text-[14px] md:text-[16px] font-light leading-tight text-white">
                        {item.label}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
