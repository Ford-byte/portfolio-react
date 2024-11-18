"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

export default function Project({ propsData }) {
  const [isData, setIsData] = useState([]);

  useEffect(() => {
    if (propsData) {
      setIsData(propsData);
    }
  }, [propsData]);

  console.log("Received data:", isData);

  return (
    <section className="relative flex flex-col items-center">
      <div className="container-block">
        <div className="text-3xl md:text-5xl py-12 text-gray-600 font-bold">
          Latest projects
        </div>
        <div className="flex justify-center">
          {isData && (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              navigation={true}
              modules={[Navigation, Pagination]}
            >
              {isData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="">
                    {" "}
                    <Image
                      src={item.url}
                      width={1000}
                      height={100}
                      alt={`Image ${index}`}
                      className="w-full object-fill"
                    />
                  </div>
                  <div className="px-8 py-4">
                    <div className="font-semibold text-[12px] md:text-[24px] py-4 flex gap-2 text-gray-600">
                      {item.title}
                      <h3 className="text-gray-400 font-normal text-xs md:text-sm flex items-center">
                        {item.type}
                      </h3>
                    </div>
                    <div className="py-4 text-gray-400 text-xs md:text-[12px]">
                      {item.description}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
}
