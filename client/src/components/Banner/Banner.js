import React, { useState } from "react";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Banner() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000, // 5 seconds
          disableOnInteraction: false, // continue autoplay after user interaction
        }}
      >
        {/* Banner 1 */}
        <SwiperSlide>
          <div className="bg-white">
            <div className="Banner1 min-h-screen ">
              <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />

              <div className="relative isolate px-6 pt-14 lg:px-8">
                {/*  */}
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                  <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                      Web Solutions & App Development
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="/contactus"
                        className="rounded-lg border border-white  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
                        style={{
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Banner 1 */}
        <SwiperSlide>
          <div className="bg-white">
            <div className="Banner1 min-h-screen  ">
              <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center" />
              <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />

              <div className="relative isolate px-6 pt-14 lg:px-8">
                {/*  */}
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                  <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                      IT Security Solutions & Services
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <a
                        href="/contactus"
                        className="rounded-lg border border-white  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 "
                        style={{
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
