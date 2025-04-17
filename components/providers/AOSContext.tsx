import React, { createContext, useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
type AOSContextType = {
  aos: typeof AOS; // This is the type for the AOS instance
};
export const AOSContext = createContext<AOSContextType | undefined>(undefined);

export const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: false,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <AOSContext.Provider value={{ aos: AOS }}>{children}</AOSContext.Provider>
  );
};

export const useAOS = () => useContext(AOSContext);
