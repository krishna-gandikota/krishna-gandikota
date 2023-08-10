import React from "react";

export default function Newslatter() {
  return (
    <section className=" bg-gray-50 mt-20">
      <div className="container mx-auto md:px-20 py-16 text-center">
        <h1 className="font-bild text-3xl sm:font-[16px] ">Subscribe Vision IAS</h1>
        <div className="py-4">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="shadow border rounded w-9/12 py-3 text-gray-700 focus:outline-none focus:shadow-outline px-2 "
          />
        </div>
        <button className="bg-orange-400 py-3 rounded-full text-gray-50 text-xl px-[70px] ">
          Subscribe
        </button>
      </div>
    </section>
  );
}
