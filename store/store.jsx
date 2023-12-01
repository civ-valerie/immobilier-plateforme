// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  mapCenter: { lat: 43.77634, lng: -79.47774 },
  setMapCenter: (lat, lng) => set(() => ({ mapCenter: { lat, lng } })),
}));

export default useStore;
