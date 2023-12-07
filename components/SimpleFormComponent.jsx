import React from "react";
import Link from "next/link";

const SimpleFormComponent = ({ onContinue }) => {
  return (
    <>
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
        <div className="grid grid-cols-3 gap-4 mb-4">
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

      <div className="w-full flex justify-end">
        <button
          onClick={onContinue}
          className="bg-[#c86b38] cursor-pointer text-white rounded-lg px-6 py-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        >
          SUITE
        </button>
      </div>
    </>
  );
};

export default SimpleFormComponent;
