import React from "react";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer.";
import Author from "@/components/child/author";
import Related from "@/components/child/related";

export default function Page() {
  return (
    <div>
      <Header />
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author />
        </div>
        <div className="post py-10 text-center">
          <h1 className="font-bold text-4xl pb-5 ">
            Your most unhappy customers are your greatest source of learning",
            subtitle:" For far away, behind the word mountains, for from the
            countries.
          </h1>
          <p className="text-gray-500 text-xl text-center">For far away, behind the word mountains, for from the countries Vokalia and consonantia, there live the blind texts</p>
       <div className="py-10 flex justify-center">
       <Image
           src={"/images/test_series.png"}
           width={500}
           height={200}
           alt={"text_series"}
         />

       </div>
       <div className="content text-gray-600 text-lg flex flex-col gap-4 text-center">
       <p>For far away, behind the word mountains, for from the countries Vokalia and consonantia, there live the blind texts</p>
       <p>For far away, behind the word mountains, for from the countries Vokalia and consonantia, there live the blind texts</p>
       <p>For far away, behind the word mountains, for from the countries Vokalia and consonantia, there live the blind texts</p>
       <p>For far away, behind the word mountains, for from the countries Vokalia and consonantia, there live the blind texts</p>
       <p>For far away, behind the word mountains, for from the countries Vokalia and consonantia, there live the blind texts</p>

       </div>
       
        </div>
        <Related />
      </section>
      <Footer />
    </div>
  );
}
