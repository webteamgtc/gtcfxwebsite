"use client";

import React, { useState, useEffect, useRef } from "react";

/**
 * Parse display value into prefix, number, and suffix for count-up.
 * e.g. "985,000 +" -> { prefix: "", number: 985000, suffix: " +" }
 *      "$550 Billion" -> { prefix: "$", number: 550, suffix: " Billion" }
 */
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
const TICK_MS = 16; // ~60fps

export default function StatsBar() {
  const items = [
    { value: "985,000 +", label: "Served Clients" },
    { value: "27,000 +", label: "Trading Instruments" },
    { value: "20 +", label: "Destinations Worldwide" },
    { value: "$550 Billion", label: "Monthly Trades" },
  ];

  const [displayValues, setDisplayValues] = useState(items.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const parsed = items.map((item) => parseValue(item.value));

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
    const parsed = items.map((item) => parseValue(item.value));
    const startTime = performance.now();
    let rafId;

    const animate = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION_MS, 1);
      // easeOutQuart for a smooth slowdown at the end
      const eased = 1 - Math.pow(1 - t, 4);

      setDisplayValues(
        parsed.map(({ number }) => Math.round(eased * number))
      );

      if (t < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="w-full bg-[#ECEEF5] border-t border-b border-[#D1D5E0] relative z-10 border-opacity-30">
      <div className="mx-auto w-full container py-5">
        <div className="grid grid-cols-2 md:gap-10 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, idx) => {
            const { prefix, suffix } = parseValue(item.value);
            const displayNum = hasStarted ? displayValues[idx] : 0;
            const formatted = prefix + formatNumber(displayNum) + suffix;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-[24px] md:text-[32px] leading-[38px] font-extrabold tracking-[0.5px] text-primary">
                  {formatted}
                </div>

                <div className="mt-2 md:mt-3 h-px w-[120px] md:w-[120px] bg-[#0000004D]" />

                <div className="mt-2 md:mt-4 md:text-[18px] text-[12px] leading-[16px] font-medium tracking-[0.3px] text-secondary">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
