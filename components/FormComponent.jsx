import React from "react";
import Link from "next/link";

const FormComponent = ({ onRandomNumber }) => {
  const handleButtonClick = () => {
    if (onRandomNumber) {
      onRandomNumber();
    }
    // Additional logic if needed
  };

  return (
    <div className="rounded-sm bg-white shadow-lg p-6 w-full z-50">
      <div className="mb-4">
        <button className="text-[#c86b38] border-b-4 border-[#c86b38] pb-2 pt-3 px-4 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          Informations d'immobilier
        </button>
      </div>

      {/* Row 1: Area */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Surface (en m²)
        </label>
        <input
          type="text"
          placeholder="Entrez la surface"
          className="bg-gray-300 w-full rounded-lg p-2 mb-3 placeholder-gray-500 text-gray-700"
        />
      </div>

      {/* Row 2: Number of Rooms, Bedrooms, Bathrooms, Bedrooms in Basement */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Détails de l'habitation
        </label>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Nombre de pièces"
            className="bg-gray-300 rounded-lg p-2 placeholder-gray-500 text-gray-700"
          />
          <input
            type="text"
            placeholder="Nombre de chambres"
            className="bg-gray-300 rounded-lg p-2 placeholder-gray-500 text-gray-700"
          />
          <input
            type="text"
            placeholder="Nombre de salles de bain"
            className="bg-gray-300 rounded-lg p-2 placeholder-gray-500 text-gray-700"
          />
          <input
            type="text"
            placeholder="Chambres au sous-sol"
            className="bg-gray-300 rounded-lg p-2 placeholder-gray-500 text-gray-700"
          />
        </div>
      </div>

      {/* Row 3: Parking spots in Driveway, Garage, Pool */}
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Stationnement et Piscine
        </label>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Places stat. allée"
            className="bg-gray-300 rounded-lg p-2 placeholder-gray-500 text-gray-700"
          />
          <input
            type="text"
            placeholder="Places stat. garage"
            className="bg-gray-300 rounded-lg p-2 placeholder-gray-500 text-gray-700"
          />
          <select
            placeholder="Piscine"
            className="bg-gray-300  rounded-lg p-2 placeholder-gray-500 text-gray-700"
          >
            <option value="">Piscine</option>
            <option value="true">Oui</option>
            <option value="false">Non</option>
          </select>
        </div>
      </div>

      {/* Row 4: Walkscore */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Walkscore
        </label>
        <input
          type="text"
          placeholder="Entrez le Walkscore"
          className="bg-gray-300 w-full rounded-lg p-2 placeholder-gray-500 text-gray-700"
        />
      </div>

      <Link href="/sandbox">
        <button
          onClick={handleButtonClick}
          className="bg-[#c86b38] cursor-pointer text-white rounded-lg px-6 py-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        >
          SUITE
        </button>
      </Link>
    </div>
  );
};

export default FormComponent;
