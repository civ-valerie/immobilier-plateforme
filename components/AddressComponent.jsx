import React from "react";

const AddressComponent = () => {
  return (
    <div className="rounded-sm bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg p-6 w-3/5 max-w-4xl mt-5">
      <div className="mb-4 -mt-3.5">
        <button className="text-[#c86b38] border-b-4 border-[#c86b38] pb-2 pt-3 px-4 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          Loyer mensuel
        </button>
      </div>
      <div className="flex items-center rounded-lg bg-gray-200 p-2">
        <span className="text-gray-500 mx-2">
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search for city, neighborhood, zipcode ..."
          className="bg-transparent flex-1 border-none outline-none placeholder-gray-500 text-gray-700 p-2"
        />
        <button className="bg-[#c86b38] text-white rounded-lg px-6 py-2 ml-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          Search
        </button>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <span>Advance Search ↓</span>
        <span>Over 2M properties | Without commission</span>
      </div>
    </div>
  );
};

export default AddressComponent;
