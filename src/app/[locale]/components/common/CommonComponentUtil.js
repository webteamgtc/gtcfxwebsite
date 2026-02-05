import Image from "next/image";

export function Star({ half }) {
    if (half) {
        return (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="flex-shrink-0"
            >
                <path
                    d="M12 2l2.9 6.4 7 1-5.1 4.8 1.3 7-6.1-3.5-6.1 3.5 1.3-7L2.1 9.4l7-1L12 2Z"
                    fill="#D5D6DB"
                />
                <path d="M12 2l2.9 6.4 7 1-5.1 4.8 1.3 7-6.1-3.5V2Z" fill="#F5B301" />
            </svg>
        );
    }

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="flex-shrink-0"
        >
            <path
                d="M12 2l2.9 6.4 7 1-5.1 4.8 1.3 7-6.1-3.5-6.1 3.5 1.3-7L2.1 9.4l7-1L12 2Z"
                fill="#F5B301"
            />
        </svg>
    );
}

export const getAboutUsContent = () => {
    return (
        <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            {/* QR Code */}
            <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex-shrink-0">
                <Image
                    src="/app/qrcode.webp"
                    alt="GTCFX Mobile App QR Code"
                    fill
                    className="object-contain"
                />
            </div>
            {/* QR Code Text */}
            <div className="flex flex-col justify-start items-center md:items-start pt-0 md:pt-2 w-full md:w-auto">
                <p className="text-[15px] md:text-[18px] lg:text-[20px] font-normal leading-[1.6] text-white mb-2 text-center md:text-left">
                    Scan to Download the App
                </p>
                <p className="text-[13px] md:text-[14px] font-medium text-white text-center md:text-left mb-4 md:mb-0">
                    iOS and Android
                </p>
                <div className="mt-0 md:mt-8 flex flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start w-full">
                    {/* App Store Button */}
                    <div className="flex flex-col">
                        <a
                            href="https://apps.apple.com/ae/app/gtc-go/id6753007277"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] inline-flex items-center justify-center border border-white/30 rounded-xl px-4 md:px-2 py-2.5 md:py-2 hover:shadow-[0_10px_25px_rgba(149,110,66,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
                            aria-label="Download on the App Store"

                        >
                            <svg
                                className="w-7 h-7 md:w-8 md:h-8 mr-2 md:mr-2.5 text-white flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                            </svg>
                            <div className="text-left text-white">
                                <div className="text-[9px] md:text-[10px] leading-tight font-medium">
                                    Download on the
                                </div>
                                <div className="text-[12px] md:text-[14px] font-bold leading-tight">
                                    App Store
                                </div>
                            </div>
                        </a>
                        {/* Rating below App Store button */}
                        <div className="flex items-center gap-1 mt-2 justify-center">
                            <div className="flex items-center gap-[2px]">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star half />
                            </div>
                            <span className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-white">
                                4.7/5
                            </span>
                        </div>
                    </div>

                    {/* Google Play Button */}
                    <div className="flex flex-col">
                        <a
                            href="https://play.google.com/store/search?q=GTC%20Go&c=apps&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gradient-to-r from-[#B68756] via-[#995F22] to-[#B68756] inline-flex items-center justify-center border border-white/30 rounded-xl px-4 md:px-2 py-2.5 md:py-2 hover:shadow-[0_10px_25px_rgba(149,110,66,0.3)] transition-all duration-300 hover:scale-105 active:scale-95"
                            aria-label="Get it on Google Play"

                        >
                            <svg
                                className="w-7 h-7 md:w-8 md:h-8 mr-2 md:mr-2.5 text-white flex-shrink-0"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <div className="text-left text-white">
                                <div className="text-[9px] md:text-[10px] leading-tight font-medium">
                                    GET IT ON
                                </div>
                                <div className="text-[12px] md:text-[14px] font-bold leading-tight">
                                    Google Play
                                </div>
                            </div>
                        </a>
                        {/* Rating below Google Play button */}
                        <div className="flex items-center gap-1 mt-2 justify-center">
                            <div className="flex items-center gap-[2px]">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star half />
                            </div>
                            <span className="text-[12px] md:text-[13px] lg:text-[14px] font-medium text-white">
                                4.5/5
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getAccountContent = () => {
    return (
        <div className="md:basis-4/12 relative w-full h-56 md:h-72">
            <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/account/Account-02.webp" alt="Fund Account" fill className="object-contain" />
        </div>
    )
}

export const getTradingContent = () => {
    return (
        <div className="md:basis-4/12 relative w-full h-56 md:h-72">
            <Image
                src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/platform/mt4/mt5_mobile_new.png"
                width={450}
                height={300}
                alt="mt4 platform on Mobile Image"
            />  
                  </div>
    )
}


export const getPartnerContent = () => {
    return (
        <div className="md:basis-4/12 relative w-full h-56 md:h-72">
            <Image
                src="/newIB1.webp"
                width={300}
                height={200}
                alt="mt4 platform on Mobile Image"
            />  
                  </div>
    )
}

export const getTechContent = () => {
    return (
        <div className="md:basis-4/12 relative w-full h-56 md:h-72">
            <Image src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/img/prime/prime-3.png" alt="Fund Account" fill className="object-contain" />
        </div>
    )
}
