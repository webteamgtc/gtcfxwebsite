"use client";

const kpis = [
  {
    title: "Tight Spreads",
    sub: "From 0.0",
    pills: ["Competitive Pricing", "Transparent"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
      <path d="M48.5205 16.1274L38.2221 26.4237H44.0902C44.5242 26.4237 44.9404 26.5961 45.2473 26.9029C45.5541 27.2098 45.7265 27.626 45.7265 28.06C45.7265 28.4939 45.5541 28.9101 45.2473 29.217C44.9404 29.5238 44.5242 29.6962 44.0902 29.6962H34.2726C33.8386 29.6962 33.4224 29.5238 33.1155 29.217C32.8087 28.9101 32.6363 28.4939 32.6363 28.06V18.2423C32.6363 17.8083 32.8087 17.3921 33.1155 17.0852C33.4224 16.7784 33.8386 16.606 34.2726 16.606C34.7065 16.606 35.1227 16.7784 35.4296 17.0852C35.7364 17.3921 35.9088 17.8083 35.9088 18.2423V24.1104L46.2051 13.812C46.5122 13.505 46.9286 13.3325 47.3628 13.3325C47.797 13.3325 48.2134 13.505 48.5205 13.812C48.8275 14.1191 49 14.5355 49 14.9697C49 15.4039 48.8275 15.8203 48.5205 16.1274ZM27.7274 32.9688H17.9098C17.4758 32.9688 17.0596 33.1412 16.7527 33.4481C16.4459 33.7549 16.2735 34.1711 16.2735 34.6051C16.2735 35.039 16.4459 35.4552 16.7527 35.7621C17.0596 36.069 17.4758 36.2414 17.9098 36.2414H23.7779L13.4795 46.5377C13.1725 46.8447 13 47.2611 13 47.6953C13 48.1295 13.1725 48.546 13.4795 48.853C13.7866 49.16 14.203 49.3325 14.6372 49.3325C15.0714 49.3325 15.4878 49.16 15.7949 48.853L26.0912 38.5547V44.4228C26.0912 44.8567 26.2635 45.2729 26.5704 45.5798C26.8773 45.8867 27.2935 46.059 27.7274 46.059C28.1614 46.059 28.5776 45.8867 28.8845 45.5798C29.1913 45.2729 29.3637 44.8567 29.3637 44.4228V34.6051C29.3637 34.1711 29.1913 33.7549 28.8845 33.4481C28.5776 33.1412 28.1614 32.9688 27.7274 32.9688Z" fill="url(#paint0_linear_7230_229)"/>
      <circle cx="31" cy="31" r="29.5" stroke="url(#paint1_linear_7230_229)" stroke-width="3"/>
      <defs>
        <linearGradient id="paint0_linear_7230_229" x1="31" y1="-7.79792" x2="31" y2="49.3325" gradientUnits="userSpaceOnUse">
          <stop stop-color="#956E42"/>
          <stop offset="1" stop-color="#E9DDCF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_7230_229" x1="31" y1="-36.3913" x2="31" y2="62" gradientUnits="userSpaceOnUse">
          <stop stop-color="#956E42"/>
          <stop offset="1" stop-color="#E9DDCF"/>
        </linearGradient>
      </defs>
    </svg>
    )
  },
  {
    title: "Fast Execution",
    sub: "Low Latency",
    pills: ["Minimal Slippage", "Stable"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <g clip-path="url(#clip0_7105_355)">
          <path d="M37.7225 30.9333L43.7531 17H23.344L17 39.8H26.4784L23.3824 55H27.9917L49 30.9333H37.7225ZM26.8606 52.4667H26.4573L29.5532 37.2667H20.3084L25.2426 19.5333H39.9211L33.8904 33.4667H43.4462L26.8606 52.4667Z" fill="url(#paint0_linear_7105_355)" />
          <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_7105_355)" stroke-width="3" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_7105_355" x1="33" y1="-5.30435" x2="33" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_7105_355" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <clipPath id="clip0_7105_355">
            <rect width="68" height="68" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    title: "Powerful Platforms",
    sub: "MT6 / MTS",
    pills: ["Tools", "Reilable"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <path d="M20.2 52V48.4444L22 46.6667H16.6C15.61 46.6667 14.7628 46.3188 14.0584 45.6231C13.354 44.9274 13.0012 44.0901 13 43.1111V23.5556C13 22.5778 13.3528 21.741 14.0584 21.0453C14.764 20.3496 15.6112 20.0012 16.6 20H45.4C46.39 20 47.2378 20.3484 47.9434 21.0453C48.649 21.7422 49.0012 22.579 49 23.5556V43.1111C49 44.0889 48.6478 44.9262 47.9434 45.6231C47.239 46.32 46.3912 46.6679 45.4 46.6667H40L41.8 48.4444V52H20.2ZM16.6 43.1111H45.4V23.5556H16.6V43.1111Z" fill="url(#paint0_linear_7105_367)" />
        <circle cx="31" cy="34" r="29.5" stroke="url(#paint1_linear_7105_367)" stroke-width="3" />
        <defs>
          <linearGradient id="paint0_linear_7105_367" x1="31" y1="1.21739" x2="31" y2="52" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_7105_367" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    title: "Regulated& Trusted",
    sub: "AML/ KYC",
    pills: ["Compliant", "Compliant"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
        <g clip-path="url(#clip0_7105_380)">
          <path d="M37.5862 31.4509C37.714 31.3214 37.8164 31.1651 37.8875 30.9915C37.9585 30.8179 37.9967 30.6304 37.9998 30.4404C38.0029 30.2503 37.9708 30.0616 37.9054 29.8853C37.84 29.7091 37.7427 29.549 37.6192 29.4146C37.4958 29.2802 37.3487 29.1742 37.1869 29.103C37.025 29.0318 36.8516 28.9969 36.6771 29.0002C36.5025 29.0036 36.3304 29.0452 36.1709 29.1225C36.0114 29.1999 35.8679 29.3114 35.7489 29.4505L29.7342 35.9991L27.1862 33.2249C26.9398 32.9749 26.6139 32.8388 26.2771 32.8453C25.9403 32.8517 25.6189 33.0003 25.3808 33.2596C25.1426 33.5189 25.0061 33.8688 25.0002 34.2355C24.9943 34.6022 25.1193 34.957 25.3489 35.2254L29.7342 40L37.5862 31.4509Z" fill="url(#paint0_linear_7105_380)" />
          <path d="M32.9195 16.3126C31.671 15.8952 30.3182 15.8958 29.0701 16.3145L16.5602 20.5045C15.6405 20.8074 14.8306 21.3698 14.2302 22.1225C13.6298 22.8751 13.2654 23.7851 13.1817 24.7401C12.53 32.7916 13.6248 39.1195 16.575 44.08C19.5345 49.055 24.2534 52.4746 30.4862 54.9046C30.8124 55.0318 31.1753 55.0318 31.5016 54.9046C37.7399 52.4746 42.4607 49.055 45.422 44.08C48.3759 39.1195 49.4689 32.7897 48.819 24.742C48.7352 23.7867 48.3704 22.8766 47.7697 22.1239C47.169 21.3712 46.3587 20.8089 45.4386 20.5063L32.9195 16.3126ZM29.9582 18.9088C30.6299 18.684 31.3578 18.684 32.0296 18.9088L44.5506 23.0988C45.4035 23.3836 45.9906 24.123 46.0589 24.9592C46.6811 32.6747 45.6011 38.3801 43.0349 42.6906C40.5536 46.8623 36.5805 49.8949 30.9939 52.1551C25.4128 49.8949 21.4435 46.8623 18.9622 42.6906C16.3959 38.3819 15.3177 32.6747 15.9399 24.9592C15.9802 24.5371 16.1444 24.1359 16.4125 23.805C16.6805 23.4741 17.0405 23.228 17.4483 23.097L29.9582 18.9088Z" fill="url(#paint1_linear_7105_380)" />
          <circle cx="31" cy="34" r="29.5" stroke="url(#paint2_linear_7105_380)" stroke-width="3" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_7105_380" x1="31.5" y1="22.5435" x2="31.5" y2="40" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint1_linear_7105_380" x1="31" y1="-6.8913" x2="31" y2="55" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <linearGradient id="paint2_linear_7105_380" x1="31" y1="-33.3913" x2="31" y2="65" gradientUnits="userSpaceOnUse">
            <stop stop-color="#956E42" />
            <stop offset="1" stop-color="#E9DDCF" />
          </linearGradient>
          <clipPath id="clip0_7105_380">
            <rect width="68" height="68" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  },
];

export default function KpiCardsRow() {
  return (
    <section className="w-full bg-white">

      <div className="mx-auto w-full container">
        <div className="-mt-[100px] relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 items-center justify-between gap-6">
          {kpis.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex-1 rounded-[18px] bg-white h-full "
              style={{
                border: "1px solid rgba(0, 0, 0, 0.10)",
                background: "#FFF",
                boxShadow: "1px 1px 16px 0 rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex h-full flex-col items-center p-4 md:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[62px] md:h-[62px] flex-shrink-0 [&_svg]:w-full [&_svg]:h-full [&_svg]:max-w-full [&_svg]:max-h-full">
                  {item.icon}
                </div>

                {/* title */}
                <h3 className="mt-4 HeadingH4 !font-bold !leading-[1.1] !tracking-[-0.02em]  text-center md:text-left">
                  {item.title}
                </h3>

                {/* sub line */}
                <div className="mt-2 flex items-center gap-3 text-[16px]  font-normal text-[#4D4D70]">
                  <span className="text-[18px] leading-none text-[#64688E]">•</span>
                  <span>{item.sub}</span>
                </div>

                {/* pills */}
                <div className="mt-5 flex w-full flex-col gap-3">
                  {item.pills.map((pill, idx) => (
                    <Pill key={idx} label={pill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function Pill({ label }) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-[#EBEDF9] px-4 py-[10px] text-[14px] font-medium leading-none text-[#4D4D70] ">
      <span className="inline-flex h-[18px] w-[18px] items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] text-[#4D4D70]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
      <span className="truncate">{label}</span>
    </div>
  );
}