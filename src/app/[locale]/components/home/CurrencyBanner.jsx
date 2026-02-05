"use client";

import clsx from "clsx";

const ITEMS = [
    { symbol: "GBPUSD", price: "85.809 / 85.859", dir: "up" },
    { symbol: "WTI", price: "85.809 / 85.859", dir: "down" },
    { symbol: "ETHUSD", price: "3307.21 / 3300.23", dir: "up" },
    { symbol: "XAUUSD", price: "2056.94 / 2056.44", dir: "down" },
    { symbol: "GBPUSD", price: "85.809 / 85.859", dir: "up" },
    { symbol: "WTI", price: "85.809 / 85.859", dir: "down" },
    { symbol: "ETHUSD", price: "3307.21 / 3300.23", dir: "up" },
    { symbol: "XAUUSD", price: "2056.94 / 2056.44", dir: "down" },
];

function TickerCard({ it }) {
    return (
        <div
            className="flex shrink-0 min-w-[240px] w-[240px] items-center justify-between rounded-full border border-[#E6E8F0] bg-white px-3 py-2 shadow-[0_1px_0_rgba(16,24,40,0.04)]"
        >
            <div className="flex items-center gap-2.5">
                <div
                    className={clsx(
                        "flex h-9 w-9 items-center justify-center rounded-full",
                        it.dir === "up" ? "bg-[#DFF4E6]" : "bg-[#F7D7D7]"
                    )}
                >
                    {it.dir === "up" ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#1F9D55]">
                            <path d="M12 5l6 6m-6-6l-6 6m6-6v14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#E12D39]">
                            <path d="M12 19l6-6m-6 6l-6-6m6 6V5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </div>
                <div className="flex flex-col">
                    <div className="text-[12px] font-semibold leading-[14px] text-[#20222A]">{it.symbol}</div>
                    <div className="mt-1 text-[11px] font-medium leading-[12px] text-[#7B8090]">{it.price}</div>
                </div>
            </div>
            <button className="rounded-full bg-[#EAF0FF] px-4 py-2 text-[12px] font-semibold leading-[12px] text-[#2F66FF]">
                Trade
            </button>
        </div>
    );
}

export default function MiniTickersRow() {
    return (
        <section className="w-full bg-[#F1F2F4] py-6">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    animation: marquee 40s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}} />
            <div className="mx-auto w-full overflow-hidden">
                <div className="marquee-track flex w-max items-center gap-3">
                    {ITEMS.map((it, index) => (
                        <TickerCard key={`a-${index}`} it={it} />
                    ))}
                    {ITEMS.map((it, index) => (
                        <TickerCard key={`b-${index}`} it={it} />
                    ))}
                </div>
            </div>
        </section>
    );
}
