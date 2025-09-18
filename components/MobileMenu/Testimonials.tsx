"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import swipperImage from "@/public/images/hero-1.jpg";
import swipperImage2 from "@/public/images/hero-2.jpg";
import swipperImage3 from "@/public/images/hero-3.jpg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="mt-[100px]">
      <div className="container">
        <h2 className="text-center text-orange-500 uppercase text-[35px] font-semibold mb-[40px] laptop:mb-[20px]">
          Testimonials
        </h2>
        <div>
          <Swiper
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1400: {
                slidesPerView: 3,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="w-full h-[300px] relative mb-[20px]">
                <Image src={swipperImage} alt="image" fill />
              </div>
              <h3 className="text-orange-700 text-[25px] text-center">
                Miami resting
              </h3>
              <p className="text-green-700 text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, sunt!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[300px] relative mb-[20px]">
                <Image src={swipperImage2} alt="image" fill />
              </div>
              <h3 className="text-orange-700 text-[25px] text-center">
                Miami resting
              </h3>
              <p className="text-green-700 text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, sunt!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[300px] relative mb-[20px]">
                <Image src={swipperImage3} alt="image" fill />
              </div>
              <h3 className="text-orange-700 text-[25px] text-center">
                Miami resting
              </h3>
              <p className="text-green-700 text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, sunt!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[300px] relative mb-[20px]">
                <Image src={swipperImage2} alt="image" fill />
              </div>
              <h3 className="text-orange-700 text-[25px] text-center">
                Miami resting
              </h3>
              <p className="text-green-700 text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, sunt!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[300px] relative mb-[20px]">
                <Image src={swipperImage3} alt="image" fill />
              </div>
              <h3 className="text-orange-700 text-[25px] text-center">
                Miami resting
              </h3>
              <p className="text-green-700 text-[16px] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, sunt!
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
