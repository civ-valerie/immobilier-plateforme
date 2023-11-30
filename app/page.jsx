"use client";

import React from "react";
import { NavigationBar } from "@/components/NavigationBar.jsx";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AddressComponent from "@/components/AddressComponent";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen relative overflow-hidden">
      <div className="flex flex-1 justify-end md:justify-center">
        <NavigationBar.Mobile className="mt-5 pointer-events-auto relative z-50 md:hidden" />
        <NavigationBar.Desktop className="mt-5 pointer-events-auto relative z-50 hidden md:block" />
      </div>

      <div className="absolute text-black dark:text-black left-12 top-1/4 h-full p-4">
        {/* Title and Description */}
        <div>
          <h1 className="text-4xl font-medium">
            À quel prix devrais-je vendre
          </h1>
          <div className="w-[1100px]">
            <Marquee
              autoFill="true"
              gradient="true"
              gradientColor="#f3f4f6"
              className="text-8xl mt-4"
              speed="80"
              pauseOnHover="true"
            >
              {" "}
              MA MAISON - MON APPARTEMENT - MON CONDO - MA CHAMBRE - MON STUDIO
              -{" "}
            </Marquee>
          </div>
          <p className="text-lg mt-6 w-[550px]">
            Consultez notre modèle d'intelligence artificiel, entrainée avec
            toute information disponsible sur les sites immobiliers canadiens.
          </p>
        </div>

        {/* Form */}
        <AddressComponent />
      </div>

      {/* Image */}
      <div className="absolute bottom-0 right-0 z-10">
        <Image
          alt="Image of a building"
          src="/canva-building.svg"
          width="1000"
          height="1000"
        />
      </div>
    </div>
  );
};

export default LandingPage;
