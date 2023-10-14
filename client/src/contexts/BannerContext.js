import React, { createContext, useContext, useState } from "react";
import bannerData from "../data/bannerData.json";

const BannerContext = createContext();

export function useBannerContext() {
  return useContext(BannerContext);
}

export function BannerProvider({ children }) {
  // Find the initial banner based on the currentBannerId
  const initialBanner = bannerData.find((item) => item.id === 1);

  const [currentBanner, setCurrentBanner] = useState(initialBanner);
  const [currentBannerId, setCurrentBannerId] = useState(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <BannerContext.Provider
      value={{
        currentBanner,
        setCurrentBanner,
        setCurrentBannerId,
        activeSlideIndex,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}
