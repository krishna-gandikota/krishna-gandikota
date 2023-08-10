import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {Swiper,SwiperSlide} from "swiper/react"
import Author from "./child/author";


export default function Section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
           <h1 className='font-bold text-4xl text-center pb-[1rem]'>Most Popular</h1>
 <Swiper
     slidesPerView={2}
  >
    <SwiperSlide>{Post()}</SwiperSlide>
    <SwiperSlide>{Post()}</SwiperSlide>
    <SwiperSlide>{Post()}</SwiperSlide>
    <SwiperSlide>{Post()}</SwiperSlide>
    <SwiperSlide>{Post()}</SwiperSlide>

  </Swiper>
  

    </section>
  )
}
function Post(){
    return(
        <div className="grid">
            <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/test_series.png"}
            width={500}
            height={300}
            alt={"text_series"}
          />
        </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Business, Travel
          </Link>
          <Link href={"/"} className="text-gray-600 hover:text-gray-800">
            -March 31, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest source of Learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This handout will help you understand how paragraphs are formed, how
          to develop stronger help you understand how paragraphsstronger help
          you understand how paragraphs are paragraphs.
        </p>
        <Author />
            </div>

        </div>
    )
}