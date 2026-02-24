"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const kpis = [
  {
    
    value: "985,000",
    suffix: "",
    title: "Served clients",
    sub: "",
  },
  {
   
    value: "27,000",
    suffix: "",
    title: "Trading instruments",
    sub: "",
  },
  {
    
    value: "20",
    suffix: "",
    title: "Destinations worldwide",
    sub: "",
  },
  {
  
    value: "$450B",
    suffix: "",
    title: "Monthly",
    sub: "trades",
  },
];

// --- helpers ---
function parseKpiValue(input) {
  // Supports: "985,000", "27,000", "20", "$450B", "$450.5B", "450B"
  const raw = String(input).trim();

  const prefixMatch = raw.match(/^[^\d.-]+/);
  const prefix = prefixMatch ? prefixMatch[0] : "";

  const suffixMatch = raw.match(/[^\d.-]+$/);
  const endSuffix = suffixMatch ? suffixMatch[0] : "";

  // number part (keep .)
  const numberPart = raw
    .replace(prefix, "")
    .replace(endSuffix, "")
    .replace(/,/g, "");

  const num = Number(numberPart);
  const valid = Number.isFinite(num);

  return {
    valid,
    prefix,
    suffix: endSuffix, // e.g. "B"
    number: valid ? num : 0,
    hasComma: raw.includes(","),
    hasDecimal: numberPart.includes("."),
  };
}

function formatKpiNumber(n, { hasComma, hasDecimal }) {
  if (hasDecimal) {
    // keep 1 decimal max (you can tweak)
    const fixed = Math.round(n * 10) / 10;
    return hasComma
      ? fixed.toLocaleString(undefined, { maximumFractionDigits: 1 })
      : String(fixed);
  }
  const rounded = Math.round(n);
  return hasComma ? rounded.toLocaleString() : String(rounded);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp({ to, duration = 1400, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const from = 0;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const current = from + (to - from) * eased;

      setValue(current);

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, start]);

  return value;
}

export default function KpiCardsRow() {
  const wrapRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Observe once when in view
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // run once
        }
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const parsed = useMemo(() => kpis.map((k) => parseKpiValue(k.value)), []);

  return (
    <section className="w-full bg-white">
      <div ref={wrapRef} className="mx-auto w-full max-w-6xl px-6">
        <div className="-mt-[50px] relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-between lg:gap-6 gap-4">
          {kpis.map((item, idx) => {
            const meta = parsed[idx];

            // You can customize duration per card
            const animated = useCountUp({
              to: meta.number,
              duration: 1500 + idx * 120,
              start: inView && meta.valid,
            });

            const displayNumber = meta.valid
              ? formatKpiNumber(animated, meta)
              : item.value;

            return (
              <div
                key={idx}
                className="w-full flex-1 rounded-[18px] h-full bg-white px-[18px] py-[14px]"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  background: "#FFF",
                  boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
                }}
              >
             

                <div className="mt-[10px] flex lg:items-end items-start flex-col md:flex-row md:flex-wrap sm:gap-2 gap-1">
                  <div
                    className="md:text-[28px] text-[24px] font-extrabold leading-none"
                    style={{
                      background:
                        "linear-gradient(180deg, #956E42 -58.7%, #E9DDCF 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {/* Prefix + Animated Number + Suffix (like $ + 450 + B) */}
                    {meta.prefix}
                    {displayNumber}
                    {meta.suffix}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}