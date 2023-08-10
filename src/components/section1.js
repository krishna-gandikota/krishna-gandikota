import React from "react";
import Image from "next/image";
import Link from "next/link";
import Author from "./child/author";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import SwiperCore, {Autoplay} from "swiper";

export default function Section1() {
 
  SwiperCore.use([Autoplay])

  return (
    <>
    <section
      className="py-16"
      style={{
        backgroundImage: `url('/images/resources.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >

      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl  text-center pb-[1rem] ">Learning</h1>

         <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay:2000
          }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>
          <div className="grid md:grid-cols-2 ">
         <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/learning-image.webp"}
            width={500}
            height={900}
            alt={"text_series"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-2xl md:text4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest so
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This handout will help you understand how paragraphs are formed, how
          to develop stronger help you understand.
        </p>
        <Author />
      </div>
    </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid md:grid-cols-2 ">
          <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/pexels-learning.jpeg"}
            width={500}
            height={900}
            alt={"text_series"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest source of Learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This handout will help you understand how paragraphs are formed, how
          you understand how paragraphs are paragraphs.
        </p>
        <Author />
      </div>
    </div>
         </SwiperSlide>
          <SwiperSlide>
            <div className="grid md:grid-cols-2 ">
           <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/pexels-photo.jpg"}
            width={500}
            height={900}
            alt={"text_series"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest source of Learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This handout will help you understand how paragraphs are formed, how
          you understand how paragraphs are paragraphs.
        </p>
        <Author />
      </div>
    </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid md:grid-cols-2 ">
          <div className="images">
          <Link href={"/"}>
          <Image
            src={"/images/table-image.jpeg"}
            width={500}
            height={900}
            alt={"text_series"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-2xl md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest source of Learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This handout will help you understand how paragraphs are formed, how
          you understand how paragraphs are paragraphs.
        </p>
        <Author />
      </div>
    </div>
         </SwiperSlide>

        </Swiper> 
      </div>
    </section>
    </>
  );
}
function Slide() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/pexels-pho.webp"}
            width={500}
            height={900}
            alt={"text_series"}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-2xl  md:text-4xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest source of Learning
          </Link>
        </div>
        <p className="text-gray-500 py-3">
          This handout will help you understand how paragraphs are formed, how
          you understand how paragraphs are paragraphs.
        </p>
        <Author />
      </div>
    </div>
  );
}
