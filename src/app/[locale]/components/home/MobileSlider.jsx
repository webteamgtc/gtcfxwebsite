"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const screens = [
  { src: "/new/slide1.png", alt: "Screen 1" },
  { src: "/new/slide2.png", alt: "Screen 2" },
  { src: "/new/slide3.png", alt: "Screen 3" },
  { src: "/new/slide4.png", alt: "Screen 3" },
  { src: "/new/slide5.png", alt: "Screen 3" },

];

export default function AttractiveSingleImageSwiper() {
  return (
    <>
    
      <section className="w-full pb-12 md:pb-0">
      <div className="mx-auto flex md:justify-end justify-center ">
        <div className=" w-full max-w-[280px] md:max-w-[320px]">
          {/* Card wrapper with enhanced styling */}
          <div className="relative ">
    
             <div className="relative mx-auto">
              {/* Phone Frame with Background Image */}
              <div className="relative w-full h-auto">
                {/* Mobile Frame Background */}
                <div className="relative w-full h-full">
                  <Image
                    src="/new/mobile-new.webp"
                    alt="Mobile Frame"
                    width={320}
                    height={690}
                    className="w-full h-auto object-contain relative z-20"
                    priority
                  />
                  
                  {/* Screen Area - positioned over the frame */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative w-[92%] h-[98%] top-[1%] rounded-[2.5rem] overflow-hidden">
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        loop
                        speed={650}
                        autoplay={{
                          delay: 2600,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }}
                        className="relative w-full h-full"
                      >
                        {screens.map((item, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="relative w-full h-full overflow-hidden group">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                width={320}
                                height={690}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                priority={idx === 0}
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots - mobile style */}
            <div className="mt-4 flex justify-center">
              <div className="swiper-pagination !relative !bottom-0 !w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
