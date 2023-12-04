"use client";

import React, { useState } from "react";
import { NavigationBar } from "@/components/NavigationBar.jsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Steps from "@/components/Steps";

const LandingPage = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleRandomNumber = () => {
    const min = 500;
    const max = 1000;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  };

  return (
    <div className="bg-[#34a0ba] top-0 right-0 left-0 min-h-screen absolute ">
      <div className="flex fixed flex-1 w-full justify-center z-50">
        <NavigationBar.Mobile className="mt-5 pointer-events-auto relative z-50 md:hidden" />
        <NavigationBar.Desktop className="mt-5 pointer-events-auto relative z-50 hidden md:block" />
      </div>

      {/* Image */}
      <div className="fixed cursor-pointer bg-white rounded-full p-1 ml-10 top-5 z-50 shadow-xl">
        <Link href="https://www.linkedin.com/company/civision-inc?originalSubdomain=ca">
          <Image
            alt="Logo of civision"
            src="/civision_inc_logo.png"
            width="50"
            height="50"
            className="grayscale"
          />
        </Link>
      </div>

      <div className="flex w-full min-h-screen">
        {/* Title and Description */}
        <div className="w-1/2">{/* Content can be added here if needed */}</div>

        <div className="w-1/2 flex flex-col justify-start items-start  mr-10">
          <div className="ml-24 mt-36">
            <h1 className="text-4xl font-medium z-20">
              Un modèle d'intelligence artificielle entraînée avec l'information
              de
            </h1>
            <div className="w-[700px] z-10 font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
              <Marquee
                autoFill="true"
                gradient="true"
                gradientColor="#34a0ba"
                className="text-8xl mt-4 "
                speed="80"
                pauseOnHover="true"
              >
                {" "}
                CENTRIS.COM - REALTOR.CA - HOMES.CA -{" "}
              </Marquee>
            </div>
            <p className="text-lg mt-6 w-[550px] z-20">
              Consultez notre modèle d'intelligence artificiel.
            </p>
          </div>
          <div className="ml-24">
            <Steps />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <video
          alt="Video of a building"
          src="/paris.mp4"
          width="50%"
          height="auto"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default LandingPage;
