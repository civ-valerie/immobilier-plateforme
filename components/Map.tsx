import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useStore from "@/store/store"; // adjust the path as necessary

const Map: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);

  const mapCenter = useStore((state) => state.mapCenter);
  const setMapCenter = useStore((state) => state.setMapCenter);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);

              setMapCenter(lat, lng);
            });
          }}
        />
      </div>

      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "400px", height: "400px" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
        />

        {[1000].map((radius, idx) => {
          return (
            <CircleF
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log("Circle Load...")}
              options={{
                fillColor: radius > 1000 ? "red" : "#c86b38",
                strokeColor: radius > 1000 ? "red" : "#c86b38",
                strokeOpacity: 0.8,
              }}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "ca" } },
    debounce: 300,
    cache: 86400,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className="mb-3">
      <div className="mb-4 ml-2">
        <button className="text-[#c86b38] border-b-4 border-[#c86b38] pb-2 pt-3 px-4 rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#c86b38] focus:ring-opacity-50 transition-all duration-300 ease-in-out">
          Confirmez l'adresse d'immobilier
        </button>
      </div>
      <div className="relative flex items-center rounded-lg bg-gray-200 border-gray-300 p-2">
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
        <div className="w-full">
          <input
            value={value}
            disabled={!ready}
            onChange={(e) => setValue(e.target.value)}
            placeholder="123 Stairway To Heaven"
            className="p-1 bg-gray-200 w-full"
          />
        </div>
      </div>

      {status === "OK" && (
        <div className="relative flex items-center rounded-lg bg-gray-200 border-gray-300 p-2">
          <ul>{renderSuggestions()}</ul>
        </div>
      )}
    </div>
  );
};

export default Map;
