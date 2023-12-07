import React from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Map from "@/components/Map";
import { ArrowDown, ArrowUp, Stars } from "@/components/SVGIcons";
import SimpleFormComponent from "@/components/SimpleFormComponent";
import { checkout } from "@/stripe/checkout";

const AddressComponent = ({ onOpenWidget }) => {
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

  const [mapDropdown, setMapDropdown] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState("");

  const [currentStep, setCurrentStep] = useState(1);

  const handleSelect = (description) => {
    setInputValue(description); // Update local state
    setValue(description, false); // Update the value managed by the hook
    clearSuggestions();
    setSelectedAddress(description);
  };

  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    if (currentStep === 3) {
      const min = 500;
      const max = 1000;
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      setRandomNumber(number);
    }
  }, [currentStep]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleStripeCheckout = () => {
    checkout({
      lineItems: [{ price: "price_1OKjNRAs3Y77vkiWhNVXglcw", quantity: 1 }],
    });
  };

  useEffect(() => {
    // Check localStorage when component mounts
    const submitted = localStorage.getItem("formSubmitted") === "true";
    setFormSubmitted(submitted);
  }, []);

  useEffect(() => {
    // Update localStorage when formSubmitted state changes
    if (formSubmitted) {
      localStorage.setItem("formSubmitted", "true");
    }
  }, [formSubmitted]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentSuccess = urlParams.get("paymentSuccess");

    if (paymentSuccess) {
      localStorage.removeItem("formSubmitted");
      setFormSubmitted(false);
    }

    // Additionally, check if the form was previously submitted
    const submitted = localStorage.getItem("formSubmitted") === "true";
    setFormSubmitted(submitted);
  }, []);

  const handleButtonClick = () => {
    if (formSubmitted) {
      // Redirect to Stripe if form already submitted
      handleStripeCheckout();
      return;
    }

    if (currentStep === 1) {
      if (!mapDropdown) {
        setMapDropdown(true);
      } else {
        setCurrentStep(2); // Proceed to Step 2
      }
    }
    if (currentStep === 2) {
      setCurrentStep(3); // Proceed to Step 3
      setFormSubmitted(true); // Mark the form as submitted
    }
    // Add logic for other steps if needed
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

  let stepContent;
  switch (currentStep) {
    case 1:
      stepContent = (
        <div>
          <div className="relative flex items-center rounded-lg bg-gray-200 p-2">
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
              <ul className="absolute cursor-pointer mt-48 p-3 w-[500px] bg-white rounded-md shadow-lg z-10">
                {renderSuggestions()}
              </ul>
            )}

            <button
              className="bg-[#c86b38] cursor-pointer text-white rounded-lg px-6 py-2 ml-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center"
              onClick={handleButtonClick}
            >
              <span>{mapDropdown ? "CONFIRMER" : "COMMENCER"}</span>
              <Stars width="20" height="20" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 text-gray-600 mb-6">
            <span>Plus de 500K immobiliers | CIVISION</span>
            <button
              onClick={() => setMapDropdown(!mapDropdown)} // Toggle the state
              className="w-4 h-4 mt-1 mr-2 text-sm"
            >
              {mapDropdown ? <ArrowUp /> : <ArrowDown />}
            </button>
          </div>

          {mapDropdown && (
            <Map
              address={inputValue}
              onAddressUpdate={(newAddress) => setInputValue(newAddress)}
            />
          )}
        </div>
      );

      break;
    case 2:
      stepContent = <SimpleFormComponent onContinue={handleButtonClick} />;
      break;
    case 3:
      stepContent = (
        <div className="items-center grid grid-rows-3 mt-10 justify-end md:justify-center">
          <div className="flex items-center justify-center">
            <span className="text-2xl">Vous devriez loyer à</span>
            <span className="text-6xl ml-4 mr-4 inline text-[#c86b38]">
              $ {randomNumber !== null ? randomNumber : "______"}
            </span>
            <span className="text-2xl">par mois.</span>
          </div>
          <span className="flex mt-8 text-lg items-center justify-center">
            ❗️ Vous avez utilisé votre essai gratuit. Pour un autre essai,
            veuillez payez $50.00 ou bien contactez-nous pour un abonnement
            illimité et accès à un dashboard.
          </span>
          <div className="flex flex-col-2 items-center justify-center">
            <button
              className="bg-[#c86b38] cursor-pointer text-white rounded-lg px-6 py-2 mr-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center"
              onClick={handleButtonClick}
            >
              <span>PAYER POUR UN AUTRE ESSAI</span>
            </button>
            OU
            <button
              onClick={onOpenWidget}
              className="bg-[#c86b38] cursor-pointer text-white rounded-lg px-6 py-2 ml-2 hover:bg-[#c86b38]/90 focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out flex items-center justify-center"
            >
              <span>NOUS CONTACTER</span>
            </button>
          </div>
        </div>
      );

      break;
    default:
      stepContent = <div>Step not found</div>;
  }

  return (
    <div className="rounded-sm bg-gradient-to-b from-zinc-50/70 to-white/90 shadow-lg p-6 w-1/2 mt-5 z-50">
      <div className="mb-4 -mt-3.5">
        <button
          className={`text-[#c86b38] ${
            currentStep === 1 ? "border-b-4" : ""
          } border-[#c86b38] pb-2 pt-3 px-4 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out`}
        >
          Adresse d'immobilier →
        </button>
        <button
          className={`text-[#c86b38] ${
            currentStep === 2 ? "border-b-4" : ""
          } border-[#c86b38] pb-2 pt-3 px-4 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out`}
        >
          Informations →
        </button>
        <button
          className={`text-[#c86b38] ${
            currentStep === 3 ? "border-b-4" : ""
          } border-[#c86b38] pb-2 pt-3 px-4 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out`}
        >
          Résultat
        </button>
      </div>
      {stepContent}
    </div>
  );
};

export default AddressComponent;
