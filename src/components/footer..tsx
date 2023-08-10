import Link from "next/link";
import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Newslatter from "./child/newslatter";

export default function Footer() {
  return (
    <footer
      className=" bg-gray-50 "
      style={{
        backgroundImage: `url('/images/background cute')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <Newslatter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center ">
            <Link href={"/"}>
              <ImFacebook className="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter className="#888888" />
            </Link>
            <Link href={"/"}>
              <ImYoutube className="#888888" />
            </Link>
          </div>
          <p className="py-5 text-gray-400">
            Copyright @2023 All rights reserved | The template is mode with by
            Daily tuition{" "}
          </p>
          <p className="py-5 text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
