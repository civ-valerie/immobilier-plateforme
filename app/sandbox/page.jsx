"use client";

import React, { useState } from "react";
import { NavigationBar } from "@/components/NavigationBar.jsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import MapSearch from "@/components/MapSearch";
import { useLoadScript } from "@react-google-maps/api";
import Map from "@/components/Map.tsx";
import FormComponent from "@/components/FormComponent";

const Sandbox = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 27.672932021393862,
    lng: 85.31184012689732,
  });

  const handleAddressSelect = async (address) => {
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setCoordinates({ lat, lng });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen h-auto relative">
      <div className="flex flex-1 justify-end md:justify-center">
        <NavigationBar.Mobile className="mt-5 pointer-events-auto relative z-50 md:hidden" />
        <NavigationBar.Desktop className="mt-5 pointer-events-auto relative z-50 hidden md:block" />
      </div>

      {/* Image */}
      <div className="absolute cursor-pointer bg-white rounded-full p-1 ml-10 top-5 z-10 shadow-xl">
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
      {/* Two-column layout */}
      <div className="flex mt-8 mx-4">
        {/* Left column: Map and AddressComponent */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white flex items-center justify-center p-2 shadow-lg rounded-sm">
            <Map />
          </div>
        </div>
        {/* Right column: Another form or content */}
        <div className="flex-1">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
