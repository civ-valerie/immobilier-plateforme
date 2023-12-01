import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState } from "react";

const AddressComponent = ({ onAddressSelect }) => {
  const {
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "ca" } },
    debounce: 300,
    cache: 86400,
  });

  const [inputValue, setInputValue] = useState("");

  const handleSelect = (description) => {
    setInputValue(description); // Update local state
    setValue(description, false); // Update the value managed by the hook
    clearSuggestions();
    onAddressSelect && onAddressSelect(description);
  };

  const renderSuggestions = () => {
    return data.map(
      ({
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      }) => (
        <li key={place_id} onClick={() => handleSelect(description)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    );
  };
  return (
    <div className="rounded-sm bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg p-6 w-3/5 max-w-4xl mt-5 z-50">
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
          placeholder="Recherchez pour ville, quartier, code postal..."
          className="bg-transparent flex-1 w-full border-none outline-none placeholder-gray-500 text-gray-700 p-2"
          value={inputValue} // Use local state for the input value
          onChange={(e) => {
            setInputValue(e.target.value); // Update local state on change
            setValue(e.target.value); // Update the value managed by the hook
          }}
        />
        {status === "OK" && (
          <ul className="absolute mt-48 p-3 w-[500px] bg-white rounded-md shadow-lg z-10">
            {renderSuggestions()}
          </ul>
        )}
        <button className="bg-[#c86b38] cursor-pointer text-white rounded-lg px-6 py-2 ml-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          SUITE
        </button>
      </div>
      <div className="flex justify-between items-center mt-4 text-gray-600">
        <span>Recherche précis ↓</span>
        <span>Plus de 500K immobiliers | CIVISION</span>
      </div>
    </div>
  );
};

export default AddressComponent;
