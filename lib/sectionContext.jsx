import React, { createContext, useContext, useRef } from 'react';

const SectionContext = createContext({});

export const SectionProvider = ({ children }) => {
  // An object to store refs for multiple sections, initialized with empty refs
  const sectionsRef = useRef({
    footer: null,
    contact: null,
    // Add more sections here as needed
  });

  return (
    <SectionContext.Provider value={sectionsRef}>
      {children}
    </SectionContext.Provider>
  );
};

// Hook to access a specific section ref
export const useSection = (sectionName) => {
  const sectionsRef = useContext(SectionContext);
  if (!sectionsRef.current[sectionName]) {
    sectionsRef.current[sectionName] = React.createRef(); // Create a new ref if it doesn't exist
  }
  return sectionsRef.current[sectionName];
};
