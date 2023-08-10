import Link from "next/link";
import React from "react";
import Image from "next/image";
import Author from "./author";

export default function Related() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10 ">Related</h1>
      <div className="flex flex-col gap-10">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <Image
            src={"/images/test_series.png"}
            width={170}
            height={50}
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
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            You Most unhappay customers are your greatest source of Learning
          </Link>
        </div>
        <Author />
      </div>
    </div>
  );
}
