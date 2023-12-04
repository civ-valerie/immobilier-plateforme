"use client";

import React, { useState } from "react";
import { NavigationBar } from "@/components/NavigationBar.jsx";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import AddressComponent from "@/components/AddressComponent";
import { useLoadScript } from "@react-google-maps/api";
import Map from "@/components/Map.tsx";
import FormComponent from "@/components/FormComponent";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Hero from "../components/hero";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const LandingPage = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const handleRandomNumber = () => {
    const min = 500;
    const max = 1000;
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(number);
  };

  return (
    <div className="bg-[#d0dcb4] top-0 right-0 left-0 min-h-screen absolute ">
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

      <div className=" text-black dark:text-black mt-48 ml-16 z-20">
        {/* Title and Description */}
        <div>
          <h1 className="text-4xl relative font-medium z-20">
            À quel prix devrais-je vendre mon
          </h1>
          <div className="w-[700px] z-10 font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            <Marquee
              autoFill="true"
              gradient="true"
              gradientColor="#d0dcb4"
              className="text-8xl mt-4 "
              speed="80"
              pauseOnHover="true"
            >
              {" "}
              MAISON - APPARTEMENT - CONDO - CHAMBRE - STUDIO -{" "}
            </Marquee>
          </div>
          <p className="text-lg relative mt-6 w-[550px] z-20">
            Consultez notre modèle d'intelligence artificiel, entrainé avec
            toute information disponsible sur les sites immobiliers canadiens.
          </p>
        </div>
        {/* Form */}
        <div className="relative z-20 mb-48">
          <AddressComponent />
        </div>

        <div className="absolute top-16 right-0 z-0">
          <video
            alt="Video of a building"
            src="/cropped-house-video.mp4"
            width="800"
            height="800"
            autoPlay
            loop
            muted
          />
        </div>
        <SectionTitle
          pretitle="Découvrez une estimation précise -"
          title="Pourquoi utiliser notre modèle d'IA"
        >
          Notre modèle d'intelligence artificielle innovant offre des
          estimations de prix pour des maisons et des appartements, basées sur
          des données réelles extraites du web. Construit avec Next.js &
          TailwindCSS, et entièrement open-source.
        </SectionTitle>
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle
          pretitle="Témoignages"
          title="Voici ce que disent nos clients -"
        >
          Les témoignages sont un excellent moyen d'augmenter la confiance et la
          notoriété de la marque. Utilisez cette section pour mettre en avant
          vos clients les plus populaires.
        </SectionTitle>
        <Testimonials />
        <SectionTitle pretitle="FAQ" title="Questions fréquemment posées -">
          Répondez ici aux questions possibles de vos clients, cela augmentera
          le taux de conversion ainsi que les demandes de support ou de chat.
        </SectionTitle>
        <Faq />
        <Cta />
        <Footer />
        <PopupWidget />
      </div>

      <footer className="bg-[#c86b38] text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 CIVISION. All Rights Reserved.</p>
          {/* Additional footer content like links or social media icons */}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
