"use client";
import Image from "next/image";
import { TbDiscount2 } from "react-icons/tb";
import { TextLoop } from "react-text-loop-next";
import { TypeAnimation } from "react-type-animation";

export default function Commission() {
  return (
    <div className="p-12 rounded-md">
      <div className="flex flex-wrap items-center justify-center bg-white border border-orange-500 rounded-lg shadow-sank">
        {/* <div className="relative flex items-center text-white rounded-lg shadow-xl bg-mainGradient md:w-1/5 aspect-video">
          <p className="font-bold text-[1.4rem] p-12">
            Get back 50% Island Revenue when farming on my island
          </p>

          <div className="absolute  bg-red-500 rounded-md -left-12 -top-12 text-white text-[2.5rem] flex gap-2 items-center font-bold px-4">
            <span>50</span>
            <TbDiscount2 className="" />
          </div>
        </div> */}
        <div className="relative w-full flex overflow-hidden md:w-2/5 aspect-[12/3] md:aspect-[18/3] ">
          <div className="w-full h-full p-12">
            <div className="flex items-center h-full md:h-auto w-full px-12 text-[1rem] md:text-[1.2rem] border-2 text-transparent shadow-sank rounded-md bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Welcome to my islands !!!",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Why you should farm on my island?",
                  2000,
                  "Cause I will send you back 50% of the profits I received",
                  2000,
                  "At the end of each week",
                  1000,
                  "by sending DCE to your wallet address",
                  2000,
                  "Hope you have a great experience on my island !!!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-[1rem] md:text-[1.4rem] inline-block font-[600]"
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="relative right-0 -bottom-24 animate-victor aspect-square w-[120px]">
            <Image
              src="/victor.png"
              alt="land"
              title="ducky city #482"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
