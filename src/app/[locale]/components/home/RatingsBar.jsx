"use client";

import Image from "next/image";

export default function RatingsBar() {
  return (
    <div className="w-full">
      <div
        className="
                  bg-gradient-to-l from-[#00002184] via-[#293794] to-[#000021a2] px-6 py-4 backdrop-blur-[6px] bg-op
          rounded-xl border border-white/20
        
 
          flex flex-row flex-wrap text-center items-center justify-center md:justify-between
          
          gap-3
        "
      >
         <RatingItem
          logo="/investing.webp"
          name="Investing.com"
          rating={4.1}
          link='https://www.investing.com/brokers/reviews/gtcfx/'
        />
        
        <Divider />
         <RatingItem
          logo="/myfxbook.png"
          name="MyFxBook"
          rating={4.9}
          link='https://www.myfxbook.com/reviews/brokers/gtcfx/3001022,1'
        />
  <Divider />
        {/* Trustpilot (out of 5) */}
        <RatingItem
          logo="/trust.webp"
          name="Trustpilot"
          rating={3.9}
          link='https://www.trustpilot.com/review/www.gtcfx.com'
        />
          

        
        <Divider />
       

        {/* Google (out of 5) */}
        <RatingItem
          logo="/google.webp"
          name="Google"
          rating={4.5}
          link='https://share.google/ll6ZFBmivp6fJRk1M'
        />
   <Divider />
        {/* WikiFX (out of 10 -> auto converts to 5) */}
        <RatingItem
          logo="/wiki.webp"
          name="WikiFX"
          rating={9.3}
          link='https://www.wikifx.com/en/dealer/8791637328.html'
        />

      
      </div>
    </div>
  );
}

function Divider() {
  return <span className="hidden sm:block h-7 w-px bg-white/15" />;
}

function RatingItem({ logo, name, rating, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col gap-1 md:w-56 items-center hover:opacity-90 transition" 
        >
      {/* top row */}
      <div className="flex items-center gap-2">
        <Image
          src={logo}
          alt={name}
          width={24}
          height={24}
          className="md:h-[24px] md:w-[24px] h-[18px] w-[18px] rounded-full p-"
        />
        <span className="text-[12px] sm:text-[16px] font-semibold text-white/80 whitespace-nowrap">
          {name}
        </span>

        <span className="text-[13px] sm:text-[18px] font-extrabold text-white">
          {Number(rating).toFixed(1)}
        </span>
      </div>

      {/* stars */}
      <StarRow rating={Number(rating)} />
    </a>
  );
}

/**
 * Always show 5 stars.
 * If rating > 5, assume it is out of 10 and convert to 5-star scale.
 * Example: 9.3/10 => 4.65/5
 */
function StarRow({ rating }) {
  const normalized = rating > 5 ? (rating / 10) * 5 : rating;

  const fullStars = Math.floor(normalized);
  const decimal = normalized - fullStars;

  const hasHalf = decimal >= 0.25 && decimal < 0.75;
  const bumpToFull = decimal >= 0.75;

  const finalFull = bumpToFull ? Math.min(fullStars + 1, 5) : fullStars;

  return (
    <span className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < finalFull) return <Star key={i} type="full" />;
        if (i === finalFull && hasHalf && finalFull < 5) return <Star key={i} type="half" />;
        return <Star key={i} type="empty" />;
      })}
    </span>
  );
}

function Star({ type }) {
  // Half star (left filled, right empty)
  if (type === "half") {
    return (
      <svg className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="half-grad">
            <stop offset="50%" stopColor="#F5A400" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="url(#half-grad)"
          stroke="#F5A400"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // Full / Empty star
  return (
    <svg
      className="md:w-[20px] md:h-[20px] w-[16px] h-[16px]"
      viewBox="0 0 24 24"
      fill={type === "full" ? "#F5A400" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="#F5A400"
        strokeWidth="1.5"
      />
    </svg>
  );
}