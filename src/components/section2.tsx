import React from 'react'
import Link from "next/link";
import Author from "./child/author";
import Image from "next/image";
// import getPost from "../lib/helper"

export default function Section2() {

  // getPost(2).then(res => console.log(res))
  
  return (
    <div className="container mx-auto md:px-20 py-10">
   <h1 className='font-bold text-4xl text-center'>Latest Posts</h1>
   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
     {Post()}
     {Post()}
     {Post()}
     {Post()}
     {Post()}
     {Post()}
   </div>
    </div>
  )
}
function Post(){
    return(
        <div className="item">
            <div className="images sm:w-full">
        <Link href={"/"}>
          <Image
            src={"/images/test_series.png"}
            width={300}
            height={200}
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
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
